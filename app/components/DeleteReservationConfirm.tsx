import { TransitionStartFunction, useTransition } from "react";
import SpinnerMini from "./SpinnerMini";

function DeleteReservationConfrim({
  onCloseModal,
  bookingId,
  startTransition,
  isPending,
  onDelete,
}: {
  onCloseModal?: () => void;
  startTransition: TransitionStartFunction;
  bookingId: number;
  isPending: boolean;
  onDelete: (bookingId: number) => void;
}): JSX.Element {
  function handleDelete() {
    startTransition(() => onDelete(bookingId));
  }

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
          disabled={isPending}
          className="py-2 px-3 w-[74.6px] text-green-600 border-green-600 border hover:bg-green-700 hover:text-green-50 transition-all duration-300"
        >
          Cancel
        </button>
        <button
          onClick={handleDelete}
          disabled={isPending}
          className="py-2 px-3 w-[74.6px] text-red-600 border-red-600 border hover:bg-red-700 hover:text-red-50 transition-all duration-300"
        >
          {isPending ? (
            <span className="flex justify-center">
              <SpinnerMini />
            </span>
          ) : (
            "Delete"
          )}
        </button>
      </div>
    </div>
  );
}

export default DeleteReservationConfrim;
