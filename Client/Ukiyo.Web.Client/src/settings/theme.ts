import { DefaultTheme } from 'styled-components/macro';

export const BaseTheme: DefaultTheme = {
    gutter: {
        xsmall: '0.5rem',
        small: '1rem',
        medium: '1.125rem',
        large: '3.25rem',
        xlarge: '6.125rem',
        xxlarge: '13.25rem',

        edgeSmall: '2.5rem',
        edgeMedium: '4.5rem',
        edgeLarge: '7rem',
        edgeXLarge: '9.5rem'
    },
    font: {
        baseSize: '1rem',
        weightLight: '200',
        weightRegular: '400',
        weightBold: '600',
        primary: '"Roboto Condensed", Sans-Serif',
        secondary: 'Cabin, Sans-Serif'
    },
    colors: {
        default: '#5f6062',
        subdued: '#afafb0',

        black: '#000',
        white: '#fff',

        backdropColor: 'rgba(0, 0, 0, 0.5)',

        background: '#fff',
        backgroundAlternate: '#f8f8f8',
        backgroundSecondary: '#eef0f4',

        border: '#eee',
        borderAlternate: '#f0eeec',
        borderSecondary: '#d4d5d9',

        primary: '#5f6062',
        secondary: '#4b503f',
        accent: '#7289da',

        selection: '#7d7d7d',

        info: '#7289da',
        infoText: '#fff',
        success: '#218838',
        successText: '#fff',
        warning: '#e0a800',
        warningText: '#fff',
        error: '#dc3545',
        errorText: '#fff'
    }
};
