<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function sendForm(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'phone' => 'required|string',
            'msg' => 'nullable|string'
        ]);

        try {
            Mail::raw("Nombre: {$validated['name']}\nEmail: {$validated['email']}\nTeléfono: {$validated['phone']}\nMensaje: {$validated['msg']}", function ($message) use ($validated) {
                $message->to(env('MAIL_FROM_ADDRESS'))
                        ->subject('Nuevo mensaje de contacto')
                        ->replyTo($validated['email'], $validated['name']);
            });
            return response()->json(['message' => 'Datos enviados correctamente.'], 200);
        } catch (\Exception $e) {
            \Log::error('Error al enviar el correo: '.$e->getMessage());
            return response()->json([
                'message' => 'Error al enviar el correo',
                'error' => $e->getMessage()
            ], 500);
        }        
    }
}
