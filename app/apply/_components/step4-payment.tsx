"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CheckCircle, AlertCircle, CreditCard, Building2, DollarSign, Shield, Info, Eye, EyeOff, Zap, TrendingUp, Banknote, Lock, Coins, Bitcoin } from "lucide-react"
import type { FormData } from "../page"
import type React from "react"

interface StepProps {
  formData: FormData
  updateFormData: (data: Partial<FormData>) => void
}

export default function Step4Payment({ formData, updateFormData }: StepProps) {
  const [validationState, setValidationState] = useState({
    paymentMethod: { isValid: false, message: "" },
    preferredCrypto: { isValid: false, message: "" },
    bankName: { isValid: false, message: "" },
    accountHolderName: { isValid: false, message: "" },
    accountNumber: { isValid: false, message: "" },
    sortCode: { isValid: false, message: "" },
  })

  const [showAccountDetails, setShowAccountDetails] = useState(false)
  const [previewMode, setPreviewMode] = useState(false)

  const validateField = (field: string, value: string) => {
    switch (field) {
      case 'paymentMethod':
        const paymentValid = Boolean(value && value.length > 0)
        setValidationState(prev => ({
          ...prev,
          paymentMethod: {
            isValid: paymentValid,
            message: paymentValid ? "✓ Payment method selected" : value.length === 0 ? "" : "Please select a payment method"
          }
        }))
        break
      case 'preferredCrypto':
        const cryptoValid = Boolean(value && value.length > 0)
        setValidationState(prev => ({
          ...prev,
          preferredCrypto: {
            isValid: cryptoValid,
            message: cryptoValid ? "✓ Cryptocurrency selected" : value.length === 0 ? "" : "Please select your preferred cryptocurrency"
          }
        }))
        break
      case 'bankName':
        const bankValid = Boolean(value && value.trim().length >= 2)
        setValidationState(prev => ({
          ...prev,
          bankName: {
            isValid: bankValid,
            message: bankValid ? "✓ Valid bank name" : value.length === 0 ? "" : "Please enter your bank name"
          }
        }))
        break
      case 'accountHolderName':
        const nameValid = Boolean(value && value.trim().length >= 2 && /^[a-zA-Z\s\-']+$/.test(value))
        setValidationState(prev => ({
          ...prev,
          accountHolderName: {
            isValid: nameValid,
            message: nameValid ? "✓ Valid account holder name" : value.length === 0 ? "" : "Enter the name on your bank account"
          }
        }))
        break
      case 'accountNumber':
        const accountValid = /^\d{8}$/.test(value.replace(/\s/g, ''))
        setValidationState(prev => ({
          ...prev,
          accountNumber: {
            isValid: accountValid,
            message: accountValid ? "✓ Valid account number" : value.length === 0 ? "" : "UK account numbers are 8 digits"
          }
        }))
        break
      case 'sortCode':
        const sortValid = /^\d{2}-?\d{2}-?\d{2}$/.test(value.replace(/\s/g, ''))
        setValidationState(prev => ({
          ...prev,
          sortCode: {
            isValid: sortValid,
            message: sortValid ? "✓ Valid sort code" : value.length === 0 ? "" : "Format: 12-34-56"
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

  const handleSelectChange = (name: string) => (value: string) => {
    updateFormData({ [name]: value })
    validateField(name, value)
  }

  const handleRadioChange = (value: string) => {
    updateFormData({ paymentMethod: value })
    validateField('paymentMethod', value)
  }

  // Validate initial values
  useEffect(() => {
    Object.keys(validationState).forEach(field => {
      const value = formData[field as keyof FormData] as string
      if (value) validateField(field, value)
    })
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

  const allValid = formData.paymentMethod && (
    (formData.paymentMethod === 'crypto' && formData.preferredCrypto) ||
    (formData.paymentMethod === 'bank_transfer' && formData.bankName && formData.accountHolderName && formData.accountNumber && formData.sortCode) ||
    (formData.paymentMethod === 'paypal')
  )

  return (
    <div className="space-y-8">
      {/* Progress indicator */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-2">
          <CreditCard className="h-5 w-5 text-blue-600" />
          <span className="font-semibold text-blue-800">Payment Setup</span>
          {allValid && <Badge variant="outline" className="bg-green-100 text-green-700 border-green-300 text-xs">Complete</Badge>}
        </div>
        <p className="text-sm text-blue-700">
          Set up your payment method to receive your earnings from nominee work.
        </p>
      </div>

      {/* Earnings Highlight */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4">
        <div className="flex items-center gap-3 mb-3">
          <TrendingUp className="h-6 w-6 text-green-600" />
          <h3 className="font-semibold text-green-800">💰 Your Earnings Potential</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="bg-white/60 rounded-lg p-3">
            <div className="text-2xl font-bold text-green-600">£15-50</div>
            <div className="text-xs text-green-700">Per Hour</div>
          </div>
          <div className="bg-white/60 rounded-lg p-3">
            <div className="text-2xl font-bold text-green-600">£500-2k</div>
            <div className="text-xs text-green-700">Per Month</div>
          </div>
          <div className="bg-white/60 rounded-lg p-3">
            <div className="text-2xl font-bold text-green-600">Weekly</div>
            <div className="text-xs text-green-700">Payments</div>
          </div>
        </div>
      </div>

      {/* Payment Method Selection */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <Banknote className="h-5 w-5 text-sky-600" />
          Choose Your Payment Method
        </h3>

        <RadioGroup value={formData.paymentMethod || ""} onValueChange={handleRadioChange}>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="bank_transfer" id="bank_transfer" />
                <Label htmlFor="bank_transfer" className="flex-1 cursor-pointer text-gray-800">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Building2 className="h-5 w-5 text-blue-600" />
                      <div>
                        <div className="font-medium text-gray-800">UK Bank Transfer</div>
                        <div className="text-sm text-gray-600">Direct deposit to your bank account</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="bg-green-100 text-green-700 border-green-300 text-xs">
                        <Zap className="h-3 w-3 mr-1" />
                        Fastest
                      </Badge>
                      <div className="text-sm font-medium text-green-600">FREE</div>
                    </div>
                  </div>
                </Label>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="crypto" id="crypto" />
                <Label htmlFor="crypto" className="flex-1 cursor-pointer text-gray-800">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Coins className="h-5 w-5 text-orange-600" />
                      <div>
                        <div className="font-medium text-gray-800">Cryptocurrency</div>
                        <div className="text-sm text-gray-600">Bitcoin, Ethereum, USDC and more</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="bg-orange-100 text-orange-700 border-orange-300 text-xs">
                        <Bitcoin className="h-3 w-3 mr-1" />
                        Digital
                      </Badge>
                      <div className="text-sm font-medium text-green-600">FREE</div>
                    </div>
                  </div>
                </Label>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors opacity-60">
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="paypal" id="paypal" disabled />
                <Label htmlFor="paypal" className="flex-1 cursor-pointer text-gray-600">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <CreditCard className="h-5 w-5 text-blue-600" />
                      <div>
                        <div className="font-medium text-gray-600">PayPal</div>
                        <div className="text-sm text-gray-500">Coming soon - Alternative payment option</div>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">Coming Soon</Badge>
                  </div>
                </Label>
              </div>
            </div>
          </div>
        </RadioGroup>

        {validationState.paymentMethod.message && (
          <p className={`text-xs ${validationState.paymentMethod.isValid ? 'text-green-600' : 'text-red-600'}`}>
            {validationState.paymentMethod.message}
          </p>
        )}
      </div>

      {/* Cryptocurrency Selection */}
      {formData.paymentMethod === 'crypto' && (
        <div className="space-y-6 animate-bounce-in">
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <div className="flex items-start gap-2">
              <Coins className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-orange-700">
                <p className="font-medium mb-1 text-orange-800">🪙 Cryptocurrency Payments</p>
                <p className="text-xs text-orange-600">Select your preferred cryptocurrency. We'll provide wallet details when you have your first payment ready.</p>
              </div>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
            <Bitcoin className="h-5 w-5 text-orange-600" />
            Preferred Cryptocurrency
          </h3>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="preferredCrypto" className="text-gray-800 font-medium flex items-center gap-2">
                Cryptocurrency *
                {getValidationIcon('preferredCrypto')}
              </Label>
              <Select value={formData.preferredCrypto || ""} onValueChange={handleSelectChange('preferredCrypto')}>
                <SelectTrigger className="bg-white text-gray-900 border-gray-300 focus:border-orange-500 focus:ring-orange-500">
                  <SelectValue placeholder="Select your preferred cryptocurrency" />
                </SelectTrigger>
                <SelectContent className="bg-white border-gray-300">
                  <SelectItem value="bitcoin" className="text-gray-900 hover:bg-orange-50">
                    <div className="flex items-center gap-2">
                      <Bitcoin className="h-4 w-4 text-orange-500" />
                      Bitcoin (BTC)
                    </div>
                  </SelectItem>
                  <SelectItem value="ethereum" className="text-gray-900 hover:bg-blue-50">
                    <div className="flex items-center gap-2">
                      <Coins className="h-4 w-4 text-blue-500" />
                      Ethereum (ETH)
                    </div>
                  </SelectItem>
                  <SelectItem value="usdc" className="text-gray-900 hover:bg-green-50">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-green-500" />
                      USD Coin (USDC)
                    </div>
                  </SelectItem>
                  <SelectItem value="usdt" className="text-gray-900 hover:bg-green-50">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-green-600" />
                      Tether (USDT)
                    </div>
                  </SelectItem>
                  <SelectItem value="litecoin" className="text-gray-900 hover:bg-gray-50">
                    <div className="flex items-center gap-2">
                      <Coins className="h-4 w-4 text-gray-500" />
                      Litecoin (LTC)
                    </div>
                  </SelectItem>
                  <SelectItem value="cardano" className="text-gray-900 hover:bg-blue-50">
                    <div className="flex items-center gap-2">
                      <Coins className="h-4 w-4 text-blue-600" />
                      Cardano (ADA)
                    </div>
                  </SelectItem>
                  <SelectItem value="polygon" className="text-gray-900 hover:bg-purple-50">
                    <div className="flex items-center gap-2">
                      <Coins className="h-4 w-4 text-purple-500" />
                      Polygon (MATIC)
                    </div>
                  </SelectItem>
                  <SelectItem value="solana" className="text-gray-900 hover:bg-purple-50">
                    <div className="flex items-center gap-2">
                      <Coins className="h-4 w-4 text-purple-600" />
                      Solana (SOL)
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
              {validationState.preferredCrypto.message && (
                <p className={`text-xs mt-1 ${validationState.preferredCrypto.isValid ? 'text-green-600' : 'text-red-600'}`}>
                  {validationState.preferredCrypto.message}
                </p>
              )}
              <p className="text-xs text-gray-500">We support major cryptocurrencies with low transaction fees</p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-blue-700">
                  <p className="font-medium mb-2 text-blue-800">💰 Crypto Payment Benefits:</p>
                  <ul className="space-y-1 text-xs text-blue-700">
                    <li>• Zero transaction fees (you keep 100% of earnings)</li>
                    <li>• Instant global payments</li>
                    <li>• No bank account required</li>
                    <li>• Full privacy and security</li>
                    <li>• Multiple blockchain networks supported</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bank Details Form */}
      {formData.paymentMethod === 'bank_transfer' && (
        <div className="space-y-6 animate-bounce-in">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start gap-2">
              <Lock className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-blue-700">
                <p className="font-medium mb-1 text-blue-800">🔒 Bank Details Security</p>
                <p className="text-xs text-blue-600">Your banking information is encrypted using industry-standard security protocols. We never store your full account details.</p>
              </div>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
            <Building2 className="h-5 w-5 text-sky-600" />
            UK Bank Account Details
          </h3>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="bankName" className="text-gray-800 font-medium flex items-center gap-2">
                Bank Name *
                {getValidationIcon('bankName')}
              </Label>
              <Input
                id="bankName"
                name="bankName"
                placeholder="e.g., Lloyds Bank, HSBC, Barclays"
                required
                className={getInputClassName('bankName')}
                value={formData.bankName || ""}
                onChange={handleChange}
              />
              {validationState.bankName.message && (
                <p className={`text-xs mt-1 ${validationState.bankName.isValid ? 'text-green-600' : 'text-red-600'}`}>
                  {validationState.bankName.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="accountHolderName" className="text-gray-800 font-medium flex items-center gap-2">
                Account Holder Name *
                {getValidationIcon('accountHolderName')}
              </Label>
              <Input
                id="accountHolderName"
                name="accountHolderName"
                placeholder="Full name as it appears on your bank account"
                required
                className={getInputClassName('accountHolderName')}
                value={formData.accountHolderName || ""}
                onChange={handleChange}
              />
              {validationState.accountHolderName.message && (
                <p className={`text-xs mt-1 ${validationState.accountHolderName.isValid ? 'text-green-600' : 'text-red-600'}`}>
                  {validationState.accountHolderName.message}
                </p>
              )}
              <p className="text-xs text-gray-500">Must match your legal name for verification</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="accountNumber" className="text-gray-800 font-medium flex items-center gap-2">
                  Account Number *
                  {getValidationIcon('accountNumber')}
                </Label>
                <div className="relative">
                  <Input
                    id="accountNumber"
                    name="accountNumber"
                    type={showAccountDetails ? "text" : "password"}
                    placeholder="12345678"
                    required
                    className={getInputClassName('accountNumber')}
                    value={formData.accountNumber || ""}
                    onChange={handleChange}
                    maxLength={8}
                  />
                  <button
                    type="button"
                    onClick={() => setShowAccountDetails(!showAccountDetails)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showAccountDetails ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {validationState.accountNumber.message && (
                  <p className={`text-xs mt-1 ${validationState.accountNumber.isValid ? 'text-green-600' : 'text-red-600'}`}>
                    {validationState.accountNumber.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="sortCode" className="text-gray-800 font-medium flex items-center gap-2">
                  Sort Code *
                  {getValidationIcon('sortCode')}
                </Label>
                <Input
                  id="sortCode"
                  name="sortCode"
                  type={showAccountDetails ? "text" : "password"}
                  placeholder="12-34-56"
                  required
                  className={getInputClassName('sortCode')}
                  value={formData.sortCode || ""}
                  onChange={handleChange}
                  maxLength={8}
                />
                {validationState.sortCode.message && (
                  <p className={`text-xs mt-1 ${validationState.sortCode.isValid ? 'text-green-600' : 'text-red-600'}`}>
                    {validationState.sortCode.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Important Information */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <div className="flex items-start gap-2">
          <Info className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
          <div className="text-sm text-amber-700">
            <p className="font-medium mb-2 text-amber-800">💡 Payment Information:</p>
            <ul className="space-y-1 text-xs text-amber-700">
              <li>• Payments are processed weekly on Fridays</li>
              <li>• Minimum payment threshold: £10</li>
              <li>• Bank transfers typically arrive within 1-2 business days</li>
              <li>• You can update your payment details anytime in your dashboard</li>
              <li>• All payments include detailed earnings breakdowns</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Preview Mode */}
      {formData.paymentMethod === 'bank_transfer' && (
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-800">Review Your Payment Details</h4>
              <p className="text-sm text-gray-600">Double-check your banking information</p>
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
              <p className="text-sm text-gray-800"><strong>Payment Method:</strong> Bank Transfer</p>
              <p className="text-sm text-gray-800"><strong>Bank:</strong> {formData.bankName || 'Not entered'}</p>
              <p className="text-sm text-gray-800"><strong>Account Holder:</strong> {formData.accountHolderName || 'Not entered'}</p>
              <p className="text-sm text-gray-800"><strong>Account Number:</strong> {formData.accountNumber ? '••••' + formData.accountNumber.slice(-4) : 'Not entered'}</p>
              <p className="text-sm text-gray-800"><strong>Sort Code:</strong> {formData.sortCode ? '••-••-' + formData.sortCode.slice(-2) : 'Not entered'}</p>
            </div>
          )}
        </div>
      )}

      {allValid && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 animate-bounce-in">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span className="font-semibold text-green-800">Payment setup complete!</span>
          </div>
          <p className="text-sm text-green-700 mt-1">
            Your payment method is configured. Ready for final declarations and submission.
          </p>
        </div>
      )}
    </div>
  )
}
