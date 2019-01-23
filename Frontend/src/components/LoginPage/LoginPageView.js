import React from 'react';
import { Paper, TextField, Typography, Button } from '@material-ui/core';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(){
        const login = document.getElementById("login").value;
        const password = document.getElementById("password").value;
        this.props.login();
    }   

    render() {
        return (
            <div>
                <Paper style={{ width: "50%", margin: "auto", height: "60vh" }}>
                    <div>
                        <div style={{ height: "60px" }}> </div>
                        <Typography variant="h3" gutterBottom>
                            Zaloguj się
                        </Typography>
                        <div style={{ height: "50px" }}> </div>
                        <TextField label="Login" required margin="normal" style={{ width: "500px" }} id="login"/>
                        <div style={{ height: "20px" }}> </div>
                        <TextField label="Hasło" required margin="normal" style={{ width: "500px" }} type="password" id="password" />
                        <div style={{ height: "70px" }}> </div>
                        <Button variant="contained" color="primary" style={{ width: "500px", height: "40px", backgroundColor: "rgb(6,17,90)"}} onClick={this.onClick}> Zaloguj </Button>

                    </div>
                </Paper>
            </div>
        )
    }
}

export default LoginPage;