import { useState } from 'react';
import { useNavigate } from "react-router";
import { useAuth } from "../../contexts/AuthContext";
import { Sparkles, Mail, Lock, ShieldCheck, Eye, EyeOff } from 'lucide-react';
import './Login.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [showMFA, setShowMFA] = useState(false);
    const [mfaCode, setMfaCode] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const userProfile = await login(email, password);

            // Enterprise Role-Based Routing Logic
            switch (userProfile.role) {
                case 'super_admin':
                case 'executive':
                    navigate('/'); // Global Command Center
                    break;
                case 'hr':
                    navigate('/hr-ops'); // HR Operations Portal
                    break;
                case 'recruiter':
                    navigate('/recruitment'); // Talent Acquisition Portal
                    break;
                case 'payroll_officer':
                    navigate('/payroll'); // Payroll & Compliance Portal
                    break;
                case 'employee':
                case 'manager':
                default:
                    navigate('/employees'); // Default Self-Service / Employee Directory
                    break;
            }
        } catch (err) {
            setError('Invalid credentials. Please verify your email and password.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-page">
            {/* Background effects */}
            <div className="login-bg">
                <div className="login-bg-orb orb-1" />
                <div className="login-bg-orb orb-2" />
                <div className="login-bg-orb orb-3" />
                <div className="login-bg-grid" />
            </div>

            <div className="login-container">
                {/* Left: Branding */}
                <div className="login-branding">
                    <div className="login-brand-content">
                        <div className="login-logo">
                            <div className="login-logo-icon">
                                <Sparkles size={28} />
                            </div>
                            <div>
                                <h1>WorkSphere</h1>
                                <span className="login-logo-badge">AI</span>
                            </div>
                        </div>
                        <p className="login-brand-tagline">
                            AI-Powered Enterprise Workforce Operations Platform
                        </p>
                        <div className="login-features">
                            <div className="login-feature">
                                <div className="login-feature-icon">🧠</div>
                                <div>
                                    <h4>Predictive Intelligence</h4>
                                    <p>Forecast attrition, engagement & workforce trends</p>
                                </div>
                            </div>
                            <div className="login-feature">
                                <div className="login-feature-icon">⚡</div>
                                <div>
                                    <h4>Automated Workflows</h4>
                                    <p>Streamline payroll, hiring & performance reviews</p>
                                </div>
                            </div>
                            <div className="login-feature">
                                <div className="login-feature-icon">🛡️</div>
                                <div>
                                    <h4>Enterprise Security</h4>
                                    <p>RBAC, MFA, audit logging & data encryption</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Login Form */}
                <div className="login-form-section">
                    <div className="login-card">
                        <div className="login-card-header">
                            <h2>Welcome back</h2>
                            <p>Sign in to your WorkSphere account</p>
                        </div>

                        {error && <div className="login-error">{error}</div>}

                        {!showMFA ? (
                            <form onSubmit={handleLogin} className="login-form">
                                <div className="input-group">
                                    <label>Email</label>
                                    <div className="login-input-wrap">
                                        <Mail size={16} className="login-input-icon" />
                                        <input
                                            type="email"
                                            className="input"
                                            placeholder="you@company.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            style={{ paddingLeft: '38px' }}
                                        />
                                    </div>
                                </div>

                                <div className="input-group">
                                    <label>Password</label>
                                    <div className="login-input-wrap">
                                        <Lock size={16} className="login-input-icon" />
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            className="input"
                                            placeholder="Enter password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            style={{ paddingLeft: '38px', paddingRight: '38px' }}
                                        />
                                        <button
                                            type="button"
                                            className="login-password-toggle"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                        </button>
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-primary btn-lg w-full" disabled={loading}>
                                    {loading ? <span className="spinner" /> : 'Sign In'}
                                </button>

                                <div className="login-sso">
                                    <span className="login-divider-text">or continue with</span>
                                    <div className="login-sso-buttons">
                                        <button type="button" className="btn btn-secondary login-sso-btn">
                                            <svg viewBox="0 0 24 24" width="18" height="18"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" /><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
                                            Google
                                        </button>
                                        <button type="button" className="btn btn-secondary login-sso-btn">
                                            <svg viewBox="0 0 24 24" width="18" height="18"><path fill="#00A4EF" d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zM24 11.4H12.6V0H24v11.4z" /></svg>
                                            Microsoft
                                        </button>
                                    </div>
                                </div>
                            </form>
                        ) : (
                            <div className="login-mfa">
                                <div className="login-mfa-icon">
                                    <ShieldCheck size={32} />
                                </div>
                                <p>Enter the 6-digit code from your authenticator app</p>
                                <input
                                    type="text"
                                    className="input login-mfa-input"
                                    placeholder="000000"
                                    maxLength={6}
                                    value={mfaCode}
                                    onChange={(e) => setMfaCode(e.target.value.replace(/\D/g, ''))}
                                />
                                <button className="btn btn-primary btn-lg w-full">Verify</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
