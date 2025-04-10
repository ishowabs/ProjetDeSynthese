import React, { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ errors, status }) {
    const [isSignUp, setIsSignUp] = useState(false);
    const { data, setData, post, processing, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        role: 'employee',
    });

    const toggleForm = () => {
        setIsSignUp(!isSignUp);
        reset();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (isSignUp) {
            post(route('register'), {
                onSuccess: () => {
                    reset();
                    setIsSignUp(false);
                },
            });
        } else {
            post(route('login'), {
                onSuccess: () => {
                    reset();
                },
            });
        }
    };

    return (
        <>
            <Head title={isSignUp ? "Sign up" : "Sign in"} />
            <div className="min-h-screen bg-[#f6f5f7] flex items-center justify-center font-['Poppins']">
                <div className={`container ${isSignUp ? 'right-panel-active' : ''}`}>
                    {/* Sign Up Form */}
                    <div className={`form-container sign-up ${isSignUp ? 'active' : ''}`}>
                        <form onSubmit={handleSubmit}>
                            <h1>Créer Votre Compte</h1>
                            <div className="relative my-4 w-full">
                                <input 
                                    type="text" 
                                    placeholder="Nom" 
                                    value={data.name}
                                    onChange={e => setData('name', e.target.value)}
                                />
                                {errors.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
                            </div>
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
                                <select
                                    value={data.role}
                                    onChange={e => setData('role', e.target.value)}
                                    className="w-full p-3 rounded-md bg-[#eee] border-none outline-none"
                                >
                                    <option value="employee">Employee</option>
                                    <option value="admin">Admin</option>
                                </select>
                                {errors.role && <div className="text-red-500 text-sm mt-1">{errors.role}</div>}
                            </div>
                            <div className="relative my-4 w-full">
                                <input 
                                    type="password" 
                                    placeholder="Mot de passe" 
                                    value={data.password}
                                    onChange={e => setData('password', e.target.value)}
                                />
                                {errors.password && <div className="text-red-500 text-sm mt-1">{errors.password}</div>}
                            </div>
                            <div className="relative my-4 w-full">
                                <input 
                                    type="password" 
                                    placeholder="Confirmer votre mot de passe" 
                                    value={data.password_confirmation}
                                    onChange={e => setData('password_confirmation', e.target.value)}
                                />
                            </div>
                            <button 
                                type="submit"
                                disabled={processing}
                            >
                                {processing ? 'Connexion...' : 'Se connecter'}
                            </button>
                        </form>
                    </div>

                    {/* Sign In Form */}
                    <div className={`form-container sign-in ${!isSignUp ? 'active' : ''}`}>
                        <form onSubmit={handleSubmit}>
                            <h1>Se Connecter</h1>
                            
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
                            <div className="relative my-4 w-full">
                                <input 
                                    type="password" 
                                    placeholder="Mot de passe" 
                                    value={data.password}
                                    onChange={e => setData('password', e.target.value)}
                                />
                                {errors.password && <div className="text-red-500 text-sm mt-1">{errors.password}</div>}
                            </div>
                            <Link href={route('password.request')} className="text-[14px] text-[#333] my-[15px]">
                                Mot de passe oublié?
                            </Link>
                            <button 
                                type="submit"
                                disabled={processing}
                            >
                                {processing ? 'Connexion...' : 'Se connecter'}
                            </button>
                        </form>
                    </div>

                    {/* Overlay */}
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1>Bienvenue une autre fois!</h1>
                                <p className="text-[14px] leading-[20px] my-[20px] mx-0">
                                    Pour rester connecter avec nous veuillez entrez vos données ici
                                </p>
                                <button 
                                    onClick={toggleForm}
                                    className="ghost"   
                                >
                                    Se connecter
                                </button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1>Salut, Chère Employé!</h1>
                                <p className="text-[14px] leading-[20px] my-[20px] mx-0">
                                    Entre tes données personnel pour nous rejoindre
                                </p>
                                <button 
                                    onClick={toggleForm}
                                    className="ghost"
                                >
                                    S'inscrire
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
} 