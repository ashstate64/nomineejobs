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
    nationalInsurance: { isValid: false, message: "" },
  })

  const [previewMode, setPreviewMode] = useState(false)

  const validateField = (field: string, value: string) => {
    switch (field) {
      case 'idType':
        const idValid = Boolean(value && value.length > 0)
        setValidationState(prev => ({
          ...prev,
          idType: {
            isValid: idValid,
            message: idValid ? "✓ ID type selected" : value.length === 0 ? "" : "Please select your ID type"
          }
        }))
        break
      case 'idNumber':
        let numberValid = false
        switch (formData.idType) {
          case 'passport':
            numberValid = /^[A-Z0-9]{9}$/.test(value.toUpperCase())
            break
          case 'driving_licence':
            numberValid = /^[A-Z0-9]{16}$/.test(value.toUpperCase().replace(/\s/g, ''))
            break
          default:
            numberValid = value.length >= 8
        }
        setValidationState(prev => ({
          ...prev,
          idNumber: {
            isValid: numberValid,
            message: numberValid ? "✓ Valid ID number format" : value.length === 0 ? "" : getIdFormatHelp()
          }
        }))
        break
      case 'nationalInsurance':
        const niValid = /^[A-Z]{2}[0-9]{6}[A-D]$/i.test(value.replace(/\s/g, ''))
        setValidationState(prev => ({
          ...prev,
          nationalInsurance: {
            isValid: niValid,
            message: niValid ? "✓ Valid National Insurance number" : value.length === 0 ? "" : "Format: AB123456C"
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target
    const file = files?.[0] || null
    
    // Validate file size (5MB limit)
    if (file && file.size > 5 * 1024 * 1024) {
      alert('File size must be less than 5MB')
      return
    }
    
    // Validate file type
    if (file && !['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'].includes(file.type)) {
      alert('Please upload a JPG, PNG, or PDF file')
      return
    }
    
    updateFormData({ [name]: file })
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
    const base = "bg-white text-gray-900 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
    const value = formData[field] as string
    if (!value) return base
    
    const validation = validationState[field]
    if (validation.isValid) {
      return `${base} border-green-400 focus:border-green-500 focus:ring-green-500`
    } else if (validation.message) {
      return `${base} border-red-400 focus:border-red-500 focus:ring-red-500`
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
                   formData.idType && formData.idNumber && 
                   formData.nationalInsurance &&
                   formData.idDocumentFront && formData.idDocumentBack && formData.proofOfAddress

  const getIdFormatHelp = () => {
    switch (formData.idType) {
      case 'passport':
        return "UK passport numbers are 9 characters: either 9 digits (e.g., 123456789) or 1 letter/digit + 8 digits (e.g., A12345678)"
      case 'driving_licence':
        return "UK driving licence numbers are 18 characters including surname, dates, and check digits (e.g., SMITH751125AB9CD01)"
      case 'national_id':
        return "Enter your national identity card number as it appears on the document (minimum 8 characters)"
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
            <p className="font-medium mb-1 text-gray-800">🔒 Your Security is Our Priority</p>
            <p className="text-xs text-gray-600">All personal information is encrypted and stored securely. We never share your data with third parties without your consent.</p>
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
            <Label htmlFor="idType" className="text-gray-800 font-medium flex items-center gap-2">
              Document Type *
              {getValidationIcon('idType')}
            </Label>
            <Select value={formData.idType || ""} onValueChange={handleSelectChange('idType')}>
              <SelectTrigger className="bg-white text-gray-900 border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                <SelectValue placeholder="Select your primary ID document" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-300 rounded-lg shadow-lg z-50">
                <SelectItem value="passport" className="text-gray-900 hover:bg-blue-50 focus:bg-blue-50 cursor-pointer px-4 py-2">🇬🇧 UK Passport (Recommended)</SelectItem>
                <SelectItem value="driving_licence" className="text-gray-900 hover:bg-blue-50 focus:bg-blue-50 cursor-pointer px-4 py-2">🚗 UK Driving Licence</SelectItem>
                <SelectItem value="national_id" className="text-gray-900 hover:bg-blue-50 focus:bg-blue-50 cursor-pointer px-4 py-2">🆔 National Identity Card</SelectItem>
              </SelectContent>
            </Select>
            {validationState.idType.message && (
              <p className={`text-xs mt-1 ${validationState.idType.isValid ? 'text-green-600' : 'text-red-600'}`}>
                {validationState.idType.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="idNumber" className="text-gray-800 font-medium flex items-center gap-2">
              Document Number *
              {getValidationIcon('idNumber')}
            </Label>
            <Input
              id="idNumber"
              name="idNumber"
              placeholder={formData.idType === 'passport' ? 'e.g., 123456789 or A12345678' : 
                          formData.idType === 'driving_licence' ? 'e.g., SMITH751125AB9CD01' : 
                          'Enter document number (min 8 chars)'}
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

      {/* National Insurance */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <Shield className="h-5 w-5 text-sky-600" />
          UK Tax Information
        </h3>

        <div className="space-y-2">
          <Label htmlFor="nationalInsurance" className="text-gray-800 font-medium flex items-center gap-2">
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
          Document Upload Required
        </h3>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
          <div className="flex items-start gap-2">
            <Camera className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
            <div className="text-sm text-amber-700">
              <p className="font-medium mb-1 text-amber-800">📸 Document Upload Requirements:</p>
              <ul className="space-y-1 text-xs text-amber-700">
                <li>• Clear, high-quality photo or scan of your documents</li>
                <li>• All text must be clearly readable</li>
                <li>• No glare, shadows, or obstructions</li>
                <li>• Accepted formats: JPG, PNG, PDF (max 5MB each)</li>
                <li>• Documents must be current and not expired</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {/* ID Document Front */}
          <div className="space-y-2">
            <Label className="text-gray-800 font-medium flex items-center gap-2">
              <FileText className="h-4 w-4" />
              ID Document - Front Side *
              {formData.idDocumentFront && <CheckCircle className="h-4 w-4 text-green-500" />}
            </Label>
            <div className="relative">
              <input
                type="file"
                name="idDocumentFront"
                accept="image/jpeg,image/jpg,image/png,application/pdf"
                onChange={handleFileChange}
                className="hidden"
                id="idDocumentFront"
              />
              <label
                htmlFor="idDocumentFront"
                className="flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 hover:border-blue-400 rounded-lg cursor-pointer bg-gray-50 hover:bg-blue-50 transition-colors"
              >
                <div className="text-center">
                  {formData.idDocumentFront ? (
                    <div className="text-green-600">
                      <CheckCircle className="h-8 w-8 mx-auto mb-2" />
                      <p className="text-sm font-medium">✅ {formData.idDocumentFront.name}</p>
                      <p className="text-xs text-gray-500">{(formData.idDocumentFront.size / 1024 / 1024).toFixed(2)} MB</p>
                    </div>
                  ) : (
                    <div className="text-gray-600">
                      <Upload className="h-8 w-8 mx-auto mb-2" />
                      <p className="text-sm font-medium">Upload front side of ID</p>
                      <p className="text-xs text-gray-500">JPG, PNG, or PDF (max 5MB)</p>
                    </div>
                  )}
                </div>
              </label>
            </div>
            <p className="text-xs text-gray-500">
              Upload the front side of your {formData.idType === 'passport' ? 'passport' : formData.idType === 'driving_licence' ? 'driving licence' : 'ID document'}
            </p>
          </div>

          {/* ID Document Back */}
          <div className="space-y-2">
            <Label className="text-gray-800 font-medium flex items-center gap-2">
              <FileText className="h-4 w-4" />
              ID Document - Back Side *
              {formData.idDocumentBack && <CheckCircle className="h-4 w-4 text-green-500" />}
            </Label>
            <div className="relative">
              <input
                type="file"
                name="idDocumentBack"
                accept="image/jpeg,image/jpg,image/png,application/pdf"
                onChange={handleFileChange}
                className="hidden"
                id="idDocumentBack"
              />
              <label
                htmlFor="idDocumentBack"
                className="flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 hover:border-blue-400 rounded-lg cursor-pointer bg-gray-50 hover:bg-blue-50 transition-colors"
              >
                <div className="text-center">
                  {formData.idDocumentBack ? (
                    <div className="text-green-600">
                      <CheckCircle className="h-8 w-8 mx-auto mb-2" />
                      <p className="text-sm font-medium">✅ {formData.idDocumentBack.name}</p>
                      <p className="text-xs text-gray-500">{(formData.idDocumentBack.size / 1024 / 1024).toFixed(2)} MB</p>
                    </div>
                  ) : (
                    <div className="text-gray-600">
                      <Upload className="h-8 w-8 mx-auto mb-2" />
                      <p className="text-sm font-medium">Upload back side of ID</p>
                      <p className="text-xs text-gray-500">JPG, PNG, or PDF (max 5MB)</p>
                    </div>
                  )}
                </div>
              </label>
            </div>
            <p className="text-xs text-gray-500">
              Upload the back side of your {formData.idType === 'passport' ? 'passport (photo page)' : formData.idType === 'driving_licence' ? 'driving licence' : 'ID document'}
            </p>
          </div>

          {/* Proof of Address */}
          <div className="space-y-2">
            <Label className="text-gray-800 font-medium flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Proof of Address *
              {formData.proofOfAddress && <CheckCircle className="h-4 w-4 text-green-500" />}
            </Label>
            <div className="relative">
              <input
                type="file"
                name="proofOfAddress"
                accept="image/jpeg,image/jpg,image/png,application/pdf"
                onChange={handleFileChange}
                className="hidden"
                id="proofOfAddress"
              />
              <label
                htmlFor="proofOfAddress"
                className="flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 hover:border-blue-400 rounded-lg cursor-pointer bg-gray-50 hover:bg-blue-50 transition-colors"
              >
                <div className="text-center">
                  {formData.proofOfAddress ? (
                    <div className="text-green-600">
                      <CheckCircle className="h-8 w-8 mx-auto mb-2" />
                      <p className="text-sm font-medium">✅ {formData.proofOfAddress.name}</p>
                      <p className="text-xs text-gray-500">{(formData.proofOfAddress.size / 1024 / 1024).toFixed(2)} MB</p>
                    </div>
                  ) : (
                    <div className="text-gray-600">
                      <Upload className="h-8 w-8 mx-auto mb-2" />
                      <p className="text-sm font-medium">Upload proof of address</p>
                      <p className="text-xs text-gray-500">JPG, PNG, or PDF (max 5MB)</p>
                    </div>
                  )}
                </div>
              </label>
            </div>
            <p className="text-xs text-gray-500">
              Upload a recent utility bill, bank statement, or council tax document (within last 3 months)
            </p>
          </div>
        </div>
      </div>

      {/* Important Information */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start gap-2">
          <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div className="text-sm text-blue-700">
            <p className="font-medium mb-2 text-blue-800">🛡️ Why We Need This Information:</p>
            <ul className="space-y-1 text-xs text-blue-600">
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
            className="flex items-center gap-2 px-3 py-2 bg-white border rounded-md hover:bg-gray-50 transition-colors text-gray-700"
          >
            <Eye className="h-4 w-4" />
            {previewMode ? 'Hide Preview' : 'Show Preview'}
          </button>
        </div>

        {previewMode && (
          <div className="mt-4 p-4 bg-white rounded-lg border space-y-2">
            <p className="text-sm text-gray-800"><strong>ID Type:</strong> {formData.idType || 'Not selected'}</p>
            <p className="text-sm text-gray-800"><strong>ID Number:</strong> {formData.idNumber ? '••••••' + formData.idNumber.slice(-3) : 'Not entered'}</p>
            <p className="text-sm text-gray-800"><strong>NI Number:</strong> {formData.nationalInsurance ? '••••••' + formData.nationalInsurance.slice(-1) : 'Not entered'}</p>
          </div>
        )}
      </div>

      {allValid && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 animate-bounce-in">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span className="font-semibold text-green-800">Identity verification complete!</span>
          </div>
          <p className="text-sm text-green-700 mt-1">
            ✅ All identification details and documents uploaded successfully. Ready to proceed to payment setup.
          </p>
        </div>
      )}
    </div>
  )
}
