import { useState, useEffect } from 'react';

import { TriaCard } from 'src/components/Card/TriaCard';
import { Container } from 'src/components/Container';
import { LoginButton } from 'src/components/LoginButton';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { useAccount, useConnect, useEnsName } from 'wagmi';
import { signMessage } from 'wagmi/actions';

import {
  GoogleLogoSvg,
  PhoneLogoSvg,
  TwitterLogoSvg,
  MetamaskSvg,
  WalletConnectSvg,
  NotAvailableSvg,
  JoySvg
} from 'src/config/images';
import { Box, Button, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { WaleltLogin } from 'src/components/WalletLogin';
import { RecommendedUserName } from 'src/components/RecommendedUserName';
import { Link, useNavigate } from 'react-router-dom';

export const Home = () => {
  const { connect } = useConnect({
    connector: new InjectedConnector()
  });
  const { isConnected } = useAccount();

  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState<string>('');
  const [isError, setError] = useState(false);
  const [hasMetamask, setHasMetamask] = useState<boolean>(false);

  useEffect(() => {
    // Check if MetaMask is installed
    if (typeof window.ethereum !== 'undefined') {
      setHasMetamask(true);
    }
  }, []);

  const handleInstallMetamask = () => {
    // Redirect user to MetaMask installation page
    if (!hasMetamask) {
      window.open('https://metamask.io/download.html', '_blank');
    } else {
      connect();
      if (isConnected) {
        setIsLogin(true);
      }
    }
  };

  const navigate = useNavigate();

  const handleIsLoggedIn = () => {
    setIsLogin(true);
  };

  const handleUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const _username = e.target.value;
    if (_username.length > 0) {
      setError(false);
    } else {
      setError(true);
    }
    setUserName(_username);
  };

  const handleNext = () => {
    if (userName.length === 0) {
      setError(true);
    } else {
      setError(false);
      localStorage.setItem('userName', userName);
      navigate('/userboard');
    }
  };

  return (
    <Container>
      <TriaCard
        isBack={isLogin}
        onLogin={() => {
          setIsLogin(false);
        }}
      >
        {!isLogin ? (
          <>
            <LoginButton image={GoogleLogoSvg} label="Continue with Google" onLogin={handleIsLoggedIn} />
            <LoginButton image={TwitterLogoSvg} label="Continue with X (formerly Twitter)" onLogin={handleIsLoggedIn} />
            <LoginButton image={PhoneLogoSvg} label="Continue with X (formerly Twitter)" onLogin={handleIsLoggedIn} />
            <TriaOrContainer>
              <TriaOrLine></TriaOrLine>
              <TriaOrLabelContainer>
                <TriaOrLabel>or</TriaOrLabel>
              </TriaOrLabelContainer>
              <TriaOrLine></TriaOrLine>
            </TriaOrContainer>
            <TriaAnotherLoginContent>
              <WaleltLogin image={MetamaskSvg} label="MetaMask" onLogin={handleInstallMetamask} />
              <WaleltLogin image={WalletConnectSvg} label="Wallet Connect" onLogin={handleIsLoggedIn} />
            </TriaAnotherLoginContent>
          </>
        ) : (
          <TrialCardClipper>
            <TriaNameLabelContainer>
              <TriaNameLabel>Create your Tria name</TriaNameLabel>
            </TriaNameLabelContainer>
            <UserNameContainer>
              <UserNameInputContainer>
                <UserNameInput value={userName} onChange={handleUserName} />
                <UserSuffix>@tria</UserSuffix>
              </UserNameInputContainer>
              <UserNextButton onClick={handleNext}>Next</UserNextButton>
            </UserNameContainer>
            {isError && (
              <UserNameNotAvailableContainer>
                <UserNameNotAvailableIcon src={NotAvailableSvg} />
                <UserNameNotAvailableLabel>Username not available</UserNameNotAvailableLabel>
              </UserNameNotAvailableContainer>
            )}
            <RecommendContainer>
              <RecommendLabel>Recommended:</RecommendLabel>
            </RecommendContainer>
            <RecommendListContainer>
              <RecommendedUserName label="kunaaa123" />
              <RecommendedUserName label="kunaaa123" />
              <RecommendedUserName label="kunaaa123" />
            </RecommendListContainer>
            <DescriptionContainer>
              <DescriptionIcon src={JoySvg} />
              <DescriptionLabel>
                Your <span>@tria</span> is like Gmail, for Web3. Pay, receive and log-in to apps on any device, and
                blockchain.
              </DescriptionLabel>
            </DescriptionContainer>
          </TrialCardClipper>
        )}
      </TriaCard>
    </Container>
  );
};

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  [theme.breakpoints.down(360)]: {
    width: '100%'
  }
}));

const TriaOrContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '12px 0px',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px'
}));

const TriaOrLabelContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '0px 8px',
  justifyContent: 'center',
  alignItems: 'center'
}));

const TriaOrLabel = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  fontFamily: 'Inter',
  fontSize: '12px',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: '120%' /* 14.4px */,
  textTransform: 'uppercase'
}));

const TriaOrLine = styled(Box)(({ theme }) => ({
  width: '167px',
  height: '2px',
  background: 'rgba(255, 255, 255, 0.10);',
  [theme.breakpoints.down(540)]: {
    width: '120px'
  }
}));

const TriaAnotherLoginContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '12px',
  width: '100%',
  [theme.breakpoints.down(540)]: {
    flexDirection: 'column'
  }
}));

const TriaNameLabelContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '8px 0px',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '16px',
  width: '100%'
}));

const TrialCardClipper = styled(Box)(({ theme }) => ({
  padding: '0px 4px',
  width: '100%'
}));

const TriaNameLabel = styled('span')(({ theme }) => ({
  fontFamily: '',
  fontSize: '22px',
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: '120%',
  color: 'rgba(250,250,250,0.7)'
}));

const UserNameContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '8px 0px',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px',
  [theme.breakpoints.down(480)]: {
    flexDirection: 'column'
  }
}));

const UserNameInputContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: '48px',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '8px',
  flex: '1 0 0',

  border: '1px solid #363636;',
  borderRadius: '12px',
  background: 'rgba(250, 250, 250, 0.04)',
  span: {
    position: 'absolute',
    left: '50px',
    top: '50px'
  }
}));

const UserNameInput = styled(TextField)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '8px',
  '& .MuiInputBase-root': {
    height: '48px'
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none'
  },
  width: '180px',
  [theme.breakpoints.down(540)]: {
    width: '100%'
  }
}));

const UserSuffix = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: '24px',
  color: 'rgba(250, 250, 250, 0.30)',
  paddingRight: '16px'
}));

const UserNextButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  width: '120px',
  height: '48px',
  padding: '14px 12px',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '12px',
  border: '2.727px solid #9F8BFF',
  borderRadius: '16px',
  background: 'linear-gradient(111deg, #9F8BFF 0%, #7053FF 100% )',
  transition: 'all linear 0.6s',
  cursor: 'pointer',
  textDecoration: 'none',
  [theme.breakpoints.down(360)]: {
    width: '100%'
  }
}));

const UserNameNotAvailableContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '4px'
}));

const UserNameNotAvailableIcon = styled('img')(({ theme }) => ({
  width: '24px',
  height: '24px'
}));

const UserNameNotAvailableLabel = styled(Typography)(({ theme }) => ({
  color: '#DA4343;',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: '120%'
}));

const RecommendContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  paddingTop: '8px'
}));

const RecommendLabel = styled(Box)(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.50)',
  fontSize: '12px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '150%'
}));

const RecommendListContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  padding: '12px 0px',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px'
}));

const DescriptionContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  padding: '16px',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  borderRadius: '12px',
  border: '1px solid rgba(250, 250, 250, 0.08)'
}));

const DescriptionIcon = styled('img')(({ theme }) => ({
  width: '36px',
  height: '36px'
}));

const DescriptionLabel = styled(Typography)(({ theme }) => ({
  color: 'rgba(250, 250, 250, 0.30)',
  fontSize: '12px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: 'normal',
  span: {
    fontWeight: '700',
    color: 'rgba(250, 250, 250, 0.70)'
  }
}));
