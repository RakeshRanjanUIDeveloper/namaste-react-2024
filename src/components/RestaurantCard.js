import React from 'react'
import { CDN_URL } from '../utilis/constants';

const RestaurantCard = (props) => {
    const {resData} = props;
    const {name, avgRating,cuisines,locality, areaName, cloudinaryImageId} = resData?.info;
    console.log(resData);
    return (
              <div className="res-card">
                    <div className='res-card-image-container'>
                        <img src={CDN_URL +cloudinaryImageId} className="res-card-image" />
                    </div>
                   <div className="res-card-details">
                        <h2>{name}</h2>
                        <p>{cuisines.join(', ')}</p>
                        <p>{avgRating} stars</p>
                        <p>{locality} - {areaName}</p>
                   </div>
              </div>
    )
}

export default RestaurantCard