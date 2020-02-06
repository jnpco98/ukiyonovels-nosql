import styled from 'styled-components/macro';
import { gutter, GUTTER_LEFT, GUTTER_RIGHT, GUTTER_BOTTOM } from '../../../utilities/mixins';
import Accordion from '../../molecule/accordion';
import Text, { TextType } from '../../atom/text';
import * as M from '../../../settings/media';
import { ClassificationsList, ClassificationsItem, ClassificationsHeading } from '../../molecule/classifications/style';
import Classifications from '../../molecule/classifications';

export const FooterContainer = styled.div`
  ${gutter(GUTTER_LEFT)};
  ${gutter(GUTTER_RIGHT)};

  padding-top: 2rem;
  padding-bottom: 3rem;

  width: 100%;
  background: ${({ theme, ...props }) => theme.colors.white};

	${M.MEDIA_SMALL} {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	${M.MEDIA_XLARGE} {
		padding-top: 3rem;
	}
`;

export const FooterAccordionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
	margin-bottom: 1.5rem;
`;

export const FooterAccordion = styled(Accordion).attrs({ flat: true })`
	${ClassificationsHeading} {
		display: none;
	}

	${M.MEDIA_SMALL} {
		display: block;
	}
`;

export const FooterLinksWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 1rem;

	${M.MEDIA_SMALL} {
		flex-direction: row;
		justify-content: space-between;
		margin-top: 3rem;
	}
`;

export const FooterContactText = styled(Text)`
	max-width: 40rem;

	${M.MEDIA_XLARGE} {
		max-width: 62rem;
	}
`;

export const FooterContactWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 1rem;

	${M.MEDIA_SMALL} {
		margin-top: 3rem;
	}
`;

export const FooterLinks = styled(Text).attrs({ textType: TextType.Anchor })`
    font-family: ${({ theme }) => theme.font.secondary };
	font-weight: ${({ theme }) => theme.font.weightBold };
	text-transform: uppercase;
	margin-right: 3rem;
`

export const FooterClassificationLinksWrapper = styled.div`
	${M.MEDIA_SMALL} {
		display: flex;
		justify-content: space-between;
	}
`;

export const FooterClassifications = styled(Classifications)`
	width: 12%;
`;

export const FooterGenreClassifications = styled(Classifications)`
	width: 60%;

	${ClassificationsList} {
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: space-between;
	}

	${ClassificationsItem} {
		width: 30%;
	}
`;