"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, AlertTriangle, Send, Mail, Settings } from "lucide-react"

export default function FormSubmitTestPage() {
  const [testResult, setTestResult] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [testType, setTestType] = useState<'simple' | 'activation'>('simple')

  const testFormSubmitActivation = async () => {
    setIsLoading(true)
    setTestResult(null)

    try {
      // Create a simple test form to check if FormSubmit email is activated
      const form = document.createElement('form')
      form.action = 'https://formsubmit.co/info@nomineejobs.co.uk'
      form.method = 'POST'
      form.target = '_blank' // Open in new tab to see result
      form.style.display = 'none'

      // Add simple test data
      const nameField = document.createElement('input')
      nameField.type = 'hidden'
      nameField.name = 'name'
      nameField.value = 'FormSubmit Test'
      form.appendChild(nameField)

      const emailField = document.createElement('input')
      emailField.type = 'hidden' 
      emailField.name = 'email'
      emailField.value = 'test@nomineejobs.co.uk'
      form.appendChild(emailField)

      const messageField = document.createElement('input')
      messageField.type = 'hidden'
      messageField.name = 'message'
      messageField.value = `FormSubmit activation test - ${new Date().toISOString()}`
      form.appendChild(messageField)

      // FormSubmit configuration
      const subjectField = document.createElement('input')
      subjectField.type = 'hidden'
      subjectField.name = '_subject'
      subjectField.value = '🧪 FormSubmit Test - Activation Check'
      form.appendChild(subjectField)

      const templateField = document.createElement('input')
      templateField.type = 'hidden'
      templateField.name = '_template'
      templateField.value = 'basic'
      form.appendChild(templateField)

      // Add to page and submit
      document.body.appendChild(form)
      form.submit()
      
      // Clean up
      document.body.removeChild(form)
      
      setTestResult('✅ Test form submitted! Check info@nomineejobs.co.uk for the email. If no email arrives, FormSubmit needs activation.')
      
    } catch (error) {
      console.error('Test failed:', error)
      setTestResult('❌ Test failed: ' + (error instanceof Error ? error.message : 'Unknown error'))
    } finally {
      setIsLoading(false)
    }
  }

  const testAjaxSubmission = async () => {
    setIsLoading(true)
    setTestResult(null)

    try {
      const response = await fetch('https://formsubmit.co/ajax/info@nomineejobs.co.uk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: 'AJAX Test',
          email: 'test@nomineejobs.co.uk', 
          message: `AJAX FormSubmit test - ${new Date().toISOString()}`,
          _subject: '🧪 AJAX FormSubmit Test',
          _template: 'basic'
        })
      })

      const result = await response.json()
      
      if (result.success) {
        setTestResult('✅ AJAX test successful! Check info@nomineejobs.co.uk for the email.')
      } else {
        setTestResult('❌ AJAX test failed: ' + JSON.stringify(result))
      }
      
    } catch (error) {
      console.error('AJAX test failed:', error)
      setTestResult('❌ AJAX test failed: ' + (error instanceof Error ? error.message : 'Unknown error'))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">FormSubmit API Testing</h1>
        <p className="text-gray-600">Test FormSubmit integration and email delivery to info@nomineejobs.co.uk</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Email Activation Test */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Email Activation Test
            </CardTitle>
            <CardDescription>
              Test if FormSubmit is properly activated for info@nomineejobs.co.uk
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  <strong>First-time setup:</strong> If this is the first submission to FormSubmit, 
                  you'll receive an activation email that you must click to confirm.
                </AlertDescription>
              </Alert>
              
              <Button 
                onClick={testFormSubmitActivation} 
                disabled={isLoading}
                className="w-full"
              >
                {isLoading ? (
                  <>
                    <Settings className="h-4 w-4 mr-2 animate-spin" />
                    Submitting Test...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Test Email Activation
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* AJAX Test */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              AJAX Submission Test
            </CardTitle>
            <CardDescription>
              Test AJAX form submission (for forms without file uploads)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Alert>
                <CheckCircle className="h-4 w-4" />
                <AlertDescription>
                  AJAX submissions work for simple forms but not for file uploads.
                </AlertDescription>
              </Alert>
              
              <Button 
                onClick={testAjaxSubmission} 
                disabled={isLoading}
                className="w-full"
                variant="outline"
              >
                {isLoading ? (
                  <>
                    <Settings className="h-4 w-4 mr-2 animate-spin" />
                    Testing AJAX...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Test AJAX Submission
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Test Results */}
      {testResult && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {testResult.includes('✅') ? (
                <CheckCircle className="h-5 w-5 text-green-600" />
              ) : (
                <AlertTriangle className="h-5 w-5 text-red-600" />
              )}
              Test Results
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`p-4 rounded-lg ${
              testResult.includes('✅') 
                ? 'bg-green-50 border border-green-200 text-green-800'
                : 'bg-red-50 border border-red-200 text-red-800'
            }`}>
              <pre className="whitespace-pre-wrap font-mono text-sm">{testResult}</pre>
            </div>
          </CardContent>
        </Card>
      )}

      {/* FormSubmit Configuration Info */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Current Configuration</CardTitle>
          <CardDescription>FormSubmit settings for debugging</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <div>
              <strong>Email Endpoint:</strong> info@nomineejobs.co.uk
            </div>
            <div>
              <strong>FormSubmit URL:</strong> https://formsubmit.co/info@nomineejobs.co.uk
            </div>
            <div>
              <strong>AJAX URL:</strong> https://formsubmit.co/ajax/info@nomineejobs.co.uk
            </div>
            <div className="mt-4">
              <strong>Expected Email Fields:</strong>
              <ul className="list-disc list-inside ml-4 mt-2">
                <li>Subject: Form submissions from NomineeJobs</li>
                <li>From: FormSubmit notifications</li>
                <li>Reply-to: User's email address</li>
                <li>Content: Form data in table format</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Troubleshooting Steps */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Troubleshooting Steps</CardTitle>
          <CardDescription>If emails aren't being delivered</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <div>
              <strong>1. Check Spam Folder:</strong> FormSubmit emails might be filtered
            </div>
            <div>
              <strong>2. Verify Email Activation:</strong> First submission requires clicking activation link
            </div>
            <div>
              <strong>3. Wait for Delivery:</strong> Emails can take 2-5 minutes to arrive
            </div>
            <div>
              <strong>4. Check Email Format:</strong> Ensure info@nomineejobs.co.uk is correct
            </div>
            <div>
              <strong>5. Test with Different Email:</strong> Try a personal email to rule out server issues
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 