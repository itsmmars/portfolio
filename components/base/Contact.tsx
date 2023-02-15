import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription
} from '@chakra-ui/react'
import emailjs from 'emailjs-com'

type FormValues = {
  name: string
  email: string
  message: string
}

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  message: yup.string().required(),
})

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  })

  const handleFormSubmit = async (data: FormValues, e: any) => {
    setIsSubmitting(true)

    // try emailjs send method w/ user data
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      )
      
      // clear the form data
      e.preventDefault()
      e.target.reset()

      .then(() => {
        // alert user on success
        return (
          <Alert
            status='success'
            variant='subtle'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            textAlign='center'
            height='200px'
          >
            <AlertIcon boxSize='40px' mr={0} />
            <AlertTitle mt={4} mb={1} fontSize='lg'>
              Message sent
            </AlertTitle>
            <AlertDescription maxWidth='sm'>
              Mike will be in touch soon. Thanks!
            </AlertDescription>
          </Alert>
        )
      })
    } catch (error) {
      // alert user on error & log error to console
      console.debug('ERROR - Send failed: ', error)
      return (
        <Alert
          status='error'
          variant='subtle'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          textAlign='center'
          height='200px'
        >
          <AlertIcon boxSize='40px' mr={0} />
          <AlertTitle mt={4} mb={1} fontSize='lg'>
            Message failed to send
          </AlertTitle>
          <AlertDescription maxWidth='sm'>
            There was an error sending your message. Please try again later.
          </AlertDescription>
        </Alert>
      )
    }

    setIsSubmitting(false)
  };

  return (
    <Box 
      w={`full`} 
      maxW={`md`} 
      mx={`auto`} 
      py={4} 
      px={`1rem`}>
      <Box 
        textAlign={`center`} 
        fontSize={`2xl`} 
        fontWeight={`semibold`} 
        mb={`1rem`}>
        Message Me
      </Box>
      <form 
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <FormControl isInvalid={errors.name != null}>
          <FormLabel htmlFor={`name`}>
            Name
          </FormLabel>
          <Input
            _placeholder={{ color: 'white' }}
            id={`name`}
            placeholder={`Enter your name`}
            {...register('name')}
          />
          <FormErrorMessage>
            {errors.name?.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl 
          mt={`1rem`} 
          isInvalid={errors.email != null}>
          <FormLabel htmlFor={`email`}>
            Email
          </FormLabel>
          <Input
            _placeholder={{ color: 'white' }}
            id={`email`}
            type={`email`}
            placeholder={`Enter your email`}
            {...register('email')}
          />
          <FormErrorMessage>
            {errors.email?.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl 
          mt={`1rem`} 
          isInvalid={errors.message != null}>
          <FormLabel htmlFor='message'>Message</FormLabel>
          <Textarea
            _placeholder={{ color: 'white' }}
            id={`message`}
            placeholder={`Enter your message`}
            {...register('message')}
          />
          <FormErrorMessage>
            {errors.message?.message}
          </FormErrorMessage>
        </FormControl>
        <Button
          type={`submit`}
          mt={`1.5rem`}
          isLoading={isSubmitting}
          loadingText={`Sending`}
          color={`red`}
          fontWeight={`700`}
          backgroundColor={`rgba(255,255,255,0.9)`}
        >
          Send
        </Button>
      </form>
    </Box>
  );
}