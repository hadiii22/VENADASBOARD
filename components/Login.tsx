import React, { useState } from 'react';

interface LoginProps {
    onLoginSuccess: () => void;
    switchToSignup: () => void;
    switchToSuggestion: () => void;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess, switchToSignup, switchToSuggestion }) => {
    const [email, setEmail] = useState('admin@venapictures.com');
    const [password, setPassword] = useState('password123');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            if (email === 'admin@venapictures.com' && password === 'password123') {
                onLoginSuccess();
            } else {
                setError('Email atau kata sandi salah.');
            }
            setIsLoading(false);
        }, 1000);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-slate-100">
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-2xl shadow-lg">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-slate-800">Vena Pictures</h1>
                    <p className="mt-2 text-sm text-slate-500">Selamat datang kembali! Silakan masuk ke akun Anda.</p>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    {error && (
                        <div className="p-3 bg-red-100 border border-red-200 text-red-700 rounded-lg text-sm">
                            {error}
                        </div>
                    )}
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">Email</label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-slate-300 placeholder-slate-500 text-slate-900 rounded-t-md focus:outline-none focus:ring-slate-500 focus:border-slate-500 focus:z-10 sm:text-sm"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password-for-login" className="sr-only">Kata Sandi</label>
                            <input
                                id="password-for-login"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-slate-300 placeholder-slate-500 text-slate-900 rounded-b-md focus:outline-none focus:ring-slate-500 focus:border-slate-500 focus:z-10 sm:text-sm"
                                placeholder="Kata Sandi"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-end">
                        <div className="text-sm">
                            <a href="#" className="font-medium text-slate-600 hover:text-slate-500">
                                Lupa kata sandi?
                            </a>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-slate-800 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 disabled:bg-slate-400"
                        >
                            {isLoading ? 'Memproses...' : 'Masuk'}
                        </button>
                    </div>
                     <p className="text-center text-sm text-slate-500">
                        Belum punya akun?{' '}
                        <button type="button" onClick={switchToSignup} className="font-medium text-slate-600 hover:text-slate-500 underline">
                            Daftar di sini
                        </button>
                    </p>
                </form>
                <div className="border-t pt-6">
                     <p className="text-center text-sm text-slate-500">
                        Punya saran untuk kami?{' '}
                        <button type="button" onClick={switchToSuggestion} className="font-medium text-slate-600 hover:text-slate-500 underline">
                            Bagikan di sini
                        </button>
                    </p>
                </div>
                 <p className="text-center text-xs text-slate-500">Gunakan `admin@venapictures.com` & `password123` untuk masuk.</p>
            </div>
        </div>
    );
};

export default Login;