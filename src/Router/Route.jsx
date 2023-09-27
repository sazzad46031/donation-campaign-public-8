
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home/Home';
import Donation from '../Pages/Donation/Donation';
import Statistics from '../Pages/Statistics/Statistics';
import Donation2 from '../Pages/Donation2/Donation2';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';

const myCreatedRoute = createBrowserRouter([
    {
        path : "/",
        element : <MainLayout></MainLayout>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            {
                path : "/",
                element: <Home></Home>,
                loader : ()=>fetch('/data.json')
            },
            {
                path : "/donation",
                element: <Donation></Donation>
            },
            {
                path : "/donation2",
                element : <Donation2></Donation2>
            },
            {
                path : "/statistics",
                element : <Statistics></Statistics>
            },
            {
                path : "/donationdetails/:id",
                element : <Donation></Donation>,
                loader : ()=>fetch('/data.json')
            }
        ]
    }   

])


export default myCreatedRoute;