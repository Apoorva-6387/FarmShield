# Firebase Setup Notes

## Important: Firebase Console Configuration Required

To use Firebase Phone Authentication, you need to configure the following in your Firebase Console:

### 1. Enable Phone Authentication
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: `bio-security-94a4d`
3. Go to **Authentication** > **Sign-in method**
4. Enable **Phone** provider
5. Add your domain to authorized domains (for testing, add `localhost`)

### 2. Configure reCAPTCHA
1. In Firebase Console, go to **Authentication** > **Settings**
2. Add your domain to **Authorized domains**
3. For local testing, add: `localhost`, `127.0.0.1`

### 3. Test Phone Numbers (Development)
For testing, you can use test phone numbers:
- Add test phone numbers in Firebase Console under **Authentication** > **Settings** > **Phone numbers for testing**
- Example: `+91 9999999999` with OTP: `123456`

### 4. Production Setup
For production:
1. Configure your actual domain in authorized domains
2. Remove test phone numbers
3. Set up proper reCAPTCHA keys if needed

## How It Works Now

### Test Mode (Currently Active)
The application is currently in **TEST MODE** for easy development and testing:

### Signup Flow (Test Mode):
1. User enters mobile number, farm type, and farm size
2. Clicks "Send OTP" - Simulates OTP sending (no real SMS)
3. User enters the test OTP: **123456**
4. System verifies the test OTP
5. User data is saved to Firebase Realtime Database
6. User is redirected to dashboard

### Login Flow (Test Mode):
1. User enters mobile number
2. Clicks "Send OTP" - Simulates OTP sending (no real SMS)
3. User enters the test OTP: **123456**
4. System verifies the test OTP
5. User is logged in and redirected to dashboard

### Production Mode (When Ready)
To enable real Firebase Phone Authentication:
1. Set `testMode = false` in the JavaScript code
2. Configure Firebase Console as described above
3. Real SMS OTP will be sent to phone numbers

## Testing (Current Test Mode)
- Use any 10-digit Indian phone number (e.g., 9876543210)
- OTP is always **123456** (test mode)
- No real SMS is sent
- All functionality works for development and testing

## Production Testing
- Use real phone numbers for testing
- OTP will be sent via SMS to the provided number
- The OTP is a 6-digit code sent by Firebase
- Set `testMode = false` to enable real authentication

## Error Handling
- Invalid phone numbers are handled
- Network errors are caught and displayed
- OTP verification errors are shown to user
- Loading states are shown during API calls
