import '../stylesheets/Link.css'

export default function Link({ 
    title,
    href,
    icon
}) 
{
  return (
        <div className="Link">
            <div className="Link-icon">
            </div>

            <div className="Link-content">
                <h3 className="Link-title">{title}</h3>
                <a className="Link-href" href={href} target="_blank" rel="noreferrer">{href}</a>
            </div>

            <div className="Link-cta">
                <a href={href} target="_blank" rel="noreferrer">Visit</a>
            </div>
        </div>
    );
}