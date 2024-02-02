import { Box, Button } from '@mui/material';
import { styled } from '@mui/system';

interface LoginButtonProps {
  image: any;
  label: string;
  onLogin: () => void;
}

export const LoginButton = (props: LoginButtonProps) => {
  const { image, label, onLogin } = props;
  return (
    <LoginButtonContainer onClick={onLogin}>
      <LoginButtonIconContainer>
        <LoginButtonIcon src={image} alt="login_icon" />
      </LoginButtonIconContainer>
      <LoginButtonLabel>{label}</LoginButtonLabel>
    </LoginButtonContainer>
  );
};

const LoginButtonContainer = styled(Button)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'start',
  borderRadius: '16px',
  alignItems: 'center',
  background: 'rgba(250, 250, 250, 0.08)',
  padding: '16px',
  width: '100%',
  height: '48px',
  gap: '12px',
  textTransform: 'capitalize',
  transition: 'all linear 0.3s',
  '&:hover': {
    background: 'linear-gradient(111deg, #9F8BFF 0%, #7053FF 100%);',
    border: '2.727px solid #9F8BFF'
  },
  [theme.breakpoints.down(540)]: {
    padding: '12px'
  }
}));

const LoginButtonIconContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '36px',
  height: '36px',
  padding: '3.333px',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '3.3333px',
  flexShrink: 0,
  background: '#FAFAFA',
  borderRadius: '28.333px',
  [theme.breakpoints.down(540)]: {
    width: '24px',
    height: '24px'
  }
}));

const LoginButtonIcon = styled('img')(({ theme }) => ({
  width: '24px',
  height: '24px',
  [theme.breakpoints.down(540)]: {
    width: '18px',
    height: '18px'
  }
}));

const LoginButtonLabel = styled('span')(({ theme }) => ({
  color: '#FAFAFA',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: '24px',
  [theme.breakpoints.down(540)]: {
    fontSize: '14px'
  },
  [theme.breakpoints.down(420)]: {
    fontSize: '11px'
  }
}));
