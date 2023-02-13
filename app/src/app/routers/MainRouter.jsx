import Homepage from "../pages/Homepage"
import { Routes, Route } from "react-router-dom"
import SigninPage from "../pages/auth/SigninPage"
import SignupPage from "../pages/auth/SignupPage"

const Mainrouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/auth/signin" element={<SigninPage />} />
                <Route path="/auth/signup" element={<SignupPage />} />
            </Routes>
        </>
    );
}

export default Mainrouter