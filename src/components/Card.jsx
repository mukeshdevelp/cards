import '../App.css';
const Card = ({ props }) => {
  console.log(props);

  return (
    <>
      <div className="card-container">
        {props.map((item) => (

          
          <div key={item.id} className="card-item">
            <div className="image-container">
              <img
                src={item.imgSrc}
                alt="alternate image"
                className="image"
              />
            </div>
            <div className="text">
              <div className="title-card">
                <h3>{item.companyName}</h3>
              </div>
              <div className="heading-card">
                <h2>{item.blogTitle}</h2>
              </div>
              <div>
                <p>{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
