"use client";

import { TrashIcon } from "@heroicons/react/24/solid";
import Modal from "./Modal";
import DeleteReservationConfrim from "./DeleteReservationConfirm";
import { useTransition } from "react";
import SpinnerMini from "./SpinnerMini";

type DeleteReservationProps = {
  readonly bookingId: number;
};

function DeleteReservation({ bookingId }: DeleteReservationProps): JSX.Element {
  const [isPending, startTransation] = useTransition();

  return (
    <Modal>
      <Modal.Open opens="delete-reservation">
        <button className="group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900">
          {isPending ? (
            <span className="mx-auto">
              <SpinnerMini />
            </span>
          ) : (
            <>
              <TrashIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
              <span className="mt-1">Delete</span>
            </>
          )}
        </button>
      </Modal.Open>
      <Modal.Window name="delete-reservation">
        <DeleteReservationConfrim
          isPending={isPending}
          startTransition={startTransation}
          bookingId={bookingId}
        />
      </Modal.Window>
    </Modal>
  );
}

export default DeleteReservation;
