import React, { useContext } from 'react';

import RestaurantCard from './RestaurantCard';
import { AppContext } from '../provider/AppProvider';


function RestaurantCardList() {
    const { restaurants } = useContext(AppContext); 

    return (
      <>
         <h1 className="mt-5">Product List</h1>
        {restaurants.map((restaurant, i) => {
            return <RestaurantCard restaurant={restaurant} key={i}/>
        })}
      </>   
    );
  }
  
export default RestaurantCardList;