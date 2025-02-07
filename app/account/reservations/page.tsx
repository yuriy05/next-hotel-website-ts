import ReservationCard from "@/app/components/ReservationCard";
import ReservationList from "@/app/components/ReservationList";
import { auth } from "@/app/lib/auth";
import { getBookings } from "@/app/lib/data-service";
import { User } from "@/app/types/User";

export const metadata = {
  title: "Reservations",
};

async function Page(): Promise<JSX.Element> {
  const session = await auth();
  const bookings = await getBookings(session!.user!.guestId);

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Your reservations
      </h2>

      {bookings.length === 0 ? (
        <p className="text-lg">
          You have no reservations yet. Check out our{" "}
          <a className="underline text-accent-500" href="/cabins">
            luxury cabins &rarr;
          </a>
        </p>
      ) : (
        <ReservationList bookings={bookings}/>
      )}
    </div>
  );
}

export default Page;
