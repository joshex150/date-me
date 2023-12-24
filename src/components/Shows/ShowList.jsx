import React, { useEffect, useContext, useState } from "react";
import ShowCard from "./ShowCard";

const ShowList = ({ Shows }) => {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <h2 className="text-2xl font-semibold mb-4 ">Pick a Movie</h2>
      <div className="flex flex-wrap gap-3 w-full items-center justify-center">
        {Shows?.length <= 0 ? (
          <div className="flex flex-col w-full text-black">
            <h1>No Shows rn.</h1>
          </div>
        ) : (
          Shows?.map((show, index) => (
            <ShowCard key={show.film.id} show={show} />
          ))
        )}
      </div>
    </div>
  );
};

export default ShowList;
