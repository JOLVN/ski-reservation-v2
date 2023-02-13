import * as React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material'

export default function PostCardMain({ post }) {
    return (
        <Card sx={{ width: '100%' }}>
            <CardMedia
                sx={{ height: 140 }}
                image={post.tumbnail}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {post.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button variant='contained' size="small">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}