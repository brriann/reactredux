import React, { ReactNode } from 'react';
import { Container, Stack, styled } from '@mui/material';

const StyledStack = styled(Stack)(({ theme }) => ({
    marginTop: '80px' // TODO reference theme.AppBar.height or similar
  }));

interface IPageParentProps {
    children: ReactNode;
    isSplash?: boolean;
}
function PageParent({ children, isSplash = false }: IPageParentProps) {
    const pageStack = <StyledStack spacing={2}>{children}</StyledStack>;

    return isSplash ? (
        <Container disableGutters sx={{ mt: 1}} maxWidth={false}>{pageStack}</Container>
    ) : (
        <Container sx={{ mt: 1}} maxWidth={'xl'}>{pageStack}</Container>
    );
}

export default PageParent;