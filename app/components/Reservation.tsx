import { getBookedDatesByCabinId, getSettings } from "../lib/data-service";
import { Cabin } from "../types/Cabin";
import DateSelector from "./DateSelector";
import LoginMessage from "./LoginMessage";
import ReservationForm from "./ReservationForm";
import { auth } from "@/app/lib/auth";

async function Reservation({ cabin }: { cabin: Cabin }): Promise<JSX.Element> {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(String(cabin.id)),
  ]);

  const session = await auth();

  return (
    <div className="grid grid-cols-2 min-h-[400px] border border-primary-800">
      <DateSelector
        settings={settings}
        bookedDates={bookedDates}
        cabin={cabin}
      />
      {session?.user ? (
        <ReservationForm cabin={cabin} user={session.user} />
      ) : (
        <LoginMessage />
      )}
    </div>
  );
}

export default Reservation;
