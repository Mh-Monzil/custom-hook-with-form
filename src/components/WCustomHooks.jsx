import useInputState from "./useInputState";


const WCustomHooks = () => {
    // const [name, handleNameChange] = useInputState('');
    const nameState = useInputState('');
    const emailState = useInputState('');
    const passwordState = useInputState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(nameState.value);
        console.log(emailState.value);
        console.log(passwordState.value);
        console.log(user);
    }
    const user = {
        name: nameState.value,
        email: emailState.value,
        password: passwordState.value,
    }
    

    return (
            <form onSubmit={handleSubmit}>
                <input {...nameState} type="text" name="name"/>
                <br />
                <br />
                <input {...emailState} type="email" name="email"/>
                <br />
                <br />
                <input {...passwordState} type="password" name="password"/>
                <br />
                <input type="submit" value="Submit" />
            </form>
    );
};

export default WCustomHooks;