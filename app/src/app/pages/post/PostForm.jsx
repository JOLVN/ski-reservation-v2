import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Button, FormGroup, TextField } from "@mui/material";
import PostService from "../../setup/services/post.service";

const PostForm = () => {

    const navigate = useNavigate()

    const { idPost, idShop } = useParams()
    const [post, setPost] = useState({})

    useEffect(() => {
        if (idPost) getPost(idPost)
    }, [])

    const getPost = async (idPost) => {
        try {
            const response = await PostService.getPostById(idPost)
            setPost(response)
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setPost({
            ...post,
            [name]: value
        })
    }

    const handleEdit = async () => {
        try {
            const response = await PostService.edit(idPost, post)
            console.log(response)
            navigate(`/post/${post._id}`)
        } catch (error) {
            console.log(error);
        }
    }

    const handleCreate = async () => {
        post.shop = idShop
        try {
            const response = await PostService.create(post)
            console.log(response)
            navigate(`/shop/${idShop}`)
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (idPost) {
            handleEdit()
        } else {
            handleCreate()
        }
    }


    return (
        <Box component="form" onSubmit={(e) => handleSubmit(e)} py={4}>

            <h1>
                {idPost ? "Edit post" : "Create post"}
            </h1>

            <FormGroup sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <TextField type="text" name="title" label="Post title" value={post?.title || ""} onChange={(e) => handleChange(e)} />

                <TextField type="text" name="description" label="Post description" value={post?.description || ""} onChange={(e) => handleChange(e)} />

                <TextField type="text" name="imageUrl" label="Post image url" value={post?.imageUrl || ""} onChange={(e) => handleChange(e)} />

                <TextField type="text" name="price" label="Price" value={post?.price || ""} onChange={(e) => handleChange(e)} />

                <TextField type="number" name="weight" label="Weight" value={post?.weight || ""} onChange={(e) => handleChange(e)} />

                <TextField type="number" name="size" label="Size" value={post?.size || ""} onChange={(e) => handleChange(e)} />

                <TextField type="text" name="style" label="Style" value={post?.style || ""} onChange={(e) => handleChange(e)} />

                <Button type="submit" variant="outlined">
                    {
                        idPost ? "Edit" : "Create"
                    }
                </Button>
            </FormGroup>

        </Box>
    )
}

export default PostForm