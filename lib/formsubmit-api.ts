/**
 * FormSubmit API utilities
 * Handles API key generation and submission retrieval
 * Based on FormSubmit documentation: https://formsubmit.co/documentation
 */

// You can use either the email or the privacy string from FormSubmit activation email
const FORMSUBMIT_EMAIL = "info@nomineejobs.co.uk"
const FORMSUBMIT_PRIVACY_STRING = "fc7d1651993738107212b6426636a1b4" // From FormSubmit activation email

// Use privacy string by default, fallback to email if needed
const FORMSUBMIT_ENDPOINT = FORMSUBMIT_PRIVACY_STRING || FORMSUBMIT_EMAIL

export interface FormSubmitApiResponse {
  success: boolean
  message: string
}

export interface FormSubmitSubmission {
  form_url: string
  form_data: {
    name: string
    email: string
    message: string
    [key: string]: any
  }
  submitted_at: {
    date: string
    timezone_type: number
    timezone: string
  }
}

export interface FormSubmitSubmissionsResponse {
  success: boolean
  submissions: FormSubmitSubmission[]
}

/**
 * Generate FormSubmit API key
 * The API key will be sent to the provided email address
 */
export async function generateFormSubmitApiKey(): Promise<FormSubmitApiResponse> {
  try {
    const response = await fetch(`https://formsubmit.co/api/get-apikey/${FORMSUBMIT_EMAIL}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result = await response.json()
    return result
  } catch (error) {
    console.error('Error generating FormSubmit API key:', error)
    throw error
  }
}

/**
 * Retrieve all form submissions using API key
 * Limited to 5 API calls per day per FormSubmit documentation
 */
export async function getFormSubmissions(apiKey: string): Promise<FormSubmitSubmissionsResponse> {
  try {
    const response = await fetch(`https://formsubmit.co/api/get-submissions/${apiKey}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result = await response.json()
    return result
  } catch (error) {
    console.error('Error retrieving FormSubmit submissions:', error)
    throw error
  }
}

/**
 * Submit form data using FormSubmit AJAX API
 * This is more reliable than standard form submission
 */
export async function submitFormToFormSubmit(formData: {
  name: string
  email: string
  message: string
  phone?: string
  inquiry_type?: string
  preferred_contact?: string
  [key: string]: any
}): Promise<FormSubmitApiResponse> {
  try {
    const ajaxData = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      // Optional fields
      ...(formData.phone && { phone: formData.phone }),
      ...(formData.inquiry_type && { inquiry_type: formData.inquiry_type }),
      ...(formData.preferred_contact && { preferred_contact: formData.preferred_contact }),
      
      // FormSubmit configuration
      _subject: `New Info Request from ${formData.name} - NomineeJobs`,
      _template: 'table',
      _captcha: 'false',
      _autoresponse: 'Thank you for your inquiry! We have received your message and will respond within 24 hours during business days.',
      _honey: '', // Honeypot spam protection
      _replyto: formData.email, // Enable reply-to functionality
    }

    const response = await fetch(`https://formsubmit.co/ajax/${FORMSUBMIT_ENDPOINT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(ajaxData),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result = await response.json()
    return result
  } catch (error) {
    console.error('Error submitting form to FormSubmit:', error)
    throw error
  }
}

/**
 * Get FormSubmit configuration object for form setup
 */
export function getFormSubmitConfig() {
  return {
    email: FORMSUBMIT_EMAIL,
    endpoint: FORMSUBMIT_ENDPOINT,
    ajax_endpoint: `https://formsubmit.co/ajax/${FORMSUBMIT_ENDPOINT}`,
    standard_endpoint: `https://formsubmit.co/${FORMSUBMIT_ENDPOINT}`,
    features: {
      captcha_disabled: true,
      template: 'table',
      autoresponse: true,
      honeypot: true,
      replyto: true,
    },
  }
}

export default {
  generateFormSubmitApiKey,
  getFormSubmissions,
  submitFormToFormSubmit,
  getFormSubmitConfig,
} 