"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertCircle, User, Calendar, Info } from "lucide-react"
import type { FormData } from "../page" // Import FormData type
import type React from "react"

interface StepProps {
  formData: FormData
  updateFormData: (data: Partial<FormData>) => void
}

export default function Step1Personal({ formData, updateFormData }: StepProps) {
  const [validationState, setValidationState] = useState({
    firstName: { isValid: false, message: "" },
    lastName: { isValid: false, message: "" },
    dateOfBirth: { isValid: false, message: "", age: 0 },
  })

  const calculateAge = (birthDate: string): number => {
    if (!birthDate) return 0
    const today = new Date()
    const birth = new Date(birthDate)
    let age = today.getFullYear() - birth.getFullYear()
    const monthDiff = today.getMonth() - birth.getMonth()
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--
    }
    return age
  }

  const validateField = (field: string, value: string) => {
    switch (field) {
      case 'firstName':
      case 'lastName':
        const nameValid = value.trim().length >= 2 && /^[a-zA-Z\s\-']+$/.test(value)
        setValidationState(prev => ({
          ...prev,
          [field]: {
            isValid: nameValid,
            message: nameValid ? "✓ Looks good" : value.length === 0 ? "" : "Please enter a valid name (letters only, min 2 characters)"
          }
        }))
        break
      case 'dateOfBirth':
        const age = calculateAge(value)
        const dobValid = age >= 18 && age <= 120
        setValidationState(prev => ({
          ...prev,
          dateOfBirth: {
            isValid: dobValid,
            message: age === 0 ? "" : age < 18 ? "You must be 18 or older" : age > 120 ? "Please enter a valid birth date" : `✓ Age ${age} - eligible`,
            age
          }
        }))
        break
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    updateFormData({ [name]: value })
    validateField(name, value)
  }

  // Validate initial values
  useEffect(() => {
    if (formData.firstName) validateField('firstName', formData.firstName)
    if (formData.lastName) validateField('lastName', formData.lastName)
    if (formData.dateOfBirth) validateField('dateOfBirth', formData.dateOfBirth)
  }, [])

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
                   formData.firstName && formData.lastName && formData.dateOfBirth

  return (
    <div className="space-y-8">
      {/* Progress indicator */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-2">
          <User className="h-5 w-5 text-blue-600" />
          <span className="font-semibold text-blue-800">Personal Information</span>
          {allValid && <Badge variant="outline" className="bg-green-100 text-green-700 border-green-300 text-xs">Complete</Badge>}
        </div>
        <p className="text-sm text-blue-700">
          Please ensure your details match your identification documents exactly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-gray-800 font-medium flex items-center gap-2">
            First Name *
            {getValidationIcon('firstName')}
          </Label>
          <div className="relative">
            <Input
              id="firstName"
              name="firstName"
              placeholder="e.g., John"
              required
              className={getInputClassName('firstName')}
              value={formData.firstName || ""}
              onChange={handleChange}
            />
          </div>
          {validationState.firstName.message && (
            <p className={`text-xs mt-1 ${validationState.firstName.isValid ? 'text-green-600' : 'text-red-600'}`}>
              {validationState.firstName.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-gray-800 font-medium flex items-center gap-2">
            Last Name *
            {getValidationIcon('lastName')}
          </Label>
          <div className="relative">
            <Input
              id="lastName"
              name="lastName"
              placeholder="e.g., Doe"
              required
              className={getInputClassName('lastName')}
              value={formData.lastName || ""}
              onChange={handleChange}
            />
          </div>
          {validationState.lastName.message && (
            <p className={`text-xs mt-1 ${validationState.lastName.isValid ? 'text-green-600' : 'text-red-600'}`}>
              {validationState.lastName.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="dateOfBirth" className="text-gray-800 font-medium flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          Date of Birth *
          {getValidationIcon('dateOfBirth')}
        </Label>
        <div className="relative">
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
        </div>
        {validationState.dateOfBirth.message && (
          <p className={`text-xs mt-1 ${validationState.dateOfBirth.isValid ? 'text-green-600' : 'text-red-600'}`}>
            {validationState.dateOfBirth.message}
          </p>
        )}
      </div>

      {/* Helpful information */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <div className="flex items-start gap-2">
          <Info className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
          <div className="text-sm text-gray-700">
            <p className="font-medium mb-1 text-gray-800">Important:</p>
            <ul className="space-y-1 text-xs text-gray-600">
              <li>• Your name must match your passport or driving licence exactly</li>
              <li>• You must be 18+ years old to participate</li>
              <li>• This information will be used for identity verification</li>
            </ul>
          </div>
        </div>
      </div>

      {allValid && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 animate-bounce-in">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span className="font-semibold text-green-800">Ready to continue!</span>
          </div>
          <p className="text-sm text-green-700 mt-1">
            Your personal information looks good. Click "Continue" to proceed to contact details.
          </p>
        </div>
      )}
    </div>
  )
}
