import React, {useState} from 'react';
import axios from 'axios';

import './App.css';

function App() {
    const [stage, setStage] = useState("start");
    const [code, setCode] = useState("");
    
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const name = urlParams.get('name');
    const token = urlParams.get('token');
    
    if (token && stage !== 'code') {
        setStage('code');
        axios.post('https://login.xsolla.com/api/users/account/code', {},{
            headers: {
                'Authorization': `Bearer ${token}`
            }}).then(res => {
                setCode(res.data.code);
            });
    }
    
    const renderStart = () => (
        <div className="Main">
            <div style={{fontSize: '30pt'}}>
                <p>You connecting <b>{name}</b> to Xsolla account</p>
                <p>Sign-in into your account on next page</p>
                <button style={{fontSize: '30pt', width: '80%'}} onClick={() => setStage("widget")}>Start</button>
            </div>
        </div>
    );
    
    const renderCode = () => (
        <div className="Main">
            <div style={{fontSize: '40pt'}}>
                <p>Your code is</p>
                <p><b>{code}</b></p>
            </div>
        </div>
    );
  
  return (
    <div className="App">
        <div id="xl_auth" style={{height: '100%', display: stage === 'widget' ? 'block' : 'none'}}></div>
        {stage === 'start' && renderStart()}
        {stage === 'code' && renderCode()}
    </div>
  );
}

export default App;
