"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { generateFormSubmitApiKey, getFormSubmissions } from "@/lib/formsubmit-api"
import type { FormSubmitSubmission } from "@/lib/formsubmit-api"
import { AlertCircle, CheckCircle, Key, Mail, Download, Clock, User } from "lucide-react"

export default function FormSubmitApiPage() {
  const [apiKey, setApiKey] = useState("")
  const [submissions, setSubmissions] = useState<FormSubmitSubmission[]>([])
  const [isGeneratingKey, setIsGeneratingKey] = useState(false)
  const [isLoadingSubmissions, setIsLoadingSubmissions] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const handleGenerateApiKey = async () => {
    setIsGeneratingKey(true)
    setError(null)
    setSuccess(null)

    try {
      const result = await generateFormSubmitApiKey()
      if (result.success) {
        setSuccess("✅ API key request sent! Check your email at info@nomineejobs.co.uk for the API key.")
      } else {
        setError(result.message || "Failed to generate API key")
      }
    } catch (error) {
      console.error("API key generation error:", error)
      setError("Failed to generate API key. Please try again.")
    } finally {
      setIsGeneratingKey(false)
    }
  }

  const handleGetSubmissions = async () => {
    if (!apiKey.trim()) {
      setError("Please enter your API key first")
      return
    }

    setIsLoadingSubmissions(true)
    setError(null)
    setSuccess(null)

    try {
      const result = await getFormSubmissions(apiKey.trim())
      if (result.success) {
        setSubmissions(result.submissions)
        setSuccess(`✅ Loaded ${result.submissions.length} submissions`)
      } else {
        setError("Failed to retrieve submissions. Check your API key.")
      }
    } catch (error) {
      console.error("Submissions retrieval error:", error)
      setError("Failed to retrieve submissions. Please check your API key and try again.")
    } finally {
      setIsLoadingSubmissions(false)
    }
  }

  const exportSubmissions = () => {
    const csvContent = [
      // CSV header
      ["Date", "Name", "Email", "Phone", "Inquiry Type", "Preferred Contact", "Message"].join(","),
      // CSV data
      ...submissions.map(sub => [
        sub.submitted_at.date,
        `"${sub.form_data.name || ''}"`,
        sub.form_data.email || '',
        `"${sub.form_data.phone || ''}"`,
        `"${sub.form_data.inquiry_type || ''}"`,
        `"${sub.form_data.preferred_contact || ''}"`,
        `"${(sub.form_data.message || '').replace(/"/g, '""')}"` // Escape quotes in message
      ].join(","))
    ].join("\n")

    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `nomineejobs-submissions-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
    window.URL.revokeObjectURL(url)
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Key className="h-8 w-8 text-blue-600" />
          FormSubmit API Management
        </h1>
        <p className="text-gray-600">
          Manage your FormSubmit API key and access form submissions. 
          API calls are limited to 5 per day as per FormSubmit documentation.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* API Key Generation */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Key className="h-5 w-5" />
              Generate API Key
            </CardTitle>
            <CardDescription>
              Get your FormSubmit API key sent to info@nomineejobs.co.uk
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <Mail className="h-5 w-5 text-blue-600 mt-0.5" />
                <div className="text-sm text-blue-700">
                  <p className="font-medium mb-1">How it works:</p>
                  <ol className="space-y-1 text-xs list-decimal list-inside">
                    <li>Click "Generate API Key" below</li>
                    <li>FormSubmit sends the API key to info@nomineejobs.co.uk</li>
                    <li>Use the API key to retrieve form submissions</li>
                    <li>You can access up to 5 API calls per day</li>
                  </ol>
                </div>
              </div>
            </div>

            <Button 
              onClick={handleGenerateApiKey}
              disabled={isGeneratingKey}
              className="w-full"
            >
              {isGeneratingKey ? (
                <>
                  <Clock className="h-4 w-4 mr-2 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Key className="h-4 w-4 mr-2" />
                  Generate API Key
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Submissions Retrieval */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Download className="h-5 w-5" />
              Retrieve Submissions
            </CardTitle>
            <CardDescription>
              Enter your API key to access form submissions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="apikey">API Key</Label>
              <Input
                id="apikey"
                placeholder="Enter your FormSubmit API key"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
              />
              <p className="text-xs text-gray-500">
                Check your email for the API key after generating it above
              </p>
            </div>

            <Button 
              onClick={handleGetSubmissions}
              disabled={isLoadingSubmissions || !apiKey.trim()}
              className="w-full"
            >
              {isLoadingSubmissions ? (
                <>
                  <Clock className="h-4 w-4 mr-2 animate-spin" />
                  Loading...
                </>
              ) : (
                <>
                  <Download className="h-4 w-4 mr-2" />
                  Get Submissions
                </>
              )}
            </Button>

            {submissions.length > 0 && (
              <Button 
                onClick={exportSubmissions}
                variant="outline" 
                className="w-full"
              >
                <Download className="h-4 w-4 mr-2" />
                Export as CSV ({submissions.length} submissions)
              </Button>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Status Messages */}
      {error && (
        <div className="mt-6 flex items-center gap-3 text-red-700 text-sm bg-red-50 border-2 border-red-200 rounded-lg p-4">
          <AlertCircle className="h-5 w-5 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {success && (
        <div className="mt-6 flex items-center gap-3 text-green-700 text-sm bg-green-50 border-2 border-green-200 rounded-lg p-4">
          <CheckCircle className="h-5 w-5 flex-shrink-0" />
          <span>{success}</span>
        </div>
      )}

      {/* Submissions Display */}
      {submissions.length > 0 && (
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Form Submissions ({submissions.length})</CardTitle>
            <CardDescription>
              Recent form submissions retrieved from FormSubmit API
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {submissions.map((submission, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">{submission.form_data.name}</span>
                    </div>
                    <span className="text-xs text-gray-500">
                      {new Date(submission.submitted_at.date).toLocaleString()}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm mb-3">
                    <div><strong>Email:</strong> {submission.form_data.email}</div>
                    {submission.form_data.phone && (
                      <div><strong>Phone:</strong> {submission.form_data.phone}</div>
                    )}
                    {submission.form_data.inquiry_type && (
                      <div><strong>Inquiry:</strong> {submission.form_data.inquiry_type}</div>
                    )}
                    {submission.form_data.preferred_contact && (
                      <div><strong>Contact Pref:</strong> {submission.form_data.preferred_contact}</div>
                    )}
                  </div>
                  
                  <div className="text-sm">
                    <strong>Message:</strong>
                    <div className="mt-1 p-2 bg-gray-50 rounded border text-gray-700">
                      {submission.form_data.message}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
} 