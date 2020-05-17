import React, { Component } from 'react'

export default class Form extends Component {

    state = {
        formData: ""
    }

    

    handleChange = (event) => {
        this.setState({
            formData: event.target.value
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        const {onAddFunds} = this.props 
        onAddFunds(this.state.formData)
    }
    
    
    
    
    

    render() {
        const {formData} = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add Money</label>
                    <input type="text" name="amount" value={formData} onChange={this.handleChange}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}


































// import React, { Component } from 'react'

// class BudgetForm extends Component {

//     constructor() {
//         super()
    
//         this.state = {
//             amount: 0
//         }
//     }
    
//     handleAmountChange = event => {
        
//         this.setState({
//             amount: event.target.value
//         })
//     }

//     handleSubmit = event => {
//         event.preventDefault()
//         this.props.handleForm(event.target.amount.value)
//     }

//     render() {
//         return (
//             <div>
//                 <form onSubmit={event => this.handleSubmit(event)}>
//                     <label>Add Money To Your Table!</label>
//                     <input type="text" name="amount" onChange={event => this.handleAmountChange(event)} value={this.state.amount} />
//                 </form>
//             </div>
//         )
//     }
// }

// export default BudgetForm
