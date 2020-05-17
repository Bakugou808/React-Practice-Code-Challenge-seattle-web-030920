import React, { Fragment } from 'react'

const Table = ({budget, eatenSushi}) => {

  const renderPlates = () => {
    return eatenSushi.map((x, index) => {
      return <div key={index} className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${budget} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
            renderPlates()
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table



































// import React, { Fragment } from 'react'
// import BudgetForm from '../components/Form.js'
// const Table = (props) => {
 

//   const renderPlates = (array) => {
//       return array.map((x, index) => {
//         return <div className="empty-plate" key={index} style={{ top: -7 * index }}/>
//       })
    
//   }
//   const {eaten, budget} = props
//   return (
//     <Fragment>
//       <h1 className="remaining">
//         You have: ${ budget} remaining!
        
//       </h1>
//       <div><BudgetForm handleForm={props.handleForm}/></div>
//       <div className="table">
//         <div className="stack">
//           {renderPlates(eaten)}
//         </div>
//       </div>
//     </Fragment>
//   )
// }

// export default Table