<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\NewPasswordController;
use Inertia\Inertia;

// Route racine
Route::get('/', function () {
    return redirect()->route('login');
});

// Routes d'authentification
Route::middleware('guest')->group(function () {
    Route::get('login', function () {
        return Inertia::render('Auth/Login');
    })->name('login');
    Route::post('login', [AuthenticatedSessionController::class, 'store']);
    Route::get('register', [RegisteredUserController::class, 'create'])->name('register');
    Route::post('register', [RegisteredUserController::class, 'store']);
    
    // Password Reset Routes
    Route::get('forgot-password', [PasswordResetLinkController::class, 'create'])
        ->name('password.request');
    Route::post('forgot-password', [PasswordResetLinkController::class, 'store'])
        ->name('password.email');
    Route::get('reset-password/{token}', [NewPasswordController::class, 'create'])
        ->name('password.reset');
    Route::post('reset-password', [NewPasswordController::class, 'store'])
        ->name('password.update');
});

// Routes protégées
Route::middleware('auth')->group(function () {
    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])->name('logout');
    
    // Routes Admin
    Route::middleware(\App\Http\Middleware\CheckAdminRole::class)->group(function () {
        Route::get('/admin/dashboard', function () {
            return Inertia::render('Admin/Dashboard');
        })->name('admin.dashboard');
    });
    
    // Routes Employee
    Route::middleware(\App\Http\Middleware\CheckEmployeeRole::class)->group(function () {
        Route::get('/employee/dashboard', function () {
            return Inertia::render('Employee/Dashboard');
        })->name('employee.dashboard');
    });
});
