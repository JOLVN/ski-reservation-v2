import { Typography } from "@mui/material"
import { style } from "@mui/system"
import { Link } from "react-router-dom"

const NavbarItem = ({ path, label }) => {
    return (
        <Typography
            variant='p'
            component={Link}
            to={path}
            sx={{
                color: "primary.main",
                textDecoration: 'none',
                mx: 2
            }}
        >
            {label}
        </Typography>
    )
}

export default NavbarItem