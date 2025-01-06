import { useState } from "react";

function Input(){

    const [inputField, setInputField] = useState("");

    return (
        <>
        <div className="form-container">
            <h2>Two-binding</h2>
            <input className="input-field" type="text" value={inputField} onChange={(e)=>setInputField(e.target.value)} />
            {inputField && (<p style={{}}><code>Typing:</code>{inputField}</p>)}
        </div>
        </>
    )
}
export default Input;