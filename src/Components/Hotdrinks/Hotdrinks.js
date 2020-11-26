import React from "react";
import HotdrinksData from "../../Data/HotdrinksData";
import Hotdrink from "./Hotdrink/Hotdrink";

function Hotdrinks(props) {
  const listItems = HotdrinksData.map((drink) => (
    <Hotdrink
      key={drink.name}
      drink={drink}
      showDetailsHandler={props.showDetailsHandler}
    />
  ));

  return (
    <div className="centered">
      <section className="cards">{listItems}</section>
    </div>
  );
}

export default Hotdrinks;
