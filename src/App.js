import React, { Component } from 'react';
import './App.css';

class App extends Component {
  componentDidMount() {
    fetch('http://api.coindesk.com/v1/bpi/currentprice.json')
      .then((response) => {
        response.json().then((data) => {
          console.log(data);
          this.setState({usd: data.bpi.USD.rate})
        });
      });
  }

  render() {
    console.log(this)
    return (
      <div className="App container">
          <div className="nav-bar row">
            <div className="col-md-4">
              <img className="img-responsive" src="/logo.png" width="1569" height="212"/>
            </div>
            <div className="col-md-offset-3 col-md-5 description">
              {`1BTC = ${this.state && this.state.usd || ''}$`}
            </div>
          </div>
          <div className="header row">
            <div className="col-md-offset-1 col-md-10">
              <div className="header-title row">
                <span>The easiest way to get started with Bitcoin</span>
              </div>
              <div className="row">
                <a className="btn btn-start" href="https://www.coinbase.com/join/59407ea86d5c5f00983508ba">Start Now</a>
              </div>
              <div className="row title">
                <span>Sign up now and get $10 FREE</span>
              </div>
            </div>
          </div>
          <div className="info row">
            <div className="col-md-4">
              <div className="title row">
                What is Bitcoin?
              </div>
              <div className="description row">
                What is Bitcoin? Bitcoin is a digital currency that is created and held electronically. It is unregulated in most of the countries and decentralized (meaning there is no Central Bank, making transaction fees very low). Bitcoins can be used to buy things electronically, it’s like your everyday dollar, euro, or yen.
              </div>
            </div>
            <div className="col-md-4">
              <div className="title row">
                How does it work?
              </div>
              <div className="description row">
                In order to get Bitcoins, you first need to have a digital wallet to store your money. This is where we come in. By clicking ‘Start Now’ you will be taken to Coinbase where you can sign up for your digital wallet. And since you just used our website to sign up, you immediately get $10 FREE as soon as you fund your account with at least $100!
              </div>
            </div>
            <div className="col-md-4">
              <div className="title row">
                What is Coinbase?
              </div>
              <div className="description row">
                What is Coinbase?
                Coinbase is the world’s most popular way to buy and sell digital currencies like Bitcoin, Ethereum, and Litecoin.
                It’s secure, instant, and you maintain full control of your assets.

                So what are you waiting for? Go ahead and get started!
              </div>
            </div>
          </div>
          <div className="footer row">
            <div className="col-md-3 powered">
              <a href="http://www.coindesk.com/">Powered by CoinDesk</a>
            </div>
            <div className="col-xs-6 col-md-offset-7 col-md-1">
             <iframe src="https://www.facebook.com/plugins/share_button.php?href=http%3A%2F%2Fgetyourfirstbitcoin.com&layout=button&size=small&mobile_iframe=true&appId=1754926664753974&width=59&height=20" width="59" height="20" style={{border:'none', overflow:'hidden'}} scrolling="no" frameborder="0" allowTransparency="true"></iframe>
            </div>
            <div className="col-xs-6 col-md-1">
              <a className="twitter-share-button"
                href="https://twitter.com/intent/tweet?text=Get%20your%20first%20Bitcoin!%20http://getyourfirstbitcoin.com"
                data-size="small"
              >
                Tweet
              </a>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
