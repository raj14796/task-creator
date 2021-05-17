import React, { Component } from 'react'
import { connect } from 'react-redux'
import Form from './Form'
import "bootstrap/dist/css/bootstrap.css";
import { Grid, Card } from '@material-ui/core';
import { login } from './actions/authAction';

class App extends Component {

    componentDidMount() {
        const loginData = {
            email: "smithcheryl@yahoo.com",
            password: "12345678"
        }
        this.props.dispatch(login(loginData));
    }
    render() {
        return (
            <>
                <Grid container >
                    <Grid item xs={12} sm={6} md={4} >
                        <Card style={{ backgroundColor: "rgba(194,231,239,255)" }}>
                            {this.props.authReducer && <Form />}
                        </Card>
                    </Grid>
                </Grid>
            </>
        )
    }
}

function mapStateToProps({ authReducer }) {
    return {
        authReducer,
    }
}

export default connect(mapStateToProps)(App);
