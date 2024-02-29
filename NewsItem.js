import React from 'react'

const NewsItem =(props)=> {

   
  
  let  {title , description,imageUrl, newsUrl, author, date , source} = props;
    return (
      <div className='my-3'>
          <div class="card" >
            <div style={{display:'flex',justifyContent:'flex-end', position:'absolute', right:'0'}}>
                   <span class=" badge rounded-pill bg-danger" >
                 {source} 
                
                </span>
            </div>
           
                <img src={!imageUrl?"https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=s0-w300-rw":imageUrl} alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className='card-text'>
                      <small className="text-danger">By {!author?"Unknown":author} on { new Date (date).toGMTString()}</small></p>
                    <a href={newsUrl} target= " _blank" className="btn btn-sm btn-dark">Read more</a>
               </div>
           </div>
      </div>
    )
  
}

export default NewsItem
