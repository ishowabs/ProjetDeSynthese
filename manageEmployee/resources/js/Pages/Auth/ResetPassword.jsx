import React from 'react';
import { Head, useForm } from '@inertiajs/react';

export default function ResetPassword({ token, email }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('password.update'));
    };

    return (
        <>
            <Head title="Reset Password" />
            <div className="min-h-screen bg-[#f6f5f7] flex items-center justify-center font-['Poppins']">
                <div className="container">
                    <div className="form-container sign-in active">
                        <form onSubmit={submit}>
                            <h1>Reset Password</h1>

                            <div className="relative my-4 w-full">
                                <input 
                                    type="email" 
                                    placeholder="Email" 
                                    value={data.email}
                                    onChange={e => setData('email', e.target.value)}
                                />
                                {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
                            </div>

                            <div className="relative my-4 w-full">
                                <input 
                                    type="password" 
                                    placeholder="Password" 
                                    value={data.password}
                                    onChange={e => setData('password', e.target.value)}
                                />
                                {errors.password && <div className="text-red-500 text-sm mt-1">{errors.password}</div>}
                            </div>

                            <div className="relative my-4 w-full">
                                <input 
                                    type="password" 
                                    placeholder="Confirm Password" 
                                    value={data.password_confirmation}
                                    onChange={e => setData('password_confirmation', e.target.value)}
                                />
                            </div>

                            <button 
                                type="submit"
                                disabled={processing}
                            >
                                {processing ? 'Resetting...' : 'Reset Password'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
} 