import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import Form from './components/Form.js'

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushi: [],
    mainSushi: [],
    budget: 100,
    eatenSushi: []
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(sushiList => {
      this.setState({
        sushi: sushiList.slice(4),
        mainSushi: sushiList.slice(0,4)
      })
    })
  }

  moreSushi = ()=>{
    this.setState(prev => {
      return {
        sushi: [...prev.sushi.slice(4), prev.mainSushi].flat(),
        mainSushi: prev.sushi.slice(0,4)
      }
    })
  }

  onEatSushi = (sushi)=> {
    this.state.budget >= sushi.price && this.setState(prev => ({eatenSushi: [...prev.eatenSushi, sushi]}))
  }

  onPayment = (sushi)=>{
    this.state.budget >= sushi.price && this.setState(prev =>({budget: prev.budget - sushi.price}))
  }

  onAddFunds = (amount) => {
    this.setState((prev) => {
      return {
        budget: parseInt(prev.budget) + parseInt(amount)
      }
    }
    )
  }
  

  render() {
    const {eatenSushi, mainSushi, budget} = this.state 
    
    return (
      <div className="app">
        <Form onAddFunds={this.onAddFunds}/>
        <SushiContainer sushiList={mainSushi} eatenSushi={eatenSushi} moreSushi={this.moreSushi} onEatSushi={this.onEatSushi} onPayment={this.onPayment}/>
        <Table budget={budget} eatenSushi={eatenSushi}/>
      </div>
    );
  }
}

export default App;





































// import React, { Component } from 'react';
// import SushiContainer from './containers/SushiContainer';
// import Table from './containers/Table';

// // Endpoint!
// const API = "http://localhost:3000/sushis"

// class App extends Component { 

//   constructor() {
//     super()
  
//     this.state = {
//        sushiList: [],
//        budget: 100,
//        lastSushi: 0,
//        eaten: [],
//        currentPrice: 0,
//     }
//   }
//   componentDidMount(){
//     this.fetchSushiList()
//   }

//   fetchSushiList = () => {
//     fetch(API)
//     .then(res => res.json())
//     .then(sushis => this.transformSushiList(sushis))
//   }

//   transformSushiList = (sushis)=> {
//     this.setState({
//       sushiList: sushis.map(sushi => {
//         return {... sushi, eaten: false}
//       })
//     })
//   }

//   handleRemoveSushi = (id, price) =>{
//     if (this.state.budget > price) {
//       this.setState((prevState)=> {
//         return {
//           sushiList: prevState.sushiList.map(sushi => {
            
//           if (sushi.id == id){
//             sushi.img_url = ""
//           }
//           return sushi
//         })}
//       })
//     }
//   }

//   handleAddEaten = () =>{
//     if (this.state.budget > this.state.currentPrice) {
//       debugger
//       this.setState((prevState) => {
//         return {
//           eaten: [...prevState.eaten, 1]
//         }
//       })
//     }

//   }

//   handleBudget = (price) =>{
   
//     this.setState(()=> {
//       return {currentPrice: price}
//     })
    
//     if (this.state.budget >= price) {
//       this.setState((prevState) => {
//         return {budget: prevState.budget - price}
//       })
//     } 

//   }

//   sendLastSushiId = (id)=> {
//     this.setState({
//       lastSushi: id
//     })
//   }

//   handleForm = (amount) => {
//     this.setState((prevState) =>{
//       return {budget: parseInt(prevState.budget)+ parseInt(amount)}
//     })
//   }



//   render() {
//     const {sushiList, lastSushi, currentPrice} = this.state

//     return (

//       <div className="app">
//         <SushiContainer sushiList={sushiList} handleRemoveSushi={this.handleRemoveSushi} handleAddEaten={this.handleAddEaten} sendLastSushiId={this.sendLastSushiId} lastSushi={lastSushi} handleBudget={this.handleBudget}/>
//         <Table eaten={this.state.eaten} budget={this.state.budget} handleForm={this.handleForm} currentPrice={currentPrice}/>
//       </div>
//     );
//   }
// }

// export default App;