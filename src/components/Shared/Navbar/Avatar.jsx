import React from 'react';
import profile from '../../../assets/images/placeholder.jpg'

const Avatar = () => {
    return (
        <img src={profile} className='rounded-full' height='30' width='30' alt="Profile" />
    );
};

export default Avatar;