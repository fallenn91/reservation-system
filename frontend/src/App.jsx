import { useState, useEffect } from 'react';
import ReservationForm from './components/ReservationForm';
import ReservationList from './components/ReservationList';
import { getReservation } from './services/api';

function App() {
  const [reservations, setReservations] = useState([]);

  const addReservation = (reservation) => {
    setReservations((prev = []) => [...prev, reservation]);
  };

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const res = await getReservation();
        setReservations(res.data.data);
      } catch (error) {
        console.error('Error getting reservations.', error);
      }
    };
    fetchReservations();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 gap-6 p-6">
      <ReservationForm addReservation={addReservation} />
      <ReservationList list={ reservations} />
    </div>
  );
}

export default App;
