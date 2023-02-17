import { Box, FormGroup, TextField } from "@mui/material"

const UserAuthInputs = () => {
    return (
        <>
            <FormGroup>
                <Box my={2}>
                    <TextField
                        sx={{ width: '100%' }}
                        label='Email'
                        variant='outlined'
                    />
                </Box>
                <Box my={2}>
                    <TextField
                        sx={{ width: '100%' }}
                        label='Password'
                        variant='outlined'
                    />
                </Box>
            </FormGroup>
        </>
    )
}

export default UserAuthInputs