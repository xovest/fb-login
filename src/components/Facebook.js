import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';

export default class Facebook extends Component {
  state = {
    isLoggedIn: false,
    userID: '',
    name: '',
    email: '',
    picture: ''
  };

  responseFacebook = res => {
    // console.log(res);

    this.setState({
      isLoggedIn: true,
      userID: res.userID,
      name: res.name,
      email: res.email,
      picture: res.picture.data.url
    });
  }

  componentClicked = () => {
    console.log('click');
  }

  render() {
    let fbContent;

    if (this.state.isLoggedIn) {
      fbContent = (
        <div style={{ 
          width: '400px',
          margin: 'auto',
          background: '#283344',
          padding: '20px'
        }}>
          <img src={this.state.picture} alt={this.state.name} />
          <h2>Wlcm {this.state.name}</h2>
          <h2>Email: {this.state.email}</h2>
        </div>
      );
    } else {
      fbContent = (
        <FacebookLogin
          appId="667443034641637"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      );
    }

    return (
      <div>
        {fbContent}
      </div>
    );
  }
}
