import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useState } from 'react';

interface FooterMenuProps {
  image: any;
  label: string;
  left: number;
  hasVisible: boolean;
  onOpen: () => void;
}

const MenuItemContainer = styled(Button)<{ left: number; isVisible: boolean }>(({ theme, left, isVisible }) => ({
  display: 'flex',
  padding: '8px',
  minWidth: 'inherit',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '9999px',
  border: `${isVisible ? '0.9px solid rgba(250, 250, 250, 0.16)' : '0.9px solid rgba(250, 250, 250, 0.16)'}`,
  background: `${isVisible ? '#333331' : '#1A1A1A'}`,

  //   position: 'absolute',
  left: `${left}`,
  textTransform: 'none'
}));

const MenuItemImage = styled('img')(({ theme }) => ({
  width: '24px',
  height: '24px'
}));

const MenuItemLabel = styled(Typography)<{ isVisible: boolean }>(({ theme, isVisible }) => ({
  color: '#FFF',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: '120%',
  padding: `${isVisible ? '0px 8px' : '0px'}`,
  visibility: `${isVisible ? 'visible' : 'hidden'}`,
  width: `${isVisible ? 'auto' : '0px'}`
}));

export const FooterMenu = (props: FooterMenuProps) => {
  const { image, label, left, onOpen, hasVisible } = props;

  return (
    <>
      <MenuItemContainer isVisible={hasVisible} left={left} onClick={onOpen}>
        <MenuItemImage src={image} />
        <MenuItemLabel isVisible={hasVisible}>{label}</MenuItemLabel>
      </MenuItemContainer>
    </>
  );
};
