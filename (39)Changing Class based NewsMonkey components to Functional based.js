




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

import React, {  useState } from 'react'
import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



const App =()=>{
  const pagesize=3;
  const apikey = process.env.REACT_APP_NEWS_API
  const [progress,setprogress]=useState(0)

  
  
  
      return (
    <div className="App">
       <Router>


         <NavBar/>

         <LoadingBar height={3} color='#f11946' progress={progress}  />


          <Routes>
            <Route exact path="/" element={<News setprogress={setprogress} apikey={apikey} key="general"   pagesize={pagesize} country="in" category="general"/>}/>

            <Route exact path="/business" element={<News setprogress={setprogress} apikey={apikey} key="business"  pagesize={pagesize} country="in" category="business"/>}/>

            <Route exact path="/entertainment" element={<News setprogress={setprogress} apikey={apikey}  key="entertainment" pagesize={pagesize} country="in" category="entertainment"/>}/>

            <Route exact path="/health" element={<News setprogress={setprogress} apikey={apikey} key="health"  pagesize={pagesize} country="in" category="health"/>}/>

            <Route exact path="/science" element={<News setprogress={setprogress} apikey={apikey} key="science"  pagesize={pagesize} country="in" category="science"/>}/>

            <Route exact path="/sports" element={<News setprogress={setprogress} apikey={apikey} key="sports"  pagesize={pagesize} country="in" category="sports"/>}/>

            <Route exact path="/technology" element={<News setprogress={setprogress} apikey={apikey} key="technology"  pagesize={pagesize} country="in" category="technology"/>}/>

            <Route exact path="/tesla" element={<News setprogress={setprogress} apikey={apikey} key="tesla"  pagesize={pagesize} country="in" category="tesla"/>}/>
          </Routes>


      </Router>



    </div>
  );
  
}

export default App










































































#NavBar.js

import React from 'react'


import { Link} from "react-router-dom";


const NavBar=(props)=>{
  

  
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" >NewsMonkey</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item"><Link className="nav-link" aria-current="page" to="/">Home</Link></li>
              
              <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
              
              <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/tesla">Tesla</Link></li>
              
            </ul>
          
          </div>
        </div>
      </nav>
    )
  
}

export default NavBar


























#News.js 



import React, { useEffect,useState } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";





const News=(props)=>{

  

  const capitalizefirstletter=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);

  }

  
  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  
  
  document.title=`${capitalizefirstletter(props.category)}-NewsMonkey`;
  



  const updateNews=async()=>{
    props.setprogress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apikey}&page=${page}&pageSize=${props.pagesize}`;
    setloading(true)
    let data = await fetch(url);
    props.setprogress(30)
    let parsedData = await data.json()
    props.setprogress(70)
    console.log(parsedData.totalResults)
    setarticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setloading(false)
    
    
    props.setprogress(100)
  }

  useEffect(() => {
      updateNews();
  }, [])

  
  const handlePrevClick = async () => {
    
    setPage(page-1)
    updateNews();
  }

  const handleNextClick = async () => {
    setPage(page+1)
    updateNews();
  } 


  const fetchMoreData = async () => {


    


    
    setPage(page+1)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apikey}&page=${page}&pageSize=${props.pagesize}`;
    
    setloading(true)
    let data = await fetch(url);
    let parsedData = await data.json()
    setarticles(articles.concat(parsedData.articles))
    setloading(false)
    setTotalResults(parsedData.totalResults)
    
    
   
    
  };

  
  
  




  


  
    
    return (
      
      <>
          
          <h1 className="text-center" style={{ margin: '15px 0px' }}>NewsMonkey - top {capitalizefirstletter(props.category)} Headlines</h1>
          
          {loading && <Spinner/>}

          <InfiniteScroll dataLength={articles.length} next={fetchMoreData} hasMore={articles.length !== totalResults} loader={loading && <Spinner/>}>

          
            <div className='container my-3'>
            
              <div className='row'>
                {articles.map((element,index)=>{
                  return  <div className='col-md-4' key={index}>
                            <Newsitem title={element.title?element.title:""} description={element.description?element.description:""} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                          </div>

                }
                )
                }
              </div>

            </div>

          </InfiniteScroll>
          
         
        
      </>
    )
  
}

News.defaultProps = {
  country: "in",
  pagesize: 5,
  category:"general"
}
News.propTypes = {
  country:PropTypes.string,
  pagesize:PropTypes.number,
  category:PropTypes.string
}

export default News




















































#Newsitem.js

import React from 'react'


const Newsitem=(props)=>{

  
    let {title, description, imageurl, newsurl, author, date,source} = props;
    return (
      <div className='my-3'>

      
      
      <div className="card" >

        <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>
          <span className=" badge rounded-pill bg-danger" > {source} </span>
        </div>

        <img src={imageurl?imageurl:"https://images.ctfassets.net/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/cf6f68efdcf625fdc060607df0f3baef/quwowooybuqbl6ntboz3.jpg"} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title} 
          <p className="card-text">{description}</p></h5>
          <p className="card-text"><small className="text-muted">By {!author?"Unknown": author} on {new Date(date).toGMTString()}</small></p>
          <a href={newsurl} className="btn btn-sm btn-primary">Read More</a>
        </div>
      </div>
      </div>
     
    )
  
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






#Spinner.js

import React from 'react'
import loading from "./loading.gif";

const Spinner=()=>{
  
    return (
      <div className='text-center'>
          <img className='my-3' src={loading} alt='Loading'/>
        
      </div>
    )
  
}

export default Spinner





#.env.local
REACT_APP_NEWS_API= "2b35b51d5397479f9df8178428b1dbb3"




















