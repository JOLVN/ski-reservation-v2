import { Box, Button, FormGroup, TextField } from "@mui/material"
import UserAuthInputs from "../user/form/UserAuthInputs"

const SignupForm = () => {
    return (
        <Box component='form'>

            <UserAuthInputs />

            <FormGroup>
                <Box my={2}>
                    <TextField
                        sx={{ width: '100%' }}
                        label='Confirm Password'
                        variant='outlined'
                    />
                </Box>
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
