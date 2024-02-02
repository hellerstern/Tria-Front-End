import { Box, Button, ListItemButton, Typography, Divider } from '@mui/material';
import { styled } from '@mui/system';
import { useState } from 'react';

import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';

interface CryptoItemProps {
  image: any;
  label: string;
  chainImage: any;
  tokenPrice: string;
  tokenAmount: string;
}

export const TokenList = (props: CryptoItemProps) => {
  const { image, label, chainImage, tokenPrice, tokenAmount } = props;

  return (
    <TokenInfoContainer>
      <TokenDetailContainer>
        <TokenDetailIcon src={image} alt="TokenDetail Icon" />
        <TokenChainContainer>
          <TokenChainLabel>{label}</TokenChainLabel>
          <ChainDetailContainer>
            <ChainDetailIconContainer>
              <ChainDetailIcon src={chainImage} alt="ChainDetail Icon" />
              <ChainDetailIconLabel className="token-chain">
                <span>POL</span>
              </ChainDetailIconLabel>
            </ChainDetailIconContainer>
          </ChainDetailContainer>
        </TokenChainContainer>
      </TokenDetailContainer>
      <TokenAmountContainer>
        <TokenPriceLabel>{tokenPrice}</TokenPriceLabel>
        <TokenAmountLabel>{tokenAmount}</TokenAmountLabel>
      </TokenAmountContainer>
    </TokenInfoContainer>
  );
};

const ArrowUpCover = styled(Box)<{ isVisible: boolean }>(({ theme, isVisible }) => ({
  display: `${isVisible ? 'flex' : 'none'}`,
  justifyContent: 'center',
  alignItems: 'center'
}));

const TokenBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex;',
  // padding: ' 12px 12px 16px 12px;',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px',
  width: '100%'
}));

const TokenIncreaseDetailContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '8px'
}));

const TokenIncreaseDetail = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '2px 8px',
  alignItems: 'center',
  gap: '8px',
  borderRadius: '30px',
  background: 'rgba(37, 89, 55, 0.20);',
  opacity: '0'
}));

const TokenIncreaseDetailLabel = styled(Typography)(({ theme }) => ({
  color: '#45A666',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: '120%'
}));

const CryptoItemContainer = styled(ListItemButton)(({ theme }) => ({
  padding: '12px 12px 16px 12px',
  display: 'flex',
  justifyContent: 'flex-end',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '16px',
  width: '100%',
  cursor: 'pointer',
  borderRadius: '12px',
  transition: 'all linear 0.2s',
  '&:hover': {
    backgroundColor: 'rgba(37, 38, 34, 1)',
    '& .token-chain-container': {
      position: 'static'
    },

    '& .increasementPercent': {
      opacity: '1'
    }
  }
}));

const TokenDetailContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '12px'
}));

const TokenDetailIcon = styled('img')(({ theme }) => ({
  width: '44px',
  height: '44px',
  borderRadius: '100%'
}));

const TokenChainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '4px',
  justifyContent: 'center',
  width: '100%'
}));

const TokenChainLabel = styled(Typography)(({ theme }) => ({
  color: '#FAFAFA',
  fontSize: '18px',
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: '120%'
}));

const ChainDetailContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  position: 'relative',
  height: '18px',
  gap: '4px'
}));

const ChainDetailIconContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '4px',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '9999px',
  border: '1px solid rgba(250, 250, 250, 0.08)'
}));

const ChainDetailMore = styled(Typography)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '16px',
  height: '16px'
}));

const ChainDetailIconLabel = styled(Box)(({ theme }) => ({
  color: '#FFF',
  fontSize: '12px',
  fontStyle: 'normal',
  fontWeight: '500',
  visibility: 'visible',
  width: '28px',
  paddingLeft: '4px'
}));

const ChainDetailIcon = styled('img')(({ theme }) => ({
  width: '16px',
  height: '16px',
  borderRadius: '100%',
  border: '0.5px solid rgba(250, 250, 250, 0.16)'
}));

const TokenAmountContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  gap: '4px'
}));

const TokenPriceLabel = styled(Typography)(({ theme }) => ({
  color: '#FAFAFA',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: '120%'
}));

const TokenAmountLabel = styled(Typography)(({ theme }) => ({
  color: 'rgba(250, 250, 250, 0.30)',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: '500',
  lineHeight: '120%'
}));

const TokenInfoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%'
}));
