"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { submitFormToFormSubmit } from "@/lib/formsubmit-api"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ChevronLeft, ChevronRight, Send, AlertTriangle, Clock, Users, Trophy, Shield } from "lucide-react"
import Step1Personal from "./_components/step1-personal"
import Step2ContactAddress from "./_components/step2-contact-address"
import Step3Identification from "./_components/step3-identification"
import Step4Payment from "./_components/step4-payment"
import Step5Declarations from "./_components/step5-declarations"

export interface FormData {
  // Step 1: Personal Information
  firstName?: string
  lastName?: string
  dateOfBirth?: string
  placeOfBirth?: string
  
  // Step 2: Contact & Address
  email?: string
  phone?: string
  addressLine1?: string
  addressLine2?: string
  city?: string
  postcode?: string
  country?: string
  
  // Step 3: Identification
  idType?: string
  idNumber?: string
  nationalInsurance?: string
  
  // Step 3: Document Uploads
  idDocumentFront?: File | null
  idDocumentBack?: File | null
  proofOfAddress?: File | null
  
  // Step 4: Payment
  paymentMethod?: string
  preferredCrypto?: string
  bankName?: string
  accountHolderName?: string
  accountNumber?: string
  sortCode?: string
  
  // Step 5: Declarations
  termsAccepted?: boolean
  privacyAccepted?: boolean
  legalDeclarations?: boolean
  marketingConsent?: boolean
}

const steps = [
  { id: 1, title: "Personal Info", subtitle: "Basic details", icon: Users },
  { id: 2, title: "Contact & Address", subtitle: "How to reach you", icon: CheckCircle },
  { id: 3, title: "Identification", subtitle: "Verify identity", icon: Shield },
  { id: 4, title: "Payment Setup", subtitle: "How you get paid", icon: Trophy },
  { id: 5, title: "Final Declarations", subtitle: "Terms & submission", icon: Send },
]

// FormSubmit configuration
const SUCCESS_URL = '/apply/success' // Use relative URL to avoid hydration issues

export default function ApplyPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  // Load saved form data from localStorage (client-side only)
  useEffect(() => {
    if (typeof window === 'undefined') return
    
    try {
      const savedData = localStorage.getItem('nominee-application')
      if (savedData) {
        const parsed = JSON.parse(savedData)
        setFormData(parsed)
      }
    } catch (error) {
      console.warn('Could not parse saved form data')
    }
  }, [])

  // Save form data to localStorage whenever it changes (client-side only)
  useEffect(() => {
    if (typeof window === 'undefined') return
    
    if (Object.keys(formData).length > 0) {
      try {
        localStorage.setItem('nominee-application', JSON.stringify(formData))
      } catch (error) {
        console.warn('Could not save form data to localStorage')
      }
    }
  }, [formData])



  const updateFormData = (newData: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...newData }))
  }

  const getStepValidation = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!(formData.firstName && formData.lastName && formData.dateOfBirth && formData.placeOfBirth)
      case 2:
        return !!(formData.email && formData.phone && formData.addressLine1 && formData.city && formData.postcode)
      case 3:
        return !!(formData.idType && formData.idNumber && formData.nationalInsurance && 
                 formData.idDocumentFront && formData.idDocumentBack && formData.proofOfAddress)
      case 4:
        return !!(formData.paymentMethod && (
          (formData.paymentMethod === 'crypto' && formData.preferredCrypto) ||
          (formData.paymentMethod === 'bank_transfer' && formData.bankName && formData.accountHolderName && formData.accountNumber && formData.sortCode) ||
          (formData.paymentMethod === 'paypal')
        ))
      case 5:
        return !!(formData.termsAccepted && formData.privacyAccepted && formData.legalDeclarations)
      default:
        return false
    }
  }

  const canProceed = getStepValidation(currentStep)
  const completedSteps = steps.filter((_, index) => getStepValidation(index + 1)).length
  const progress = (completedSteps / steps.length) * 100

  const nextStep = () => {
    if (currentStep < steps.length && canProceed) {
      setCurrentStep(currentStep + 1)
      // Client-side only scroll
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      // Client-side only scroll
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Ensure we're client-side before proceeding
    if (typeof window === 'undefined') {
      console.warn('Form submission attempted before client hydration')
      return
    }
    
    if (!getStepValidation(5)) {
      setSubmitError('Please complete all required fields before submitting.')
      // Client-side only scroll
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
      return
    }

    setIsSubmitting(true)
    setSubmitError(null)

    try {
      // FormSubmit requires FULL URL for _next (not just path)
      const successUrl = `${window.location.origin}${SUCCESS_URL}`
      
      console.log('🚀 Submitting application using FormSubmit...')
      console.log('📧 Target email: info@nomineejobs.co.uk')
      console.log('🔗 Success URL:', successUrl)

      // Create application summary for email
      const applicationSummary = `
NOMINEE DIRECTOR APPLICATION

==== PERSONAL INFORMATION ====
Name: ${formData.firstName} ${formData.lastName}
Date of Birth: ${formData.dateOfBirth || 'Not provided'}
Place of Birth: ${formData.placeOfBirth || 'Not provided'}

==== CONTACT & ADDRESS ====
Email: ${formData.email}
Phone: ${formData.phone}
Address: ${formData.addressLine1}${formData.addressLine2 ? ', ' + formData.addressLine2 : ''}
City: ${formData.city}
Postcode: ${formData.postcode}
Country: ${formData.country || 'United Kingdom'}

==== IDENTIFICATION ====
ID Type: ${formData.idType}
ID Number: ${formData.idNumber ? '****' + formData.idNumber.slice(-4) : 'Not provided'}
National Insurance: ${formData.nationalInsurance ? '****' + formData.nationalInsurance.slice(-2) : 'Not provided'}

==== PAYMENT INFORMATION ====
Payment Method: ${formData.paymentMethod}
${formData.paymentMethod === 'crypto' ? `Preferred Cryptocurrency: ${formData.preferredCrypto || 'Not selected'}` : ''}
${formData.paymentMethod === 'bank_transfer' ? `Bank Name: ${formData.bankName || 'Not provided'}
Account Holder: ${formData.accountHolderName || 'Not provided'}
Account Number: ${formData.accountNumber ? '****' + formData.accountNumber.slice(-4) : 'Not provided'}
Sort Code: ${formData.sortCode ? '**-**-' + formData.sortCode.slice(-2) : 'Not provided'}` : ''}

==== DECLARATIONS ====
Terms Accepted: ${formData.termsAccepted ? 'Yes' : 'No'}
Privacy Policy Accepted: ${formData.privacyAccepted ? 'Yes' : 'No'}
Legal Declarations: ${formData.legalDeclarations ? 'Yes' : 'No'}
Marketing Consent: ${formData.marketingConsent ? 'Yes' : 'No'}

Application submitted on: ${new Date().toISOString()}
      `.trim()

      // Create form element and submit traditionally for file upload support
      const form = document.createElement('form')
      // Use privacy string for better security (hides email from spam bots)
      form.action = 'https://formsubmit.co/fc7d1651993738107212b6426636a1b4'
      form.method = 'POST'
      form.enctype = 'multipart/form-data'
      form.style.display = 'none'
      
      // Helper function to add form field
      const addField = (name: string, value: string | File) => {
        if (value instanceof File) {
          const input = document.createElement('input')
          input.type = 'file'
          input.name = name
          // Create a DataTransfer to properly set the files property
          const dt = new DataTransfer()
          dt.items.add(value)
          input.files = dt.files
          form.appendChild(input)
        } else if (value) { // Only add non-empty values
          const input = document.createElement('input')
          input.type = 'hidden'
          input.name = name
          input.value = String(value)
          form.appendChild(input)
        }
      }
      
      // FormSubmit required fields (these must be present)
      addField('name', `${formData.firstName || ''} ${formData.lastName || ''}`.trim())
      addField('email', formData.email || '')
      addField('message', applicationSummary)
      
      // Application data - send ALL collected data
      addField('phone', formData.phone || '')
      addField('application_type', 'nominee_director_application')
      addField('first_name', formData.firstName || '')
      addField('last_name', formData.lastName || '')
      addField('date_of_birth', formData.dateOfBirth || '')
      addField('place_of_birth', formData.placeOfBirth || '')
      addField('address_line_1', formData.addressLine1 || '')
      addField('address_line_2', formData.addressLine2 || '')
      addField('city', formData.city || '')
      addField('postcode', formData.postcode || '')
      addField('country', formData.country || 'United Kingdom')
      addField('id_type', formData.idType || '')
      addField('id_number', formData.idNumber || '')
      addField('national_insurance', formData.nationalInsurance || '')
      addField('payment_method', formData.paymentMethod || '')
      addField('preferred_crypto', formData.preferredCrypto || '')
      addField('bank_name', formData.bankName || '')
      addField('account_holder_name', formData.accountHolderName || '')
      addField('account_number', formData.accountNumber || '')
      addField('sort_code', formData.sortCode || '')
      
      // File uploads
      if (formData.idDocumentFront) {
        addField('id_document_front', formData.idDocumentFront)
      }
      if (formData.idDocumentBack) {
        addField('id_document_back', formData.idDocumentBack)
      }
      if (formData.proofOfAddress) {
        addField('proof_of_address', formData.proofOfAddress)
      }
      
      // Declarations
      addField('terms_accepted', formData.termsAccepted ? 'Yes' : 'No')
      addField('privacy_accepted', formData.privacyAccepted ? 'Yes' : 'No')
      addField('legal_declarations', formData.legalDeclarations ? 'Yes' : 'No')
      addField('marketing_consent', formData.marketingConsent ? 'Yes' : 'No')
      
      // FormSubmit configuration
      addField('_subject', `🎯 New Nominee Director Application - ${formData.firstName} ${formData.lastName}`)
      addField('_template', 'table')
      addField('_captcha', 'true') // Required for autoresponse with file uploads
      addField('_next', successUrl) // This should redirect properly
      addField('_replyto', formData.email || '')
      addField('_honey', '') // Honeypot spam protection
      
      // Auto-response message
      addField('_autoresponse', `Thank you for your application, ${formData.firstName}! 

We have successfully received your nominee director application with all required documents and will begin processing it immediately.

What happens next:
✅ Initial review within 24 hours
✅ Document verification within 48 hours  
✅ Background checks within 3-5 business days
✅ Welcome package and first opportunities within 1 week

You will receive email updates throughout the process at ${formData.email}.

If you have any questions, please don't hesitate to contact us at applications@nomineejobs.co.uk.

Best regards,
The NomineeJobs Team`)
      
      // Debug: Log form data being sent
      console.log('📋 Form fields being sent:', Array.from(form.elements).map(el => {
        const input = el as HTMLInputElement
        return {
          name: input.name, 
          type: input.type,
          value: input.type === 'file' ? 'FILE' : input.value
        }
      }))
      
      // Append form to document and submit
      document.body.appendChild(form)
      console.log('📤 Submitting form with all data and files...')
      
      // Submit the form - this should redirect to successUrl after processing
      form.submit()
      
      // Clear saved form data immediately (before redirect)
      try {
        localStorage.removeItem('nominee-application')
      } catch (e) {
        console.warn('Could not clear localStorage:', e)
      }
      
      // The form submission will handle the redirect via FormSubmit's _next parameter
      // No need for additional success handling here as the page will redirect
      
    } catch (error) {
      console.error('❌ Application submission error:', error)
      if (error instanceof Error) {
        if (error.message.includes('NetworkError') || error.message.includes('Failed to fetch')) {
          setSubmitError('🌐 Network connection error. Please check your internet and try again.')
        } else if (error.message.includes('timeout')) {
          setSubmitError('⏱️ Request timed out. Please try again.')
        } else {
          setSubmitError(`📧 ${error.message}. Need help? Email us directly at applications@nomineejobs.co.uk`)
        }
      } else {
        setSubmitError('❗ Unexpected error. Please email us directly at applications@nomineejobs.co.uk')
      }
      
      // Scroll to top so user can see error message
      try {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        })
      } catch (e) {
        console.warn('Could not scroll to top:', e)
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1Personal formData={formData} updateFormData={updateFormData} />
      case 2:
        return <Step2ContactAddress formData={formData} updateFormData={updateFormData} />
      case 3:
        return <Step3Identification formData={formData} updateFormData={updateFormData} />
      case 4:
        return <Step4Payment formData={formData} updateFormData={updateFormData} />
      case 5:
        return <Step5Declarations formData={formData} updateFormData={updateFormData} />
      default:
        return null
    }
  }

  // Form loads immediately - no hydration delay needed

  if (submitSuccess) {
    return (
      <div className="text-center py-8">
        <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
          <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-green-800 mb-2">Application Submitted!</h2>
          <p className="text-green-700 mb-4">
            Thank you for applying, <strong>{formData.firstName}</strong>. We'll review your application and get back to you within 48 hours.
          </p>
          <div className="bg-green-100 border border-green-200 rounded-lg p-3 mb-4">
            <p className="text-sm text-green-600">
              📧 Confirmation email sent to: <strong>{formData.email}</strong>
            </p>
          </div>
          <p className="text-sm text-green-600">
            Redirecting to confirmation page...
          </p>
        </div>
      </div>
    )
  }

  return (
    <form 
      key="application-form" 
      ref={formRef} 
      onSubmit={handleSubmit} 
      className="w-full" 
      encType="multipart/form-data"
    >
      {/* Hidden FormSubmit fields for spam protection */}
      <input type="hidden" name="_honey" style={{ display: 'none' }} />
      
      {/* Step Progress Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-1">
              Step {currentStep} of {steps.length}
            </h1>
            <p className="text-gray-600">
              {steps[currentStep - 1]?.title} - {steps[currentStep - 1]?.subtitle}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-sm text-gray-500">
              {completedSteps}/{steps.length} completed
            </div>
            <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            {progress > 60 && (
              <div className="text-xs text-green-600 font-medium animate-pulse">
                Almost there! 🎉
              </div>
            )}
          </div>
        </div>

        {/* Live Activity Feed */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-3 mb-6">
          <div className="flex items-center justify-center gap-2 text-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-700 font-medium">
              <strong>James from Cardiff</strong> just completed step {Math.max(1, currentStep - 1)} • <strong>23 applications</strong> submitted today
            </span>
          </div>
        </div>

        {/* Step Indicators */}
        <div className="flex items-center justify-between">
          {steps.map((step, index) => {
            const isCompleted = getStepValidation(index + 1)
            const isCurrent = currentStep === step.id
            const isActive = currentStep >= step.id
            const StepIcon = step.icon

            return (
              <div key={step.id} className="flex items-center">
                <div 
                  className={`
                    flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300
                    ${isCompleted 
                      ? 'bg-green-500 border-green-500 text-white' 
                      : isCurrent 
                        ? 'bg-blue-500 border-blue-500 text-white animate-pulse' 
                        : isActive 
                          ? 'bg-blue-100 border-blue-300 text-blue-600' 
                          : 'bg-gray-100 border-gray-300 text-gray-400'
                    }
                  `}
                >
                  {isCompleted ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : (
                    <StepIcon className="h-5 w-5" />
                  )}
                </div>
                <div className="ml-3 hidden sm:block">
                  <div className={`text-sm font-medium ${isActive ? 'text-gray-800' : 'text-gray-400'}`}>
                    {step.title}
                  </div>
                  <div className={`text-xs ${isActive ? 'text-gray-600' : 'text-gray-400'}`}>
                    {step.subtitle}
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`hidden sm:block w-8 h-0.5 mx-4 ${isCompleted ? 'bg-green-300' : 'bg-gray-200'}`} />
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Form Content */}
      <div className="mb-8">
        {renderCurrentStep()}
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
        <Button
          type="button"
          variant="outline"
          onClick={prevStep}
          disabled={currentStep === 1}
          className="flex items-center gap-2 px-6"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>

        <div className="flex items-center gap-4">
          {submitError && (
            <div className="flex items-center gap-2 text-red-600 text-sm">
              <AlertTriangle className="h-4 w-4" />
              {submitError}
            </div>
          )}

          {currentStep === steps.length ? (
            <Button
              type="submit"
              disabled={!canProceed || isSubmitting}
              className="flex items-center gap-2 px-8 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
              suppressHydrationWarning
            >
              {isSubmitting ? (
                <>
                  <Clock className="h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Submit Application
                </>
              )}
            </Button>
          ) : (
            <Button
              type="button"
              onClick={nextStep}
              disabled={!canProceed}
              className="flex items-center gap-2 px-6"
            >
              Continue
              <ChevronRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>

      {/* Form Auto-Save Notice */}
      <div className="mt-4 text-center">
        <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
          <Shield className="h-3 w-3" />
          Your progress is automatically saved locally
        </p>
      </div>
    </form>
  )
}
