import React from 'react';
import { AlertTriangle } from 'lucide-react';
import './ErrorBoundary.css';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.error("Uncaught error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="error-boundary-container">
                    <div className="error-card">
                        <div className="error-icon"><AlertTriangle size={48} /></div>
                        <h2>Oops! Something went wrong.</h2>
                        <p>We're sorry, but an unexpected error occurred.</p>
                        <div className="error-actions">
                            <button
                                className="btn btn-primary"
                                onClick={() => window.location.href = '/dashboard'}
                            >
                                Return to Dashboard
                            </button>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
