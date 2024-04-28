import '../stylesheets/Button.css';

export default function IconButton({
    onClick,
    children,
}) 
{
    return (
        <button className="IconButton" href="#" onClick={onClick}>
            {children}
        </button>
    );
}