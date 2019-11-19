import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { signIn } from '../store/actions/authActions';
import '../styles/inputs.css';

class LoginPage extends Component {
    state = {
        email: '',
        password: '',
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
    }

    handleTextChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    render() {
        const { authError, auth } = this.props
        console.log(auth)

        if (auth.token) { return <Redirect to='/' /> }

        return (
            <div className='container login-container'>
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
                                    <Link to=''>Do not have an account?</Link>
                                </div>
                                <div className='col-xs-12 col-sm-6'>
                                    <button type='submit' className='btn btn-primary float-md-right'>Login</button>
                                </div>
                            </div>
                        </div>

                        <div className="center red-text">
                            {authError ? <p>{authError}</p> : null}
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.auth.auth,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);