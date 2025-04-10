import React from 'react';
import { useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        role: 'employer',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('register'));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Inscription
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Nom complet"
                                value={data.name}
                                onChange={e => setData('name', e.target.value)}
                            />
                            {errors.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Adresse email"
                                value={data.email}
                                onChange={e => setData('email', e.target.value)}
                            />
                            {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
                        </div>
                        <div>
                            <label htmlFor="role" className="block text-sm font-medium text-gray-700">Rôle</label>
                            <select
                                id="role"
                                name="role"
                                required
                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                value={data.role}
                                onChange={e => setData('role', e.target.value)}
                            >
                                <option value="employer">Employé</option>
                                <option value="admin">Administrateur</option>
                            </select>
                            {errors.role && <div className="text-red-500 text-sm mt-1">{errors.role}</div>}
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mot de passe</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Mot de passe"
                                value={data.password}
                                onChange={e => setData('password', e.target.value)}
                            />
                            {errors.password && <div className="text-red-500 text-sm mt-1">{errors.password}</div>}
                        </div>
                        <div>
                            <label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-700">Confirmer le mot de passe</label>
                            <input
                                id="password_confirmation"
                                name="password_confirmation"
                                type="password"
                                required
                                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Confirmer le mot de passe"
                                value={data.password_confirmation}
                                onChange={e => setData('password_confirmation', e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={processing}
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            {processing ? 'Inscription...' : "S'inscrire"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
} 