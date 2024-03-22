import { useState } from "react";

// without custom hooks 
const WoCustomHooks = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name);
        console.log(email);
        console.log(password);
    }

    

    return (
        <div>
            <div>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setName(e.target.value)} type="text" name="name"/>
                <br />
                <br />
                <input onChange={(e) => setEmail(e.target.value)} type="text" name="email"/>
                <br />
                <br />
                <input onChange={(e) => setPassword(e.target.value)} type="text" name="phone"/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
        </div>
    );
};

export default WoCustomHooks;