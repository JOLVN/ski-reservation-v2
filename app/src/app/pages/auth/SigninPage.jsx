import SigninForm from "../../components/auth/SigninForm"

const { Box, Typography, FormGroup, TextField } = require("@mui/material")

const SigninPage = () => {
    return (
        <Box>
            <Typography
                variant='h1'
            >
                Signin Page
            </Typography>

            <SigninForm />

        </Box>

    )
}

export default SigninPage