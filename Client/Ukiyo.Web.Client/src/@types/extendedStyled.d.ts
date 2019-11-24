import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        gutter: {
            xsmall: string;
            small: string;
            medium: string;
            large: string;
            xlarge: string;
            xxlarge: string;

            edgeSmall: string;
            edgeMedium: string;
            edgeLarge: string;
            edgeXLarge: string;
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

            background: string;
            backgroundAlternate: string;
            backgroundSecondary: string;

            border: string;
            borderAlternate: string;
            borderSecondary: string;

            primary: string;
            secondary: string;
            accent: string;

            selection: string;

            success: string;
            error: string;
        };
    }
}