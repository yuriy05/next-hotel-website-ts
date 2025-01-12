"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function FilterCabins(): JSX.Element {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();
  const activeFilter = searchParams.get("capacity") ?? "all";

  function handleFilter(filter: string) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathName}` + `?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="flex">
      <Button
        filter="all"
        activeFilter={activeFilter}
        onFilterChange={handleFilter}
      >
        All cabins
      </Button>
      <Button
        filter="small"
        activeFilter={activeFilter}
        onFilterChange={handleFilter}
      >
        1-3 guests
      </Button>
      <Button
        filter="medium"
        activeFilter={activeFilter}
        onFilterChange={handleFilter}
      >
        4-7 guests
      </Button>
      <Button
        filter="large"
        activeFilter={activeFilter}
        onFilterChange={handleFilter}
      >
        8-12 guests
      </Button>
    </div>
  );
}

function Button({
  children,
  filter,
  activeFilter,
  onFilterChange,
}: {
  children: React.ReactNode;
  filter: string;
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}): JSX.Element {
  return (
    <button
      title="filter option"
      onClick={() => onFilterChange(filter)}
      className={`border border-primary-800 px-3 py-1 hover:bg-primary-900 hover:border-primary-900 transition-all duration-300 ${activeFilter === filter && "bg-primary-700"}`}
    >
      {children}
    </button>
  );
}

export default FilterCabins;
