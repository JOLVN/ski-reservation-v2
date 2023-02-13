import { Box } from "@mui/material"
import { Container } from "@mui/system"
import NavbarMain from "../components/ui/NavbarMain"

const MainLayout = ({ children }) => {
    return (
        <Box>
            <Container maxWidth="sm">
                <NavbarMain></NavbarMain>
                {children}
            </Container>
        </Box>
    )
}

export default MainLayout