import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component { 

  constructor() {
    super()
  
    this.state = {
       sushiList: [],
       budget: 100,
      //  lastSushi: 0
    }
  }
  componentDidMount(){
    this.fetchSushiList()
  }

  fetchSushiList = () => {
    fetch(API)
    .then(res => res.json())
    .then(sushis => {
      this.setState({
        sushiList: sushis
      })
    })
  }

  handleRemoveSushi = (id) =>{
    this.setState((prevState)=> {
      return {sushiList: prevState.sushiList.map(sushi => {
        if (sushi.id == id){
          sushi.img_url = ""
        }
        return sushi
      })}
    })
  }

  // lastSushiId = (id)=> {
  //   this.setState((prevState)=>{
  //     lastSushi: id
  //   })
  // }

  render() {
    const {sushiList, lastSushi} = this.state

    return (

      <div className="app">
        <SushiContainer sushiList={sushiList} handleRemoveSushi={this.handleRemoveSushi}/>
        {/* lastSushiId={this.lastSushiId} lastSushi={lastSushi} */}
        <Table />
      </div>
    );
  }
}

export default App;