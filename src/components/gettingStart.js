import React  from "react";

import { Box , VStack, Image  } from "native-base";

const gettingStart = () => {
    return (
        <Box>
            <VStack space={1} alignItems="center">
                <Image
                    source={{
                        uri: 'https://imgz.io/images/2022/03/21/logomain.png',
                    }}
                    alt="Alternate Text"
                    size="2xl"
                />
            </VStack>
        </Box>
    );
};

export default gettingStart;