# Test Instructions for FarmRakshak

## 🚀 Quick Test Guide

### Current Status: TEST MODE ACTIVE
The application is currently in **TEST MODE** for easy testing without requiring Firebase Phone Authentication setup.

### How to Test:

#### 1. **Open the Application**
- Open `index.html` in your web browser
- You should see the FarmRakshak landing page

#### 2. **Test Signup**
1. Click the **"Sign Up"** button (blue button in top navigation)
2. Fill in the form:
   - **Mobile Number**: Enter any 10-digit number (e.g., `9876543210`)
   - **Farm Type**: Select any option (e.g., "Hen/Poultry")
   - **Farm Size**: Select any option (e.g., "Medium (51-200 animals)")
3. Click **"Sign Up"**
4. You'll see: "Signup successful! Redirecting..."
5. You should be redirected to the dashboard automatically

#### 3. **Test Login**
1. Click the **"Login"** button (green button in top navigation)
2. Enter any 10-digit mobile number (e.g., `9876543210`)
3. Click **"Login"**
4. You'll see: "Login successful! Redirecting..."
5. You should be redirected to the dashboard automatically

#### 4. **Test Dashboard**
- The dashboard should load with your user information
- You can navigate through different sections
- Click **"Logout"** to return to the main page

### Expected Results:
- ✅ Signup works with any 10-digit Indian number
- ✅ Login works with any 10-digit Indian number
- ✅ OTP `123456` is automatically verified (no input needed)
- ✅ User data is saved to Firebase Realtime Database
- ✅ Dashboard loads with user information
- ✅ Logout functionality works

### Phone Number Format:
- **Accepted formats**: `9876543210`, `+919876543210`, `919876543210`
- **System automatically formats** to `+919876543210`

### Troubleshooting:
- If you see errors, check the browser console (F12)
- Make sure you're using a 10-digit Indian phone number
- OTP `123456` is automatically used (no manual entry needed)
- If dashboard doesn't load, check if user data was saved to Firebase

### Next Steps:
- Test all functionality works as expected
- When ready for production, set `testMode = false` in the code
- Configure Firebase Console for real SMS OTP

## 🎯 Test Checklist:
- [ ] Signup with different farm types and sizes
- [ ] Login with different phone numbers
- [ ] Dashboard loads correctly
- [ ] User data appears in Firebase Console
- [ ] Logout works
- [ ] Language switching works (Hindi/English)
- [ ] All modals open and close properly
