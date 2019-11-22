import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { signup } from '../store/actions/authActions';
import '../styles/inputs.css';
import Notification from '../components/Notification';

class SignUp extends Component {
    state = {
        gender: 'Male',
        isVisible: false,
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
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
        const { authError, auth } = this.props

        if (auth.userId) { return <Redirect to='/dashboard/' /> }

        return (
            <div className='container login-container signup-container'>
                <Notification isVisible={this.state.isVisible} notification={this.props.notification} />
                <div className='form'>
                    <h4 className='text-center'>Create an account</h4>
                    <form onSubmit={this.handleSubmit}>

                        <div className='form-group'>
                            <div className='row'>
                                <div className='col-xs-12 col-sm-6'>
                                    <p>First name:</p>
                                    <input type='text' className='form-input' id='firstname' placeholder='John' onChange={this.handleTextChange} required />
                                </div>
                                <div className='col-xs-12 col-sm-6'>
                                    <p>Last name:</p>
                                    <input type='text' className='form-input' id='lastname' placeholder='Doe' onChange={this.handleTextChange} required />
                                </div>
                            </div>
                        </div>

                        <div className='form-group'>
                            <div className='row'>
                                <div className='col-xs-12 col-sm-6'>
                                    <p>Department:</p>
                                    <input type='text' className='form-input' id='department' placeholder='Accounting' onChange={this.handleTextChange} required />
                                </div>
                                <div className='col-xs-12 col-sm-6'>
                                    <p>Job role:</p>
                                    <input type='text' className='form-input' id='jobrole' placeholder='Manager' onChange={this.handleTextChange} required />
                                </div>
                            </div>
                        </div>

                        <div className='form-group'>
                            <div className='row'>
                                <div className='col-xs-12 col-sm-8'>
                                    <p>Address:</p>
                                    <input type='text' className='form-input' id='address' placeholder='64th King Street Wisconsin' onChange={this.handleTextChange} required />
                                </div>
                                <div className='col-xs-12 col-sm-4 '>
                                    <p>Gender:</p>
                                    <select className='form-input' value={this.state.gender} id='gender' onChange={this.handleTextChange}>
                                        <option value='Male'>Male</option>
                                        <option value='Female'>Female</option>
                                        <option value='Other'>Other</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className='form-group'>
                            <p>Email Address:</p>
                            <input type='email' className='form-input' id='email' placeholder='john.doe@gmail.com' onChange={this.handleTextChange} required />
                        </div>

                        <div className='form-group'>
                            <p>Password:</p>
                            <input type='password' className='form-input' id='password' onChange={this.handleTextChange} required />
                        </div>

                        <div className='form-group'>
                            <div className='row'>
                                <div className='col-xs-12 col-sm-6'>
                                    <Link to='/login'>Already have an account?</Link>
                                </div>
                                <div className='col-xs-12 col-sm-6'>
                                    <button type='submit' className='btn btn-primary float-md-right'>Sign Up</button>
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
        notification: state.auth.notification,
        auth: state.auth.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (creds) => dispatch(signup(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);