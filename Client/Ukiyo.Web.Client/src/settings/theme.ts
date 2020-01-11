import { ThemeSettings } from 'styled-components/macro';

export const BaseTheme: ThemeSettings = {
    maxScreenSize: '2650px',
    gutter: {
        base: '1rem',
        xxsmall: '2rem',
        xsmall: '3rem',
        small: '5rem',
        medium: '7rem',
        large: '12rem',
        xlarge: '15',
        xxlarge: '17rem'
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
        default: '#5F6062',
        subdued: '#AFAFB0',

        black: '#000',
        white: '#FFF',

        backdropColor: 'rgba(0, 0, 0, 0.5)',

        background: 'white',
        backgroundAlternate: '#F8F8F8',

        border: '#EEE',
        borderHover: '#F3F3F3',
        borderAlternate: '#F0EEEC',
        borderHoverAlternate: '#D4D5D9',

        primary: '#5F6062',
        primaryCompliment: 'white',
        secondary: '#4b503f',
        secondaryCompliment: 'white',
        accent: '#04828D',
        accentCompliment: '4b503f',

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
