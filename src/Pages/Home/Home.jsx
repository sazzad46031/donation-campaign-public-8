import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner/Banner";
import DonationCategory from "../../Components/DonationCategory/DonationCategory";

const Home = () => {
    const donations = useLoaderData();
    
    return (
        <div>
            <Banner></Banner>
            <DonationCategory donations={donations}></DonationCategory>
        </div>
    );
};

export default Home;