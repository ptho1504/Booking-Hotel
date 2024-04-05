type Props = {
  seletedFacilities: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

import React from "react";
import { hotelFacilities } from "../config/hotel-options-config";

const FacilitiesFilter = ({ seletedFacilities, onChange }: Props) => {
  return (
    <div className="border-b border-slate-300 pb-5">
      <h4 className="text-md font-semibold mb-2">Facilities</h4>
      {hotelFacilities.map((fac) => (
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            className="rounded"
            value={fac}
            checked={seletedFacilities.includes(fac)}
            onChange={onChange}
          />
          <span>{fac}</span>
        </label>
      ))}
    </div>
  );
};

export default FacilitiesFilter;
