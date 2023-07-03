import React, { Component } from 'react'

export class Newsitem extends Component {
    
  render() {
    let {title, description, imageUrl, url} = this.props;
    return ( 
      <div>
        <div className="card my-4">
            <img src={imageUrl?imageUrl:"https://scx1.b-cdn.net/csz/news/800/2017/theoreticala.jpg"} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={url} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark my-4">Read More</a>
       </div>
      </div>
      </div>
      
    )
  }
}

export default Newsitem
