import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Radio, Rating } from "./RatingStyles";
import { Container } from "./RatingStyles";
import styles from "../styles/rate.module.css";

const Rate = () => {
  const [rate, setRate] = useState(0);
  return (
    // <Container>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: "3vh",
        fontSize: "20px",
      }}
    >
      {[...Array(5)].map((item, index) => {
        const givenRating = index + 1;
        return (
          <label key={"radio" + index}>
            <Radio
              style={{ display: "none" }}
              type="radio"
              value={givenRating}
              onClick={() => {
                setRate(givenRating);
                // alert(`Are you sure you want to give ${givenRating} stars ?`);
              }}
            />
            <Rating style={{ cursor: "pointer" }}>
              <FaStar
                color={
                  givenRating < rate || givenRating === rate
                    ? "000"
                    : "rgb(192,192,192)"
                }
              />
            </Rating>
          </label>
        );
      })}
    </div>
    // </Container>
  );
};

export default Rate;
