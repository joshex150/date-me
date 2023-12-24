import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageRem from "../Image/Image";
const ShowCard = ({ show }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState();

  const handleReceipt = async (movie) => {
    try {
      setLoading(true); // Assuming setLoading is a function to set loading state to true

      const response = await fetch("https://api-bank-xi.vercel.app/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          movie: movie,
        }),
      });

      if (response.ok) {
        // Handle successful response
        // For example, you might want to retrieve some data from the response
        const responseData = await response.json();
        toast.error(`alright Izzy, i'll let you know when`, {
          icon: "👏",
          style: {
            background: "#333",
            color: "#fff",
          },
        });
      } else {
        // Handle error response
        throw new Error("Failed to send data");
      }
    } catch (error) {
      console.error("Error occurred:", error);
      // Handle error (e.g., show an error message to the user)
    } finally {
      setLoading(false); // Set loading state to false regardless of success or failure
    }
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
      <div className="flex flex-col lg:min-w-[305px] gap-1 mb-4 border-white border p-2 shadow-sm lg:w-[48%] w-[97%] cursor-pointer hover:scale-[1.02] duration-150 transition-[transform] relative ">
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
          <p className="flex justify-between text-xl mb-20">
            Genre:{" "}
            <span className="text-lg">
              {show?.film?.filmGenre.map((genre) => genre.genre)}
            </span>
          </p>

          {/* <p className="flex justify-between text-xl mb-20">
            Date:{" "}
            <span className="text-green-500 text-lg pl-4">
              {new Date(show.showtimes[0].startTime).toLocaleString()}
            </span>
          </p> */}
          <button
            className="p-[15px 32px] text-[16px] h-[54px] w-[45%] absolute bottom-3 right-3 bg-transparent border-white border hover:bg-white hover:text-black"
            onClick={() => handleReceipt(show?.film?.name)}
          >
            This One
          </button>
        </div>
      </div>
    </>
  );
};

export default ShowCard;
