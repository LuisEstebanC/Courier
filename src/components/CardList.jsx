import React from "react";
import CardsU from "./CardsUI";
import "./Cards.css";
import { useFetchContent } from "../hooks/useFetchContent";

const Cards = () => {
  const [packageC] = useFetchContent();

  return (
    <div className="containerr">
      {packageC.map((item, index) => {
        return (
          <div key={index}>
            <CardsU
              description={item.description}
              weight={item.weight}
              priceToPay={item.priceToPay}
              supplier={item.supplier}
              courier={item.courier}
              courierTracking={item.courierTracking}
              internalTracking={item.internalTracking}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
