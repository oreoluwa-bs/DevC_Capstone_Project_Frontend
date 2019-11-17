import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signIn } from '../store/actions/authActions';
import { Redirect } from 'react-router-dom';
import '../styles/inputs.css';

class LoginPage extends Component {
    state = {
        email: '',
        password: '',
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
        // console.log(this.state);
    }

    handleTextChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    render() {
        const { authError, auth } = this.props

        // if (auth.id) { return <Redirect to='/' /> }

        return (
            <div className='container login-container'>
                <div className='form'>
                    <h4 className='text-center'>Login</h4>
                    <form onSubmit={this.handleSubmit}>
                        <div className='form-group'>
                            <p>Email Address:</p>
                            <input type='text' className='form-input' id='email' placeholder='john.doe@gmail.com' value={this.state.email} onChange={this.handleTextChange} />
                        </div>
                        <div className='form-group'>
                            <p>Password:</p>
                            <input type='password' className='form-input' id='password' value={this.state.password} onChange={this.handleTextChange} />
                        </div>
                        <div className='form-group' style={{ marginBottom: '20px' }}>
                            <Link to=''>Do not have an account?</Link>
                            <button type='submit' className='btn btn-primary float-right'>Login</button>
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
        auth: state.auth.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);