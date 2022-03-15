import { getByTitle } from '@testing-library/react'
import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let {title, description, imageUrl, newsUrl, author, date,source} = this.props;
    return (
      <div>
        <div className="card" >
            <img src={!imageUrl?"https://static01.nyt.com/images/2022/03/07/world/07ukraine-blog-header2/07ukraine-blog-header2-facebookJumbo.jpg"
            :imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{title}
            <div>
               <span  className=" top-0  badge 
             rounded-pill bg-danger"> {source} </span></div></h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-muted">By {!author?"unknown":author} on {new Date(date).toGMTString()} </small></p>
                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
            </div>
            </div>
      </div>
    )
  }
}

export default NewsItem
