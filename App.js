import React from "react";
import { Box, Center, NativeBaseProvider } from "native-base";

const Example = () => {
    return <Box>
        <Box alignSelf="center" bg="primary.500" _text={{
            fontSize: "md",
            fontWeight: "medium",
            color: "warmGray.50",
            letterSpacing: "lg"
        }}>
            This is a Box
        </Box>
    </Box>;
};

export default () => {
    return (
        <NativeBaseProvider>
            <Center flex={1} px="3">
                <Example />
            </Center>
        </NativeBaseProvider>
    );
};

