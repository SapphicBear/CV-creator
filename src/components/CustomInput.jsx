export default function CustomInput( { onChange, value, className, type = "text", id = "", labelName }) {
    return (
        <label
            className={className}
            id={id}
            value={labelName}
        >
            <input 
                placeholder={labelName}
                value={value}
                onChange={onChange}
                className={className}
                type={type}
            />
        </label>
    )
}