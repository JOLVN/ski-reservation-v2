import SignupForm from "../../components/auth/SignupForm"
import { Box, Typography } from "@mui/material"

const SignupPage = () => {
    return (
        <Box>
            <Typography
                variant='h1'
            >
                Signup Page
            </Typography>

            <SignupForm />

        </Box>

    )
}

export default SignupPage