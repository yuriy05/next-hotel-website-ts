"use client";

import { differenceInDays } from "date-fns/fp";
import { useReservation } from "../context/ReservationContext";
import { Cabin } from "../types/Cabin";
import { User } from "../types/User";
import { createBooking } from "../lib/actions";
import { format } from "date-fns";
import SubmitButton from "./SubmitButton";

function ReservationForm({
  cabin,
  user,
}: {
  cabin: Cabin;
  user: User;
}): JSX.Element {
  const { range, resetRange } = useReservation();
  const { maxCapacity, regularPrice, discount, id: cabinID } = cabin;

  const startDate = range?.from;
  const endDate = range?.to;
  const numNights = differenceInDays(startDate, endDate);
  const cabinPrice = numNights * (regularPrice - discount);

  const bookingData = {
    startDate,
    endDate,
    numNights,
    cabinPrice,
    cabinID,
  };

  const createBookingWithData = createBooking.bind(null, bookingData);

  return (
    <div className="scale-[1.01] flex flex-col">
      <div className="bg-primary-800 text-primary-300 px-16 py-2 flex justify-between items-center">
        <p>Logged in as</p>

        <div className="flex gap-4 items-center">
          <img
            // Important to display google profile images
            referrerPolicy="no-referrer"
            className="h-8 rounded-full"
            src={user.image}
            alt={`User name: ${user.name}`}
          />
          <p>{user.name}</p>
        </div>
      </div>

      <p className="px-4 py-2">
        {range?.from && range?.to
          ? `${format(String(range?.from), "d EEEE LLLL y")} to ${format(String(range?.to), "d EEEE LLLL y")}`
          : null}
      </p>

      <form
        // action={createBookingWithData}
        action={async (formData) => {
          await createBookingWithData(formData);
          resetRange();
        }}
        className="bg-primary-900 py-5 px-8 sm:py-10 sm:px-16 text-lg flex gap-5 flex-col flex-1"
      >
        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            required
          >
            <option value="" key="">
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observations">
            Anything we should know about your stay?
          </label>
          <textarea
            name="observations"
            id="observations"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            placeholder="Any pets, allergies, special requirements, etc.?"
          />
        </div>

        <div className="flex flex-col justify-end items-center gap-6 lg:flex-row">
          {!startDate || !endDate ? (
            <p className="text-primary-300 text-base">
              Start by selecting dates
            </p>
          ) : (
            <SubmitButton pendingLabel="Reserving...">Reserve</SubmitButton>
          )}
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
