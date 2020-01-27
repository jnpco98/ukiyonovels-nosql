import React, { ReactElement } from 'react';
import * as S from './style';

export enum ButtonType {
    Info,
    Success,
    Warning,
    Error
}

type Props = {
    flat?: boolean;
    type?: ButtonType;
    className?: string;
    children?: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>) => void;
    href?: string;
};

const Button: React.FC<Props> = (props: Props): ReactElement => {
    const { children, className, flat, onClick, type, href } = props;

    return (
        <S.ButtonContainer 
            className={className} 
            onClick={onClick} 
            buttonType={type} 
            flat={flat} 
            href={href}
        >
            {children}
        </S.ButtonContainer>
    );
};

export default Button;
