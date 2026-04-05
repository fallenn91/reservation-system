<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

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
        return response()->json([
            'success' => true,
            'message' => 'Enviado correctamente',
        ]);
    }
}
