import { Box, CardContent, Card, Typography, Grid } from "@mui/material"
import { useEffect, useState } from "react"
import BookingService from "../../setup/services/booking.service"
import PostService from "../../setup/services/post.service"
import ShopService from "../../setup/services/shop.service"

const Bookings = () => {

    const [bookings, setBookings] = useState({})

    useEffect(() => {
        fetchBookings()
    }, [])

    const fetchBookings = async () => {
        try {
            const response = await BookingService.getAll()
            for (const booking of response) {
                const post = await PostService.getPostById(booking.post)
                const shop = await ShopService.getShopById(post.shop)
                booking.shop = shop
                booking.post = post
            }
            console.log(response)
            setBookings(response)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Box>
            <h1>Bookings</h1>

            {
                bookings.length > 0 && (
                    bookings.map((booking) => (
                        <Box my={4}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6" component="div">
                                        {booking.telephoneNumber}
                                    </Typography>
                                    <Typography>
                                        Post : {booking.post?.title}
                                    </Typography>
                                    <Typography>
                                        Shop : {booking.shop?.name}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>

                    ))
                )
            }
        </Box>
    )
}

export default Bookings