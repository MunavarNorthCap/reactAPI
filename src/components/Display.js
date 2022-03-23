// import React, { useState } from 'react';

export const Display = ({datas, handleClick}) => {
    // const handleClick = props.handleClick;
    console.log(datas)
  return (
    <div className="col-8">
        { datas  ? 
            <div className="content d-flex">
                <div className="col-4 m-4">
                    <img src={datas.avatar} alt='avatar.image' className="fr" />
                </div>
                <div className="col-4 m-5">
                    <i className="fa-solid fa-user"></i> { `Name: ${datas.first_name} ${datas.last_name} `}  <br /> 
                    <i className="fa-solid fa-envelope"></i> {`Email: ${datas.email}`}
                </div>
            </div>
            :
            <div id="inDetail">Loading...</div>
        }
    </div>

  );
}