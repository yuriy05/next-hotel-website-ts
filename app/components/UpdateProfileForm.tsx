"use client";

import Image from "next/image";
import { updateGuest } from "../lib/actions";
import SubmitButton from "./SubmitButton";

function UpdateProfileForm({
  children,
  guest,
}: {
  children: React.ReactNode;
  guest: {
    email: string;
    fullName: string;
    nationalID: number;
    countryFlag: string;
  };
}): JSX.Element {
  const { email, fullName, nationalID, countryFlag } = guest;

  return (
    <form
      action={updateGuest}
      className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col"
    >
      <div className="space-y-2">
        <label>Full name</label>
        <input
          name="fullName"
          disabled
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
          defaultValue={fullName}
        />
      </div>

      <div className="space-y-2">
        <label>Email address</label>
        <input
          name="email"
          disabled
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
          defaultValue={email}
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="nationality">Where are you from?</label>
          <Image
            width={50}
            height={100}
            src={countryFlag || "/svg/world-flag.svg"}
            alt="Country flag"
            className="h-10 rounded-sm"
          />
        </div>
        {children}
      </div>

      <div className="space-y-2">
        <label htmlFor="nationalID">National ID number</label>
        <input
          name="nationalID"
          defaultValue={nationalID}
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
        />
      </div>

      <div className="flex justify-end items-center gap-6">
        <SubmitButton pendingLabel="Updating...">Update Profile</SubmitButton>
      </div>
    </form>
  );
}

export default UpdateProfileForm;
