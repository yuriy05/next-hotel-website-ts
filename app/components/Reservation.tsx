import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";

function Reservation(): JSX.Element {
    return (
        <div className="grid grid-cols-2 items-center">
            <DateSelector />
            <ReservationForm />
        </div>
    )
}

export default Reservation;