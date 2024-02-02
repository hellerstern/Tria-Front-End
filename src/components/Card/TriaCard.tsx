import { NavigateBefore } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import { styled } from '@mui/system';
import { TriaLogoSvg, TriaMiniLogoSvg } from 'src/config/images';

interface TriaCardProps {
  children: React.ReactNode;
  isBack?: boolean;
  onLogin: () => void;
}

export const TriaCard = (props: TriaCardProps) => {
  const { children, isBack, onLogin } = props;
  return (
    <TriaCardContainer>
      {isBack === true && (
        <TriaCardBack onClick={onLogin}>
          <NavigateBefore />
        </TriaCardBack>
      )}
      <TriaLogoContainer>
        <TriaLogo src={TriaLogoSvg} alt="tria-logo" />
        <TriaLogoLabel>
          Login to <span>tria</span> Demo
        </TriaLogoLabel>
      </TriaLogoContainer>
      <TriaCardContent>{children}</TriaCardContent>
      <TriaCardFooter>
        <TriaCardPowered>
          <TriaMiniLogo src={TriaMiniLogoSvg} alt="tria-mini-logo" />
          <TriaCardPoweredLabel>Powered by Tria</TriaCardPoweredLabel>
        </TriaCardPowered>
      </TriaCardFooter>
    </TriaCardContainer>
  );
};

const TriaCardContainer = styled(Box)(({ theme }) => ({
  border: '2px solid rgba(128, 128, 128, 0.05)',
  borderRadius: '20px',
  boxShadow:
    '0px 0px 1px 0px rgba(128, 128, 128, 0.20), 0px 2px 30px 0px rgba(128, 128, 128, 0.08), 0px 0px 15px 0px rgba(128, 128, 128, 0.03);',
  background: '#101010',
  padding: '16px',
  width: '450px',
  // height: '100%',
  position: 'relative',
  [theme.breakpoints.down(540)]: {
    width: '100%'
  }
}));

const TriaCardBack = styled(Button)(({ theme }) => ({
  position: 'absolute',
  left: '16px',
  top: '16px',
  width: '36px',
  minWidth: 'inherit',
  height: '36px',
  cursor: 'pointer',
  color: '#6E6E6E',
  transition: 'all linear 0.3s',
  borderRadius: '0px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': {
    color: '#FFFFFF',
    borderRadius: '12px',
    background: 'rgba(128, 128, 128, 0.2)'
  }
}));

const TriaLogoContainer = styled(Box)(({ theme }) => ({
  marginTop: '40px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '28px',
  padding: '24px 20px',
  height: '393px'
}));

const TriaLogo = styled('img')(({ theme }) => ({
  width: '94px',
  height: '94px'
}));

const TriaLogoLabel = styled(Box)(({ theme }) => ({
  fontSize: '22px',
  fontWeight: '400',
  color: 'rgba(250, 250, 250, 0.70)',
  width: '110px',
  textAlign: 'center',
  span: {
    fontWeight: '700'
  }
}));

const TriaCardContent = styled(Box)(({ theme }) => ({
  background: '#191919',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '12px',
  padding: '16px',
  borderRadius: '16px'
}));

const TriaCardFooter = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '12px 0px',
  justifyContent: 'center',
  alignItems: 'center'
}));

const TriaCardPowered = styled(Box)(({ theme }) => ({
  padding: '10px',
  display: 'flex',
  alignItems: 'center',
  borderRadius: '20px',
  gap: '10px',
  transition: 'all linear 0.3s',
  cursor: 'pointer',
  '&:hover .css-1qvpgzs': {
    display: 'block'
  }
}));

const TriaMiniLogo = styled('img')(({ theme }) => ({
  width: '20px',
  height: '20px'
}));

const TriaCardPoweredLabel = styled(Box)(({ theme }) => ({
  color: '#808080',
  fontSize: '14px',
  fontWeight: '600'
}));
