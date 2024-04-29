import React from 'react';
import { useState, useEffect } from 'react';

export default function Notification({ 
    setNotifications,
    message
}) {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setVisible(false);
            setTimeout(() => {
                setNotifications(notifications => notifications.filter(notification => notification.props.message !== message));
            }, 500);
        }, 3000);
    }, [setNotifications, message]);
    return (
        <div className={`Notification ${visible ? 'visible' : 'hidden'}`}>
            {message}
        </div>
    );
}