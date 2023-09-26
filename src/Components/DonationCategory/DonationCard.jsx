import { Link } from "react-router-dom";



const DonationCard = ({donation}) => {
    const {id, picture ,title, category, category_bg, card_bg, text_button_bg , description, price} = donation
    return (
        <div>
            <Link to={`/donationdetails/${id}`}>
            <div style={{backgroundColor : card_bg, color : text_button_bg}} className="card  shadow-xl">
                <figure><img className="w-full" src={picture} /></figure>
                <div className="card-body">
                    <h2 style={{backgroundColor : category_bg}} className="card-title">{category}</h2>
                    <p>{title}</p>
                    
                </div>
            </div>
            </Link>
            
        </div>
    );
};

export default DonationCard;