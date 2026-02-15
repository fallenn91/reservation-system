import { useState } from 'react';

export default function ReservationList({ list }) {
    const safeList = Array.isArray(list) ? list : [];
    /*
    * @key each reservation is unique in arriving time order
    */
    return (
        <div className="w-full max-w-md mt-6">
            <h2 className="text-lg font-bold mb-2">Reservation List</h2>
            <ul className="space-y-2">
            {safeList.map((res, index) => (
                <li key={index} className='border p-2 rounded shadow-sm bg-white flex justify-between'>
                {res.name} - {res.email} - {res.date} {res.time} - {res.guests} people
                </li>
            ))}
            </ul>
        </div>
    );
};