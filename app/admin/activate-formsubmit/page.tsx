"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, AlertTriangle, Send, Mail } from "lucide-react"

export default function ActivateFormSubmitPage() {
  const [activationSent, setActivationSent] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const sendActivationEmail = async () => {
    setIsLoading(true)
    
    try {
      // Create a form to trigger FormSubmit activation
      const form = document.createElement('form')
      form.action = 'https://formsubmit.co/info@nomineejobs.co.uk'
      form.method = 'POST'
      form.target = '_blank'
      form.style.display = 'none'

      // Add required fields
      const addField = (name: string, value: string) => {
        const input = document.createElement('input')
        input.type = 'hidden'
        input.name = name
        input.value = value
        form.appendChild(input)
      }

      addField('name', 'FormSubmit Activation')
      addField('email', 'admin@nomineejobs.co.uk')
      addField('message', `FormSubmit activation request sent at ${new Date().toISOString()}. Please check your inbox at info@nomineejobs.co.uk for the activation email.`)
      addField('_subject', '🔧 FormSubmit Activation Required - NomineeJobs')
      addField('_template', 'table')
      addField('_captcha', 'false')

      document.body.appendChild(form)
      form.submit()
      document.body.removeChild(form)

      setActivationSent(true)
    } catch (error) {
      console.error('Activation error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">FormSubmit Email Activation</h1>
        <p className="text-gray-600">Activate FormSubmit for info@nomineejobs.co.uk to receive form submissions</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            Email Activation Required
          </CardTitle>
          <CardDescription>
            FormSubmit requires email activation before it can send emails to your inbox
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {!activationSent ? (
            <>
              <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Important:</strong> This will send an activation email to info@nomineejobs.co.uk. 
                  You must click the activation link in that email to enable form submissions.
                </AlertDescription>
              </Alert>

              <div className="space-y-2">
                <h3 className="font-semibold">What happens next:</h3>
                <ol className="list-decimal list-inside space-y-1 text-sm text-gray-600">
                  <li>Click the button below to trigger FormSubmit activation</li>
                  <li>Check the inbox for <strong>info@nomineejobs.co.uk</strong></li>
                  <li>Look for an email from FormSubmit (check spam folder too)</li>
                  <li>Click the activation link in the email</li>
                  <li>FormSubmit will then send emails to info@nomineejobs.co.uk</li>
                </ol>
              </div>

              <Button 
                onClick={sendActivationEmail} 
                disabled={isLoading}
                className="w-full"
                size="lg"
              >
                {isLoading ? (
                  <>
                    <Send className="h-4 w-4 mr-2 animate-pulse" />
                    Sending Activation Request...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Send FormSubmit Activation Email
                  </>
                )}
              </Button>
            </>
          ) : (
            <Alert>
              <CheckCircle className="h-4 w-4" />
              <AlertDescription>
                <strong>Activation email sent!</strong> Check the inbox for info@nomineejobs.co.uk 
                and click the activation link. Don't forget to check your spam folder.
              </AlertDescription>
            </Alert>
          )}

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Troubleshooting Tips:</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Check spam/junk folder for FormSubmit emails</li>
              <li>• Add formsubmit.co to your email whitelist</li>
              <li>• The activation email may take a few minutes to arrive</li>
              <li>• If no email arrives, try a different email provider</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
