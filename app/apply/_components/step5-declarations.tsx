"use client"

import { useState, useEffect } from "react"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, AlertCircle, FileCheck, Shield, Scale, AlertTriangle, Clock, Users, BookOpen, Info, Eye, CheckSquare } from "lucide-react"
import type { FormData } from "../page"
import type React from "react"

interface StepProps {
  formData: FormData
  updateFormData: (data: Partial<FormData>) => void
}

export default function Step5Declarations({ formData, updateFormData }: StepProps) {
  const [validationState, setValidationState] = useState({
    termsAccepted: { isValid: false, message: "" },
    privacyAccepted: { isValid: false, message: "" },
    legalDeclarations: { isValid: false, message: "" },
    marketingConsent: { isValid: false, message: "" }, // Optional
  })

  const [showTermsPreview, setShowTermsPreview] = useState(false)
  const [applicationSummary, setApplicationSummary] = useState(false)

  const validateField = (field: string, value: boolean) => {
    switch (field) {
      case 'termsAccepted':
        setValidationState(prev => ({
          ...prev,
          termsAccepted: {
            isValid: value,
            message: value ? "✓ Terms and conditions accepted" : "You must accept the terms and conditions to proceed"
          }
        }))
        break
      case 'privacyAccepted':
        setValidationState(prev => ({
          ...prev,
          privacyAccepted: {
            isValid: value,
            message: value ? "✓ Privacy policy accepted" : "You must accept the privacy policy to proceed"
          }
        }))
        break
      case 'legalDeclarations':
        setValidationState(prev => ({
          ...prev,
          legalDeclarations: {
            isValid: value,
            message: value ? "✓ Legal declarations confirmed" : "You must confirm all legal declarations"
          }
        }))
        break
      case 'marketingConsent':
        setValidationState(prev => ({
          ...prev,
          marketingConsent: {
            isValid: true, // Always valid as it's optional
            message: value ? "✓ Marketing consent provided" : "Marketing updates declined"
          }
        }))
        break
    }
  }

  const handleCheckboxChange = (field: string) => (checked: boolean | "indeterminate") => {
    const isChecked = checked === true
    updateFormData({ [field]: isChecked })
    validateField(field, isChecked)
  }

  // Validate initial values
  useEffect(() => {
    Object.keys(validationState).forEach(field => {
      const value = formData[field as keyof FormData] as boolean
      if (value !== undefined) validateField(field, value)
    })
  }, [])

  const getValidationIcon = (field: keyof typeof validationState) => {
    const value = formData[field] as boolean
    const validation = validationState[field]
    
    if (validation.isValid) {
      return <CheckCircle className="h-5 w-5 text-green-500" />
    } else if (value === false && validation.message && field !== 'marketingConsent') {
      return <AlertCircle className="h-5 w-5 text-red-500" />
    }
    return null
  }

  const allRequired = validationState.termsAccepted.isValid && 
                     validationState.privacyAccepted.isValid && 
                     validationState.legalDeclarations.isValid

  const getCompletionStats = () => {
    const steps = [
      { name: 'Personal Info', complete: !!(formData.firstName && formData.lastName && formData.email) },
      { name: 'Address', complete: !!(formData.addressLine1 && formData.city && formData.postcode) },
      { name: 'Identification', complete: !!(formData.idType && formData.idNumber && formData.nationalInsurance) },
      { name: 'Payment', complete: !!(formData.paymentMethod && (formData.paymentMethod !== 'bank_transfer' || formData.accountNumber)) },
      { name: 'Declarations', complete: allRequired }
    ]
    
    const completed = steps.filter(step => step.complete).length
    return { completed, total: steps.length, steps }
  }

  const stats = getCompletionStats()

  return (
    <div className="space-y-8">
      {/* Progress indicator */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-2">
          <FileCheck className="h-5 w-5 text-blue-600" />
          <span className="font-semibold text-blue-800">Final Declarations</span>
          {allRequired && <Badge variant="outline" className="bg-green-100 text-green-700 border-green-300 text-xs">Complete</Badge>}
        </div>
        <p className="text-sm text-blue-700">
          Please review and accept the required terms to complete your application.
        </p>
      </div>

      {/* Application Progress */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-center gap-3 mb-3">
          <CheckSquare className="h-6 w-6 text-blue-600" />
          <h3 className="font-semibold text-blue-800">📋 Application Progress</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-3">
          {stats.steps.map((step, index) => (
            <div key={step.name} className={`text-center p-2 rounded-lg ${step.complete ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
              <div className="text-xs font-medium">{step.name}</div>
              <div className="text-lg">{step.complete ? '✓' : '○'}</div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div className="text-sm text-blue-700">
            <strong>{stats.completed}/{stats.total}</strong> sections completed
          </div>
          <div className="w-24 bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-500 h-2 rounded-full transition-all duration-300" 
              style={{ width: `${(stats.completed / stats.total) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Application Summary Toggle */}
      <div className="bg-gray-50 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium text-gray-800">Review Your Application</h4>
            <p className="text-sm text-gray-600">Check your information before submitting</p>
          </div>
          <button
            type="button"
            onClick={() => setApplicationSummary(!applicationSummary)}
            className="flex items-center gap-2 px-3 py-2 bg-white border rounded-md hover:bg-gray-50 transition-colors text-gray-700"
          >
            <Eye className="h-4 w-4" />
            {applicationSummary ? 'Hide Summary' : 'Show Summary'}
          </button>
        </div>

        {applicationSummary && (
          <div className="mt-4 p-4 bg-white rounded-lg border space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-800"><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
                <p className="text-gray-800"><strong>Email:</strong> {formData.email}</p>
                <p className="text-gray-800"><strong>Phone:</strong> {formData.phone}</p>
              </div>
              <div>
                <p className="text-gray-800"><strong>City:</strong> {formData.city}</p>
                <p className="text-gray-800"><strong>ID Type:</strong> {formData.idType}</p>
                <p className="text-gray-800"><strong>Payment:</strong> {formData.paymentMethod === 'bank_transfer' ? 'Bank Transfer' : formData.paymentMethod}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Legal Declarations */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <Scale className="h-5 w-5 text-sky-600" />
          Legal Declarations & Confirmations
        </h3>

        <div className="space-y-4">
          {/* Legal Declarations Checkbox */}
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Checkbox
                id="legalDeclarations"
                checked={!!formData.legalDeclarations}
                onCheckedChange={handleCheckboxChange('legalDeclarations')}
                className="mt-1"
              />
              <div className="flex-1">
                <Label htmlFor="legalDeclarations" className="cursor-pointer">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-medium text-gray-800">I confirm all legal declarations *</span>
                    {getValidationIcon('legalDeclarations')}
                  </div>
                </Label>
                <div className="text-sm text-gray-600 space-y-2">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="font-medium mb-2 text-gray-800">By checking this box, I declare that:</p>
                    <ul className="space-y-1 text-xs text-gray-700">
                      <li>• I am a UK resident aged 18 or older</li>
                      <li>• I have the legal right to work in the UK</li>
                      <li>• All information provided is true and accurate</li>
                      <li>• I have no undischarged bankruptcies or director disqualifications</li>
                      <li>• I understand my role and responsibilities as a nominee</li>
                      <li>• I consent to background checks and verification procedures</li>
                    </ul>
                  </div>
                </div>
                {validationState.legalDeclarations.message && (
                  <p className={`text-xs mt-2 ${validationState.legalDeclarations.isValid ? 'text-green-600' : 'text-red-600'}`}>
                    {validationState.legalDeclarations.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Terms and Conditions */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-sky-600" />
          Terms & Privacy
        </h3>

        <div className="space-y-4">
          {/* Terms and Conditions */}
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Checkbox
                id="termsAccepted"
                checked={!!formData.termsAccepted}
                onCheckedChange={handleCheckboxChange('termsAccepted')}
                className="mt-1"
              />
              <div className="flex-1">
                <Label htmlFor="termsAccepted" className="cursor-pointer">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-medium text-gray-800">
                      I accept the{' '}
                      <a href="/terms-and-conditions" target="_blank" className="text-blue-600 underline hover:text-blue-700">
                        Terms and Conditions
                      </a>{' '}
                      *
                    </span>
                    {getValidationIcon('termsAccepted')}
                  </div>
                </Label>
                <p className="text-sm text-gray-600">
                  Please read our terms carefully. They outline your rights, responsibilities, and our service conditions.
                </p>
                {validationState.termsAccepted.message && (
                  <p className={`text-xs mt-2 ${validationState.termsAccepted.isValid ? 'text-green-600' : 'text-red-600'}`}>
                    {validationState.termsAccepted.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Privacy Policy */}
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Checkbox
                id="privacyAccepted"
                checked={!!formData.privacyAccepted}
                onCheckedChange={handleCheckboxChange('privacyAccepted')}
                className="mt-1"
              />
              <div className="flex-1">
                <Label htmlFor="privacyAccepted" className="cursor-pointer">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-medium text-gray-800">
                      I accept the{' '}
                      <a href="/privacy-policy" target="_blank" className="text-blue-600 underline hover:text-blue-700">
                        Privacy Policy
                      </a>{' '}
                      *
                    </span>
                    {getValidationIcon('privacyAccepted')}
                  </div>
                </Label>
                <p className="text-sm text-gray-600">
                  Our privacy policy explains how we collect, use, and protect your personal information.
                </p>
                {validationState.privacyAccepted.message && (
                  <p className={`text-xs mt-2 ${validationState.privacyAccepted.isValid ? 'text-green-600' : 'text-red-600'}`}>
                    {validationState.privacyAccepted.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Marketing Consent (Optional) */}
          <div className="border border-gray-200 rounded-lg p-4 bg-blue-50/30">
            <div className="flex items-start space-x-3">
              <Checkbox
                id="marketingConsent"
                checked={!!formData.marketingConsent}
                onCheckedChange={handleCheckboxChange('marketingConsent')}
                className="mt-1"
              />
              <div className="flex-1">
                <Label htmlFor="marketingConsent" className="cursor-pointer">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-medium text-gray-800">
                      Send me updates and opportunities (Optional)
                    </span>
                    {getValidationIcon('marketingConsent')}
                  </div>
                </Label>
                <p className="text-sm text-gray-600">
                  Receive notifications about new opportunities, earning tips, and platform updates. You can unsubscribe anytime.
                </p>
                {validationState.marketingConsent.message && (
                  <p className={`text-xs mt-2 ${validationState.marketingConsent.isValid ? 'text-green-600' : 'text-blue-600'}`}>
                    {validationState.marketingConsent.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Important Information */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <div className="flex items-start gap-2">
          <Info className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
          <div className="text-sm text-amber-700">
            <p className="font-medium mb-2 text-amber-800">🚀 Next Steps After Submission:</p>
            <ul className="space-y-1 text-xs text-amber-700">
              <li>• <strong>Instant:</strong> Application confirmation sent to your email</li>
              <li>• <strong>24-48 hours:</strong> Initial document review and verification</li>
              <li>• <strong>3-5 days:</strong> Background checks and final approval</li>
              <li>• <strong>1 week:</strong> Welcome package and first opportunities</li>
              <li>• <strong>Ongoing:</strong> Weekly earnings and monthly statements</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Security Notice */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <div className="flex items-start gap-2">
          <Shield className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
          <div className="text-sm text-green-700">
            <p className="font-medium mb-1 text-green-800">🛡️ Your Security & Privacy</p>
            <p className="text-xs text-green-600">All data is encrypted in transit and at rest. We comply with GDPR and UK data protection laws. Your information is never shared without your explicit consent.</p>
          </div>
        </div>
      </div>

      {allRequired && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 animate-bounce-in">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span className="font-semibold text-green-800">Ready to submit!</span>
          </div>
          <p className="text-sm text-green-700 mt-1">
            All required declarations have been accepted. Your application is complete and ready for submission.
          </p>
        </div>
      )}

      {!allRequired && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            <span className="font-semibold text-red-800">Required items missing</span>
          </div>
          <p className="text-sm text-red-700 mt-1">
            Please accept all required terms and declarations before you can submit your application.
          </p>
        </div>
      )}
    </div>
  )
}
