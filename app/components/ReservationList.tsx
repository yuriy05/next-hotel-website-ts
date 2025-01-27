"use client";

import { useOptimistic } from "react";

import ReservationCard from "./ReservationCard";
import { deleteReservation } from "../lib/actions";

function ReservationList({ bookings }: { bookings: any }) {
  const [optimisticBookings, optimisticDelete] = useOptimistic(
    bookings,
    (currBookings, bookingId) => {
      return currBookings.filter(
        (booking: Record<string, any>) => booking.id !== bookingId,
      );
    },
  );

  async function handleDelete(bookingId: number) {
    optimisticDelete(bookingId);
    await deleteReservation(bookingId);
  }

  return (
    <ul className="space-y-6">
      {optimisticBookings?.map((booking: Record<string, any>) => (
        <ReservationCard
          onDelete={handleDelete}
          booking={booking}
          key={booking.id}
        />
      ))}
    </ul>
  );
}

export default ReservationList;
