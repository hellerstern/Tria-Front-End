import { Box, Button } from '@mui/material';
import { styled } from '@mui/system';

interface LoginButtonProps {
  image: any;
  label: string;
  onLogin: () => void;
}

const WalletLoginContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: '48px',
  width: '100%',
  padding: '12px',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px',
  flex: '1 0 0',
  borderRadius: '16px',
  border: '1px solid  rgba(250, 250, 250, 0.16);',
  transition: 'all linear 0.3s',
  '&:hover': {
    background: 'rgba(128, 128, 128, 0.05)',
    boxShadow: '0px 0px 14.1px 0px rgba(255, 255, 255, 0.25) inset'
  }
}));

const WalletLoginIconContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '36px',
  height: '36px',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '22.037px',
  boxShadow: '0px 3.889px 3.889px 0px rgba(16, 16, 16, 0.05), 0px 0px 3.889px 0px rgba(16, 16, 16, 0.10)'
}));

const WalletLoginIcon = styled('img')(({ theme }) => ({
  width: '28px',
  height: '28px',
  justifyContent: 'center',
  alignItems: 'center',
  flexShrink: '0'
}));

const WalletLoginLabel = styled('span')(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.80);',
  textAlign: 'center',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: '500',
  lineHeight: '120%'
}));

export const WaleltLogin = (props: LoginButtonProps) => {
  const { image, label, onLogin } = props;
  return (
    <WalletLoginContainer onClick={onLogin}>
      <WalletLoginIconContainer>
        <WalletLoginIcon src={image}></WalletLoginIcon>
      </WalletLoginIconContainer>
      <WalletLoginLabel>{label}</WalletLoginLabel>
    </WalletLoginContainer>
  );
};
