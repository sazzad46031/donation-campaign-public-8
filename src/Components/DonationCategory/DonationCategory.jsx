import DonationCard from "./DonationCard";

const DonationCategory = ({donations}) => {
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-72">
           {
                donations.map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)
           }
        </div>
    );
};

export default DonationCategory;