# EmailJS Setup Guide

This guide will help you connect your contact form to your email address using EmailJS.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (or your preferred email provider)
4. Connect your Gmail account (akshayanoop2014@gmail.com)
5. Note down the **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Message from {{from_name}}

Hello Akshay,

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}
Message: {{message}}

Best regards,
Your Portfolio Website
```

4. Save the template and note down the **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your Public Key

1. Go to "Account" → "API Keys"
2. Copy your **Public Key** (e.g., `user_def456`)

## Step 5: Update Configuration

1. Open `src/config/emailjs.ts`
2. Replace the placeholder values with your actual IDs:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_abc123', // Your actual service ID
  TEMPLATE_ID: 'template_xyz789', // Your actual template ID
  PUBLIC_KEY: 'user_def456', // Your actual public key
  TO_EMAIL: 'akshayanoop2014@gmail.com',
};
```

## Step 6: Test Your Contact Form

1. Start your development server: `npm run dev`
2. Go to your contact form
3. Fill out the form and submit
4. Check your email (akshayanoop2014@gmail.com) for the message

## Free Plan Limits

- EmailJS free plan allows 200 emails per month
- Perfect for a portfolio website

## Troubleshooting

- Make sure all IDs are correct
- Check browser console for any errors
- Verify your email service is properly connected
- Ensure your template variables match the code

## Security Note

- The public key is safe to use in frontend code
- EmailJS handles the security of your email credentials
- Never expose your private keys or service credentials 