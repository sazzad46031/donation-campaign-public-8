import swal from "sweetalert";



const DonationCardSingle = ({donation}) => {
    const {id, picture ,title, category, category_bg, card_bg, text_button_bg , description, price} = donation

    const handleAddDonation = ()=> {
        const addedDonationArray =[]
        const donationItems = JSON.parse(localStorage.getItem('donationItems'))
        if(!donationItems){
            addedDonationArray.push(donation)
            localStorage.setItem('donationItems', JSON.stringify(addedDonationArray))
            swal("Good job!", "succesfully donated!", "success");
        }
        else{
            const isExist = donationItems.find(donation => donation.id == id)
            if(!isExist){
                addedDonationArray.push(...donationItems,donation)
                localStorage.setItem('donationItems', JSON.stringify(addedDonationArray))
                swal("Good job!", "succesfully donated!", "success");
            }
            else{
                swal("Error!", "donation done", "Error");
            }
            
        }
    } 

    return (
        <div>
            <div className="relative">
                <img className="w-full mt-20" src={picture} alt="" />
                <div className="absolute bg-black opacity-50 bottom-0 w-full h-28"></div>
                <button onClick={handleAddDonation} style={{backgroundColor : text_button_bg}} className="px-6 py-4 absolute text-white bottom-6 left-6 text-xl font-semibold">Donate ${price}</button>   
            </div>
            <p className="text-4xl font-bold mt-14">{title}</p>
            <p className="text-base font-normal leading-8 mt-6">{description}</p>
        </div>
    );
};

export default DonationCardSingle;