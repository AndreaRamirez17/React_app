import React from "react";
import { Typography, CircularProgress } from "@mui/material";
import "./about.css";

function About() {
  const Yo = {
    nombre: "Illeana Ramiez",
    email: "illeand2001@gmail.com",
    description: "Actuary and Developer in progress",
  };

  return (
    <>
      <Typography variant="h2">About Me</Typography>
      <div className="card-container">
        {Yo ? (
          <div className="card">
            <h2>{Yo.nombre}</h2>
            <p>{Yo.email}</p>
            <p>{Yo.description}</p>
          </div>
        ) : (
          <CircularProgress />
        )}
      </div>
    </>
  );
}

export default About;

