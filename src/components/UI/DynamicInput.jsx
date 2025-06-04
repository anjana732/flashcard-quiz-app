import Input from "./Input";
import DropDown from "./Dropdown";

function DynamicInput({config, value, onChange}){

    const {type, option, name} = config;
    
    function handleOnChange(e){
       
        onChange(e);
    }

    if(type === "text"){
        return <Input type="number" name={name} value={value} onChange={onChange} />
    }else if(type === "dropdown"){
        return <DropDown name={name} list={option} value={value} onChange={handleOnChange}/>
    }

}

export default DynamicInput;