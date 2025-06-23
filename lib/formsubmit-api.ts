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
 * Supports both contact forms and application forms
 */
export async function submitFormToFormSubmit(formData: {
  name: string
  email: string
  message: string
  phone?: string
  inquiry_type?: string
  preferred_contact?: string
  application_type?: string
  [key: string]: any
}): Promise<FormSubmitApiResponse> {
  try {
    // Determine if this is an application or contact form
    const isApplication = formData.application_type === 'nominee_director_application'
    
    const ajaxData = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      
      // Include all additional fields
      ...Object.fromEntries(
        Object.entries(formData)
          .filter(([key]) => !['name', 'email', 'message'].includes(key))
          .filter(([, value]) => value !== undefined && value !== null && value !== '')
      ),
      
      // FormSubmit configuration - different for applications vs contact forms
      _subject: isApplication 
        ? `🎯 New Nominee Director Application - ${formData.name}`
        : `📧 New Info Request from ${formData.name} - NomineeJobs`,
      _template: 'table',
      _captcha: 'false',
      _autoresponse: isApplication
        ? `Thank you for your application, ${formData.name}! 

We have successfully received your nominee director application and will begin processing it immediately.

What happens next:
✅ Initial review within 24 hours
✅ Document verification within 48 hours  
✅ Background checks within 3-5 business days
✅ Welcome package and first opportunities within 1 week

You will receive email updates throughout the process at ${formData.email}.

If you have any questions, please don't hesitate to contact us at applications@nomineejobs.co.uk.

Best regards,
The NomineeJobs Team`
        : `Thank you for your inquiry, ${formData.name}! 

We have received your message and will respond within 24 hours during business days.

Your inquiry details:
📧 Contact Email: ${formData.email}
📞 Phone: ${formData.phone || 'Not provided'}
📋 Inquiry Type: ${formData.inquiry_type || 'General'}
📞 Preferred Contact: ${formData.preferred_contact || 'Email'}

For urgent matters, you can also reach us directly at info@nomineejobs.co.uk.

Best regards,
The NomineeJobs Team`,
      
      _honey: '', // Honeypot spam protection
      _replyto: formData.email, // Enable reply-to functionality
    }

    console.log('📤 Sending to FormSubmit:', { 
      endpoint: FORMSUBMIT_ENDPOINT, 
      type: isApplication ? 'Application' : 'Contact Form',
      fields: Object.keys(ajaxData).length 
    })

    const response = await fetch(`https://formsubmit.co/ajax/${FORMSUBMIT_ENDPOINT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(ajaxData),
    })

    if (!response.ok) {
      throw new Error(`FormSubmit API responded with status ${response.status}`)
    }

    const result = await response.json()
    
    // Enhanced success logging
    if (result.success) {
      console.log('✅ FormSubmit success:', {
        type: isApplication ? 'Application' : 'Contact Form',
        recipient: formData.email,
        timestamp: new Date().toISOString()
      })
    }
    
    return result
  } catch (error) {
    console.error('❌ FormSubmit error:', error)
    
    // Enhanced error handling
    if (error instanceof Error) {
      if (error.message.includes('NetworkError') || error.message.includes('Failed to fetch')) {
        throw new Error('Network connection failed. Please check your internet and try again.')
      } else if (error.message.includes('timeout')) {
        throw new Error('Request timed out. Please try again.')
      } else if (error.message.includes('status 429')) {
        throw new Error('Too many requests. Please wait a moment and try again.')
      } else if (error.message.includes('status 4')) {
        throw new Error('Invalid submission data. Please check your information and try again.')
      } else if (error.message.includes('status 5')) {
        throw new Error('Server error. Our team has been notified. Please try again in a few minutes.')
      }
    }
    
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