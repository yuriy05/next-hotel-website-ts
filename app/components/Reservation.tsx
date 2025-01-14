import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";

function Reservation(): JSX.Element {
  return (
    <div className="grid grid-cols-2 min-h-[400px] border border-primary-800">
      <DateSelector />
      <ReservationForm />
    </div>
  );
}

export default Reservation;
