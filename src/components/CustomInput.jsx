export default function CustomInput( { className, type = "text", id = "", labelName, onChange, value, disabled }) {
    
    return (
        <><label
            className={className}
            id={id}
            value={labelName}
        >
            <input 
                id={className}
                placeholder={labelName}
                value={value}
                type={type}
                onChange={onChange}
                disabled={disabled}
            />
        </label>
        </>
    )
}