import React, {useState} from "react";

const Input2 = () => {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        tel: ""
    });

    const {name, email, tel} = inputs;

    const onChange = (e) => {
        const value = e.target.value;
        const id = e.target.id;

        // inputs[id] = value;
        setInputs({
            ...inputs,
            [id]: value
        })
    };

    return (
        <div>
            <div>
                <label>
                    이름
                    <input type="text" id = "name" value = {name} onChange={onChange}/>
                </label>                
            </div>
            <div>
                <label>
                    이메일
                    <input type="email" id = "email" value = {email} onChange={onChange}/>
                </label>                
            </div>
            <div>
                <label>
                    전화번호
                    <input type="tel" id = "tel" value = {tel} onChange={onChange}/>
                </label>                
            </div>
            <p>이름 : {name}</p>
            <p>이메일 : {email}</p>
            <p>전화번호 : {tel}</p>
        </div>
    );
};

export default Input2;