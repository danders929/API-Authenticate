import { useState } from "react";

export default function Authenticate({token}){
    //sets the default state of the Authenticate component.
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    // function for API authentication when "Authenticate" button is clicked
    async function handleClick(e) {
       e.preventDefault();

        try{
          const response = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate', 
            { 
              method: "GET", 
              headers: { 
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}` 
              }
            })
          const result = await response.json();
          setSuccessMessage(result.message);
        //Error handling
        } catch (error) {
          setError(error.message);
        }
    }

    return ( 
        <div>
        <h2>Authenticate!</h2>

        {/* if successMessage or error values are truthy return their values respectively */}
        {successMessage && <p>{successMessage}</p>}
        {error && <p>{error}</p>}

        <button onClick={handleClick}>Authenticate </button> 
        </div>
    )
  }
