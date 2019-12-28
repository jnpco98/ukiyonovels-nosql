import React from 'react';
import { Container } from './style';

type Props = {
    show: boolean;
    className?: string;
    color?: string;
    transparent?: boolean;
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    zIndex?: number;
};

const Backdrop: React.FC<Props> = (props: Props) => {
    const { show, className, transparent, onClick, zIndex } = props;

    return <Container className={className} onClick={onClick} show={show} transparent={transparent} zIndex={zIndex} />;
};

export default Backdrop;
