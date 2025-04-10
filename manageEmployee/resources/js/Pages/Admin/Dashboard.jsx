import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Tableau de bord Administrateur</h2>}
        >
            <Head title="Tableau de bord Administrateur" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="bg-blue-100 p-6 rounded-lg mb-6">
                                <h3 className="text-2xl font-bold text-blue-800">Bienvenue, {auth.user.name}!</h3>
                                <p className="text-blue-600 mt-2">Vous êtes connecté en tant qu'administrateur.</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {/* Statistiques des employés */}
                                <div className="bg-blue-100 p-4 rounded-lg">
                                    <h4 className="font-semibold text-blue-800">Total des employés</h4>
                                    <p className="text-2xl font-bold text-blue-600">0</p>
                                </div>

                                {/* Salaire mensuel total */}
                                <div className="bg-green-100 p-4 rounded-lg">
                                    <h4 className="font-semibold text-green-800">Salaire mensuel total</h4>
                                    <p className="text-2xl font-bold text-green-600">0 €</p>
                                </div>

                                {/* Demandes en attente */}
                                <div className="bg-yellow-100 p-4 rounded-lg">
                                    <h4 className="font-semibold text-yellow-800">Demandes en attente</h4>
                                    <p className="text-2xl font-bold text-yellow-600">0</p>
                                </div>
                            </div>

                            {/* Actions rapides */}
                            <div className="mt-8">
                                <h4 className="font-semibold mb-4">Actions rapides</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                        Ajouter un employé
                                    </button>
                                    <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                                        Voir les demandes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
} 