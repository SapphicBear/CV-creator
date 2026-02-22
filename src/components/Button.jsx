export default function Button({ text = "Default", onClick, styles, type = "button", id }) {
    
    return (
        <button
            id={id}
            type={type}
            onClick={onClick}
            style={{styles}}
        >
            {text}
        </button>
    )
}