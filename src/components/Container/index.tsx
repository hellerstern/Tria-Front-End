import React from 'react';
import { styled } from '@mui/system';
import { Box } from '@mui/material';

interface PropsType {
  children: React.ReactNode;
}

export const Container = (props: PropsType) => {
  return (
    <Wrapper>
      <ContainerWrapper>{props.children}</ContainerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(Box)({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center'
});

const ContainerWrapper = styled(Box)(({ theme }) => ({
  paddingTop: '36px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  paddingLeft: '20px',
  paddingRight: '20px',
  [theme.breakpoints.down(450)]: {
    paddingLeft: '10px',
    paddingRight: '10px'
  }
}));
