import React from 'react';
import './friends-name.styles.scss'

//functional component
const FriendsName = ({title, imageUrl}) => (
    <div style={{
        backgroundImage: `url(${imageUrl})`
    }} 
    className='friends-name'>
    <div className='content'>
        <h1 className='title'>{title}</h1>
        <span className='subtitle'>SHOP NOW</span>
    </div>
</div>
)

export default FriendsName;