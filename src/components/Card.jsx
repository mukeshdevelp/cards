const Card = ({props}) => {

    console.log(props);
    
    
        return (
        <>
            <div className="card-container">
                <div className="image-container">
                    <img src={props.imgSrc} alt="" className="image" />
                </div>
                <div>
                    
                </div>
                <div className="text">
                    <div className="title-card">
        
                    <h3>{props.companyName}</h3>

                </div>
                <div className="heading-card">
                    <h2>{props.blogTitle}</h2>
                </div>
                <div>
                    <p>{props.content}</p>
                </div>
                </div>
                
            </div>


           
        </>
    )
}


export default Card;