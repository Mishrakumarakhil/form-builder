import React from 'react'
import { companyLogoSrc } from '../../constants/constants';

export const Header = () => {
    return (
        <div className='header'>
            <img src={companyLogoSrc} alt="Company Logo" loading="lazy" />
        </div>
    )
}
