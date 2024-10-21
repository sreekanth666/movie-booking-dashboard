import React, { FC } from 'react';

interface ProfilePageProps {

}

const ProfilePage: FC<ProfilePageProps> = ({ }) => {
    return (
        <React.Fragment>
            <div className='flex flex-col items-center justify-center'>
                <div className="container mt-5 grid grid-cols-12 bg-white rounded-2xl">
                    <div className="">

                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ProfilePage;