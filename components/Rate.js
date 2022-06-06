import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Radio, Rating } from "./RatingStyles";
import { Container } from "./RatingStyles";

const Rate = () => {
  const [rate, setRate] = useState(0);
  return (
    <Container>
      <div>
        {[...Array(5)].map((item, index) => {
          const givenRating = index + 1;
          return (
            <label>
              <Radio
                type="radio"
                value={givenRating}
                onClick={() => {
                  setRate(givenRating);
                  // alert(`Are you sure you want to give ${givenRating} stars ?`);
                }}
              />
              <Rating>
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
    </Container>
  );
};

export default Rate;
