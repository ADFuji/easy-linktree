import '../stylesheets/Button.css';

export default function Button({
    title,
    href,
}) 
{
    return (
        <a className="Button" href={href}>
            <div className="Button">
                {title}
            </div>
        </a>
    );
}