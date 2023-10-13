import { useState } from "react"

export default function SignUpForm({setToken}){
    // Sets the default state of the SignUpForm component
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null);

    // function for calling API when form data has been submitted.
    async function handleSubmit(e){
        e.preventDefault();
        
        try {
              const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup",  { 
                method: "POST", 
                headers: { 
                  "Content-Type": "application/json" 
                }, 
                body: JSON.stringify({ 
                  username: `${username}`, 
                  password: `${password}`, 
                })
            })   
            const result = await response.json();
            console.log(result);
            alert(`${result.message}`)
            setToken(result.token)
        }catch (error){
            setError(error.message)
        }
        
    }

    return (
      <>
        <h2>SignUpForm! </h2>

        {/* Creates a paragraph element if the API Post returns an error. */}
        { error && <p>{error}</p>}

        {/* When form is submitted, calls the handleSubmit function
            and passes it the values for username and password */}
        <form onSubmit={(handleSubmit)}>
        <label>
            Username: <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
            Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button>Submit</button>
        </form>
      </>
    )
}