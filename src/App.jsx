import { ChakraProvider, Box, Button, FormControl, FormLabel, Input, FormErrorMessage, Heading, VStack } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  mobileNumber: Yup.string()
    .matches(/^[0-9]+$/, 'Mobile number must be only digits')
    .min(10, 'Mobile number must be at least 10 digits')
    .required('Mobile number is required'),
    address: Yup.string().required('Address is required'),

});

const App= () => {
  return (
    <ChakraProvider>
      <Flex justifyContent={'center'} alignItems={'center'} w={'100vw'} bg ={'blue.200'} h={'100vh'} >
      <Box
        maxW="md"
        mx="auto"
        mt={10}
        p={8}
        borderWidth={1}
        borderRadius="lg"
        boxShadow="lg"
        bg="white"
      >
        <Heading as="h1" size="xl" textAlign="center" mb={6} color="teal.500">
          Registration Form
        </Heading>
        <Formik
          initialValues={{ firstName: '', lastName: '', email: '', mobileNumber: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            console.log(values);
            actions.setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <VStack spacing={4}>
                <Field name="firstName">
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.firstName && form.touched.firstName}>
                      <FormLabel htmlFor="firstName" color="teal.600">First Name</FormLabel>
                      <Input {...field} id="firstName" placeholder="First Name" />
                      <FormErrorMessage>{form.errors.firstName}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="lastName">
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.lastName && form.touched.lastName}>
                      <FormLabel htmlFor="lastName" color="teal.600">Last Name</FormLabel>
                      <Input {...field} id="lastName" placeholder="Last Name" />
                      <FormErrorMessage>{form.errors.lastName}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="email">
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.email && form.touched.email}>
                      <FormLabel htmlFor="email" color="teal.600">Email</FormLabel>
                      <Input {...field} id="email" placeholder="Email" />
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="mobileNumber">
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.mobileNumber && form.touched.mobileNumber}>
                      <FormLabel htmlFor="mobileNumber" color="teal.600">Mobile Number</FormLabel>
                      <Input {...field} id="mobileNumber" placeholder="Mobile Number" />
                      <FormErrorMessage>{form.errors.mobileNumber}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name='address'>
                  {({field,form})=>(
                    <FormControl isInvalid={form.errors.address && form.touched.address}>
                      <FormLabel htmlFor="address" color='teal.600'>Address</FormLabel>
                      <Input {...field} id='address' placeholder='address' />
                      <FormErrorMessage>{form.errors.address}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Button
                  mt={4}
                  colorScheme="teal"
                  isLoading={isSubmitting}
                  type="submit"
                  width="full"
                >
                  Submit
                </Button>
              </VStack>
            </Form>
          )}
        </Formik>
      </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default App;
