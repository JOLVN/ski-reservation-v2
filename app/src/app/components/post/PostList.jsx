import { Grid } from "@mui/material"
import { Box } from "@mui/material"
import { useEffect, useState } from "react"
import PostService from "../../setup/services/post.service"
import PostCardMain from "./card/PostCardMain"

const PostList = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetchAllPosts()
    }, [])

    const fetchAllPosts = async () => {
        try {
            const response = await PostService.getAll()
            setPosts(response.products)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <Box>
                <Grid container spacing={2}>
                    {posts.map((post) =>
                        <Grid item xs={12} sm={6} md={4} key={post.id}>
                            <PostCardMain post={post} />
                        </Grid>
                    )}
                </Grid>
            </Box>
        </div>
    )
}

export default PostList