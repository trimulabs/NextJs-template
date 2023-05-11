"use client"

import { AbsoluteCenter, Image, useDisclosure } from '@chakra-ui/react'
import { useState } from 'react';

import {
    Box,
    Text,
} from '@chakra-ui/react';
const Tomb = () => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Box >
            <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
            <Text position={'absolute'} bottom={0} left={0} right={0} p={4} color={'white'}>text goes here</Text>


        </Box>

    );
};

export default Tomb;
