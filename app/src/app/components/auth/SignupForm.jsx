import { Box, Button, FormGroup, TextField } from "@mui/material"
import UserAuthInputs from "../user/form/UserAuthInputs"

const SignupForm = () => {
    return (
        <Box component='form'>

            <UserAuthInputs />

            <FormGroup>
                <TextField
                    label='Confirm Password'
                    variant='outlined'
                />
            </FormGroup>

            <Button
                variant='contained'
            >
                Signup
            </Button>
        </Box>
    )
}

export default SignupForm
