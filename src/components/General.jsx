// General information, name email and phone number section
import CustomInput from "./CustomInput"

function General({ generalArea, disabled }) {
    return (
        <>
        {generalArea.map((item, i) => {
            return (
                <CustomInput 
                key={[item.className, i].join("_")} 
                className={item.className}
                labelName={item.labelName}
                id={crypto.randomUUID()}
                onChange={item.onChange}
                value={item.value}
                disabled={disabled}
            />
            );
        })}           
        </>
    );
}

export default General