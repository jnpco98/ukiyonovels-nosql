import styled, { css } from 'styled-components';
import { math } from 'polished';
import * as M from '../../../settings/media';

export const PageTitle = styled.h1`
  ${({ theme, ...props }) => 
    css`
      font-size: ${math(`${theme.font.baseSize} * 1`)};
      margin-bottom: 1.5rem;
      
      ${M.MEDIA_SMALL} {
        font-size: ${math(`${theme.font.baseSize} * 1.9`)};
      }

      ${M.MEDIA_MEDIUM} {
        font-size: ${math(`${theme.font.baseSize} * 2.3`)};
      }

      ${M.MEDIA_XLARGE} {
        font-size: ${math(`${theme.font.baseSize} * 2.7`)};
      }
  `};
`;

export const SectionTitle = styled.h2`
  ${({ theme, ...props }) =>
    css`
      font-size: ${math(`${theme.font.baseSize} * 0.85`)};
      margin-bottom: 1.5rem;

      ${M.MEDIA_SMALL} {
        font-size: ${math(`${theme.font.baseSize} * 1.5`)};
      }

      ${M.MEDIA_MEDIUM} {
        font-size: ${math(`${theme.font.baseSize} * 2`)};
      }

      ${M.MEDIA_XLARGE} {
        font-size: ${math(`${theme.font.baseSize} * 2.3`)};
      }
  `};
`;

export const SubsectionTitle = styled.h3`
  ${({ theme, ...props }) => 
    css`
      font-size: ${math(`${theme.font.baseSize} * 0.75`)};
      margin-bottom: 1.5rem;

      ${M.MEDIA_SMALL} {
        font-size: ${math(`${theme.font.baseSize} * 1.3`)};
      }

      ${M.MEDIA_MEDIUM} {
        font-size: ${math(`${theme.font.baseSize} * 1.7`)};
      }

      ${M.MEDIA_XLARGE} {
        font-size: ${math(`${theme.font.baseSize} * 2`)};
      }
  `};
`;

export const Paragraph = styled.p`
  ${({ theme, ...props }) =>
    css`
      font-size: ${math(`${theme.font.baseSize} * 0.6`)};
      margin-bottom: 1.5rem;

      ${M.MEDIA_SMALL} {
        font-size: ${math(`${theme.font.baseSize} * 1`)};
      }

      ${M.MEDIA_MEDIUM} {
        font-size: ${math(`${theme.font.baseSize} * 1.4`)};
      }

      ${M.MEDIA_XLARGE} {
        font-size: ${math(`${theme.font.baseSize} * 1.7`)};
      }
  `};
`;

export const Span = styled.span`
  ${({ theme, ...props }) =>
    css`
      font-size: ${math(`${theme.font.baseSize} * 0.6`)};
      margin-bottom: 1.5rem;

      ${M.MEDIA_SMALL} {
        font-size: ${math(`${theme.font.baseSize} * 1`)};
      }

      ${M.MEDIA_MEDIUM} {
        font-size: ${math(`${theme.font.baseSize} * 1.4`)};
      }

      ${M.MEDIA_XLARGE} {
        font-size: ${math(`${theme.font.baseSize} * 1.7`)};
      }
  `};
`;

export const Anchor = styled.a`
  ${({ theme, ...props }) =>
    css`
      font-size: ${math(`${theme.font.baseSize} * 0.6`)};
      margin-bottom: 1.5rem;

      ${M.MEDIA_SMALL} {
        font-size: ${math(`${theme.font.baseSize} * 1`)};
      }

      ${M.MEDIA_MEDIUM} {
        font-size: ${math(`${theme.font.baseSize} * 1.4`)};
      }

      ${M.MEDIA_XLARGE} {
        font-size: ${math(`${theme.font.baseSize} * 1.7`)};
      }
  `};
`;