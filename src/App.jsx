import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Loader } from "./components";
import { Home, Yes } from "./pages";
import { Toaster } from "react-hot-toast";

const App = () => {
  const PreloadImage = ({ src }) => {
    useEffect(() => {
      const image = new Image();
      image.src = src;
    }, [src]);

    return null;
  };
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <PreloadImage
          src={
            "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDdtZ2JiZDR0a3lvMWF4OG8yc3p6Ymdvd3g2d245amdveDhyYmx6eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/cLS1cfxvGOPVpf9g3y/giphy.gif"
          }
        />
        <PreloadImage
          src={"https://media0.giphy.com/media/T86i6yDyOYz7J6dPhf/giphy.gif"}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/yes" element={<Yes />} />
          <Route path="*" element={<>none</>} />
        </Routes>
        <Toaster />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
