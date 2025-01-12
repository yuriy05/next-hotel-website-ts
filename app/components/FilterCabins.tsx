"use client";

function FilterCabins() {
  return (
    <div className="flex">
      <button className="border border-primary-800 px-3 py-1 hover:bg-primary-900 hover:border-primary-900 transition-all duration-150">
        All
      </button>
      <button className="border border-primary-800 px-3 py-1 hover:bg-primary-900 hover:border-primary-900 transition-all duration-150">
        Small
      </button>
      <button className="border border-primary-800 px-3 py-1 hover:bg-primary-900 hover:border-primary-900 transition-all duration-150">
        Medium
      </button>
      <button className="border border-primary-800 px-3 py-1 hover:bg-primary-900 hover:border-primary-900 transition-all duration-150">
        Large
      </button>
    </div>
  );
}

export default FilterCabins;
