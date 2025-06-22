"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, AlertCircle, FileText, Shield, Upload, Eye, Calendar, User, Info, Camera, Lock } from "lucide-react"
import type { FormData } from "../page"
import type React from "react"

interface StepProps {
  formData: FormData
  updateFormData: (data: Partial<FormData>) => void
}

export default function Step3Identification({ formData, updateFormData }: StepProps) {
  const [validationState, setValidationState] = useState({
    idType: { isValid: false, message: "" },
    idNumber: { isValid: false, message: "" },
    dateOfBirth: { isValid: false, message: "" },
    placeOfBirth: { isValid: false, message: "" },
    nationalInsurance: { isValid: false, message: "" },
  })

  const [previewMode, setPreviewMode] = useState(false)

  const validateField = (field: string, value: string) => {
    switch (field) {
      case 'idType':
        const idTypeValid = Boolean(value && value.length > 0)
        setValidationState(prev => ({
          ...prev,
          idType: {
            isValid: idTypeValid,
            message: idTypeValid ? "✓ ID type selected" : value.length === 0 ? "" : "Please select a valid form of identification"
          }
        }))
        break
      case 'idNumber':
        let idNumberValid = false
        let idMessage = ""
        if (formData.idType === 'passport') {
          idNumberValid = /^[A-Z]{1,2}\d{6,9}$/.test(value.replace(/\s/g, ''))
          idMessage = idNumberValid ? "✓ Valid passport number" : value.length === 0 ? "" : "UK passport number format: ABC123456"
        } else if (formData.idType === 'driving_licence') {
          idNumberValid = /^[A-Z]{1,5}\d{6}[A-Z]{2}\d[A-Z]{2}$/.test(value.replace(/\s/g, ''))
          idMessage = idNumberValid ? "✓ Valid driving licence number" : value.length === 0 ? "" : "UK driving licence format: ABCDE123456AB1CD"
        } else if (formData.idType === 'national_id') {
          idNumberValid = value.trim().length >= 8
          idMessage = idNumberValid ? "✓ ID number accepted" : value.length === 0 ? "" : "Please enter a valid ID number"
        }
        setValidationState(prev => ({
          ...prev,
          idNumber: { isValid: idNumberValid, message: idMessage }
        }))
        break
      case 'dateOfBirth':
        const dobValid = Boolean(value && new Date(value) < new Date() && new Date().getFullYear() - new Date(value).getFullYear() >= 18)
        setValidationState(prev => ({
          ...prev,
          dateOfBirth: {
            isValid: dobValid,
            message: dobValid ? "✓ Valid date of birth" : value.length === 0 ? "" : "Must be 18+ and valid date"
          }
        }))
        break
      case 'placeOfBirth':
        const pobValid = value.trim().length >= 2 && /^[a-zA-Z\s\-,.']+$/.test(value)
        setValidationState(prev => ({
          ...prev,
          placeOfBirth: {
            isValid: pobValid,
            message: pobValid ? "✓ Valid place of birth" : value.length === 0 ? "" : "Enter city/country of birth"
          }
        }))
        break
      case 'nationalInsurance':
        const niValid = /^[A-CEGHJ-PR-TW-Z]{1}[A-CEGHJ-NPR-TW-Z]{1}\d{6}[A-D]{1}$/.test(value.replace(/\s/g, ''))
        setValidationState(prev => ({
          ...prev,
          nationalInsurance: {
            isValid: niValid,
            message: niValid ? "✓ Valid NI number" : value.length === 0 ? "" : "Format: AB123456C"
          }
        }))
        break
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    updateFormData({ [name]: value })
    validateField(name, value)
  }

  const handleSelectChange = (name: string) => (value: string) => {
    updateFormData({ [name]: value })
    validateField(name, value)
  }

  // Validate initial values
  useEffect(() => {
    Object.keys(validationState).forEach(field => {
      const value = formData[field as keyof FormData] as string
      if (value) validateField(field, value)
    })
  }, [formData.idType])

  const getInputClassName = (field: keyof typeof validationState) => {
    const base = "mt-1 bg-white/80 focus:bg-white transition-all duration-200"
    const value = formData[field] as string
    if (!value) return base
    
    const validation = validationState[field]
    if (validation.isValid) {
      return `${base} border-green-300 focus:border-green-400 focus:ring-green-100`
    } else if (validation.message) {
      return `${base} border-red-300 focus:border-red-400 focus:ring-red-100 animate-shake`
    }
    return base
  }

  const getValidationIcon = (field: keyof typeof validationState) => {
    const value = formData[field] as string
    if (!value) return null
    
    const validation = validationState[field]
    if (validation.isValid) {
      return <CheckCircle className="h-5 w-5 text-green-500" />
    } else if (validation.message) {
      return <AlertCircle className="h-5 w-5 text-red-500" />
    }
    return null
  }

  const allValid = Object.values(validationState).every(v => v.isValid) && 
                   formData.idType && formData.idNumber && formData.dateOfBirth && 
                   formData.placeOfBirth && formData.nationalInsurance

  const getIdFormatHelp = () => {
    switch (formData.idType) {
      case 'passport':
        return "UK passport numbers are typically 9 characters: 3 letters followed by 6 numbers (e.g., ABC123456)"
      case 'driving_licence':
        return "UK driving licence numbers are 16 characters in a specific format (e.g., SMITH123456AB1CD)"
      case 'national_id':
        return "Enter your national identity card number as it appears on the document"
      default:
        return "Select an ID type to see format requirements"
    }
  }

  return (
    <div className="space-y-8">
      {/* Progress indicator */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-2">
          <Shield className="h-5 w-5 text-blue-600" />
          <span className="font-semibold text-blue-800">Identity Verification</span>
          {allValid && <Badge variant="outline" className="bg-green-100 text-green-700 border-green-300 text-xs">Complete</Badge>}
        </div>
        <p className="text-sm text-blue-700">
          We need to verify your identity to comply with UK legal requirements and prevent fraud.
        </p>
      </div>

      {/* Security Notice */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <Lock className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
          <div className="text-sm text-gray-700">
            <p className="font-medium mb-1">🔒 Your Security is Our Priority</p>
            <p className="text-xs">All personal information is encrypted and stored securely. We never share your data with third parties without your consent.</p>
          </div>
        </div>
      </div>

      {/* Primary Identification */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <FileText className="h-5 w-5 text-sky-600" />
          Primary Identification Document
        </h3>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="idType" className="text-gray-700 font-medium flex items-center gap-2">
              Document Type *
              {getValidationIcon('idType')}
            </Label>
            <Select value={formData.idType || ""} onValueChange={handleSelectChange('idType')}>
              <SelectTrigger className={`${getInputClassName('idType')} text-gray-900`}>
                <SelectValue placeholder="Select your primary ID document" className="text-gray-700" />
              </SelectTrigger>
              <SelectContent className="bg-white border-2 border-gray-200 rounded-lg shadow-lg z-50">
                <SelectItem value="passport" className="text-gray-900 hover:bg-blue-50 focus:bg-blue-50 focus:text-gray-900 cursor-pointer px-4 py-2">🇬🇧 UK Passport (Recommended)</SelectItem>
                <SelectItem value="driving_licence" className="text-gray-900 hover:bg-blue-50 focus:bg-blue-50 focus:text-gray-900 cursor-pointer px-4 py-2">🚗 UK Driving Licence</SelectItem>
                <SelectItem value="national_id" className="text-gray-900 hover:bg-blue-50 focus:bg-blue-50 focus:text-gray-900 cursor-pointer px-4 py-2">🆔 National Identity Card</SelectItem>
              </SelectContent>
            </Select>
            {validationState.idType.message && (
              <p className={`text-xs mt-1 ${validationState.idType.isValid ? 'text-green-600' : 'text-red-600'}`}>
                {validationState.idType.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="idNumber" className="text-gray-700 font-medium flex items-center gap-2">
              Document Number *
              {getValidationIcon('idNumber')}
            </Label>
            <Input
              id="idNumber"
              name="idNumber"
              placeholder={formData.idType === 'passport' ? 'e.g., ABC123456' : 
                          formData.idType === 'driving_licence' ? 'e.g., SMITH123456AB1CD' : 
                          'Enter document number'}
              required
              className={getInputClassName('idNumber')}
              value={formData.idNumber || ""}
              onChange={handleChange}
            />
            {validationState.idNumber.message && (
              <p className={`text-xs mt-1 ${validationState.idNumber.isValid ? 'text-green-600' : 'text-red-600'}`}>
                {validationState.idNumber.message}
              </p>
            )}
            <p className="text-xs text-gray-500">{getIdFormatHelp()}</p>
          </div>
        </div>
      </div>

      {/* Personal Details */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <User className="h-5 w-5 text-sky-600" />
          Personal Details
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="dateOfBirth" className="text-gray-700 font-medium flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Date of Birth *
              {getValidationIcon('dateOfBirth')}
            </Label>
            <Input
              id="dateOfBirth"
              name="dateOfBirth"
              type="date"
              required
              className={getInputClassName('dateOfBirth')}
              value={formData.dateOfBirth || ""}
              onChange={handleChange}
              max={new Date(new Date().setFullYear(new Date().getFullYear() - 18)).toISOString().split('T')[0]}
            />
            {validationState.dateOfBirth.message && (
              <p className={`text-xs mt-1 ${validationState.dateOfBirth.isValid ? 'text-green-600' : 'text-red-600'}`}>
                {validationState.dateOfBirth.message}
              </p>
            )}
            <p className="text-xs text-gray-500">Must be 18 or older to participate</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="placeOfBirth" className="text-gray-700 font-medium flex items-center gap-2">
              Place of Birth *
              {getValidationIcon('placeOfBirth')}
            </Label>
            <Input
              id="placeOfBirth"
              name="placeOfBirth"
              placeholder="e.g., London, United Kingdom"
              required
              className={getInputClassName('placeOfBirth')}
              value={formData.placeOfBirth || ""}
              onChange={handleChange}
            />
            {validationState.placeOfBirth.message && (
              <p className={`text-xs mt-1 ${validationState.placeOfBirth.isValid ? 'text-green-600' : 'text-red-600'}`}>
                {validationState.placeOfBirth.message}
              </p>
            )}
            <p className="text-xs text-gray-500">City and country where you were born</p>
          </div>
        </div>
      </div>

      {/* National Insurance */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <Shield className="h-5 w-5 text-sky-600" />
          UK Tax Information
        </h3>

        <div className="space-y-2">
          <Label htmlFor="nationalInsurance" className="text-gray-700 font-medium flex items-center gap-2">
            National Insurance Number *
            {getValidationIcon('nationalInsurance')}
          </Label>
          <Input
            id="nationalInsurance"
            name="nationalInsurance"
            placeholder="e.g., AB123456C"
            required
            className={getInputClassName('nationalInsurance')}
            value={formData.nationalInsurance || ""}
            onChange={handleChange}
            maxLength={9}
          />
          {validationState.nationalInsurance.message && (
            <p className={`text-xs mt-1 ${validationState.nationalInsurance.isValid ? 'text-green-600' : 'text-red-600'}`}>
              {validationState.nationalInsurance.message}
            </p>
          )}
          <p className="text-xs text-gray-500">
            Required for tax purposes and employment eligibility verification
          </p>
        </div>
      </div>

      {/* Document Upload Section */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <Upload className="h-5 w-5 text-sky-600" />
          Document Upload (Next Step)
        </h3>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <div className="flex items-start gap-2">
            <Camera className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
            <div className="text-sm text-amber-700">
              <p className="font-medium mb-1">📸 Document Upload Requirements:</p>
              <ul className="space-y-1 text-xs">
                <li>• Clear, high-quality photo or scan of your ID document</li>
                <li>• All text must be clearly readable</li>
                <li>• No glare, shadows, or obstructions</li>
                <li>• Accepted formats: JPG, PNG, PDF (max 5MB)</li>
                <li>• Document must be current and not expired</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Important Information */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start gap-2">
          <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div className="text-sm text-blue-700">
            <p className="font-medium mb-2">🛡️ Why We Need This Information:</p>
            <ul className="space-y-1 text-xs">
              <li>• Legal requirement under UK Anti-Money Laundering regulations</li>
              <li>• Verify your eligibility to work in the UK</li>
              <li>• Prevent fraud and protect all participants</li>
              <li>• Enable proper tax reporting and compliance</li>
              <li>• Ensure accurate payment processing</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Preview Mode Toggle */}
      <div className="bg-gray-50 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium text-gray-800">Review Your Information</h4>
            <p className="text-sm text-gray-600">Double-check your details before proceeding</p>
          </div>
          <button
            type="button"
            onClick={() => setPreviewMode(!previewMode)}
            className="flex items-center gap-2 px-3 py-2 bg-white border rounded-md hover:bg-gray-50 transition-colors"
          >
            <Eye className="h-4 w-4" />
            {previewMode ? 'Hide Preview' : 'Show Preview'}
          </button>
        </div>

        {previewMode && (
          <div className="mt-4 p-4 bg-white rounded-lg border space-y-2">
            <p className="text-sm"><strong>ID Type:</strong> {formData.idType || 'Not selected'}</p>
            <p className="text-sm"><strong>ID Number:</strong> {formData.idNumber ? '••••••' + formData.idNumber.slice(-3) : 'Not entered'}</p>
            <p className="text-sm"><strong>Date of Birth:</strong> {formData.dateOfBirth || 'Not entered'}</p>
            <p className="text-sm"><strong>Place of Birth:</strong> {formData.placeOfBirth || 'Not entered'}</p>
            <p className="text-sm"><strong>NI Number:</strong> {formData.nationalInsurance ? '••••••' + formData.nationalInsurance.slice(-1) : 'Not entered'}</p>
          </div>
        )}
      </div>

      {allValid && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 animate-bounce-in">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span className="font-semibold text-green-800">Identity information verified!</span>
          </div>
          <p className="text-sm text-green-700 mt-1">
            Your identification details look correct. Ready to proceed to payment setup.
          </p>
        </div>
      )}
    </div>
  )
}
