import { Box, Button, Grid, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { Link, useParams } from 'react-router-dom'
import PostCardMain from "../../components/post/card/PostCardMain"
import ShopService from "../../setup/services/shop.service"


const Shop = () => {

    const { id } = useParams()

    const [shop, setShop] = useState({})

    const fetchShop = async (id, setShop) => {
        try {
            const response = await ShopService.getShopById(id)
            setShop(response)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchShop(id, setShop)
    }, [])

    return (
        <Box>
            <h1>{shop.name}</h1>

            <Button
                component={Link}
                to={`/shop/create/${shop._id}`}
                variant="outlined"
                sx={{ textAlign: 'left' }}
            >
                New post
            </Button>

            <Box>
                <Typography variant="h5" py={2}>
                    Posts
                </Typography>

                {shop.posts && shop.posts.map((post) => (
                    <Box py={2}>
                        <PostCardMain post={post} />
                    </Box>
                ))}
            </Box>


        </Box >
    )
}

export default Shop