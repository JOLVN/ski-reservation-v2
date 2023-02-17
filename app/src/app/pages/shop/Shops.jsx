import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import ShopService from "../../setup/services/shop.service";
import ShopCard from "../../components/post/card/ShopCard";

const Shops = () => {
    const [shops, setShops] = useState([]);

    const fetchShops = async () => {
        try {
            const response = await ShopService.getAll()
            setShops(response);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchShops();
    }, []);

    return (
        <>
            <h1>Shops</h1>
            <Box>
                {shops.map((shop) => (
                    <ShopCard shop={shop} />
                ))}
            </Box>
        </>
    )
}

export default Shops