import { Box } from "@mui/system";
import Image from "next/image";
import React from "react";

const Partners = () => {
    return (
        <>
            <Box
                display="flex"
                justifyContent={"space-around"}
                alignItems={"center"}
            >
                <Box>
                    <Image
                        src="/static/partners/partner1.png"
                        width={400}
                        height={150}
                        borderRadius={5}
                    />
                </Box>
                <Box display={"block"}>
                    <Image
                        src="/static/partners/partner2.png"
                        width={250}
                        height={150}
                        marginLeft={50}
                        borderRadius={5}
                    />
                </Box>
            </Box>
        </>
    );
};

export default Partners;
