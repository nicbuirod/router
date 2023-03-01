import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Card } from "./Card";
import { Context } from "../../context";

import "./Card_list.scss";

const CardList = ({ list }) => {
  const navigate = useNavigate();
  const context = useContext(Context);
  const { redirectDetailsRoute } = context;

  const goToDetails = (id) => {
    console.log("click ... goToDetails");
    //redirect to details
    console.log(context);
    console.log("***", redirectDetailsRoute);
    navigate(`${redirectDetailsRoute}/${id}`);
  };
  return (
    <div className="card-list">
      {list.length >= 1 &&
        list.map(({ id, image, name }, index) => (
          <Card
            key={index}
            name={name}
            image={image}
            id={id}
            handleClick={goToDetails}
          ></Card>
        ))}
    </div>
  );
};

export default CardList;
