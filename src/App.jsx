import { useState } from 'react'
import { supabase } from './supabaseClient'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)
  const [mode, setMode] = useState('login') 

  const handleAuth = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      if (mode === 'login') {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        })
        if (error) throw error
        setSuccess(true)
        console.log('Login successful:', data)
      } else {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
        })
        if (error) throw error
        setSuccess(true)
        console.log('Signup successful:', data)
      }
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="success-container">
        <div className="success-icon">✓</div>
        <h2>Welcome!</h2>
        <p>You have successfully {mode === 'login' ? 'logged in' : 'signed up'}.</p>
      </div>
    )
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>{mode === 'login' ? 'Login' : 'Sign Up'}</h1>
        <p className="subtitle">Enter your credentials to continue</p>
        
        <form onSubmit={handleAuth}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              minLength={6}
            />
          </div>

          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          <button type="submit" disabled={loading} className="login-button">
            {loading ? 'Loading...' : mode === 'login' ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <div className="toggle-mode">
          {mode === 'login' ? (
            <p>
              Don't have an account?{' '}
              <button onClick={() => setMode('signup')} className="link-button">
                Sign Up
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <button onClick={() => setMode('login')} className="link-button">
                Login
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
