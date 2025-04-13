import React, { Component } from 'react'
import "./Card.css"

export class Card extends Component {
    render() {
        let {title , desc , imgurl , newsurl} = (this.props);
        return (
            <div>
                <div className="card my-3" style={{width: "18rem"}}>
                    <img src={imgurl?imgurl:"https://static.vecteezy.com/system/resources/thumbnails/037/814/719/small_2x/ai-generated-autumn-leaves-in-the-forest-nature-background-photo.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{desc}...</p> 
                        <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card
