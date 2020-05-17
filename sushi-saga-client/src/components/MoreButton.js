import React from 'react'




const MoreButton = ({moreSushi}) => {
    return <button onClick={moreSushi}>
            More sushi!
          </button>
}

export default MoreButton






























// import React from 'react'

// const MoreButton = (props) => {

//   let handleMore = () => {   
//     props.moreSushi(props.lastSushi)
//   }


//     return <button onClick={handleMore}> 
//             More sushi!
//           </button>
// }

// export default MoreButton