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
  useToast,
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
  const toast = useToast()
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

      .then(() => {
        // Display a success toast message
        toast({
          title: 'Message sent!',
          description: 'Your message has been sent. Mike will be in touch soon.',
          status: 'success',
          duration: 5000,
          isClosable: true,
          position: 'top'
        });

        // Clear the form
        e.preventDefault()
        e.target.reset()
      })
    } catch (error) {
      // Display a failure toast message
      toast({
        title: 'Email failed to send',
        description: 'There was an error sending your message. Please try again later.',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top'
      })
    }

    setIsSubmitting(false)
  };

  return (
    <Box 
      w={`full`} 
      maxW={`md`} 
      mx={`auto`} 
      py={8} 
      px={`1rem`}>
      <Box 
        textAlign={`center`} 
        fontSize={`2xl`} 
        fontWeight={`semibold`} 
        mb={`1rem`}>
        Let&apos;s Connect
      </Box>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <FormControl isInvalid={errors.name != null}>
          <FormLabel htmlFor={`name`}>
            Name
          </FormLabel>
          <Input
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
          backgroundColor={`rgba(26, 171, 0, 1)`}
        >
          Send
        </Button>
      </form>
    </Box>
  );
}