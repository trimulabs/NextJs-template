"use client"
import { Image } from '@chakra-ui/react'
import styles from './page.module.css'
import { Container } from '@chakra-ui/react'
import { useState } from 'react';
import { Flex, Spacer, Center, Square } from '@chakra-ui/react'
import { Button, ButtonGroup, Stack } from '@chakra-ui/react'
import {
    Box,
    Text,
    IconButton,
    Collapse,
    useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Islam = () => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Flex color='grey' height={300}>


            <Center w='800px' bg='green.500'>
                <Text> <h2>WELCOME TO OUR ISLAMIC CENTRE</h2>

                    Corem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text>
            </Center>


            <Box flex='1' bg='white' >

                <Image src="public/Khana_Kaaba.svg" alt='Dan Abramov' width={300} height={300} />

            </Box>
        </Flex>

    );
};

export default Islam;
