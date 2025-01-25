import { deleteReservation } from "../lib/actions";

function DeleteReservationConfrim({
  onCloseModal,
  bookingId,
}: {
  onCloseModal?: () => void;
  bookingId: number;
}): JSX.Element {
  return (
    <div className="flex flex-col space-y-5">
      <h1 className="text-3xl">Delete reservation</h1>
      <p className="text-lg">
        Are you sure you want to permanently delete this reservation?
        <br />
        This action cannot be undone
      </p>
      <div className="flex justify-end gap-5">
        <button
          onClick={onCloseModal}
          className="py-2 px-3 text-green-600 border-green-600 border hover:bg-green-700 hover:text-green-50 transition-all duration-300"
        >
          Cancel
        </button>
        <button
          onClick={() => deleteReservation(bookingId)}
          className="py-2 px-3 text-red-600 border-red-600 border hover:bg-red-700 hover:text-red-50 transition-all duration-300"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default DeleteReservationConfrim;
