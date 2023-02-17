import { Box, Typography } from "@mui/material"

const Comment = ({ comment }) => {

    return (
        <Box pb={4}>
            <Typography variant="caption1">{comment.starts} stars</Typography>
            <Typography variant="h6">{comment.username}</Typography>
            <Typography variant="body1">{comment.description}</Typography>
        </Box>
    )
}

export default Comment