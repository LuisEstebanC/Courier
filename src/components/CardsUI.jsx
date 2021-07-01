import React from "react";

const CardsUI = (props) => {
  return (
    <>
      <div className="card z-depth-2">
        <div className="titleC">
          <span>{props.description}</span>
        </div>
        <div className="headerC">
          <div className="contentcc">
            <label htmlFor="">Weight:</label>
            <span>{props.weight}</span>
          </div>
          <div className="contentcc">
            <label htmlFor="">Price:</label>
            <span>{props.priceToPay}</span>
          </div>
        </div>
        <div className="bodyC">
          <div className="contentcc">
            <label htmlFor="">Supplier:</label>
            <span>{props.supplier}</span>
          </div>
          <div className="contentcc">
            <label htmlFor="">Courier:</label>
            <span>{props.courier}</span>
          </div>
        </div>
        <div className="track">
          <div className="contentcf">
            <div className="traclabel">
              <label htmlFor="">CourierTracking:</label>
              <span>{props.courierTracking}</span>
            </div>
            <div className="traclabel">
              <label htmlFor="">internalTracking:</label>
              <span>{props.internalTracking}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardsUI;
