import { Routes, Route } from "react-router-dom"
import Homepage from "../pages/Homepage"
import Post from "../pages/post/Post"
import PostForm from "../pages/post/PostForm"
import SigninPage from "../pages/auth/SigninPage"
import SignupPage from "../pages/auth/SignupPage"
import Shops from "../pages/shop/Shops"
import Shop from "../pages/shop/Shop"
import Bookings from "../pages/booking/Bookings"

const Mainrouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/post/:id" element={<Post />} />
                <Route path="/post/edit/:idPost" element={<PostForm />} />
                <Route path="/shop/create/:idShop" element={<PostForm />} />
                <Route path="/shops" element={<Shops />} />
                <Route path="/shop/:id" element={<Shop />} />
                <Route path="/bookings" element={<Bookings />} />
                <Route path="/auth/signin" element={<SigninPage />} />
                <Route path="/auth/signup" element={<SignupPage />} />
            </Routes>
        </>
    );
}

export default Mainrouter