<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class SentForm extends Mailable
{
    use Queueable, SerializesModels;

    public $nombre;
    public $email;
    public $numTel;
    public $mensaje;

    /**
     * Create a new message instance.
     */
    public function __construct()
    {
        $this->nombre = $nombre;
        $this->email = $email;
        $this->numTel = $numTel;
        $this->mensaje = $mensaje;
    }

    public function build()
    {
        return $this->subject('Formulario de Contacto');
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Sent Form',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'view.name',
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
