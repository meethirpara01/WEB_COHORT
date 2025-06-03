import { useState } from "react";

const Create = (props) => {

    console.log(props);
    
    const [FullName, setFullName] = useState("");
    const [Age, setAge] = useState(18);
    console.log(FullName);
    console.log(Age);

    const [Completed, setCompleted] = useState(false);
    const [gender, setGender] = useState("male");
    const [city, setCity] = useState("mumbai");   

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
                <input checked={Completed} onChange={(e) => setCompleted(e.target.checked)} type="checkbox"/> Completed
                <br />
                <input checked={gender == 'male' && true} value= "male" onChange={(e) => setGender(e.target.value)} type="radio" /> Male
                <input checked={gender == 'female' && true} value= "female" onChange={(e) => setGender(e.target.value)} type="radio" /> Female
                <br />
                <select value={city} onChange={(e) => setCity(e.target.value)}>
                    <option value="delhi">Delhi</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="hedrabad">Heydrabad</option> 
                </select>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Create;