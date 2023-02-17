import { Box, Button, CardMedia, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import PostService from "../../setup/services/post.service"
import { Link, useParams } from 'react-router-dom'
import CommentForm from "../../components/post/comment/CommentForm"
import Comment from "../../components/post/comment/Comment"
import ShopService from "../../setup/services/shop.service"

const Post = () => {

    const { id } = useParams()

    const [post, setPost] = useState([])
    const [shop, setShop] = useState({})
    const [averageRate, setAverageRate] = useState(0)

    const fetchPost = async () => {
        try {
            const response = await PostService.getPostById(id)
            console.log(response)
            setPost(response)
        } catch (error) {
            console.log(error)
        }
    }

    const fetchShop = async (id) => {
        try {
            const response = await ShopService.getShopById(id)
            setShop(response)
        } catch (error) {
        }
    }

    useEffect(() => {
        fetchPost()
    }, [])

    const getAverageRate = () => {
        let rate = 0;
        let total = 0;
        post.comments && post.comments.map((comment) => {
            rate += Number(comment.starts)
            total += 1
        })
        let average = Math.round(rate / total)
        setAverageRate(average)
    }

    useEffect(() => {
        getAverageRate()
        fetchShop(post.shop, setShop)
    }, [post])


    return (
        <Box sx={{ textAlign: 'left' }}>

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button
                    component={Link}
                    to="/"
                    sx={{ display: 'inline-block', margin: '1rem 0' }}
                    variant="text">
                    Back
                </Button>
                <Button
                    component={Link}
                    to={`/post/edit/${post._id}`}
                    sx={{ display: 'inline-block', margin: '1rem 0' }}
                    variant="outlined">
                    Edit
                </Button>
            </Box>


            <Box sx={{ textAlign: 'center', display: 'flex' }}>
                <Box sx={{ width: '50%' }}>
                    <CommentForm id={id} fetchPost={fetchPost}></CommentForm>
                </Box>

                <Box sx={{ width: '100%' }}>
                    <CardMedia image={post.imageUrl} alt="" sx={{ height: 300 }} />

                    <Box mt={4}>
                        <Typography variant="caption">
                            {averageRate ? `${averageRate} stars` : `No comments yet`}
                        </Typography>
                        <Typography variant="h3">
                            {post.title}
                        </Typography>
                        <Typography variant="h4">
                            From {shop.name}
                        </Typography>
                        <Typography variant="body1">
                            {post.description}
                        </Typography>


                        <Box mt={4} sx={{ textAlign: 'left' }}>
                            <Typography variant="body1">
                                Price : {post.price} €
                            </Typography>
                            <Typography variant="body1">
                                Size : {post.size} cm
                            </Typography>
                            <Typography variant="body1">
                                Weight : {post.weight} Kg
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                {
                    post.comments?.length > 0 && (
                        <Box>
                            <Typography variant="h4" mt={8} color={'primary'} sx={{ textAlign: 'center' }}>
                                Comments ({post.comments.length})
                            </Typography>
                            {
                                post.comments.map((comment) => {
                                    return (
                                        <Comment comment={comment} key={comment._id}></Comment>
                                    )
                                })
                            }
                        </Box>
                    )
                }
                {
                    post.bookings?.length > 0 && (
                        <Box>
                            <Typography variant="h4" mt={8} color={'primary'} sx={{ textAlign: 'center' }}>
                                Bookings ({post.bookings.length})
                            </Typography>
                            {
                                post.bookings.map((booking) => {
                                    return (
                                        <Box>
                                            <Typography variant="body1">
                                                {booking.telephoneNumber}
                                            </Typography>
                                        </Box>
                                    )
                                })
                            }
                        </Box>
                    )
                }
            </Box>



        </Box>
    )
}

export default Post