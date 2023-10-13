import { useState } from 'react'
import Authenticate  from './components/Authenticate'
import SignUpForm from './components/SignUpForm'
import './App.css'

// Parent component for rendering the state of the application
function App() {
  // sets the default state of render with token, and setToken. 
  // values are updated through the Authenticate and SignUp Components
  // respectively.
  const [token, setToken] = useState(null)

  return (
    <>
      {/* calls the SignUpForm component and passes it the prop setToken */}
      <SignUpForm setToken={setToken} />
      {/* calls the Authenticate component and passes it the prop token */}
      <Authenticate token={token} />
    </>
  )
}

export default App
