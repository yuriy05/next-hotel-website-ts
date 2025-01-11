import { Country } from "../types/Country";

type SelectCountryProps = {
  defaultCountry: string;
  name: string;
  id: string;
  className: string;
  countries: Country[];
};

export default function SelectCountry({
  countries,
  defaultCountry,
  name,
  id,
  className,
}: SelectCountryProps): JSX.Element {
  const flag =
    countries.find((country: Country) => country.name === defaultCountry)
      ?.flag ?? "";

  return (
    <select
      name={name}
      id={id}
      // Here we use a trick to encode BOTH the country name and the flag into the value. Then we split them up again later in the server action
      defaultValue={`${defaultCountry}%${flag}`}
      className={className}
    >
      <option value="">Select country...</option>
      {countries.map((c: Country) => (
        <option key={c.name} value={`${c.name}%${c.flag}`}>
          {c.name}
        </option>
      ))}
    </select>
  );
}
