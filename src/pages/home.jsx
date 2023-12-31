import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ImageRem, Loader } from "../components";
import toast from "react-hot-toast";
const home = () => {
  const navigate = useNavigate();
  const [choice, setChoice] = useState(0);
  const [showLoader, setShowLoader] = useState(true);
  const [loading, setLoading] = useState();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false); // Hide the loader after 4 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  const getOrdinalSuffix = (num) => {
    if (num === 0) {
      return ""; // No suffix for zero
    }

    const j = num % 10;
    const k = num % 100;

    if (j === 1 && k !== 11) {
      return "st";
    }
    if (j === 2 && k !== 12) {
      return "nd";
    }
    if (j === 3 && k !== 13) {
      return "rd";
    }
    return "th";
  };

  const moveButton = () => {
    const button = document.getElementById("noButton");
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;

    const x = Math.random() * (window.innerWidth - buttonWidth);
    const y = Math.random() * (window.innerHeight - buttonHeight);

    button.style.left = `${x}px`;
    button.style.top = `${y}px`;

    const updatedChoice = choice + 1;
    setChoice(updatedChoice);

    const suffix = getOrdinalSuffix(updatedChoice);
    if (updatedChoice === 5 || updatedChoice % 5 === 0) {
      toast.error(
        `haha, you've tried ${updatedChoice} times. Aren't you tired?`,
        {
          icon: "👏",
          style: {
            background: "#333",
            color: "#fff",
          },
        }
      );
      return;
    }
    if (updatedChoice === 1) {
      toast.error(`haha, you never had a choice`, {
        icon: "👏",
        style: {
          background: "#333",
          color: "#fff",
        },
      });
    } else {
      toast.error(
        `haha, for the ${updatedChoice}${suffix} time you never had a choice`,
        {
          icon: "👏",
          style: {
            background: "#333",
            color: "#fff",
          },
        }
      );
    }
  };

  const handleReceipt = async () => {
    try {
      setLoading(true); // Assuming setLoading is a function to set loading state to true

      const response = await fetch("https://api-bank-xi.vercel.app/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          answer: "yes",
        }),
      });

      if (response.ok) {
        // Handle successful response
        // For example, you might want to retrieve some data from the response
        const responseData = await response.json();
        console.log("Received response data:", responseData);
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

  return (
    <>
      {showLoader && <Loader />}
      <div
        className="container"
        style={{
          visibility: !showLoader ? "visible" : "hidden",
          display: !showLoader ? "block" : "none",
        }}
      >
        <style>
          {`
            body {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                background-color: #000;
                min-width: 100vw;
                overflow: hidden;
              }
              
              #noButton {
                position: absolute;
                margin-left: 150px;
                transition: 0.5s;
              }
              
              #yesButton {
                position: absolute;
                margin-right: 150px;
              }
              
              .header_text {
                font-family: "Nunito";
                font-size: 1.5rem;
                font-weight: bold;
                color: white;
                text-align: center;
                margin-top: 20px;
                margin-bottom: 0px;
                width: 100%;
                max-width: 100%;
                overflow: hidden;
                word-wrap: break-word; 
              }
              @media screen and (min-width:740px){
                .header_text {
                    font-size: 2.5rem;
                }
              }
              .buttons {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                margin-top: 20px;
                margin-left: 20px;
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
              
              .gif_container {
                display: flex;
                justify-content: center;
                align-items: center;
                object-fit: contain;
                
              }
              
            `}
        </style>

        <div
          style={{
            width: "-webkit-fill-available",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p className="header_text">Do you wanna go on a date with me?</p>
        </div>
        <div className="gif_container">
          <ImageRem
            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDdtZ2JiZDR0a3lvMWF4OG8yc3p6Ymdvd3g2d245amdveDhyYmx6eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/cLS1cfxvGOPVpf9g3y/giphy.gif"
            alt="Cute animated illustration"
          />
        </div>
        <div className="buttons">
          <button
            className="btn"
            id="yesButton"
            onClick={() => {
              handleReceipt("yes");
              navigate("/yes");
            }}
          >
            Yes
          </button>
          <button
            className="btn"
            id="noButton"
            onMouseOver={moveButton}
            // onClick={moveButton}
          >
            No
          </button>
        </div>
      </div>
    </>
  );
};

export default home;
