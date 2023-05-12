"use client"
import { Image } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { useState } from 'react';
import { Button, ButtonGroup, Stack } from '@chakra-ui/react'
import {
    Box,
    Flex,
    Text,
    Spacer,
    IconButton,
    Collapse,
    useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import HeroImg from '../public/images/hero_img.jpeg'

const Backpic = ({ children }) => {





    return (
        <Box
            bgImg={HeroImg.src}
            bgSize='cover'
            bgRepeat={'no-repeat'}

            minHeight={500}
        >
            {children}



        </Box>

    );


};

export default Backpic;
