import React, { ReactNode } from 'react';
import { Stack, styled } from '@mui/material';

const StyledStack = styled(Stack)(({ theme }) => ({
    marginTop: '80px' // TODO reference theme.AppBar.height or similar
  }));

interface IPageParentProps {
    children: ReactNode;
}
function PageParent({ children }: IPageParentProps) {
    return (
        <StyledStack spacing={2}>{children}</StyledStack>
    );
}

export default PageParent;