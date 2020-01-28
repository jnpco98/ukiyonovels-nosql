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
    submitButton?: boolean;
    buttonType?: ButtonType;
    className?: string;
    children?: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>) => void;
    href?: string;
};

const Button: React.FC<Props> = (props: Props): ReactElement => {
    const { children, className, flat, onClick, buttonType, href, submitButton } = props;

    const submitButtonProps: any = submitButton ? { type: 'submit', as: 'button' } : { href };

    return (
        <S.ButtonContainer 
            className={className} 
            onClick={onClick} 
            buttonType={buttonType} 
            flat={flat}
            {...submitButtonProps}
        >
            {children}
        </S.ButtonContainer>
    );
};

export default Button;
