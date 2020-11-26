import React from "react";
import { FaList } from "react-icons/fa";

function Hotdrink(props) {
  return (
    <article className="card">
      <a href="/#" onClick={props.showDetailsHandler.bind(this, props.drink)}>
        <picture className="thumbnail">
          <img alt={props.drink.name} src={props.drink.imgUrl} />
        </picture>
        <div className="card-content">
          <h2>{props.drink.name}</h2>
          <p>
            <FaList /> {props.drink.actions.length} steps
          </p>
        </div>
      </a>
    </article>
  );
}

export default Hotdrink;
