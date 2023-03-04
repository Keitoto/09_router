import {
  Button,
  Group,
  Paper,
  Stack,
  Textarea,
  TextInput,
  Title,
} from '@mantine/core';
import { useFormik } from 'formik';
import React from 'react';

import { contactSchema } from '@/pages/Contact/validation';

interface FormValues {
  email: string;
  fullname: string;
  message: string;
  phone?: string;
  website?: string;
}

export const ContactPage = () => {
  const initialValues: FormValues = {
    fullname: '',
    email: '',
    message: '',
    phone: '',
    website: '',
  };
  const {
    handleSubmit,
    values,
    handleChange,
    errors,
    touched,
    handleBlur,
    resetForm,
  } = useFormik({
    initialValues,
    onSubmit: (vals) => {
      alert(vals);
      resetForm();
    },
    validationSchema: contactSchema,
  });
  return (
    <div>
      {/* <h1>ContactPage</h1> */}
      <Paper>
        <Title>Contact us</Title>
        <form onSubmit={handleSubmit}>
          <Stack spacing="xl" justify="flex-start">
            <Group grow>
              <TextInput
                placeholder="Your name"
                label="Name"
                name="fullname"
                size="md"
                value={values.fullname}
                withAsterisk
                error={touched.fullname && errors.fullname}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <TextInput
                placeholder="Your email"
                label="Email"
                name="email"
                size="md"
                value={values.email}
                withAsterisk
                error={touched.email && errors.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Group>
            <Group grow>
              <TextInput
                placeholder="Your phone"
                label="Phone"
                name="phone"
                size="md"
                value={values.phone}
                withAsterisk
                error={touched.phone && errors.phone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <TextInput
                placeholder="Your website"
                label="Website"
                name="website"
                size="md"
                value={values.website}
                error={touched.website && errors.website}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Group>
            <Textarea
              placeholder="Your message"
              label="Message"
              name="message"
              size="md"
              value={values.message}
              error={touched.message && errors.message}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Button type="submit" w="20rem">
              Submit
            </Button>
          </Stack>
        </form>
      </Paper>
    </div>
  );
};
