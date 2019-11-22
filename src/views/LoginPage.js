import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { signIn } from '../store/actions/authActions';
import '../styles/inputs.css';
import Notification from '../components/Notification';

class LoginPage extends Component {
    state = {
        email: '',
        password: '',
        isVisible: false,
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
        this.setState({
            isVisible: !this.state.isVisible
        })
        setTimeout(() => {
            this.setState({
                isVisible: !this.state.isVisible
            })
        }, 3000);
    }

    handleTextChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    render() {
        const { auth } = this.props;

        if (auth.token) { return <Redirect to='/dashboard/' /> }

        return (
            <div className='container login-container'>
                <Notification isVisible={this.state.isVisible} notification={this.props.notification} />
                <div className='form'>
                    <h4 className='text-center'>Login</h4>
                    <form onSubmit={this.handleSubmit}>
                        <div className='form-group'>
                            <p>Email Address:</p>
                            <input type='text' className='form-input' id='email' placeholder='john.doe@gmail.com' value={this.state.email} onChange={this.handleTextChange} autoFocus />
                        </div>
                        <div className='form-group'>
                            <p>Password:</p>
                            <input type='password' className='form-input' id='password' value={this.state.password} onChange={this.handleTextChange} />
                        </div>
                        <div className='form-group'>
                            <div className='row'>
                                <div className='col-xs-12 col-sm-6'>
                                    <Link to='/signup'>Do not have an account?</Link>
                                </div>
                                <div className='col-xs-12 col-sm-6'>
                                    <button type='submit' className='btn btn-primary float-md-right'>Login</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        notification: state.auth.notification,
        auth: state.auth.auth,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);