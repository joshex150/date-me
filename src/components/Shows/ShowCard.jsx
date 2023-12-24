import React from "react";
import { useNavigate } from "react-router-dom";
import ImageRem from "../Image/Image";
const ShowCard = ({ show }) => {
  const navigate = useNavigate();
  const handleReciept = () => {
    // navigate(`/receipt/${order?.details?.orderId}`, {
    //   state: {
    //     item: order?.item,
    //     details: order?.details,
    //   },
    // });
  };

  function removeTextBeforeFirstComma(inputString) {
    const commaIndex = inputString.indexOf(",");
    if (commaIndex !== -1) {
      return inputString.substring(commaIndex + 1).trim();
    }
    return inputString;
  }
  return (
    <>
      <div
        className="flex flex-col lg:min-w-[305px] gap-1 mb-4 border-white border p-2 shadow-sm lg:w-[48%] w-[97%] cursor-pointer min-[750px]:hover:scale-[1.02] duration-150 transition-[transform] relative "
        onClick={handleReciept}
      >
        <ImageRem
          src={show?.film?.backDropImageUrl}
          className="max-h-[400px] h-[400px] object-cover object-top"
          alt=""
        />
        <div>
          <p className="flex justify-between text-xl">
            Show Name:{" "}
            <span className="text-blue-500 text-lg flex items-end">
              {show?.film?.name}
            </span>
          </p>
          <p className="flex justify-between text-xl">
            Duration:{" "}
            <span className="text-orange-500 text-lg">
              {show?.film?.duration} minutes
            </span>
          </p>
          <p className="flex justify-between text-xl">
            Genre:{" "}
            <span className="text-lg">
              {show?.film?.filmGenre.map((genre) => genre.genre)}
            </span>
          </p>

          <p className="flex justify-between text-xl mb-20">
            Date:{" "}
            <span className="text-green-500 text-lg pl-4">
              {new Date(show.showtimes[0].startTime).toLocaleString()}
            </span>
          </p>
          <button className="p-[15px 32px] text-[16px] h-[54px] w-[45%] absolute bottom-3 right-3 bg-transparent border-white border hover:bg-white hover:text-black">
            This One
          </button>
        </div>
      </div>
    </>
  );
};

export default ShowCard;
