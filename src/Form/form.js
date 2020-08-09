import React,{ Fragment} from 'react';
import { Box,Input,Flex,Radio ,Select,FormControl, FormLabel,Text,Button, Grid} from '@chakra-ui/core'
// import {ColorModeProvider, theme, CSSReset  } from "@chakra-ui/core";
function Form() {
    // const {colorMode} =useColorMode();
  return (
      
    <>
    <Fragment>
      <Flex h="100vh" align="center" justify="center">
          <Box w={["100%","60%"]} h={["65%","65%"]}p="15px" bg="#808080" 
           rounded="lg" boxShadow="lg" borderWidth={2} >
            <Flex mb="30px" mt="30px" >
              <Radio color="white" value="one-way">One way</Radio>
              <Radio color="white"  px="20"  value="round-trip">Round Trip</Radio>
            </Flex>
            <Flex mb="40px"mt="30px" justifyContent="space-between">
              <FormControl w="50%">
                <FormLabel color="white"fontWeight="bold" htmlFor="From">From</FormLabel>
                  <Select id="from" placeholder="Select Depature" />
              </FormControl>
              <FormControl w="50%" px="15px">
                <FormLabel  color="white" fontWeight="bold" htmlFor="to" >To</FormLabel>
                  <Select id="to" placeholder="Select Depature" />
              </FormControl>
            </Flex>
            <Flex mt="30px" >
              <FormControl w="50%">
                <FormLabel color="white"  htmlFor="depature-date">Depature Date</FormLabel>               
                 <Input type="date" placeholder="dd/mm/yy"/>
              </FormControl>
              <FormControl w="50%"  px="15px">
                <FormLabel color="white" htmlFor="return-date">Return Date</FormLabel>
                <Input type="date" placeholder="dd/mm/yy"/>
              </FormControl>
            </Flex>
            <Text mt="30px"color="white" fontWeight="bold">Passenger Information</Text>
            <Grid templateColumns={{md: "repeat(3, 1fr)"}} gap={6} mt="5px" >
              <FormControl  >
                <FormLabel color="white" fontWeight="bold" htmlFor="adult">Adult (12+ yrs)</FormLabel>
                <Select id="to" placeholder="12" />
              </FormControl>
              <FormControl >
                <FormLabel color="white" fontWeight="bold" htmlFor="child">Child (2-12yrs)</FormLabel>
                <Select id="to" placeholder="2" />
              </FormControl>
              <FormControl >
                <FormLabel color="white" fontWeight="bold" htmlFor="infant">Infant</FormLabel>
                <Select id="to" placeholder="0" />
              </FormControl>
            </Grid>
            <Flex justify="center">
              <Button mt="15px" type="submit" variantColor="orange">Search Flights</Button>
            </Flex>
          </Box>
          </Flex>
    </Fragment>
    </>
  );
}

export default Form;
