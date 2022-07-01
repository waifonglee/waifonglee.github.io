import { Box, Center, Flex, Text, VStack, LinkBox, LinkOverlay} from "@chakra-ui/react"

const Projects = () => {
    return (
        <VStack>
            <Text fontSize={['30px', '50px', '60px', '70px', '80px']} color='black' margin='1em'> 02. Projects </Text>
            <Flex flexDirection={['column', 'row']}>
                <LinkBox w='sm' p='5' borderWidth='1px' rounded='md'>
                    <Center flexDirection='column'>
                        <Text fontWeight='bold'>
                            This Website
                        </Text>
                        <Text>
                            Built with React & Chakra UI                        
                        </Text>
                        <Text>
                            Drawings done on Figma & Autodesk Sketchbook
                        </Text>
                        <Text size='md' my='2'>
                        <LinkOverlay href='https://github.com/waifonglee/my-website'>
                            view on github
                        </LinkOverlay>
                    </Text>
                    </Center>
                </LinkBox>

                <LinkBox w='sm' p='5' borderWidth='1px' rounded='md'>
                    <Center flexDirection='column'>
                        <Text fontWeight='bold'>
                            PlanNUS
                        </Text>
                        <Text>
                            Built with React & Chakra UI                        
                        </Text>
                        <Text>
                            Drawings done on Figma & Autodesk Sketchbook
                        </Text>
                        <Text size='md' my='2'>
                        <LinkOverlay href='https://github.com/waifonglee/my-website'>
                            view on github
                        </LinkOverlay>
                    </Text>
                    </Center>
                </LinkBox>
                
            </Flex>
        </VStack>
    )
}







export default Projects