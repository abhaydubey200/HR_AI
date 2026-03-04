import { createContext, useContext, useState, useEffect } from 'react';
import api from '../api/client';

export interface User {
    id: string;
    email: string;
    name: string;
    role: string;
    role_label: string;
    avatar?: string;
    permissions?: string[];
}

interface AuthContextType {
    user: User | null;
    loading: boolean;
    DEMO_USERS: any[];
    login: (email: string, password: string) => Promise<User>;
    loginAsRole: (role: string) => Promise<User>;
    logout: () => void;
    hasPermission: (permission: string) => boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

// Demo users for role switching - maps to backend USERS
const DEMO_USERS = [
    { email: 'admin@technova.com', role: 'super_admin', label: 'Super Admin', name: 'Alex Morgan', icon: '🛡️' },
    { email: 'james.wilson@technova.com', role: 'hr', label: 'HR Operations', name: 'James Wilson', icon: '👥' },
    { email: 'sarah.chen@technova.com', role: 'manager', label: 'Manager', name: 'Sarah Chen', icon: '📊' },
    { email: 'priya.sharma@technova.com', role: 'employee', label: 'Employee', name: 'Priya Sharma', icon: '👤' },
    { email: 'recruiter@technova.com', role: 'recruiter', label: 'Recruiter', name: 'Tom Andrews', icon: '🔍' },
    { email: 'payroll@technova.com', role: 'payroll_officer', label: 'Payroll Officer', name: 'Maria Garcia', icon: '💰' },
    { email: 'ceo@technova.com', role: 'executive', label: 'Executive', name: 'Richard Hayes', icon: '👔' },
];

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const savedUser = localStorage.getItem('ws_user');
        if (savedUser) {
            try {
                setUser(JSON.parse(savedUser));
            } catch (e) {
                localStorage.removeItem('ws_user');
            }
        }
        setLoading(false);
    }, []);

    const login = async (email: string, password: string) => {
        try {
            const data = await api.post('/auth/login', { email, password });
            api.setToken(data.access_token);
            setUser(data.user);
            localStorage.setItem('ws_user', JSON.stringify(data.user));
            return data.user;
        } catch (error) {
            throw error;
        }
    };

    const loginAsRole = async (role: string) => {
        const demoUser = DEMO_USERS.find(u => u.role === role);
        if (!demoUser) throw new Error('Invalid role');
        return login(demoUser.email, 'demo');
    };

    const logout = () => {
        api.clearToken();
        setUser(null);
    };

    const hasPermission = (permission: string) => {
        return user?.permissions?.includes(permission) ?? false;
    };

    return (
        <AuthContext.Provider value={{ user, login, loginAsRole, logout, hasPermission, loading, DEMO_USERS }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within AuthProvider');
    return context;
}

export default AuthContext;
