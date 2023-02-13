import { Box, Button } from "@mui/material"
import UserAuthInputs from "../user/form/UserAuthInputs"

const SigninForm = () => {
    return (
        <Box component='form'>
            <UserAuthInputs />

            <Button
                variant='contained'
            >
                Signin
            </Button>
        </Box>
    )
}

export default SigninForm
