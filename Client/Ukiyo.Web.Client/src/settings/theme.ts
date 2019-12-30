import { DefaultTheme } from 'styled-components/macro';

export const BaseTheme: DefaultTheme = {
    maxScreenSize: '1600px',
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
        primary: '"Roboto", Sans-Serif',
        secondary: '"Nunito Sans", Sans-Serif'
    },
    colors: {
        default: '#054857',
        subdued: '#04828D',

        black: '#000',
        white: '#fff',

        backdropColor: 'rgba(0, 0, 0, 0.5)',

        background: '#fff',
        backgroundAlternate: '#161622',
        backgroundSecondary: '#eef0f4',

        border: '#eee',
        borderAlternate: '#f0eeec',
        borderSecondary: '#d4d5d9',

        primary: '#161622',
        secondary: '#054857',
        accent: '#04828D',

        selection: '#7d7d7d',

        info: '#04828D',
        infoText: '#fff',
        success: '#218838',
        successText: '#fff',
        warning: '#e0a800',
        warningText: '#fff',
        error: '#dc3545',
        errorText: '#fff'
    }
};
