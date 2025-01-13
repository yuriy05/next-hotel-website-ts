import Image from "next/image";
import SelectCountry from "@/app/components/SelectCountry";
import { getCountries } from "@/app/lib/data-service";
import UpdateProfileForm from "@/app/components/UpdateProfileForm";

export const metadata = {
  title: "Update Profile",
};

async function Page(): Promise<JSX.Element> {
  // CHANGE
  const countryFlag = "/pt.jpg";
  const nationality = "portugal";
  const countries = await getCountries();

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-4">
        Update your guest profile
      </h2>

      <p className="text-lg mb-8 text-primary-200">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>

      <UpdateProfileForm>
        <SelectCountry
          countries={countries}
          name="nationality"
          id="nationality"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          defaultCountry={nationality}
        />
      </UpdateProfileForm>
    </div>
  );
}

export default Page;
