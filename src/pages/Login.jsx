import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Form } from '@mantine/form';
import { useAuth } from '../AuthContext';
// import classes from './AuthenticationTitle.module.css';

export function Login() {
  const [err, setErr] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { email: '', password: '' },

    // functions will be used to validate values at corresponding key
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) =>
        value == null || value == '' ? 'Password is required!' : null,
    },
  });
  const handleOnSubmit = async (e) => {
    // console.log('eeeee', e);
    let res = await login(e);
    // console.log('RES -> ', res);
    if (res.status === 409) {
      setErr(res.message);
      return;
    }
    navigate('/');
  };
  return (
    <Container size={420} my={40}>
      <Title ta="center" className="font-black">
        Welcome Back!
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Do not have an account yet?{' '}
        <Anchor size="sm" component="button">
          Create account
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={form.onSubmit(handleOnSubmit)}>
          <TextInput
            label="Email"
            placeholder="you@mantine.dev"
            {...form.getInputProps('email')}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            mt="md"
            {...form.getInputProps('password')}
          />
          <Text ta={'center'} c="red" size="sm">
            {err}
          </Text>
          <Group justify="space-between" mt="lg">
            <Checkbox label="Remember me" />
            <Anchor component="button" size="sm">
              Forgot password?
            </Anchor>
          </Group>
          <Button fullWidth mt="xl" type="submit">
            Sign in
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
