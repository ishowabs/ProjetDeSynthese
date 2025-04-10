import React from 'react';
import { Head, useForm } from '@inertiajs/react';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('password.email'));
    };

    return (
        <>
            <Head title="Forgot Password" />
            <div className="min-h-screen bg-[#f6f5f7] flex items-center justify-center font-['Poppins']">
                <div className="container">
                    <div className="form-container sign-in active">
                        <form onSubmit={submit}>
                            <h1>Forgot Password</h1>
                            
                            {status && (
                                <div className="mb-4 font-medium text-sm text-green-600">
                                    {status}
                                </div>
                            )}

                            <div className="relative my-4 w-full">
                                <input 
                                    type="email" 
                                    placeholder="Email" 
                                    value={data.email}
                                    onChange={e => setData('email', e.target.value)}
                                />
                                {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
                            </div>

                            <button 
                                type="submit"
                                disabled={processing}
                            >
                                {processing ? 'Sending...' : 'Send Reset Link'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
} 