import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi.js'

const SushiContainer = (props) => {

  const renderSushi = ()=>{
    const {sushiList, onEatSushi, eatenSushi, onPayment} = props
    return sushiList.map(sushi => <Sushi key={sushi.id} sushiInfo={sushi} onEatSushi={onEatSushi} eatenSushi={eatenSushi} onPayment={onPayment}/>)
  }
  const {moreSushi} = props 

  return (
   
    <Fragment>
      <div className="belt">
        {
          renderSushi()
        }
        <MoreButton moreSushi={moreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer



































// import React, { Fragment } from 'react'
// import MoreButton from '../components/MoreButton'
// import Sushi from '../components/Sushi.js'

// const SushiContainer = (props) => {

//   const sushiList = props.sushiList

//   let renderSushi = (sushiList, start=0) => {
//       let next4 = sushiList.slice(start,start+4)
//       return next4.map(sushi=> <Sushi key={sushi.id} sushiInfo={sushi} handleBudget={props.handleBudget} handleAddEaten={props.handleAddEaten} handleRemoveSushi={props.handleRemoveSushi}/>)
//   }
  
//   let moreSushi = () => {
//     if(props.lastSushi === props.sushiList.length){
//       props.sendLastSushiId(0)
//     } else {
//       props.sendLastSushiId(props.lastSushi + 4)
//     }
//     // props.sendLastSushiId(props.lastSushi + 4)
//     // renderSushi(sushiList, props.lastSushi)
//   }



//   return ( 
//     <Fragment>
//       <div className="belt">
//         {
//          renderSushi(sushiList, props.lastSushi)
//         }
//         <MoreButton moreSushi={moreSushi} lastSushi={props.lastSushi}/>
//       </div>
//     </Fragment>
//   )
// }

// export default SushiContainer