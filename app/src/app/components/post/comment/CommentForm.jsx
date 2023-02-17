import { Box, Button, Typography, TextField, MenuItem, Select, InputLabel } from "@mui/material"
import { useState } from "react"
import CommentService from "../../../setup/services/comment.service"

const CommentForm = ({ id, fetchPost }) => {
    const [comment, setComment] = useState({
        starts: 0
    })

    const handleComment = (e) => {
        const { name, value } = e.target
        setComment({ ...comment, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        comment.post = id
        try {
            const response = await CommentService.createComment(comment)
            fetchPost()
            if (response) setComment({})
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Box component="form" onSubmit={(e) => handleSubmit(e)} m={2} pr={2} sx={{ borderRight: '1px solid white' }} >

            <Box my={2}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2rem', textAlign: 'left' }}>
                    <TextField type="text" name="username" onChange={(e) => handleComment(e)} label="Name" />
                    <TextField type="textarea" name="description" onChange={(e) => handleComment(e)} label="Comment" />

                    <Box mb={2}>

                        <InputLabel id="demo-simple-select-label">Rating</InputLabel>
                        <Select
                            label="Rating"
                            value={comment.starts}
                            name="starts"
                            onChange={(e) => handleComment(e)}
                            sx={{ width: '50%' }}
                        >
                            <MenuItem value={0}>0</MenuItem>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                        </Select>
                    </Box>
                </Box>

                <Button mt={2} type="submit" variant="contained">Comment</Button>
            </Box >
        </Box >
    );
}

export default CommentForm