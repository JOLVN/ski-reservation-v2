import { Grid, TextField } from "@mui/material"
import { Box } from "@mui/material"
import { useEffect, useState } from "react"
import PostService from "../../setup/services/post.service"
import PostCardMain from "./card/PostCardMain"

const PostList = () => {

    const [posts, setPosts] = useState([])
    const [postsFilters, setPostsFilters] = useState([]);
    const [searching, setSearching] = useState(false)

    useEffect(() => {
        fetchAllPosts()
    }, [])

    const handleSearch = (e) => {
        const value = e.target.value
        if (value.length > 0) {
            setSearching(true)
            const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(value.toLowerCase()))
            setPostsFilters(filteredPosts)
        } else {
            setSearching(false)
            setPostsFilters([])
        }
    }

    const fetchAllPosts = async () => {
        try {
            const response = await PostService.getAll()
            setPosts(response)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>

            <Box my={4}>
                <TextField onChange={(e) => handleSearch(e)} label="Search" variant="outlined" />
            </Box>

            <Box pb={8} >
                <Grid container spacing={2}>
                    {
                        searching ? postsFilters.map(post => (
                            <Grid item xs={12} sm={12} md={6} key={post._id}>
                                <PostCardMain post={post} />
                            </Grid>
                        )) :
                            posts.map(post => (
                                <Grid item xs={12} sm={12} md={6} key={post._id}>
                                    <PostCardMain post={post} />
                                </Grid>
                            ))
                    }
                </Grid>
            </Box>
        </div>
    )
}

export default PostList