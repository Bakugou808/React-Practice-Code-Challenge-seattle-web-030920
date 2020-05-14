import React, { Fragment } from 'react'

const Sushi = (props) => {

  let handleRemove = (event) => {
    props.handleRemoveSushi(event.target.id)
  }


  const {name, price, img_url, id} = props.sushiInfo
  return ( 
    
    <div className="sushi" >
      <div className="plate" 
           onClick={handleRemove}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          !img_url ?
            null
          :
            <img src={img_url } alt="" width="100%" id={id} />
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi