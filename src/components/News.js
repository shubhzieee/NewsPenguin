import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';

export class News extends Component {

constructor(){
    super();
    this.state = {
      articles: [],
        page: 1,
       loading:false
    }
}
async componentDidMount(){
  let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=95b4bcad2ba447fc91f220cf84efb76b&page=1&pageSize=${this.props.pageSize}`
  this.setState({
    loading:true
  })
  let data= await fetch(url)
  let parsedData = await data.json()
  this.setState({
                articles: parsedData.articles, 
                totalResults:parsedData.totalResults,
                loading:false
              })
}
handlePrevClick= async ()=>{
  this.setState({
    page: this.state.page -1
  })
  let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=95b4bcad2ba447fc91f220cf84efb76b&page=${this.state.page}&pageSize=${this.props.pageSize}`
  this.setState({
    loading:true
  })
  let data= await fetch(url)
  let parsedData = await data.json()
  this.setState({
    articles: parsedData.articles,
    loading:false
  })
  
}
handleNextClick= async ()=>{
  this.setState({
    page: this.state.page +1
  })
  let url=`https://newsapi.org/v2/topheadlines?country=${this.props.country}&category=${this.props.category}&apiKey=95b4bcad2ba447fc91f220cf84efb76b&page=${this.state.page}&pageSize=${this.props.pageSize}`
  this.setState({
    loading:true
  })
  let data= await fetch(url)
  let parsedData = await data.json()
  this.setState({
    articles: parsedData.articles,
    loading:false
  })
}
  render() {
    return (
      <>
      <div className="container">
        <h2 className="my-3 text-center">NewsPenguin - Top Headlines</h2>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <Newsitem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} url={element.url} />
            </div>
          })}
        </div>
      </div>
      <div className="container d-flex justify-content-between my-3">
      <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
      <button type="button" disabled={this.state.page>Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
      </div>
      </>
    )
  }
}

export default News
