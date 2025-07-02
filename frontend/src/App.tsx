import { useState } from 'react'
import './App.css'
import SignUp from './auth/SignUp'
import UserFeed from './userfeed/UserFeed'
function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return (
        <>
        {isLoggedIn ? (
            <UserFeed />
        ) : (
            <SignUp onSuccess={() => setIsLoggedIn(true)} />
        )}
        </>
    )
}

export default App
