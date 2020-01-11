import 'styled-components';

declare module 'styled-components' {
    export interface ThemeSettings {
        maxScreenSize: string;
        gutter: {
            base: string;
            xxsmall: string;
            xsmall: string;
            small: string;
            medium: string;
            large: string;
            xlarge: string;
            xxlarge: string;
        };
        font: {
            baseSize: string;
            weightLight: string;
            weightRegular: string;
            weightBold: string;
            primary: string;
            secondary: string;
        };
        colors: {
            default: string;
            subdued: string;

            black: string;
            white: string;

            backdropColor: string;

            background: string;
            backgroundAlternate: string;

            border: string;
            borderHover: string;
            borderAlternate: string;
            borderHoverAlternate: string;

            primary: string;
            primaryCompliment: string;
            secondary: string;
            secondaryCompliment: string;
            accent: string;
            accentCompliment: string;

            selection: string;

            info: string;
            infoText: string;
            success: string;
            successText: string;
            warning: string;
            warningText: string;
            error: string;
            errorText: string;
        };
    }
}
