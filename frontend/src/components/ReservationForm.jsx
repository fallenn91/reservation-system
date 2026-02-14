import React, { useState } from "react";

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log("Reservation created: ", formData);
  };

  return (
    <div className="reservation-card">
      <h2 className="form-title">Reserva tu mesa</h2>
      <form onSubmit={handleSubmit} className="reservation-form">
        <div className="form-group">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Correo electrónico</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Fecha</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Hora</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Número de personas</label>
          <input
            type="number"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            min="1"
            className="form-input"
            required
          />
        </div>

        <div className="form-actions">
          <button
            type="submit"
            className="submit-button"
          >
            Reservar
          </button>
        </div>
      </form>
    </div>
  );
}
