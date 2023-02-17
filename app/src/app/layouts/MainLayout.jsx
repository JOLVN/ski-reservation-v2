import { Box } from "@mui/material"
import { Container } from "@mui/system"
import NavbarMain from "../components/ui/NavbarMain"

const MainLayout = ({ children }) => {
    return (
        <Box sx={{
            backgroundColor: '#333',
            color: '#fff',
            minHeight: '100vh',
            margin: 0,
        }}>
            <NavbarMain></NavbarMain>
            <Container>
                {children}
            </Container>
        </Box>
    )
}

export default MainLayout