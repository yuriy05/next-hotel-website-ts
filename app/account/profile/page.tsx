import Image from "next/image";
import SelectCountry from "@/app/components/SelectCountry";
import { getCountries, getGuest } from "@/app/lib/data-service";
import UpdateProfileForm from "@/app/components/UpdateProfileForm";
import { auth } from "@/app/lib/auth";

export const metadata = {
  title: "Update Profile",
};

async function Page(): Promise<JSX.Element> {
  // CHANGE
  const countries = await getCountries();
  const session = await auth();
  const guest = await getGuest(session!.user!.email!);

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-4">
        Update your guest profile
      </h2>

      <p className="text-lg mb-8 text-primary-200">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>

      <UpdateProfileForm guest={guest}>
        <SelectCountry
          countries={countries}
          name="nationality"
          id="nationality"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          defaultCountry={guest.nationality}
        />
      </UpdateProfileForm>
    </div>
  );
}

export default Page;
