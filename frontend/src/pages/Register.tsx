import React, { useState, type FormEvent } from 'react';
import { Box, Button, Container, TextField, Typography, Stack, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { createUserSchema, type CreateUserInput } from '../../../shared/src/schemas/user';
import { post } from '../utils/request';

type FieldErrors = Partial<Record<keyof CreateUserInput, string>>;

export default function Register() {
  const navigate = useNavigate();
  const [values, setValues] = useState<CreateUserInput>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleChange =
    (field: keyof CreateUserInput) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues((prev) => ({ ...prev, [field]: e.target.value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
      setServerError(null);
    };

  const handleCancel = () => navigate('/');

  const handleSubmit = async (e?: FormEvent) => {
    e?.preventDefault();
    setServerError(null);
    setErrors({});

    const result = createUserSchema.safeParse(values);
    if (!result.success) {
      const fieldErrs: FieldErrors = {};
      for (const issue of result.error.issues) {
        const path = issue.path[0] as keyof CreateUserInput | undefined;
        if (path) fieldErrs[path] = issue.message;
      }
      setErrors(fieldErrs);
      return;
    }

    try {
      setSubmitting(true);
      await post('/api/users', result.data);
      navigate('/login');
    } catch (err: any) {
      setServerError(err?.message || 'Failed to register. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 6 }}>
        <Typography variant="h4" gutterBottom>
          Create account
        </Typography>
        {serverError && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {serverError}
          </Alert>
        )}

        <Stack spacing={2}>
          <TextField
            label="First Name"
            value={values.firstName ?? ''}
            onChange={handleChange('firstName')}
            error={!!errors.firstName}
            helperText={errors.firstName}
            fullWidth
          />
          <TextField
            label="Last Name"
            value={values.lastName ?? ''}
            onChange={handleChange('lastName')}
            error={!!errors.lastName}
            helperText={errors.lastName}
            fullWidth
          />
          <TextField
            label="Email"
            value={values.email ?? ''}
            onChange={handleChange('email')}
            error={!!errors.email}
            helperText={errors.email}
            fullWidth
          />
          <TextField
            label="Password"
            type="password"
            value={values.password ?? ''}
            onChange={handleChange('password')}
            error={!!errors.password}
            helperText={errors.password}
            fullWidth
          />

          <Stack direction="row" spacing={2} justifyContent="flex-end">
            <Button onClick={handleCancel} color="inherit">
              Cancel
            </Button>
            <Button type="submit" variant="contained" disabled={submitting} onClick={handleSubmit}>
              Register
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
}
