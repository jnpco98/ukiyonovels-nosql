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
};

const Button: React.FC<Props> = (props: Props): ReactElement => {
    const { children, className, flat, onClick, type } = props;

    return (
        <S.Button className={className} onClick={onClick} buttonType={type} flat={flat}>
            {children}
        </S.Button>
    );
};

export default Button;
