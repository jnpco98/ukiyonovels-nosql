const generateQuery = (screen) => `@media only screen and (min-width: ${screen})`;

export const XXLARGE = '1750px';
export const XLARGE = '1441px';
export const LARGE = '1250px';
export const MEDIUM = '1025px';
export const SMALL = '769px';
export const XSMALL = '570px';
export const XXSMALL = '375px';

export const MEDIA_XXLARGE = generateQuery(XXLARGE);
export const MEDIA_XLARGE = generateQuery(XLARGE);
export const MEDIA_LARGE = generateQuery(LARGE);
export const MEDIA_MEDIUM = generateQuery(MEDIUM);
export const MEDIA_SMALL = generateQuery(SMALL);
export const MEDIA_XSMALL = generateQuery(XSMALL);
export const MEDIA_XXSMALL = generateQuery(XXSMALL);