<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Log;

class CheckEmployeeRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        Log::info('CheckEmployeeRole middleware called');
        
        if (!$request->user()) {
            Log::info('User not authenticated');
            if ($request->expectsJson()) {
                return response()->json(['message' => 'Unauthorized. User not authenticated.'], 403);
            }
            return redirect()->route('login');
        }
        
        $userRole = $request->user()->role;
        Log::info('User role: ' . $userRole . ', Required role: employee');
        
        if ($userRole !== 'employee') {
            Log::info('Role mismatch');
            if ($request->expectsJson()) {
                return response()->json(['message' => 'Unauthorized. Role mismatch.'], 403);
            }
            return redirect()->route('login');
        }

        return $next($request);
    }
} 