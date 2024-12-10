import React from "react";
import { useNavigate } from "react-router-dom";
// import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size }) => {
  let navigate = useNavigate();

  return (
    <div
      className={`${size} menu-item`}
      onClick={() => navigate(`/shop/${title}`)}
    >
      <div
        className='background-image'
        style={{
          backgroundImage: `URL(${imageUrl})`,
        }}
      />
      <div className='content'>
        <div className='title'>{title.toUpperCase()}</div>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
