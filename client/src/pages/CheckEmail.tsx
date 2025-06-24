import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Paper, Typography, Button, Box, Alert } from '@mui/material';
import { sendEmailVerification } from 'firebase/auth';
import { auth } from '../firebaseConfig';

const CheckEmail: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || '';
  const [resendSuccess, setResendSuccess] = useState(false);
  const [resendError, setResendError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleResend = async () => {
    setLoading(true);
    setResendSuccess(false);
    setResendError(null);
    try {
      if (auth.currentUser) {
        await sendEmailVerification(auth.currentUser);
        setResendSuccess(true);
      } else {
        setResendError('Please sign in again to resend verification email.');
      }
    } catch (err: any) {
      setResendError('Failed to resend verification email.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3, textAlign: 'center' }}>
        <Typography variant="h5" fontWeight={700} gutterBottom>
          Confirm Your Email
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          We've sent a confirmation email to <b>{email}</b>.<br />
          Please check your inbox and click the link to activate your account.<br />
          <span style={{ color: '#ff7043', fontWeight: 600 }}>Don't forget to check your spam or junk folder!</span>
        </Typography>
        {resendSuccess && <Alert severity="success" sx={{ mb: 2 }}>Verification email resent!</Alert>}
        {resendError && <Alert severity="error" sx={{ mb: 2 }}>{resendError}</Alert>}
        <Button
          variant="outlined"
          color="primary"
          onClick={handleResend}
          disabled={loading}
          sx={{ mb: 2 }}
        >
          {loading ? 'Resending...' : 'Resend Verification Email'}
        </Button>
        <Box mt={2}>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Already confirmed?
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/login')}
          >
            Sign In
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default CheckEmail; 