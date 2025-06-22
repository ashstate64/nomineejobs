"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, AlertCircle, Mail, Phone, MapPin, Home, Info, Globe } from "lucide-react"
import type { FormData } from "../page"
import type React from "react"

interface StepProps {
  formData: FormData
  updateFormData: (data: Partial<FormData>) => void
}

export default function Step2ContactAddress({ formData, updateFormData }: StepProps) {
  const [validationState, setValidationState] = useState({
    email: { isValid: false, message: "" },
    phone: { isValid: false, message: "" },
    addressLine1: { isValid: false, message: "" },
    city: { isValid: false, message: "" },
    postcode: { isValid: false, message: "" },
  })

  const validateField = (field: string, value: string) => {
    switch (field) {
      case 'email':
        const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        setValidationState(prev => ({
          ...prev,
          email: {
            isValid: emailValid,
            message: emailValid ? "✓ Valid email address" : value.length === 0 ? "" : "Please enter a valid email address"
          }
        }))
        break
      case 'phone':
        const phoneValid = /^(\+44|0)[1-9]\d{8,9}$/.test(value.replace(/\s/g, ''))
        setValidationState(prev => ({
          ...prev,
          phone: {
            isValid: phoneValid,
            message: phoneValid ? "✓ Valid UK phone number" : value.length === 0 ? "" : "Please enter a valid UK phone number"
          }
        }))
        break
      case 'addressLine1':
        const addressValid = value.trim().length >= 5
        setValidationState(prev => ({
          ...prev,
          addressLine1: {
            isValid: addressValid,
            message: addressValid ? "✓ Address looks good" : value.length === 0 ? "" : "Please enter your full address (minimum 5 characters)"
          }
        }))
        break
      case 'city':
        const cityValid = value.trim().length >= 2 && /^[a-zA-Z\s\-']+$/.test(value)
        setValidationState(prev => ({
          ...prev,
          city: {
            isValid: cityValid,
            message: cityValid ? "✓ Valid city name" : value.length === 0 ? "" : "Please enter a valid city name"
          }
        }))
        break
      case 'postcode':
        const postcodeValid = /^[A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2}$/i.test(value.replace(/\s/g, ''))
        setValidationState(prev => ({
          ...prev,
          postcode: {
            isValid: postcodeValid,
            message: postcodeValid ? "✓ Valid UK postcode" : value.length === 0 ? "" : "Please enter a valid UK postcode (e.g., SW1A 1AA)"
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

  const handleSelectChange = (value: string) => {
    updateFormData({ country: value })
  }

  // Validate initial values
  useEffect(() => {
    Object.keys(validationState).forEach(field => {
      const value = formData[field as keyof FormData] as string
      if (value) validateField(field, value)
    })
  }, [])

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
                   formData.email && formData.phone && formData.addressLine1 && 
                   formData.city && formData.postcode

  return (
    <div className="space-y-8">
      {/* Progress indicator */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-2">
          <MapPin className="h-5 w-5 text-blue-600" />
          <span className="font-semibold text-blue-800">Contact & Address Information</span>
          {allValid && <Badge variant="outline" className="bg-green-100 text-green-700 border-green-300 text-xs">Complete</Badge>}
        </div>
        <p className="text-sm text-blue-700">
          We need your contact details and UK address for legal compliance and correspondence.
        </p>
      </div>

      {/* Contact Information */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <Mail className="h-5 w-5 text-sky-600" />
          Contact Information
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700 font-medium flex items-center gap-2">
              Email Address *
              {getValidationIcon('email')}
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              className={getInputClassName('email')}
              value={formData.email || ""}
              onChange={handleChange}
            />
            {validationState.email.message && (
              <p className={`text-xs mt-1 ${validationState.email.isValid ? 'text-green-600' : 'text-red-600'}`}>
                {validationState.email.message}
              </p>
            )}
            <p className="text-xs text-gray-500">Used for application updates and important notifications</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-gray-700 font-medium flex items-center gap-2">
              <Phone className="h-4 w-4" />
              UK Phone Number *
              {getValidationIcon('phone')}
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="07123 456789"
              required
              className={getInputClassName('phone')}
              value={formData.phone || ""}
              onChange={handleChange}
            />
            {validationState.phone.message && (
              <p className={`text-xs mt-1 ${validationState.phone.isValid ? 'text-green-600' : 'text-red-600'}`}>
                {validationState.phone.message}
              </p>
            )}
            <p className="text-xs text-gray-500">For urgent matters and identity verification</p>
          </div>
        </div>
      </div>

      {/* Address Information */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <Home className="h-5 w-5 text-sky-600" />
          UK Residential Address
        </h3>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="addressLine1" className="text-gray-700 font-medium flex items-center gap-2">
              Address Line 1 *
              {getValidationIcon('addressLine1')}
            </Label>
            <Input
              id="addressLine1"
              name="addressLine1"
              placeholder="e.g., 123 High Street"
              required
              className={getInputClassName('addressLine1')}
              value={formData.addressLine1 || ""}
              onChange={handleChange}
            />
            {validationState.addressLine1.message && (
              <p className={`text-xs mt-1 ${validationState.addressLine1.isValid ? 'text-green-600' : 'text-red-600'}`}>
                {validationState.addressLine1.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="addressLine2" className="text-gray-700 font-medium">
              Address Line 2 (Optional)
            </Label>
            <Input
              id="addressLine2"
              name="addressLine2"
              placeholder="e.g., Apartment 4B"
              className="mt-1 bg-white/80 focus:bg-white transition-all duration-200"
              value={formData.addressLine2 || ""}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="city" className="text-gray-700 font-medium flex items-center gap-2">
                City *
                {getValidationIcon('city')}
              </Label>
              <Input
                id="city"
                name="city"
                placeholder="e.g., London"
                required
                className={getInputClassName('city')}
                value={formData.city || ""}
                onChange={handleChange}
              />
              {validationState.city.message && (
                <p className={`text-xs mt-1 ${validationState.city.isValid ? 'text-green-600' : 'text-red-600'}`}>
                  {validationState.city.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="postcode" className="text-gray-700 font-medium flex items-center gap-2">
                Postcode *
                {getValidationIcon('postcode')}
              </Label>
              <Input
                id="postcode"
                name="postcode"
                placeholder="e.g., SW1A 1AA"
                required
                className={getInputClassName('postcode')}
                value={formData.postcode || ""}
                onChange={handleChange}
              />
              {validationState.postcode.message && (
                <p className={`text-xs mt-1 ${validationState.postcode.isValid ? 'text-green-600' : 'text-red-600'}`}>
                  {validationState.postcode.message}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="country" className="text-gray-700 font-medium flex items-center gap-2">
              <Globe className="h-4 w-4" />
              Country
            </Label>
            <Select value={formData.country || "United Kingdom"} onValueChange={handleSelectChange}>
              <SelectTrigger className="mt-1 bg-white/80 focus:bg-white">
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="United Kingdom">United Kingdom</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-gray-500">Must be UK resident to participate</p>
          </div>
        </div>
      </div>

      {/* Important Information */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <div className="flex items-start gap-2">
          <Info className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
          <div className="text-sm text-amber-700">
            <p className="font-medium mb-1">Address Requirements:</p>
            <ul className="space-y-1 text-xs">
              <li>• Must be your current UK residential address</li>
              <li>• Required for receiving official mail and documents</li>
              <li>• Used for background checks and verification</li>
              <li>• Cannot be a PO Box or business address</li>
            </ul>
          </div>
        </div>
      </div>

      {allValid && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 animate-bounce-in">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span className="font-semibold text-green-800">Contact details verified!</span>
          </div>
          <p className="text-sm text-green-700 mt-1">
            Your contact and address information looks correct. Ready to proceed to identification.
          </p>
        </div>
      )}
    </div>
  )
}
