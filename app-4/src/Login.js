import React, {Component} from 'react';

class Login extends Component{
constructor(){
    super();
    
    this.state = {
        username: '',
        password: ''
    }

    this.handleLogin = this.handleLogin.bind(this);
}

handleUsernameChange(un){
    this.setState({username: un})
}

handlePasswordChange(pw){
    this.setState({password: pw})
}

handleLogin(){
    alert (`Username: ${this.username} Password: ${this.password}`)
}

render(){
    return(
        <div>
            <input type="text" onChange ={(e) => this.handleUsernameChange(e.target.value)} />
            <input type="text"onChange = {(e) => this.handlePasswordChange(e.target.value)}/>
            <button onClick = {this.handleLogin} >Login</button>
        </div>
    )
}
}

export default Login;