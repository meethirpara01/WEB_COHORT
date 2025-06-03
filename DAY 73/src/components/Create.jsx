import { useState } from "react";

const Create = (props) => {

    console.log(props);
    
    const [FullName, setFullName] = useState("");
    const [Age, setAge] = useState(18);
    console.log(FullName);
    console.log(Age);

    const SubmitHandler = (e) => 
    {
        e.preventDefault();
        const newuser = {FullName, Age};
        console.log(newuser); 
    }


    return (
        <div>
            <h1>Register User</h1>
            <form onSubmit={SubmitHandler}>
                <input onChange={(e) => setFullName(e.target.value)} value={FullName} type="text" placeholder="Enter Name"/>
                <input onChange={(e) => setAge(e.target.value)} value={Age} type="text" placeholder="Age"/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Create;