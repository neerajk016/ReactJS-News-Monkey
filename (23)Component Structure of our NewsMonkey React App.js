// The component structure of our application



// Structure: We would create a Navbar component at the top and at the middle of our application, we would add a ‘news’ component that would contain our news items.



// Structure of News Monkey===



// Navbar Component: It will have navigation of different pages of our application, like About, Home, etc pages.

// News Component: The big red component is the News component. It will contain a lot of ‘NewsItem’ components.

// NewsItem Component: Many of these items will be specific news. For example Weather news, Sports News, Politics news, etc.

// News Detail Component: I would like to point out that later on, we would create a ‘NewsDetail’ Component. This component will show details of specific news when the reader clicks on a specific NewsItem. Our navbar will remain intact at the top of the application.



// News Detail Component===

// Benefits: Structuring our app in this way lets us easily manage our application and also helps in reusing the components again and again.




#index.html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="NewsMonkey is a news app which can be used to grab quick daily news bites.If you are interested in news, weather, politics and sports news,news monkey is for you!  "
    />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    
    
   
   
    <title>NewsMonkey - Get your daily dose of news free!</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    
  </body>
  
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</html>











#index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();















#app.js

import React, { Component } from 'react'
import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';

export default class App extends Component {
  render() {
      return (
    <div className="App">
      
      <NavBar/>
      <News/>
    </div>
  );
  }
}









#NavBar.js

import React, { Component } from 'react'

export class NavBar extends Component {
  

  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">About</a>
              </li>
              
              
            </ul>
            
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar











#News.js 

import React, { Component } from 'react'
import Newsitem from './Newsitem'


export class News extends Component {
  

  render() {
    return (
      <div>
          <h1>this is a news Component</h1>
          <Newsitem/>
          <Newsitem/>
          <Newsitem/>
          <Newsitem/>
        
      </div>
    )
  }
}

export default News














#Newsitem.js

import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    return (
      <div>
        this is a news item 2
      </div>
    )
  }
}

export default Newsitem








