import { useFormContext } from "react-hook-form";
import { hotelFacilities } from "../../config/hotel-options-config";
import { HotelFormData } from "./ManageFormHotel";

const FacilitiesSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-3">Facilities </h2>
      <div className="grid grid-cols-5 gap-3">
        {hotelFacilities.map((fac) => (
          <label>
            <input
              type="checkbox"
              value={fac}
              {...register("facilities", {
                validate: (facilities) => {
                  if (facilities && facilities.length > 0) {
                    return true;
                  } else {
                    return "At least one facility is required";
                  }
                },
              })}
            />
            {fac}
          </label>
        ))}
      </div>
      {
        errors.facilities && (
            <span className="text-red-500 text-sm font-bold">{errors.facilities.message}</span>
        )
      }
    </div>
  );
};

export default FacilitiesSection;
