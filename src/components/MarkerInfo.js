import React from "react";

const MarkerInfo = ({ info }) => {
  return (
    <div className="marker-info">
      <h2>Info</h2>
      <ul>
        <li>
          ID: <strong>{info.id}</strong>
        </li>
        <li>
          TITLE: <strong>{info.title}</strong>
        </li>
      </ul>
    </div>
  );
};

export default MarkerInfo;
