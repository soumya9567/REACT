import React from "react"


class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      count :0,
      name:"soumya"
    }
  }
    increment=()=>{
      this.setState({count:this.state.count+1})

    }

    decrement=()=>{
      this.setState({count:this.state.count-1})
    }

    reset=()=>{
      this.setState({count:this.state.count=0})
    }

    componentDidMount(){
   console.log("component mounted")
    }
    componentDidUpdate(){
      console.log("component updated")
       }
       componentWillUnmount(){
        console.log("component unmounted")
         }


  
 render(){
  return(
    <div>
      <h1>welcome to react</h1>
      <h3>{this.state.name}</h3>
      <h2>{this.state.count}</h2>
      <button onClick={this.increment}>INCREMENT</button>
      <button onClick={this.decrement}>DECREMENT</button>
      <button onClick={this.reset}>RESET</button>
    </div>
  )
 }

}
export default App