# AI Mobile Login - Replit Project

## Overview
This is a mobile-responsive login/signup screen with Supabase authentication. Built with React + Vite, it provides a beautiful UI for user authentication.

## Project Architecture

### Frontend Stack
- **Framework**: React 18 with Vite
- **Authentication**: Supabase Auth (@supabase/supabase-js)
- **Styling**: Custom CSS with responsive design
- **Port**: 5000 (configured for Replit proxy)

### File Structure
```
├── src/
│   ├── App.jsx              # Main login component
│   ├── App.css              # Login screen styles
│   ├── supabaseClient.js    # Supabase client configuration
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles
├── index.html               # HTML template
├── vite.config.js           # Vite config (port 5000, allowedHosts)
└── package.json             # Dependencies
```

## Features Implemented
- Email/Password login
- Email/Password signup
- Form validation
- Error handling and display
- Success screen after authentication
- Toggle between login/signup modes
- Mobile-responsive design

## Environment Variables
Stored securely in Replit Secrets:
- `VITE_SUPABASE_URL`: Supabase project URL
- `VITE_SUPABASE_ANON_KEY`: Supabase anonymous key

## Workflow Configuration
- **Command**: `npm run dev`
- **Port**: 5000
- **Type**: Web preview (webview)
- **Host**: 0.0.0.0 with allowedHosts enabled for Replit proxy

## Deployment
- **Type**: Autoscale (stateless web app)
- **Build**: `npm run build`
- **Run**: `npx vite preview --host 0.0.0.0 --port 5000`

## GitHub Integration
Repository: https://github.com/suadpllana/ai-mobile-suadpllana

## Recent Changes (October 16, 2025)
- Initial project setup from GitHub import
- Created React + Vite application structure
- Implemented Supabase authentication integration
- Added mobile-responsive login/signup UI
- Configured secure environment variables
- Set up development workflow and deployment config

## Notes
- Originally requested as Flutter app, but Flutter is not supported on Replit
- Implemented as mobile-responsive React web app instead (same user experience)
- All authentication is handled server-side by Supabase
- UI optimized for mobile viewports with responsive breakpoints
