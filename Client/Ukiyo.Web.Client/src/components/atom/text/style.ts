import styled from 'styled-components';
import { math } from 'polished';
import * as M from '../../../settings/media';
import { FONT_SIZE_DEFAULT } from '../../../settings/typography';

export const PageTitle = styled.h1`
	font-size: ${math(`${FONT_SIZE_DEFAULT} * 1`)};
	margin-bottom: 1.5rem 0;
	
	${M.SMALL} {
		font-size: ${math(`${FONT_SIZE_DEFAULT} * 1.9`)};
	}

	${M.MEDIUM} {
		font-size: ${math(`${FONT_SIZE_DEFAULT} * 2.3`)};
	}

	${M.XLARGE} {
		font-size: ${math(`${FONT_SIZE_DEFAULT} * 2.7`)};
	}
`;

export const SectionTitle = styled.h2`
	font-size: ${math(`${FONT_SIZE_DEFAULT} * 0.85`)};
	margin-bottom: 1.5rem 0;

	${M.SMALL} {
		font-size: ${math(`${FONT_SIZE_DEFAULT} * 1.5`)};
	}

	${M.MEDIUM} {
		font-size: ${math(`${FONT_SIZE_DEFAULT} * 2`)};
	}

	${M.XLARGE} {
		font-size: ${math(`${FONT_SIZE_DEFAULT} * 2.3`)};
	}
`;

export const SubsectionTitle = styled.h3`
	font-size: ${math(`${FONT_SIZE_DEFAULT} * 0.75`)};
	margin-bottom: 1.5rem 0;

	${M.SMALL} {
		font-size: ${math(`${FONT_SIZE_DEFAULT} * 1.3`)};
	}

	${M.MEDIUM} {
		font-size: ${math(`${FONT_SIZE_DEFAULT} * 1.7`)};
	}

	${M.XLARGE} {
		font-size: ${math(`${FONT_SIZE_DEFAULT} * 2`)};
	}
`;

export const Paragraph = styled.p`
	font-size: ${math(`${FONT_SIZE_DEFAULT} * 0.6`)};
	margin-bottom: 1.5rem 0;

	${M.SMALL} {
		font-size: ${math(`${FONT_SIZE_DEFAULT} * 1`)};
	}

	${M.MEDIUM} {
		font-size: ${math(`${FONT_SIZE_DEFAULT} * 1.4`)};
	}

	${M.XLARGE} {
		font-size: ${math(`${FONT_SIZE_DEFAULT} * 1.7`)};
	}
`;

export const Span = styled.span`
	font-size: ${math(`${FONT_SIZE_DEFAULT} * 0.6`)};
	margin-bottom: 1.5rem 0;

	${M.SMALL} {
		font-size: ${math(`${FONT_SIZE_DEFAULT} * 1`)};
	}

	${M.MEDIUM} {
		font-size: ${math(`${FONT_SIZE_DEFAULT} * 1.4`)};
	}

	${M.XLARGE} {
		font-size: ${math(`${FONT_SIZE_DEFAULT} * 1.7`)};
	}
`;

export const Anchor = styled.a`
	font-size: ${math(`${FONT_SIZE_DEFAULT} * 0.6`)};
	margin-bottom: 1.5rem 0;

	${M.SMALL} {
		font-size: ${math(`${FONT_SIZE_DEFAULT} * 1`)};
	}

	${M.MEDIUM} {
		font-size: ${math(`${FONT_SIZE_DEFAULT} * 1.4`)};
	}

	${M.XLARGE} {
		font-size: ${math(`${FONT_SIZE_DEFAULT} * 1.7`)};
	}
`;