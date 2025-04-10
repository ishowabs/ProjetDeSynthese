import React from 'react';
import { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';

export default function AuthenticatedLayout({ children }) {
    const { auth } = usePage().props;
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="flex-shrink-0 flex items-center">
                                <Link href="/">
                                    <span className="text-xl font-bold text-indigo-600">ManageEmployee</span>
                                </Link>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                {auth.user.role === 'admin' ? (
                                    <>
                                        <Link
                                            href={route('admin.dashboard')}
                                            className="inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out"
                                        >
                                            Dashboard Admin
                                        </Link>
                                    </>
                                ) : (
                                    <>
                                        <Link
                                            href={route('employee.dashboard')}
                                            className="inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out"
                                        >
                                            Dashboard Employé
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="hidden sm:flex sm:items-center sm:ml-6">
                            <div className="ml-3 relative">
                                <div className="flex items-center space-x-4">
                                    <span className="text-gray-800">{auth.user.name}</span>
                                    <Link
                                        href={route('logout')}
                                        method="post"
                                        as="button"
                                        className="text-sm text-gray-500 hover:text-gray-700"
                                    >
                                        Déconnexion
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="-mr-2 flex items-center sm:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                            >
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        className={!isOpen ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={isOpen ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
                    <div className="pt-2 pb-3 space-y-1">
                        {auth.user.role === 'admin' ? (
                            <Link
                                href={route('admin.dashboard')}
                                className="block pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out"
                            >
                                Dashboard Admin
                            </Link>
                        ) : (
                            <Link
                                href={route('employee.dashboard')}
                                className="block pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out"
                            >
                                Dashboard Employé
                            </Link>
                        )}
                    </div>

                    <div className="pt-4 pb-1 border-t border-gray-200">
                        <div className="px-4">
                            <div className="font-medium text-base text-gray-800">{auth.user.name}</div>
                            <div className="font-medium text-sm text-gray-500">{auth.user.email}</div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <Link
                                href={route('logout')}
                                method="post"
                                as="button"
                                className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                            >
                                Déconnexion
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            <main>{children}</main>
        </div>
    );
} 