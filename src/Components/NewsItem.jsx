import React from 'react'

export default function NewsItem(props) {
    return (
        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            <div className="card w-100">
                <img src={props.pic} className="card-img-top" height={150} alt="..."/>  
                    <div className="card-body">
                        <h5 className="card-title">{props.title }</h5>
                        <p className="card-text">{props.description}</p>
                        <div className="source">
                            <p>{props.source}</p>
                            <p>{new Date(props.date).toLocaleDateString()}</p>
                        </div>
                        <p className="card-text">{props.description}</p>
                        <a href="#" className="w-100 btn btn-primary">Read More</a>
                    </div>
            </div>
        </div>
    )
}
