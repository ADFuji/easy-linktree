import '../stylesheets/Link.css'

import IconButton from './IconButton';
import { FaCopy } from "react-icons/fa";
import { IoNavigate } from "react-icons/io5";

export default function Link({ 
    title,
    href,
    icon
}) 
{
  return (
        <div className="Link">
            <div className="Link-icon">
                <FaCopy />
            </div>

            <div className="Link-content">
                <h3 className="Link-title">{title}</h3>
                <a className="Link-href" href={href} target="_blank" rel="noreferrer">{href}</a>
            </div>

            <div className="Link-cta">
                <IconButton onClick={() => {window.open(href, '_blank')}}>
                    <IoNavigate />
                </IconButton>
                <IconButton onClick={() => {navigator.clipboard.writeText(href)}}>
                    <FaCopy />
                </IconButton>
            </div>
        </div>
    );
}