import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

    return(
        <div className="containers">
            <div className="head">  
               <div className="rotate col-md-3">
               <input className="form form-control" placeholder="REACT JS"/>
               </div>
            </div>
            <div className="container-box">
                <div className="box box1">OPTION1</div>
                <div className="box box2">OPTION2</div>
                <div className="box box3">OPTION3</div>
            </div>
        </div>        
    )

}

export default App;
