import React, { Fragment } from 'react'

const Sushi = ({sushiInfo, onEatSushi, eatenSushi, onPayment}) => {

  const {name, price, img_url} = sushiInfo
  const handleClick = ()=>{
    onEatSushi(sushiInfo)
    onPayment(sushiInfo)
  }

  return (
    <div className="sushi">
      <div className="plate" 
           onClick={handleClick}>
        { 
          eatenSushi.includes(sushiInfo) ?
            null
          :
            <img src={img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi

Sushi.defaultProps = {
  sushiInfo: {img_url: ""}
}































// import React, { Fragment } from 'react'

// const Sushi = (props) => {

//   let handleRemove = () => {
//     props.handleRemoveSushi(props.sushiInfo.id, props.sushiInfo.price)
//     props.handleAddEaten()
//     props.handleBudget(props.sushiInfo.price)
    
//   }


//   const {name, price, img_url, id} = props.sushiInfo
//   return ( 
    
//     <div className="sushi" >
//       <div className="plate" 
//            onClick={handleRemove}>
//         { 
//           /* Tell me if this sushi has been eaten! */ 
//           !img_url ?
//             null
//           :
//             <img src={img_url } alt="" width="100%" id={id} />
//         }
//       </div>
//       <h4 className="sushi-details">
//         {name} - ${price}
//       </h4>
//     </div>
//   )
// }

// export default Sushi