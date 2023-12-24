import React, { useState, useEffect } from "react";
import { ImageRem, ShowList } from "../components";

const yes = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const apiUrl =
      "https://max-api.fusionintel.io/api/v1/Showtimes/get-film-showtimes?todayDate=23+Dec+2023+12%3A00+AM&cinemaId=kad-65087c1a";

    const headers = {
      Accept: "*/*",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "en-GB,en;q=0.9",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiQ2luZW1hQXBpIiwiQ2luZW1hSWQiOiJrYWQtNjUwODdjMWEiLCJuYmYiOjE2OTgxMDY3OTgsImV4cCI6MTcyOTcyOTE5OCwiaWF0IjoxNjk4MTA2Nzk4LCJpc3MiOiJodHRwczovL2Z1c2lvbmludGVsLmlvIiwiYXVkIjoiVXNlciJ9.7jE0ftWCm7HYAB62b8LNjVJfHh66H44o2kAWR1InvU8",
      Connection: "keep-alive",
      Host: "max-api.fusionintel.io",
      Origin: "https://web.kadacinemas.com",
      Referer: "https://web.kadacinemas.com/",
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "cross-site",
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2 Safari/605.1.15",
    };

    fetch(apiUrl, {
      method: "GET",
      headers: headers,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not OK.");
        }
      })
      .then((data) => {
        console.log("Data received:", data.data);
        setData(data.data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []);

  return (
    <div className="container">
      <style>
        {`
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          height: auto;
          background-color: #000;
          min-width: 100vw;
          overflow-X: hidden;
        }
        
        /* Position the "No" button absolutely within body */
        #noButton {
          position: absolute;
          margin-left: 150px;
          transition: 0.5s;
          /* Smooth movement */
        }
        
        #yesButton {
          position: absolute;
          margin-right: 150px;
          /* Smooth movement */
        }
        
        .header_text {
          font-family: "Nunito";
          font-size: 1.5rem;
          font-weight: bold;
          color: white;
          text-align: center;
          margin-top: 20px;
          margin-bottom: 0px;
        }
        @media screen and (min-width:740px){
          .header_text {
              font-size: 2.5rem;
          }
        }
        .text {
          font-family: "Nunito";
          font-size: 25px;
          font-weight: bold;
          color: white;
          text-align: center;
          margin-top: 20px;
          margin-bottom: 0px;
        }
        
        .buttons {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          margin-top: 20px;
          margin-left: 20px;
          /* optional: adds some space between the buttons */
        }
        
        .btn {
          background-color: #ffb6c1;
          color: white;
          padding: 15px 32px;
          text-align: center;
          display: inline-block;
          font-size: 16px;
          margin: 4px 2px;
          cursor: pointer;
          border: none;
          border-radius: 12px;
          transition: background-color 0.3s ease;
        }
        
        .btn:hover {
          background-color: #faf9f6;
        }
        
        .gif_container {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        `}
      </style>
      <div>
        <h1 className="header_text">Yeeeyyyy!!</h1>
      </div>
      <div className="gif_container">
        <ImageRem
          src="https://media0.giphy.com/media/T86i6yDyOYz7J6dPhf/giphy.gif"
          alt="Cute animated illustration"
        />
      </div>
      <ShowList Shows={data} />
    </div>
  );
};

export default yes;
