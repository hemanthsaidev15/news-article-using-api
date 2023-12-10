import React, { useState, useEffect } from "react";
import "./news.css"
const News = () => {
    const [mynews, setmyNews] = useState([])

    const fetchData = async () => {
        let reponse = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=8108ebdeaf0140288aabd7578af1d4dd")
        let data =await reponse.json()
        setmyNews(data.articles);
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
         <>
          <div className="maindiv">
           {mynews.map((ele) => {
            console.log(ele);
            return (
                <>
                
                 <div className="card" style={{ width: "400px", margin: "20px", marginLeft : "55px"}}>
                               <img src={ele.urlToImage == null ? "https://i.abcnewsfe.com/a/e58deeea-ef9e-488b-9701-89156a53b2d2/university-1-gty-er-231120_1700512559644_hpMain_16x9.jpg?w=992" : ele.urlToImage} class="card-img-top" alt="..." />
                               <div className="card-body">
                                   <h5 className="card-title">{ele.author === "" ? "Rick Neale" : ele.author}</h5>
                                   <p className="card-text">{ele.title}</p>
                                   <a href={ele.url}  target = "_blank"className="btn btn-primary">Read more</a>
                               </div>
                           </div>
                           
                </>
                
            )
           }

           )}
           </div>
           </>
    )
} 
export default News;