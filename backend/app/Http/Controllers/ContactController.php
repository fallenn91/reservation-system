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

        $nombre = $request->input('name');
        $email = $request->input('email');
        $numTel = $request->input('phone');
        $mensaje = $request->input('msg');

        Mail::to('fa11enn9119@gmail.com')->send(new SentForm($nombre, $email, $numTel, $mensaje));
        
        return response()->json([
            'message' => 'Datos enviados correctamente.', 200
        ]);
    }
}
