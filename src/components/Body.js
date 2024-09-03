import React, { useState } from 'react'
import RestaurantCard from './RestaurantCard'
import resLists from '../utilis/mockData'
const Body = () => {
    const [listOfRestaurants, setListOfRestaurants]  = useState(resLists)
    return (
        <>
            <div className='filter'>
                <button className='filter-btn' onClick={() =>{
                    console.log("clicked");
                    const filteredRestaurants = listOfRestaurants.filter(
                        (res)=> res.info.avgRating > 4.3
                    );
                    setListOfRestaurants(filteredRestaurants)
                }}
                >Top Rated Restaurant</button>
            </div>
            <div className="res-cards">
                {
                    listOfRestaurants.map((restaurant) => (
                        <RestaurantCard resData={restaurant} />
                    ))
                }
            </div>
        </>

    )
}

export default Body