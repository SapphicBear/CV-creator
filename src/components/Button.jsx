export default function Button({ text = "Default", onClick, styles, type = "button", id, disabled }) {
    
    return (
        <button
            id={id}
            type={type}
            onClick={onClick}
            style={{styles}}
            disabled={disabled}
        >
            {text}
        </button>
    )
}