import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi.js'

const SushiContainer = (props) => {

  const sushiList = props.sushiList
  let count = 0 

  let renderSushi = (sushiList, start=0) => {
    
      let top4 = sushiList.slice(start,start+4)
      // props.lastSushi(start+4)
      return top4.map(sushi=> <Sushi key={sushi.id} sushiInfo={sushi} handleRemoveSushi={props.handleRemoveSushi}/>)
      // lastSushiId={props.lastSushiId} 
  }
  
  let moreSushi = () => {
    
    count = count+4
    return renderSushi(sushiList, count)
  }

  return ( 
    <Fragment>
      <div className="belt">
        {
          /* 
             Render Sushi components here!
          */
         renderSushi(sushiList)
        }
        <MoreButton moreSushi={moreSushi} />
        {/* sushiInd={props.lastSushi} */}
      </div>
    </Fragment>
  )
}

export default SushiContainer