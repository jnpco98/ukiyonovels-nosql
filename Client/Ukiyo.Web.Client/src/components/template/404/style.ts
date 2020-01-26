import styled from 'styled-components/macro';
import { PageTitle, SubsectionTitle } from '../../atom/text/style';


export const PageNotFoundContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

export const PageNotFoundHeading = styled(PageTitle)`
  font-family: ${({ theme, ...props }) => theme.font.primary};
`;

export const PageNotFoundSubheading = styled(SubsectionTitle)``;