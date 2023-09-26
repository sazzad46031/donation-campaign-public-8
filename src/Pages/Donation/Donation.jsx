import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationCardSingle from "../../Components/DonationCategory/DonationCardSingle";


const Donation = () => {
    const [donation, setDonation] = useState({})
    const {id} = useParams()
    const idInt = parseInt(id)
    const donations = useLoaderData()
    useEffect(()=>{
        const findDonation = donations && donations?.find(donation => donation.id === idInt)
        setDonation(findDonation)
    },[donations,idInt])
    return (
        <div>
            <DonationCardSingle donation={donation || {}}></DonationCardSingle>
        </div>
    );
};

export default Donation;