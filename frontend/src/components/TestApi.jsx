// frontend/src/components/TestApi.jsx
import { useEffect, useState } from 'react';
import api from '../services/api';

export default function TestApi() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    api.get('/test')  // ruta de prueba que crearemos en Laravel
      .then(res => setMessage(res.data.message))
      .catch(err => console.error(err));
  }, []);

  return <div>{message ? message : 'Hola'}</div>;
}
