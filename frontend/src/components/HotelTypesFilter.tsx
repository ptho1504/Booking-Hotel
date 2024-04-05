type Props = {
  seletedHotelTypes: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

import React from "react";
import { hotelTypes } from "../config/hotel-options-config";

const HotelTypeFilter = ({ seletedHotelTypes, onChange }: Props) => {
  return (
    <div className="border-b border-slate-300 pb-5">
      <h4 className="text-md font-semibold mb-2">Hotel Type</h4>
      {hotelTypes.map((hoteltype) => (
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            className="rounded"
            value={hoteltype}
            checked={seletedHotelTypes.includes(hoteltype)}
            onChange={onChange}
          />
          <span>{hoteltype}</span>
        </label>
      ))}
    </div>
  );
};

export default HotelTypeFilter;
