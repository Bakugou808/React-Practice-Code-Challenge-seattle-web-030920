import React from 'react'

const MoreButton = (props) => {

  let handleMore = () => {
    console.log(`I'm in more click`) 
  
    props.moreSushi()
  }


    return <button onClick={handleMore}> 
            More sushi!
          </button>
}

export default MoreButton