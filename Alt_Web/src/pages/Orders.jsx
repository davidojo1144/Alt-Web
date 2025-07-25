import React, { useState } from 'react'
import ChooseDriver from '../components/ChooseDriver'
import DeliveryTask from '../components/DeliveryTask'
import PickupAddress from '../components/PickupAddress'
import Shippings from '../components/Shippings'
import DropOff from '../components/DropOff'
import ItemToShip from '../components/ItemToShip'
import ReviewShipment from '../components/ReviewShipment'


const Orders = () => {
  const [title, setTitle] = useState("")


   return (
      <>
      {
        title === "" ? (
          <DeliveryTask setTitle={setTitle} />
        ) : title === "Add Pickup Address" ? (
          <PickupAddress setTitle={setTitle} />
        ) : title === "what are you shipping" ? (
          <Shippings setTitle={setTitle} />
        ) : title === "dropoff" ? (
          <DropOff setTitle={setTitle} />
        ) : title === "itemtoship" ? (
          <ItemToShip setTitle={setTitle} />
        ) : title === "choosedriver" ? (
          <ChooseDriver setTitle={setTitle}/> 
        ) : title === "reviewshipment" ? (
          <ReviewShipment setTitle={setTitle} />
        ) : ""
      }
      
  
      </>
    )
}

export default Orders
