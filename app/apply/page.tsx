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
  
  // Step 4: Payment
  paymentMethod?: string
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
const SUCCESS_URL = `${typeof window !== 'undefined' ? window.location.origin : ''}/apply/success`

export default function ApplyPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  // Load saved form data from localStorage
  useEffect(() => {
    const savedData = localStorage.getItem('nominee-application')
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData)
        setFormData(parsed)
      } catch (error) {
        console.warn('Could not parse saved form data')
      }
    }
  }, [])

  // Save form data to localStorage whenever it changes
  useEffect(() => {
    if (Object.keys(formData).length > 0) {
      localStorage.setItem('nominee-application', JSON.stringify(formData))
    }
  }, [formData])

  const updateFormData = (newData: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...newData }))
  }

  const getStepValidation = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!(formData.firstName && formData.lastName)
      case 2:
        return !!(formData.email && formData.phone && formData.addressLine1 && formData.city && formData.postcode)
      case 3:
        return !!(formData.idType && formData.idNumber && formData.nationalInsurance)
      case 4:
        return !!(formData.paymentMethod && (formData.paymentMethod !== 'bank_transfer' || formData.accountNumber))
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
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!getStepValidation(5)) {
      setSubmitError('Please complete all required fields before submitting.')
      return
    }

    setIsSubmitting(true)
    setSubmitError(null)

    try {
      console.log('🚀 Submitting application using FormSubmit AJAX API...')

      // Create comprehensive application summary for email
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
Bank Name: ${formData.bankName || 'Not provided'}
Account Holder: ${formData.accountHolderName || 'Not provided'}
Account Number: ${formData.accountNumber ? '****' + formData.accountNumber.slice(-4) : 'Not provided'}
Sort Code: ${formData.sortCode ? '**-**-' + formData.sortCode.slice(-2) : 'Not provided'}

==== DECLARATIONS ====
Terms Accepted: ${formData.termsAccepted ? 'Yes' : 'No'}
Privacy Policy Accepted: ${formData.privacyAccepted ? 'Yes' : 'No'}
Legal Declarations: ${formData.legalDeclarations ? 'Yes' : 'No'}
Marketing Consent: ${formData.marketingConsent ? 'Yes' : 'No'}

Application submitted on: ${new Date().toISOString()}
      `.trim()

      // Use the same reliable FormSubmit API utility as the contact form
      const result = await submitFormToFormSubmit({
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email || '',
        message: applicationSummary,
        phone: formData.phone,
        
        // Additional application-specific fields
        application_type: 'nominee_director_application',
        first_name: formData.firstName,
        last_name: formData.lastName,
        date_of_birth: formData.dateOfBirth,
        place_of_birth: formData.placeOfBirth,
        address_line_1: formData.addressLine1,
        address_line_2: formData.addressLine2,
        city: formData.city,
        postcode: formData.postcode,
        country: formData.country,
        id_type: formData.idType,
        id_number_masked: formData.idNumber ? '****' + formData.idNumber.slice(-4) : '',
        national_insurance_masked: formData.nationalInsurance ? '****' + formData.nationalInsurance.slice(-2) : '',
        payment_method: formData.paymentMethod,
        bank_name: formData.bankName,
        account_holder_name: formData.accountHolderName,
        account_number_masked: formData.accountNumber ? '****' + formData.accountNumber.slice(-4) : '',
        sort_code_masked: formData.sortCode ? '**-**-' + formData.sortCode.slice(-2) : '',
        terms_accepted: formData.termsAccepted ? 'Yes' : 'No',
        privacy_accepted: formData.privacyAccepted ? 'Yes' : 'No',
        legal_declarations: formData.legalDeclarations ? 'Yes' : 'No',
        marketing_consent: formData.marketingConsent ? 'Yes' : 'No',
      })

      console.log('✅ Application submission success:', result)

      if (result.success) {
        // Clear saved form data
        localStorage.removeItem('nominee-application')
        setSubmitSuccess(true)
        
        // Redirect after success display
        setTimeout(() => {
          window.location.href = SUCCESS_URL
        }, 2000)
      } else {
        throw new Error(result.message || 'Application submission failed - please try again')
      }
      
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
    <form ref={formRef} onSubmit={handleSubmit} className="w-full">
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
