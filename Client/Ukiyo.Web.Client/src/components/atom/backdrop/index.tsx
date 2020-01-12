import React from 'react';
import { BackdropContainer } from './style';

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

    if (show) {
        document.body.classList.add('no-scroll');
    } else {
        document.body.classList.remove('no-scroll');
    }

    return (
        <BackdropContainer
            className={className}
            onClick={onClick}
            show={show}
            transparent={transparent}
            zIndex={zIndex}
        />
    );
};

export default Backdrop;
