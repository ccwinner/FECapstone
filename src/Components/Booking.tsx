import React, { useEffect } from "react";
import { fetchAPI, submitAPI, isValidDateFormat } from "../Utills";
import { useDebounce } from "@react-hook/debounce";
import { Button } from "@chakra-ui/react";

const formStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr",
  margin: "0 auto",
  padding: "5px",
  gap: "10px",
};

const rowStyle = {
  display: "flex",
  flexDirection: "row",
  gap: "8px"
} as React.CSSProperties;

interface FormValuesType {
  resDate: string;
  resTime: string;
  numOfGuests: string;
  occasion: string;
}

export interface BookingFormProps {
  markFinished: (state: boolean) => void;
}

export const BookingForm = (props: BookingFormProps) => {
  const { useState, useCallback } = React;
  const [formValues, setFormValues] = useState<FormValuesType>(() => {
    return {
      resDate: "",
      resTime: "",
      numOfGuests: "1",
      occasion: "",
    };
  });
  const [isValidDate, setIsValidDate] = useState(true);
  const [availableTimes, setAvailableTimesDebounced] = useDebounce<string[]>(
    []
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitAPI(formValues).then(() => {
      props.markFinished(true);
    });
  };

  const validateResDate = useCallback(() => {
    let value = formValues.resDate.trim();
    if (value.length === 0) {
      setIsValidDate(false);
    } else {
      setIsValidDate(true);
    }
  }, [formValues.resDate]);

  const onResDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const resString = e.target.value;
    setFormValues({ ...formValues, resDate: resString });
    if (isValidDateFormat(resString)) {
      let times = fetchAPI(new Date(resString));
      setAvailableTimesDebounced(times);
    }
  };

  useEffect(() => {
    setAvailableTimesDebounced(fetchAPI(new Date()));
  }, []);

  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "auto"}}>
      <form onSubmit={handleSubmit} style={formStyle}>
      <div style={rowStyle}>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          required
          value={formValues.resDate}
          onBlur={validateResDate}
          onChange={onResDateChange}
        />
        {!isValidDate && <p style={{ color: "red", fontSize: "10px"}}>Please enter valid date</p>}
      </div>
      <div style={rowStyle}>
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time "
        required
        value={formValues.resTime}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          setFormValues({ ...formValues, resTime: e.target.value });
        }}
      >
        {availableTimes.map((time) => (
          <option key={time}>{time}</option>
        ))}
      </select>
      </div>
      <div style={rowStyle}>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={formValues.numOfGuests}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setFormValues({ ...formValues, numOfGuests: e.target.value });
        }}
      />
      </div>
      <div style={rowStyle}>
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={formValues.occasion}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setFormValues({ ...formValues, occasion: e.target.value });
          }}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
      </div>
      {/* <button type="submit" style={{width: "200px"}}>Make your reservation</button> */}
      <Button type="submit" width="200px" style={rowStyle}>Make your reservation</Button>
      </form>
    </div>
  );
};
