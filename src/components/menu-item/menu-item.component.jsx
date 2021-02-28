import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
    console.log(history)
    console.log(linkUrl)
    console.log(match)
    console.log(`${match.url}${linkUrl}`)
    return (
        <div className={`${size} menu-item`} onClick={() => { history.push(`${match.url}${linkUrl}`) }}>
            <div 
                className='background-image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }} 
            />
            <div className='content'>
                <div className='title'>{title}</div>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    );
};
export default withRouter(MenuItem);