import styled, { css } from 'styled-components/macro';
import { math } from 'polished';
import * as M from '../../../settings/media';

export const PageTitle = styled.h1`
  ${({ theme, ...props }) => 
    css`
      font-size: ${math(`${theme.font.baseSize} * 1.5`)};
      
      ${M.MEDIA_SMALL} {
        font-size: ${math(`${theme.font.baseSize} * 1.8`)};
      }

      ${M.MEDIA_MEDIUM} {
        font-size: ${math(`${theme.font.baseSize} * 2.1`)};
      }

      ${M.MEDIA_XLARGE} {
        font-size: ${math(`${theme.font.baseSize} * 2.5`)};
      }
  `};
`;

export const SectionTitle = styled.h2`
  ${({ theme, ...props }) =>
    css`
      font-size: ${math(`${theme.font.baseSize} * 1.1`)};

      ${M.MEDIA_SMALL} {
        font-size: ${math(`${theme.font.baseSize} * 1.4`)};
      }

      ${M.MEDIA_MEDIUM} {
        font-size: ${math(`${theme.font.baseSize} * 1.8`)};
      }

      ${M.MEDIA_XLARGE} {
        font-size: ${math(`${theme.font.baseSize} * 2.1`)};
      }
  `};
`;

export const SubsectionTitle = styled.h3`
  ${({ theme, ...props }) => 
    css`
      font-size: ${math(`${theme.font.baseSize} * 1`)};

      ${M.MEDIA_SMALL} {
        font-size: ${math(`${theme.font.baseSize} * 1.3`)};
      }

      ${M.MEDIA_MEDIUM} {
        font-size: ${math(`${theme.font.baseSize} * 1.5`)};
      }

      ${M.MEDIA_XLARGE} {
        font-size: ${math(`${theme.font.baseSize} * 1.7`)};
      }
  `};
`;

export const Paragraph = styled.p`
  ${({ theme, ...props }) =>
    css`
      font-size: ${math(`${theme.font.baseSize} * 0.7`)};

      ${M.MEDIA_SMALL} {
        font-size: ${math(`${theme.font.baseSize} * 0.8`)};
      }

      ${M.MEDIA_MEDIUM} {
        font-size: ${math(`${theme.font.baseSize} * 0.9`)};
      }

      ${M.MEDIA_XLARGE} {
        font-size: ${math(`${theme.font.baseSize} * 1.1`)};
      }
  `};
`;

export const Span = styled.span`
  ${({ theme, ...props }) =>
    css`
      font-size: ${math(`${theme.font.baseSize} * 0.7`)};

      ${M.MEDIA_SMALL} {
        font-size: ${math(`${theme.font.baseSize} * 0.8`)};
      }

      ${M.MEDIA_MEDIUM} {
        font-size: ${math(`${theme.font.baseSize} * 0.9`)};
      }

      ${M.MEDIA_XLARGE} {
        font-size: ${math(`${theme.font.baseSize} * 1.1`)};
      }
  `};
`;

export const Anchor = styled.a`
  ${({ theme, ...props }) =>
    css`
      font-size: ${math(`${theme.font.baseSize} * 0.7`)};

      ${M.MEDIA_SMALL} {
        font-size: ${math(`${theme.font.baseSize} * 0.8`)};
      }
      
      ${M.MEDIA_MEDIUM} {
        font-size: ${math(`${theme.font.baseSize} * 0.9`)};
      }

      ${M.MEDIA_XLARGE} {
        font-size: ${math(`${theme.font.baseSize} * 1.1`)};
      }
  `};
`;