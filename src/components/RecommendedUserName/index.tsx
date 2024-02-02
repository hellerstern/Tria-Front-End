import styled from '@emotion/styled';
import { Box, Button } from '@mui/material';

interface RecommendedUserNameProps {
  label: string;
}

const UserNameContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '12px 16px',
  alignItems: 'center',
  borderRadius: '20px',
  border: '1px solid rgba(250, 250, 250, 0.08);',
  background: 'rgba(128, 128, 128, 0.05);',
  color: 'rgba(250,250,250,0.7)',
  transition: 'all 0.6s ease-in-out',
  '&:hover': {
    border: '1px solid rgba(250, 250, 250, 0.08)',
    background: '#F2F2F2',
    color: '#101010'
  }
}));

const UserLabel = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '120%',
  color: 'inherit'
}));

export const RecommendedUserName = (props: RecommendedUserNameProps) => {
  const { label } = props;
  return (
    <UserNameContainer>
      <UserLabel>{label}</UserLabel>
    </UserNameContainer>
  );
};
