import React from 'react'

const NewsItem = (props) => {
    
        let {title,description,imageUrl,newsUrl,author,date,source} = props;
        return (
            <div className="my-3">
                <div  className="card" >
                    <div style={{display:'flex',position:'absolute',justifyContent:'flex-end',right:'0'}}>
                <span className="badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}> {source}
                </span>
                </div>
                    <img src={imageUrl?imageUrl:"https://cdn.vox-cdn.com/thumbor/8vrII42-MmhQI5d4qECJlqUBk6U=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/10673529/acastro_180416_1777_chrome_0001.jpg"}  className="card-img-top" alt="..."/>
                        <div  className="card-body">
                            <h5  className="card-title">{title}...</h5>
                            <p  className="card-text">{description}...</p>
                            <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
                            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-primary">Read More</a>
                        </div>
                </div>  
            </div>
        )
    
}

export default NewsItem
