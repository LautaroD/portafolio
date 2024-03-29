import { VStack, Heading, useColorMode, Image, Text, IconButton, HStack, Stack, Box } from "@chakra-ui/react";
import { FaGithub, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import vectorContact from "../assets/contact-vector.png";
import { SiMailDotRu } from "react-icons/si";

const ContactForm = () => {
    const { colorMode } = useColorMode();
    return (
        <Stack
            spacing={8}
            py={44}
            w={"90%"}
            maxW={"container.sm"}
            alignItems={"center"}
            alignContent={"center"}
            direction={["column", "column", "row", "row"]}
        >
            <VStack
                bg={colorMode === "dark" ? "brand.primary800" : "#f3f3ff"}
                borderRadius={10}
                boxShadow='md'
                alignItems={"flex"}
                px={8}
                gap={3}
                pb={8}
            >
                <Image src={vectorContact} alt='vector contact image' w={"55%"} mt={"-50px"} alignSelf={"center"} />
                <Heading as={"h3"} fontSize={"2xl"} opacity={0.8}>
                    Contact me
                </Heading>
                <HStack gap={2}>
                    <IconButton
                        as='a'
                        target='_blank'
                        href={""}
                        aria-label='GitHub'
                        variant={"outline"}
                        icon={<FaGithub fontSize='1.5rem' />}
                        color={"brand.secondary"}
                        opacity={0.8}
                    />
                    <Box>
                        <Text as={"span"} fontSize={"xs"} opacity={0.5}>
                            Github:
                        </Text>
                        <Text
                            as={"a"}
                            display={"block"}
                            href={"https://github.com/LautaroD"}
                            target={"_blank"}
                            _hover={{ color: "brand.secondary" }}
                        >
                            github.com/LautaroD
                        </Text>
                    </Box>
                </HStack>
                <HStack gap={2}>
                    <IconButton
                        as='a'
                        target='_blank'
                        href={""}
                        aria-label='LinkedIn'
                        variant={"outline"}
                        icon={<FaLinkedinIn fontSize='1.5rem' />}
                        color={"brand.secondary"}
                        opacity={0.8}
                    />
                    <Box>
                        <Text as={"span"} fontSize={"xs"} opacity={0.5}>
                            Linkedin:
                        </Text>
                        <Text
                            as={"a"}
                            display={"block"}
                            href={"https://www.linkedin.com/in/lautaro-darretche/"}
                            target={"_blank"}
                            _hover={{ color: "brand.secondary" }}
                        >
                            linkedin.com/in/lautaro-darretche/
                        </Text>
                    </Box>
                </HStack>
                <HStack gap={2}>
                    <IconButton
                        as='a'
                        target='_blank'
                        href={""}
                        aria-label='Email'
                        variant={"outline"}
                        icon={<SiMailDotRu fontSize='1.5rem' />}
                        color={"brand.secondary"}
                        opacity={0.8}
                    />
                    <Box>
                        <Text as={"span"} fontSize={"xs"} opacity={0.5}>
                            Email:
                        </Text>
                        <Text
                            as={"a"}
                            display={"block"}
                            href={"mailto:lautarodarretche@gmail.com"}
                            target={"_blank"}
                            _hover={{ color: "brand.secondary" }}
                        >
                            lautarodarretche@gmail.com
                        </Text>
                    </Box>
                </HStack>
                <HStack gap={2}>
                    <IconButton
                        as='a'
                        target='_blank'
                        href={""}
                        aria-label='Phone'
                        variant={"outline"}
                        icon={<FaPhoneAlt fontSize='1.5rem' />}
                        color={"brand.secondary"}
                        opacity={0.8}
                    />
                    <Box>
                        <Text as={"span"} fontSize={"xs"} opacity={0.5}>
                            Phone:
                        </Text>
                        <Text as={"a"} display={"block"} href={"tel:+542314623825"} target={"_blank"} _hover={{ color: "brand.secondary" }}>
                            +54 2314 623825
                        </Text>
                    </Box>
                </HStack>
            </VStack>
            {/* <FormSection /> */}
        </Stack>
    );
};

export default ContactForm;
