import React from "react";
import "../styles/yes.css";
import { ImageRem } from "../components";

const yes = () => {
  return (
    <div className="container">
      <style>
        {`
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #9655cf;
          min-width: 100vw;
          overflow: hidden;
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
    </div>
  );
};

export default yes;
