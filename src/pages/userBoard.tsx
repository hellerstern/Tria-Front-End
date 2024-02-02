import { Scrollbars } from 'react-custom-scrollbars-2';

import { useState, useEffect } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Container } from 'src/components/Container';
import { styled } from '@mui/system';
import {
  CopySvg,
  DropSvg,
  GoogleLogoSvg,
  MetamaskSvg,
  PolygonSvg,
  UserAvatarSvg,
  CardImage,
  RefreshSvg,
  BuyCryptoSvg,
  DirectSendSvg,
  EthereumSvg,
  HomeSvg,
  AssetsSvg,
  ActivitySvg,
  TriaMiniLogoSvg
} from 'src/config/images';
import { KeyboardArrowDown, KeyboardArrowRight } from '@mui/icons-material';
import { CryptoItem } from 'src/components/CryptoItem';
import { FooterMenu } from 'src/components/FooterMenu';

interface MenuItem {
  image: string;
  label: string;
  left: number;
  isOpen: boolean;
  url: string;
}

export const UserBoard = () => {
  const initialMenuItems: MenuItem[] = [
    {
      image: HomeSvg,
      label: 'Home',
      left: 0,
      isOpen: true,
      url: '/'
    },
    {
      image: AssetsSvg,
      label: 'Assets',
      left: 98,
      isOpen: false,
      url: '/'
    },
    {
      image: ActivitySvg,
      label: 'Activity',
      left: 196,
      isOpen: false,
      url: '/'
    }
  ];

  const [menuItems, setMenuItems] = useState<MenuItem[]>(initialMenuItems);

  const [isVisible, setIsVisible] = useState(false);
  const [userName, setUserName] = useState('');
  const handleVisible = (index: number) => {
    const newMenuItems = menuItems.map((item, i) => ({
      ...item,
      isOpen: i === index ? !item.isOpen : false
    }));
    setMenuItems(newMenuItems);
  };
  useEffect(() => {
    const storedUsername = localStorage.getItem('userName');
    setUserName(storedUsername as string);
    console.log(storedUsername);
  });

  return (
    <Container>
      <UserProfileContainer>
        <DropIcon src={DropSvg} />
        <UserInfoContainer>
          <UserWalletContainer>
            <UserLogoContainer>
              <UserIcon src={UserAvatarSvg} alt="User Avatar" />
              <UserNameContainer>
                <UserName>{userName}@tria</UserName>
                <KeyboardArrowDown />
              </UserNameContainer>
            </UserLogoContainer>
            <ActionButtonContainer>
              <CopyIconContainer>
                <CopyIcon src={CopySvg} alt="Copy" />
              </CopyIconContainer>
              <PolygonIconContainer>
                <PolygonIcon src={PolygonSvg} />
              </PolygonIconContainer>
            </ActionButtonContainer>
          </UserWalletContainer>
        </UserInfoContainer>
        <AssetsUpContainer>
          <CardContainer>
            <AssetsUpInfoContainer>
              <AssetsUpPercentageContainer>
                <AssetsUpPercentageLabel>Assets Up</AssetsUpPercentageLabel>
                <AssetsUpPercentageIncreaseAmountContainer>
                  <AssetsUpPercentageIncreaseAmountLabel>+2.5%</AssetsUpPercentageIncreaseAmountLabel>
                </AssetsUpPercentageIncreaseAmountContainer>
              </AssetsUpPercentageContainer>
              <FundsAmountContainer>
                <FundsAmountLabel>$1838.83</FundsAmountLabel>
                <FundsAmountIconContainer>
                  <FundsAmountIcon src={RefreshSvg} />
                </FundsAmountIconContainer>
              </FundsAmountContainer>
            </AssetsUpInfoContainer>
            <TransferContainer>
              <BuyButtonContainer>
                <BuyButtonIcon src={BuyCryptoSvg} />
                <BuyButtonLabel>Buy</BuyButtonLabel>
                <ArrowRightContainer className="nextArrow">
                  <KeyboardArrowRight />
                </ArrowRightContainer>
              </BuyButtonContainer>
              <BuyButtonContainer>
                <BuyButtonIcon src={DirectSendSvg} />
                <BuyButtonLabel>Send</BuyButtonLabel>
                <ArrowRightContainer className="nextArrow">
                  <KeyboardArrowRight />
                </ArrowRightContainer>
              </BuyButtonContainer>
            </TransferContainer>
          </CardContainer>
        </AssetsUpContainer>
        <CryptoContainer>
          <CryptoExchangeContainer>
            <CryptoLabel>Crypto</CryptoLabel>
            <Scrollbars style={{ height: 300 }}>
              <CryptoListsContainer>
                <CryptoItem
                  image={EthereumSvg}
                  label="USDC"
                  chainImage={PolygonSvg}
                  tokenAmount="1 POL"
                  tokenPrice="$10.094"
                />
                <CryptoItem
                  image={EthereumSvg}
                  label="USDC"
                  chainImage={PolygonSvg}
                  tokenAmount="1 POL"
                  tokenPrice="$10.094"
                />
                <CryptoItem
                  image={EthereumSvg}
                  label="USDC"
                  chainImage={PolygonSvg}
                  tokenAmount="1 POL"
                  tokenPrice="$10.094"
                />
                <CryptoItem
                  image={EthereumSvg}
                  label="USDC"
                  chainImage={PolygonSvg}
                  tokenAmount="1 POL"
                  tokenPrice="$10.094"
                />
              </CryptoListsContainer>
            </Scrollbars>
          </CryptoExchangeContainer>
        </CryptoContainer>
        <FooterContainer>
          <FooterMenuContainer>
            {menuItems.map((item, index) => {
              return (
                <FooterMenu
                  key={`item-${index}`}
                  image={item.image}
                  label={item.label}
                  left={item.left}
                  hasVisible={item.isOpen}
                  onOpen={() => {
                    handleVisible(index);
                  }}
                />
              );
            })}
          </FooterMenuContainer>
          <TriaCardPowered>
            <TriaMiniLogo src={TriaMiniLogoSvg} alt="tria-mini-logo" />
            <TriaCardPoweredLabel>Open Tria</TriaCardPoweredLabel>
          </TriaCardPowered>
        </FooterContainer>
      </UserProfileContainer>
    </Container>
  );
};

const ArrowRightContainer = styled(Box)(({ theme }) => ({
  width: '12px',
  height: '12px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  opacity: '0'
}));

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none'
}));
const UserProfileContainer = styled(Box)(({ theme }) => ({
  display: 'felx',
  width: '412px',
  paddingTop: '28px',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  '& > img': {
    position: 'absolute',
    top: '-30px',
    left: '50%',
    transform: 'translateX(-50%);'
  },
  borderRadius: '20px',
  border: '1px solid rgba(250, 250, 250, 0.08)',
  [theme.breakpoints.down(540)]: {
    width: '100%'
  }
}));

const DropIcon = styled('img')(({ theme }) => ({
  width: '110px',
  height: '34px'
}));

const UserInfoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '0px 24px 8px 24px',
  alignItems: 'center',
  gap: '7.029px'
}));

const UserWalletContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%'
}));

const UserLogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '6px',
  alignItems: 'center',
  gap: '8px',
  ':hover': {
    borderRadius: '12px',
    background: 'rgba(250,250,250,0.08)'
  }
}));

const WalletContainerSpace = styled(Box)(({ theme }) => ({
  width: '10px'
}));

const UserIcon = styled('img')((theme) => ({
  width: '28px',
  height: '28px'
}));

const UserNameContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '7.029px'
}));

const UserName = styled(Box)(({ theme }) => ({
  color: 'rgba(250, 250, 250, 0.80)',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: '120%'
  // [theme.breakpoints.down(400)]: {
  //   visibility: 'hidden'
  //   // width: '40px'
  // }
}));

const ActionButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '4px'
}));

const CopyIconContainer = styled(Button)(({ theme }) => ({
  display: 'flex',
  minWidth: 'inherit',
  width: '32px',
  height: '32px',
  padding: '7px',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px'
}));

const CopyIcon = styled('img')(({ theme }) => ({}));

const PolygonIconContainer = styled(Box)(({ theme }) => ({
  minWidth: 'inherit'
}));

const PolygonIcon = styled('img')(({ theme }) => ({
  display: 'flex',
  width: '28px',
  height: '28px',
  padding: '1.364px 1.719px 1.72px 1.365px;',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '8px',
  background: '#8345E6',
  backdropFilter: 'blur(1.1123334169387817px)'
}));

const AssetsUpContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '0px 24px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '10px'
}));

const CardContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '16px',
  width: '100%',
  height: '190px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '14px',
  borderRadius: '12px',
  border: '1px solid #9F8BFF',
  backgroundImage: `url(${CardImage as string})`,
  backgroundSize: 'cover',
  '&:hover': {
    backgroundColor: 'rgba(250,250,250,0.06)'
  }
}));

const AssetsUpInfoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  paddingBottom: '20px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '4px',
  flex: '1 0 0'
}));

const AssetsUpPercentageContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '7.02px'
}));

const AssetsUpPercentageIncreaseAmountContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '7.02px',
  borderRadius: '26px',
  padding: '1.75px, 7.02px',
  background: 'rgba(37, 89, 55, 0.40);',
  width: '60px'
}));

const AssetsUpPercentageIncreaseAmountLabel = styled(Typography)(({ theme }) => ({
  color: '#55CC7D',
  textAlign: 'center',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: '120%'
}));

const AssetsUpPercentageLabel = styled(Typography)(({ theme }) => ({
  color: 'rgba(250, 250, 250, 0.70)',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: '100%'
}));

const FundsAmountContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '7.029px'
}));

const FundsAmountLabel = styled(Typography)(({ theme }) => ({
  color: '#FFF',
  fontSize: '36px',
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: '120%'
}));

const FundsAmountIconContainer = styled(Button)(({ theme }) => ({
  display: 'flex',
  minWidth: 'inherit',
  width: '32px',
  height: '32px',
  padding: '7px',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px'
}));

const FundsAmountIcon = styled('img')(({ theme }) => ({
  width: '18px',
  height: '18px',
  color: 'rgba(250, 250, 250, 1)'
}));

const TransferContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '14px',
  width: '100%'
}));

const BuyButtonContainer = styled(Button)(({ theme }) => ({
  display: 'flex',
  height: '44px',
  padding: '8.786px 10.543px',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '7.03px',
  background: 'linear-gradient(to left, rgba(16,16,16,0.5) 50%, #7e64fe 50%) right',
  borderRadius: '7.02px',
  width: '100%',
  position: 'relative',
  cursor: 'pointer',
  transition: '0.1s',
  backgroundSize: '200%',
  '&:hover': {
    backgroundPosition: 'left',
    '.nextArrow': {
      opacity: '1'
    }
  }
}));

const BuyButtonIcon = styled('img')(({ theme }) => ({
  width: '24px',
  height: '24px'
}));

const BuyButtonLabel = styled(Typography)(({ theme }) => ({
  color: '#FAFAFA',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: '120%'
}));

const CryptoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  paddingTop: '20px',
  alignItems: 'flex-start'
}));

const CryptoExchangeContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '16px',
  flex: '1 0 0',
  width: '100px'
}));

const CryptoLabel = styled(Typography)(({ theme }) => ({
  padding: '0px 24px',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: '120%',
  color: 'rgba(250, 250, 250, 0.30)'
}));

const CryptoListsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: '320px',
  flexDirection: 'column',
  padding: '0px 16px',
  gap: '4px',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%'
}));

const FooterContainer = styled(Box)(({ theme }) => ({
  padding: '20px 0px 8px 0px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px'
}));

const FooterMenuContainer = styled(Box)(({ theme }) => ({
  padding: '8px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  borderRadius: '9999px',
  border: '1px solid rgba(250, 250, 250, 0.08)',
  height: '56px'
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
  },
  ':hover': {
    borderRadius: '12px',
    background: 'rgba(250,250,250,0.08)'
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
