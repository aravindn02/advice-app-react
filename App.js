import React from 'react';
import axios from 'axios';
import './App.css';
class App extends React.Component{
    state={advice: ''};

    componentDidMount(){
        this.fetchAdvice();
    }
    fetchAdvice=()=>{
        axios.get('https://api.adviceslip.com/advice')
        .then((Response)=>{
            const {advice}=Response.data.slip;
            console.log(advice);
            this.setState({advice:advice})
        })
        .catch((error)=>{console.log(error);})
    }
    render()
    {
        return(
            <div className='app'>
               
                <div className='card'>
                <h1 className="content">{this.state.advice}</h1>
                <button className='button' onClick={this.fetchAdvice}>
                     <span>Advice </span>
                </button>
                </div>
                
            </div>
        );
    }
}
export default App;