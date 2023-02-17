import * as React from 'react'
import { Card, CardActions, CardContent, CardMedia, Typography, Box, Chip } from '@mui/material'
import { Link } from 'react-router-dom';

export default function PostCardMain({ post }) {
    return (
        <Card
            sx={{
                width: '100%',
                cursor: 'pointer',
                height: '100%',
                hover: {
                    boxShadow: '0 0 11px rgba(33,33,33,.2)'
                }
            }}>
            <Box
                component={Link}
                to={`/post/${post._id}`}
                sx={{
                    textDecoration: 'none',
                    color: 'inherit',
                }}
            >
                <CardMedia
                    sx={{ height: 100 }}
                    image={post.imageUrl}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {post.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {post.description}
                    </Typography>
                </CardContent>
                <CardActions sx={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <Box sx={{
                        display: 'flex',
                        gap: 1
                    }}>
                        <Typography >
                            {post.price}€
                        </Typography>|
                        <Typography >
                            {post.size} cm
                        </Typography>
                    </Box>
                    <Chip label={post.style} color="primary"></Chip>
                </CardActions>
            </Box>
        </Card>
    );
}