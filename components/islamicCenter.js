"use client"
import { Image } from '@chakra-ui/react'

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

import kaba from "../public/images/Khana_Kaaba.jpeg"

const Islam = () => {


    return (

        <Box >
            <Box
                backgroundColor="rgba(0.0)"
                p={150}
                pl={5}

                mr={250}
                borderRadius="md"
                color="#525252"
                textAlign="center"
            >
                <h1
                    font-size={28}
                    font-weight={400}
                    line-height={36}
                    letter-spacing={0.07}
                    text-align={0}>
                    WELCOME TO OUR ISLAMIC CENTRE
                </h1>
                <p
                >Corem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

                <Image src={kaba.src} height={500} width={300} mr={0} ml={950} p={0} ></Image>
            </Box>




        </Box>
        /* <Flex color='grey' height={300}>
 
 
             <Center w='800px' bg='green.500'>
                 <Text> <h2>WELCOME TO OUR ISLAMIC CENTRE</h2>
 
                     Corem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text>
             </Center>
 
 
             <Box flex='1' bg='white' >
 
                 <Image src="public/Khana_Kaaba.svg" alt='Dan Abramov' width={300} height={300} />
 
             </Box>
         </Flex>*/

    );
};

export default Islam;
