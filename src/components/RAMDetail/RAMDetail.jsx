import React from "react";
import "./ram-detail.scss";

const RAMDetail = ({ id, species, gender, name, status, image }) => {
  return (
    <div className="ram-detail">
      <span>
        <strong>Id:</strong> {id}
      </span>
      <span>
        <strong>Species:</strong> {species}
      </span>
      <span>
        <strong>gender:</strong> {gender}
      </span>
      <span>
        <strong>Name:</strong> {name}
      </span>
      <span>
        <strong>Status:</strong> {status}
      </span>

      <img src={image} alt="" />
    </div>
  );
};

export default RAMDetail;
