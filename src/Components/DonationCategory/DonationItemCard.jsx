const DonationItemCard = ({ donation }) => {
    const { id, squred_picture, picture, title, category, category_bg, card_bg, text_button_bg, description, price } = donation
    return (
        <div>
            <div style={{backgroundColor : card_bg}} className="card card-side shadow-xl">
                <figure><img src={squred_picture} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 style={{backgroundColor : category_bg}} className="card-title">{category}</h2>
                    <p style={{color: text_button_bg}} className="text-xl font-semibold">{title}</p>
                    <p style={{color: text_button_bg }}>${price}</p>
                    <div className="card-actions">
                        <button style={{backgroundColor : text_button_bg}} className="btn text-white">View details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationItemCard;