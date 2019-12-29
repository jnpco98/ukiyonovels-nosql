import React from 'react';
import * as S from './style';

type Props = {
    className?: string;
    children?: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

const CustomSlickArrow: React.FC<Props> = (props: Props) => {
    const { className, onClick, children } = props;

    /* eslint-disable  */
    return <S.Container className={className} onClick={onClick}>{children}</S.Container>;
    /* eslint-enable  */
};

export default CustomSlickArrow;
