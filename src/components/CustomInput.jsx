
export default function CustomInput( { onChange, value, className, type = "text", id = "", labelName }) {
    return (
        <label
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
            />
        </label>
    )
}