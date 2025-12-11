import { Container, Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Sign in
        </Typography>
        <Typography color="text.secondary" paragraph>
          Login page placeholder. Implement auth flow separately.
        </Typography>
        <Button variant="contained" onClick={() => navigate('/')}>
          Back
        </Button>
      </Box>
    </Container>
  );
}
