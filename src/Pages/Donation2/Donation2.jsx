import { useEffect, useState } from "react";
import DonationItemCard from "../../Components/DonationCategory/DonationItemCard";

const Donation2 = () => {
    const [donationItem, setDonationItem] = useState([])
    const [isShow, setIsShow] = useState(false)
    useEffect(() => {
        const donationItems = JSON.parse(localStorage.getItem('donationItems'))
        if (donationItems) {
            setDonationItem(donationItems)
        }
        else {
            console.log("no data found")
        }

    }, [])
    
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-28">
            {
                isShow ? donationItem.map(donation => <DonationItemCard key={donation.id} donation={donation}></DonationItemCard>) : 
                donationItem.slice(0,4).map(donation => <DonationItemCard key={donation.id} donation={donation}></DonationItemCard>)
            }
            
        </div>
        <div className="text-center mt-6">
            <button onClick={()=>setIsShow(!isShow)} className="btn btn-success text-white">{ isShow ? "See Less" : "See All"}</button>
        </div>
        </div>
    );
};

export default Donation2;