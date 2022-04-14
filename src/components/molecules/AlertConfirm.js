import React from "react";
import { AlertDialog, Button, Center, NativeBaseProvider,Text,VStack } from "native-base";

const AlertConfirm = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const onClose = () => setIsOpen(false);

    const cancelRef = React.useRef(null);
    return <Center>
        <Button backgroundColor={"#FF975C"} borderRadius={25} width={138.84} height={46} onPress={() => setIsOpen(!isOpen)}>
            Save
        </Button>
        <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose} borderRadius={"200"}>
            <AlertDialog.Content>
                <VStack  justifyContent="center" space={"1"}>
                    <AlertDialog.Body alignItems={"center"} marginTop={"10%"} ><Text fontSize={"xl"} bold>Comfirm you change ?</Text></AlertDialog.Body>
                    <AlertDialog.Body alignItems={"center"}>
                        <Text color={"#898989"} >  Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                    </AlertDialog.Body>
                </VStack>
                <AlertDialog.Body alignItems={"center"} >
                    <Button.Group >
                        <Button variant="unstyled" colorScheme="coolGray" onPress={onClose} ref={cancelRef} paddingRight={"20%"}>
                            <Text color={"#FF975C"}>Cancel</Text>
                        </Button>
                        <Button backgroundColor={"#FF975C"} borderRadius={25} onPress={onClose}>
                            Comfirm
                        </Button>
                    </Button.Group>
                </AlertDialog.Body>
            </AlertDialog.Content>
        </AlertDialog>
    </Center>;
};

export default AlertConfirm;
