// Using States in Class Components
// The first step is to create a state object and initialize it, and this step is usually done inside the class constructor:

// Constructor
// If you don’t know, the constructor is a method used to initialize an object’s state in a class. Remember, within the constructor, we will call the super method. This is required because we extend react component class, and a call has to be made to the base class constructor.



// constructor(){
//     super()
// }


// constructor(){
//     super()
//     this.state = {
//     }
// }



// News API
// We would be using a News API to render news in our news monkey Application. To check out the news API, click here. After that, log in to the news API by filling up some basic details like Name, Email, Password, and get your API key. After you are logged in, you will see your live API key in every example. We would be using the Top headlines Endpoint for our application.

// we get this link in news api top headings via json format
// https://newsapi.org/v2/top-headlines?country=us&apiKey=0757b630797244dbb6cd983d27f361d3
// https://newsapi.org/v2/top-headlines?apiKey=0757b630797244dbb6cd983d27f361d3&q=cricket












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
  Articles=[
    {
      "source": { "id": "bbc-sport", "name": "BBC Sport" },
      "author": "BBC Sport",
      "title": "Shane Warne memorial - watch & follow updates",
      "description": "Watch live coverage and follow text updates and tributes from the state memorial for Australian cricket legend Shane Warne at the Melbourne Cricket Ground.",
      "url": "http://www.bbc.co.uk/sport/live/cricket/60916236",
      "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.22.0/images/bbc-sport-logo.png",
      "publishedAt": "2022-03-30T08:22:26.498888Z",
      "content": "Former England bowler and BBC cricket presenter Isa Guha, who became a colleague of Warne's in the commentary box: \"It has been a strange few weeks - a lot of shock and then we did our own tribute at… [+396 chars]"
    },
    {
      "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
      "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
  ]
    constructor(){
      super()
      // console.log("iam a constructor in news component")
      this.state = {
        articles:this.Articles,
        loading:false
      }
  }
  
  async componentDidMount(){
    console.log("cdm");
    // let url = "https://newsapi.org/v2/top-headlines?country=in&apikey=dbe57b028aeb41e285a226a94865f7a7";
    let url ="https://newsapi.org/v2/top-headlines?country=in&apiKey=0757b630797244dbb6cd983d27f361d3";
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({ articles: parsedData.articles })
}


  render() {
    // console.log("render");
    return (
      
      <div className='container my-3'>
          <h2>NewsMonkey - Top Headlines</h2>
          {/* {this.state.articles.map((element)=>{console.log(element)})} */}
          
          <div className='row'>
            {this.state.articles.map((element)=>{

              return <div className='col-md-4' key={element.url}>
                <Newsitem title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 88):""} imageurl={element.urlToImage} newsurl={element.url}/>

                
                </div>

            })}

            
            
        
          </div>
         
        
      </div>
    )
  }
}

export default News

























#Newsitem.js

import React, { Component } from 'react'

export class Newsitem extends Component {
//   constructor(){
//     super();
//     console.log("x")
// }
  render() {
    let {title,description,imageurl,newsurl}=this.props
   
    return (
      
      <div className="card" style={{width: "18rem"}}>
        <img src={imageurl?imageurl:"/images.ctfassets.net/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/cf6f68efdcf625fdc060607df0f3baef/quwowooybuqbl6ntboz3.jpg"} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <a href={newsurl} className="btn btn-sm btn-primary">Read More</a>
        </div>
      </div>
     
    )
  }
}

export default Newsitem




















#sampleoutput.json

{
  "status": "ok",
  "totalResults": 3,
  "articles": [
    {
      "source": { "id": "bbc-sport", "name": "BBC Sport" },
      "author": "BBC Sport",
      "title": "Shane Warne memorial - watch & follow updates",
      "description": "Watch live coverage and follow text updates and tributes from the state memorial for Australian cricket legend Shane Warne at the Melbourne Cricket Ground.",
      "url": "http://www.bbc.co.uk/sport/live/cricket/60916236",
      "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.22.0/images/bbc-sport-logo.png",
      "publishedAt": "2022-03-30T08:22:26.498888Z",
      "content": "Former England bowler and BBC cricket presenter Isa Guha, who became a colleague of Warne's in the commentary box: \"It has been a strange few weeks - a lot of shock and then we did our own tribute at… [+396 chars]"
    },
    {
      "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
      "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
  ]
}
























