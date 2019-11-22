import React from 'react';

const Notification = (props) => {
    return (
        <div style={{ visibility: props.isVisible ? 'visible' : 'hidden' }} className={`notification notification-${props.notification.status}`}>
            <p className='x-s'>{props.notification.message}</p>
        </div>
    );
}

export default Notification;