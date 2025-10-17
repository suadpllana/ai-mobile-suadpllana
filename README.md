# AI Mobile Login - Supabase Authentication

A beautiful, mobile-responsive login screen built with React and Supabase authentication.

## Features

- 📱 Mobile-responsive design
- 🔐 Email & Password authentication
- ✨ Beautiful gradient UI
- 🔄 Login/Signup toggle
- ⚡ Built with Vite + React
- 🛡️ Supabase authentication

## Setup

1. **Supabase Credentials**: 
   - The app uses environment variables for Supabase configuration
   - `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` are already configured in Replit Secrets

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run Development Server**:
   ```bash
   npm run dev
   ```
   The app will be available at http://localhost:5000

4. **Build for Production**:
   ```bash
   npm run build
   ```

## How It Works

- Users can **login** with existing credentials or **sign up** to create a new account
- All authentication is handled securely through Supabase
- Error messages are displayed for invalid credentials
- Success screen shows after successful login/signup

## Technologies Used

- React 18
- Vite
- Supabase (Authentication)
- Modern CSS with gradients and responsive design

## Security

- API keys are stored securely in environment variables
- Passwords are handled by Supabase's secure authentication system
- No sensitive data is logged or exposed in the client

## Deployment

This app is configured for deployment on Replit with autoscale. Simply click the "Deploy" button to publish your app.
