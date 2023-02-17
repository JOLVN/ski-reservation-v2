import * as React from 'react'
import { Card, Typography, Box } from '@mui/material'
import { Link } from 'react-router-dom';

export default function Shop({ shop }) {
    return (
        <Card
            sx={{
                width: '100%',
                cursor: 'pointer',
                backgroundColor: '#fff',
                hover: {
                    boxShadow: '0 0 11px #fff'
                }
            }}>
            <Box
                component={Link}
                to={`/shop/${shop._id}`}
                sx={{ textDecoration: 'none' }}
            >
                <Typography variant="h6" py={4}>
                    {shop.name}
                </Typography>
            </Box>
        </Card>
    )
}