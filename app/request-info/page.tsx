"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, AlertTriangle, Send, Clock, Mail, Phone, MessageSquare, User, HelpCircle, Shield } from "lucide-react"
import Link from "next/link"

// FormSubmit configuration for info requests
const FORMSUBMIT_EMAIL = "info@nomineejobs.co.uk" // Replace with your actual email
const SUCCESS_URL = `${typeof window !== 'undefined' ? window.location.origin : ''}/request-info/success`

export default function RequestInfoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiry_type: "",
    message: "",
    preferred_contact: "",
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Enhanced validation
    if (!formData.name.trim()) {
      setSubmitError('Please enter your name.')
      return
    }
    
    if (!formData.email.trim()) {
      setSubmitError('Please enter your email address.')
      return
    }
    
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setSubmitError('Please enter a valid email address.')
      return
    }
    
    if (!formData.message.trim()) {
      setSubmitError('Please enter your message.')
      return
    }
    
    if (formData.message.trim().length < 10) {
      setSubmitError('Please provide a more detailed message (at least 10 characters).')
      return
    }

    setIsSubmitting(true)
    setSubmitError(null)

    try {
      // Create FormData for submission
      const submitData = new FormData()
      
      // Add all form fields with proper encoding
      Object.entries(formData).forEach(([key, value]) => {
        if (value && value.trim()) {
          submitData.append(key, value.trim())
        }
      })

      // Add FormSubmit configuration fields
      submitData.append('_next', SUCCESS_URL)
      submitData.append('_subject', `New Info Request from ${formData.name}: ${formData.inquiry_type || 'General Inquiry'}`)
      submitData.append('_template', 'table')
      submitData.append('_captcha', 'true')
      submitData.append('_autoresponse', 'Thank you for your inquiry! We have received your message and will respond within 24 hours during business days. Your inquiry is important to us.')
      
      // Add honeypot for spam protection
      submitData.append('_honey', '')
      
      // Add blacklist for spam filtering
      submitData.append('_blacklist', 'spam, viagra, crypto, bitcoin, investment scheme')

      // Submit to FormSubmit with timeout
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 30000) // 30 second timeout

      const response = await fetch(`https://formsubmit.co/${FORMSUBMIT_EMAIL}`, {
        method: 'POST',
        body: submitData,
        signal: controller.signal,
        headers: {
          'Accept': 'application/json, text/html, */*',
        }
      })

      clearTimeout(timeoutId)

      if (response.ok || response.status === 200) {
        setSubmitSuccess(true)
        
        // Clear form data
        setFormData({
          name: "",
          email: "",
          phone: "",
          inquiry_type: "",
          message: "",
          preferred_contact: "",
        })
        
        // Redirect after a brief success display
        setTimeout(() => {
          window.location.href = SUCCESS_URL
        }, 2000)
      } else {
        throw new Error(`Submission failed with status: ${response.status}`)
      }
      
    } catch (error) {
      console.error('Submission error:', error)
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          setSubmitError('Request timed out. Please check your internet connection and try again.')
        } else {
          setSubmitError(`Failed to send message: ${error.message}. Please try again.`)
        }
      } else {
        setSubmitError('Failed to send message. Please check your internet connection and try again.')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitSuccess) {
    return (
      <div className="flex items-center justify-center py-16">
        <div className="text-center animate-fade-in">
          <div className="bg-white border-2 border-green-200 rounded-2xl p-8 max-w-md mx-auto shadow-xl transform animate-bounce-in">
            <div className="relative mb-6">
              <CheckCircle className="h-20 w-20 text-green-600 mx-auto animate-scale-in" />
              <div className="absolute inset-0 rounded-full bg-green-100 opacity-50 animate-ping"></div>
            </div>
            <h2 className="text-3xl font-bold text-green-800 mb-3">Message Sent Successfully!</h2>
            <p className="text-green-700 mb-4 text-lg">
              Thank you for your inquiry, <strong>{formData.name}</strong>. We'll get back to you within 24 hours.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
              <p className="text-sm text-green-600">
                📧 Confirmation email sent to: <strong>{formData.email}</strong>
              </p>
            </div>
            <p className="text-sm text-green-600 animate-pulse">
              Redirecting to confirmation page...
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <HelpCircle className="h-8 w-8 text-blue-600" />
          <h1 className="text-4xl font-bold text-gray-800">Request Information</h1>
        </div>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Have questions about becoming a nominee director? We're here to help. 
          Get personalized answers from our expert team.
        </p>
      </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
              {/* Hidden FormSubmit fields */}
              <input type="hidden" name="_honey" style={{ display: 'none' }} />
              
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <MessageSquare className="h-6 w-6 text-blue-600" />
                Send Us a Message
              </h2>

              <div className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-700 font-medium flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Your Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      required
                      className="border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 bg-white text-gray-900 placeholder:text-gray-500 rounded-lg px-4 py-3 transition-all duration-200"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700 font-medium flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                      className="border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 bg-white text-gray-900 placeholder:text-gray-500 rounded-lg px-4 py-3 transition-all duration-200"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                {/* Contact Preferences */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-700 font-medium flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Phone Number (Optional)
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="07123 456789"
                      className="border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 bg-white text-gray-900 placeholder:text-gray-500 rounded-lg px-4 py-3 transition-all duration-200"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="preferred_contact" className="text-gray-700 font-medium">
                      Preferred Contact Method
                    </Label>
                    <Select value={formData.preferred_contact} onValueChange={handleSelectChange('preferred_contact')}>
                      <SelectTrigger className="border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 bg-white text-gray-900 rounded-lg px-4 py-3 h-12 transition-all duration-200">
                        <SelectValue placeholder="Select preference" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-2 border-gray-200 rounded-lg shadow-lg">
                        <SelectItem value="email" className="hover:bg-blue-50 focus:bg-blue-50 cursor-pointer">Email</SelectItem>
                        <SelectItem value="phone" className="hover:bg-blue-50 focus:bg-blue-50 cursor-pointer">Phone Call</SelectItem>
                        <SelectItem value="either" className="hover:bg-blue-50 focus:bg-blue-50 cursor-pointer">Either Email or Phone</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Inquiry Type */}
                <div className="space-y-2">
                  <Label htmlFor="inquiry_type" className="text-gray-700 font-medium">
                    What would you like to know about?
                  </Label>
                  <Select value={formData.inquiry_type} onValueChange={handleSelectChange('inquiry_type')}>
                    <SelectTrigger className="border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 bg-white text-gray-900 rounded-lg px-4 py-3 h-12 transition-all duration-200">
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-2 border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                      <SelectItem value="general" className="hover:bg-blue-50 focus:bg-blue-50 cursor-pointer">General Information</SelectItem>
                      <SelectItem value="application" className="hover:bg-blue-50 focus:bg-blue-50 cursor-pointer">Application Process</SelectItem>
                      <SelectItem value="earnings" className="hover:bg-blue-50 focus:bg-blue-50 cursor-pointer">Earnings & Payments</SelectItem>
                      <SelectItem value="legal" className="hover:bg-blue-50 focus:bg-blue-50 cursor-pointer">Legal Requirements</SelectItem>
                      <SelectItem value="responsibilities" className="hover:bg-blue-50 focus:bg-blue-50 cursor-pointer">Role Responsibilities</SelectItem>
                      <SelectItem value="training" className="hover:bg-blue-50 focus:bg-blue-50 cursor-pointer">Training & Support</SelectItem>
                      <SelectItem value="timeline" className="hover:bg-blue-50 focus:bg-blue-50 cursor-pointer">Timeline & Schedule</SelectItem>
                      <SelectItem value="other" className="hover:bg-blue-50 focus:bg-blue-50 cursor-pointer">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-700 font-medium">
                    Your Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Please describe your questions or what information you'd like to receive..."
                    required
                    rows={6}
                    className="border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 bg-white text-gray-900 placeholder:text-gray-500 rounded-lg px-4 py-3 transition-all duration-200 resize-none"
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                  <p className="text-xs text-gray-500">
                    The more specific your question, the better we can help you.
                  </p>
                </div>

                {/* Error Display */}
                {submitError && (
                  <div className="flex items-center gap-3 text-red-700 text-sm bg-red-50 border-2 border-red-200 rounded-lg p-4 shadow-sm">
                    <AlertTriangle className="h-5 w-5 flex-shrink-0" />
                    <span className="font-medium">{submitError}</span>
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] disabled:hover:scale-100 shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? (
                    <>
                      <Clock className="h-5 w-5 animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Contact */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Phone className="h-5 w-5 text-blue-600" />
                Quick Contact
              </h3>
              <div className="space-y-3">
                <div>
                  <div className="text-sm font-medium text-gray-700">Phone</div>
                  <a href="tel:+442071234567" className="text-blue-600 hover:text-blue-700">
                    +44 207 123 4567
                  </a>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-700">Email</div>
                  <a href="mailto:info@nomineejobs.co.uk" className="text-blue-600 hover:text-blue-700 text-sm">
                    info@nomineejobs.co.uk
                  </a>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-700">Hours</div>
                  <div className="text-sm text-gray-600">Monday - Friday<br />9:00 AM - 6:00 PM GMT</div>
                </div>
              </div>
            </div>

            {/* Guarantees */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
              <h3 className="font-semibold text-green-800 mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Our Guarantees
              </h3>
              <div className="space-y-3 text-sm text-green-700">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>Response within 24 hours</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>Expert guidance from certified professionals</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>No obligation consultation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>Your information stays confidential</span>
                </div>
              </div>
            </div>

            {/* Popular Questions */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Popular Questions</h3>
              <div className="space-y-3">
                <Link href="/learn-more/earnings-structure" className="block text-sm text-blue-600 hover:text-blue-700">
                  → How much can I earn as a nominee?
                </Link>
                <Link href="/learn-more/legal-framework" className="block text-sm text-blue-600 hover:text-blue-700">
                  → What are my legal responsibilities?
                </Link>
                <Link href="/learn-more/onboarding-process" className="block text-sm text-blue-600 hover:text-blue-700">
                  → How long does the application take?
                </Link>
                <Link href="/learn-more/comparing-roles" className="block text-sm text-blue-600 hover:text-blue-700">
                  → What's different about nominee work?
                </Link>
              </div>
            </div>

            {/* Ready to Apply? */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
              <h3 className="font-semibold text-blue-800 mb-2">Ready to Apply?</h3>
              <p className="text-sm text-blue-600 mb-4">
                Skip the questions and start your application today
              </p>
              <Link
                href="/apply"
                className="block w-full bg-blue-600 text-white text-center py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Start Application
              </Link>
            </div>
          </div>
        </div>
    </div>
  )
}