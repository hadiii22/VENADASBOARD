import React, { useState } from 'react';

interface SignupProps {
    onSignupSuccess: () => void;
    switchToLogin: () => void;
}

const Signup: React.FC<SignupProps> = ({ onSignupSuccess, switchToLogin }) => {
    const [fullName, setFullName] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (password !== confirmPassword) {
            setError('Kata sandi tidak cocok.');
            return;
        }
        if (password.length < 8) {
            setError('Kata sandi harus minimal 8 karakter.');
            return;
        }

        setIsLoading(true);

        // Simulate API call for signup
        setTimeout(() => {
            // In a real app, you would check if the email is already in use.
            // For this simulation, we'll assume it's always successful.
            console.log('Signup successful for:', { fullName, companyName, email });
            onSignupSuccess();
            setIsLoading(false);
        }, 1000);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-slate-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-lg">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-slate-800">Vena Pictures</h1>
                    <p className="mt-2 text-sm text-slate-500">Buat akun baru untuk memulai.</p>
                </div>

                <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
                    {error && (
                        <div className="p-3 bg-red-100 border border-red-200 text-red-700 rounded-lg text-sm">
                            {error}
                        </div>
                    )}
                    <div className="rounded-md shadow-sm space-y-3">
                        <div>
                            <label htmlFor="full-name" className="sr-only">Nama Lengkap</label>
                            <input
                                id="full-name"
                                name="fullName"
                                type="text"
                                required
                                className="input-field"
                                placeholder="Nama Lengkap"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                            />
                        </div>
                         <div>
                            <label htmlFor="company-name" className="sr-only">Nama Perusahaan</label>
                            <input
                                id="company-name"
                                name="companyName"
                                type="text"
                                required
                                className="input-field"
                                placeholder="Nama Perusahaan"
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="email-address-signup" className="sr-only">Email</label>
                            <input
                                id="email-address-signup"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="input-field"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password-signup" className="sr-only">Kata Sandi</label>
                            <input
                                id="password-signup"
                                name="password"
                                type="password"
                                required
                                className="input-field"
                                placeholder="Kata Sandi (min. 8 karakter)"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                         <div>
                            <label htmlFor="confirm-password" className="sr-only">Konfirmasi Kata Sandi</label>
                            <input
                                id="confirm-password"
                                name="confirmPassword"
                                type="password"
                                required
                                className="input-field"
                                placeholder="Konfirmasi Kata Sandi"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-slate-800 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 disabled:bg-slate-400"
                        >
                            {isLoading ? 'Membuat akun...' : 'Buat Akun'}
                        </button>
                    </div>
                     <p className="text-center text-sm text-slate-500">
                        Sudah punya akun?{' '}
                        <button type="button" onClick={switchToLogin} className="font-medium text-slate-600 hover:text-slate-500 underline">
                            Masuk di sini
                        </button>
                    </p>
                </form>
            </div>
             <style>{`
                .input-field {
                    appearance: none;
                    position: relative;
                    display: block;
                    width: 100%;
                    padding: 0.5rem 0.75rem;
                    border: 1px solid #cbd5e1; /* slate-300 */
                    border-radius: 0.375rem; /* rounded-md */
                    placeholder-color: #64748b; /* slate-500 */
                    color: #0f172a; /* slate-900 */
                }
                .input-field:focus {
                    outline: none;
                    border-color: #475569; /* slate-600 */
                    z-index: 10;
                    box-shadow: 0 0 0 1px #475569;
                }
            `}</style>
        </div>
    );
};

export default Signup;
