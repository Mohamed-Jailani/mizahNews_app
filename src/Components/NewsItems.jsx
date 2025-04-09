const NewsItems = ({ title, description, src, url }) => {
    return (
      <div className="col-md-4 d-flex justify-content-center my-3">
        <div className="card" style={{ width: "400px" }}>
          <img src={src} className="card-img-top" alt="News" style={{ height: "200px", objectFit: "cover" }}/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default NewsItems;
  