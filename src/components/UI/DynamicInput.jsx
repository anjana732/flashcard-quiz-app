import Input from "./Input";
import DropDown from "./Dropdown";

function DynamicInput({type,option}){


    if(type === "text"){
        return <Input />
    }else if(type === "dropdown"){
        return <DropDown list={option}/>
    }

}

export default DynamicInput;