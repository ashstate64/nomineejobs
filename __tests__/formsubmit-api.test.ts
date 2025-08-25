import { submitFormToFormSubmit } from '@/lib/formsubmit-api'

// Mock fetch
global.fetch = jest.fn()

describe('FormSubmit API', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('submits contact form successfully', async () => {
    const mockResponse = {
      ok: true,
      json: async () => ({ success: true, message: 'Form submitted successfully' }),
    }
    ;(fetch as jest.Mock).mockResolvedValue(mockResponse)

    const formData = {
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Test message',
      phone: '+44 7123 456789',
      inquiry_type: 'general',
      preferred_contact: 'email',
    }

    const result = await submitFormToFormSubmit(formData)

    expect(fetch).toHaveBeenCalledWith(
      'https://formsubmit.co/ajax/fc7d1651993738107212b6426636a1b4',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: expect.stringContaining('"name":"John Doe"'),
      }
    )

    expect(result).toEqual({ success: true, message: 'Form submitted successfully' })
  })

  test('submits application form with correct configuration', async () => {
    const mockResponse = {
      ok: true,
      json: async () => ({ success: true, message: 'Application submitted successfully' }),
    }
    ;(fetch as jest.Mock).mockResolvedValue(mockResponse)

    const formData = {
      name: 'Jane Smith',
      email: 'jane@example.com',
      message: 'Application details',
      application_type: 'nominee_director_application',
    }

    const result = await submitFormToFormSubmit(formData)

    expect(fetch).toHaveBeenCalledWith(
      'https://formsubmit.co/ajax/fc7d1651993738107212b6426636a1b4',
      expect.objectContaining({
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      })
    )

    // Check that the request body contains application-specific subject
    const callArgs = (fetch as jest.Mock).mock.calls[0]
    const requestBody = JSON.parse(callArgs[1].body)
    expect(requestBody._subject).toContain('New Nominee Director Application')
    expect(requestBody._autoresponse).toContain('Thank you for your application')

    expect(result).toEqual({ success: true, message: 'Application submitted successfully' })
  })

  test('handles network errors', async () => {
    ;(fetch as jest.Mock).mockRejectedValue(new Error('NetworkError'))

    const formData = {
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Test message',
    }

    await expect(submitFormToFormSubmit(formData)).rejects.toThrow(
      'Network connection failed. Please check your internet and try again.'
    )
  })

  test('handles server errors', async () => {
    const mockResponse = {
      ok: false,
      status: 500,
    }
    ;(fetch as jest.Mock).mockResolvedValue(mockResponse)

    const formData = {
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Test message',
    }

    await expect(submitFormToFormSubmit(formData)).rejects.toThrow(
      'Server error. Our team has been notified. Please try again in a few minutes.'
    )
  })

  test('handles rate limiting', async () => {
    ;(fetch as jest.Mock).mockRejectedValue(new Error('status 429'))

    const formData = {
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Test message',
    }

    await expect(submitFormToFormSubmit(formData)).rejects.toThrow(
      'Too many requests. Please wait a moment and try again.'
    )
  })

  test('filters out empty values from form data', async () => {
    const mockResponse = {
      ok: true,
      json: async () => ({ success: true, message: 'Form submitted successfully' }),
    }
    ;(fetch as jest.Mock).mockResolvedValue(mockResponse)

    const formData = {
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Test message',
      phone: '', // Empty value should be filtered out
      inquiry_type: null, // Null value should be filtered out
      preferred_contact: undefined, // Undefined value should be filtered out
      valid_field: 'valid_value', // This should be included
    }

    await submitFormToFormSubmit(formData)

    const callArgs = (fetch as jest.Mock).mock.calls[0]
    const requestBody = JSON.parse(callArgs[1].body)
    
    expect(requestBody.phone).toBeUndefined()
    expect(requestBody.inquiry_type).toBeUndefined()
    expect(requestBody.preferred_contact).toBeUndefined()
    expect(requestBody.valid_field).toBe('valid_value')
  })
})
