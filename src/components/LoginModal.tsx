import React from 'react';
import { 
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Button,
  TextField,
  Stack,
  Typography,
  Divider
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import EmailIcon from '@mui/icons-material/Email';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyIcon from '@mui/icons-material/Key';
import { LoginMethod } from '../types';

const StyledButton = styled(Button)(({ theme }) => ({
  justifyContent: 'flex-start',
  padding: '12px 16px',
  borderRadius: 12,
  textTransform: 'none',
  border: `1px solid ${theme.palette.divider}`,
  '&:hover': {
    backgroundColor: theme.palette.grey[50],
    borderColor: theme.palette.divider,
  }
}));

interface LoginModalProps {
  onClose: () => void;
  onConnect: (method: LoginMethod) => Promise<void>;
  buttonColor?: string;
}

const LoginModal = (props: LoginModalProps) => {
  const [email, setEmail] = React.useState('');
  const [showEmailInput, setShowEmailInput] = React.useState(false);
  const { onClose, onConnect } = props;

  return (
    <Dialog
      open={true}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
          boxShadow: '0px 8px 32px rgba(0, 0, 0, 0.08)',
        }
      }}
    >
      <DialogTitle sx={{ pb: 1 }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <div>
            <Typography variant="h6" fontWeight={600}>Welcome</Typography>
            <Typography variant="body2" color="text.secondary">
              Choose how you'd like to connect
            </Typography>
          </div>
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Stack>
      </DialogTitle>

      <DialogContent sx={{ pt: '8px !important' }}>
        <Stack spacing={2}>
          {showEmailInput ? (
            <>
              <TextField
                fullWidth
                label="Email address"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                InputProps={{
                  startAdornment: <EmailIcon color="action" sx={{ mr: 1 }} />
                }}
              />
              <Button
                fullWidth
                variant="contained"
                size="large"
                onClick={() => onConnect('email')}
                sx={{ 
                  borderRadius: 3,
                  textTransform: 'none',
                  py: 1.5
                }}
              >
                Continue with Email
              </Button>
              <Button
                variant="text"
                onClick={() => setShowEmailInput(false)}
                sx={{ textTransform: 'none' }}
              >
                ← Back to all options
              </Button>
            </>
          ) : (
            <>
              <StyledButton
                fullWidth
                variant="outlined"
                startIcon={<EmailIcon />}
                onClick={() => setShowEmailInput(true)}
              >
                Continue with Email
              </StyledButton>
              
              <StyledButton
                fullWidth
                variant="outlined"
                startIcon={<GoogleIcon />}
                onClick={() => onConnect('google')}
              >
                Continue with Google
              </StyledButton>
              
              <StyledButton
                fullWidth
                variant="outlined"
                startIcon={<AppleIcon />}
                onClick={() => onConnect('apple')}
              >
                Continue with Apple
              </StyledButton>

              <StyledButton
                fullWidth
                variant="outlined"
                startIcon={<MoreHorizIcon />}
                endIcon={<Typography color="text.secondary">›</Typography>}
              >
                More Options
              </StyledButton>
            </>
          )}
        </Stack>

        <Divider sx={{ my: 3 }} />
        
        <Button
          fullWidth
          variant="text"
          startIcon={<KeyIcon />}
          sx={{ textTransform: 'none' }}
        >
          I have a passkey
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export { LoginModal }; 