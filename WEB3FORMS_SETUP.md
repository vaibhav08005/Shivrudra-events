# Web3Forms Setup Instructions

## 🚀 Super Simple Setup (2 minutes!)

Web3Forms is a free email service that's much simpler than EmailJS - you just need ONE access key!

### Step 1: Get Your Access Key

1. Go to: **https://web3forms.com/**
2. Scroll down to "Get Started Free"
3. Enter your email: **vsontakke100@gmail.com**
4. Click "Create Access Key"
5. Check your email inbox for the access key
6. **Copy the Access Key** (looks like: `abcd1234-5678-90ef-ghij-klmnopqrstuv`)

### Step 2: Update the Code

Open `components/Contact.tsx` and find this line (around line 22):

```typescript
const accessKey = 'YOUR_WEB3FORMS_ACCESS_KEY';
```

Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual access key:

```typescript
const accessKey = 'abcd1234-5678-90ef-ghij-klmnopqrstuv';
```

### Step 3: Test!

1. Save the file
2. Go to your website contact form
3. Fill it out and submit
4. Check **vsontakke100@gmail.com** for the email!

## ✅ That's it!

The form will now automatically send emails to `vsontakke100@gmail.com` with:
- Customer name
- Customer email
- Phone number
- Service type
- Preferred date
- Message

## 📊 Free Tier Benefits

- ✅ **250 emails/month FREE**
- ✅ No credit card required
- ✅ No configuration needed
- ✅ Works instantly
- ✅ Email notifications
- ✅ Spam protection included

## 🔒 Security

- Access key can be public (safe to commit to GitHub)
- Web3Forms handles all spam protection
- Emails go directly to your inbox

## 🐛 Troubleshooting

**Not receiving emails?**
- Check spam folder
- Verify access key is correct
- Make sure you confirmed your email with Web3Forms

**Getting errors?**
- Check browser console for details
- Verify internet connection
- Make sure access key doesn't have extra spaces

## 📧 Email Format

You'll receive emails like this:

```
Subject: New Inquiry from John Doe - Shivrudra Events Studio

From: Shivrudra Events Studio Contact Form

Name: John Doe
Email: john@example.com
Phone: +91 12345 67890
Service: Wedding Photography
Date: 2024-06-15

Message:
I'm interested in booking a wedding photography session...
```

---

**Need help?** Visit https://web3forms.com/docs or contact their support!
