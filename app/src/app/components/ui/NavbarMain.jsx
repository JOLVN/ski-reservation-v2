import { Box } from '@mui/material'
import NavbarItem from './NavbarItem'

const ConfigNavbarItems = [
    {
        path: '/',
        label: 'Home'
    },
    {
        path: '/auth/signin',
        label: 'Signin'
    },
    {
        path: '/auth/signup',
        label: 'Signup'
    }
]

const NavbarMain = () => {
    return (
        <Box
            component={'nav'}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                p: 2
            }}
        >
            {ConfigNavbarItems.map((item, index) => (
                <NavbarItem
                    key={index}
                    path={item.path}
                    label={item.label}
                />
            ))}
        </Box>
    )
}

export default NavbarMain