import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './landing';
import DetailsPage from './detail';
import PaymentPage from './payment';
import ProfilePage from './profile';
import SeatPage from './seat';
import SlotPage from './slot';

interface HomePageProps {

}

const HomePage: FC<HomePageProps> = ({ }) => {
    return (
        <React.Fragment>
            <p>Navbar</p>

            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/details' element={<DetailsPage />} />
                <Route path='/payment' element={<PaymentPage />} />
                <Route path='/profile' element={<ProfilePage />} />
                <Route path='/seat' element={<SeatPage />} />
                <Route path='/slot' element={<SlotPage />} />
            </Routes>
        </React.Fragment>
    );
};

export default HomePage;