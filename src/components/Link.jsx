import '../stylesheets/Link.css'
import Notification from './Notification';

import IconButton from './IconButton';
import { FaCopy } from "react-icons/fa";
import { IoNavigate } from "react-icons/io5";

export default function Link({ 
    title,
    href,
    icon,
    setNotifications
}) 
{
  return (
        <div className="Link">
            <div className="Link-icon">
                <img src={
                    `https://www.google.com/s2/favicons?sz=256&domain=${href}`
                } alt={title} />
            </div>

            <div className="Link-content">
                <h3 className="Link-title">{title}</h3>
                <a className="Link-href" href={href} target="_blank" rel="noreferrer">{href}</a>
            </div>

            <div className="Link-cta">
                <IconButton onClick={() => {
                        window.open(href, '_blank')
                        setNotifications(notifications => [...notifications, <Notification key={notifications.length}
                            setNotifications={setNotifications}
                            message={`Lien ouvert : ${href}`} />])
                    }}>
                    <IoNavigate />
                </IconButton>
                <IconButton onClick={() => {
                    // si le navigateur est safari
                    if (navigator.vendor.includes('Apple')) {
                        // copier dans le presse-papier
                        // va savoir pourquoi ça marche mais on va pas se plaindre
                        const el = document.createElement('textarea')
                        el.value = href
                        document.body.appendChild(el)
                        el.select()
                        document.execCommand('copy')
                        document.body.removeChild(el)
                    } else {
                        navigator.clipboard.writeText(href)
                    }
                    setNotifications(notifications => [...notifications, <Notification key={notifications.length} 
                        setNotifications={setNotifications}
                        message={`Lien copié : ${href}`} />])
                }}>
                    <FaCopy />
                </IconButton>
            </div>
        </div>
    );
}