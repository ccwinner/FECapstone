// import { useState } from "react";
import { BookingForm } from "./Booking";
import { useAlertContext } from "../Context/alertContext";
export const Home = () => {
  const { onOpen } = useAlertContext();
  const markFinished = (state: boolean) => {
    onOpen(
      state ? "success" : "error",
      state ? "Booking successful!" : "Booking failed!"
    );
  };
  return (
    <div>
      <h1>Home</h1>
      <h2>Making your reservation</h2>
      <BookingForm markFinished={markFinished} />
    </div>
  );
};
