import React from 'react';
import { BackdropContainer } from './style';

type Props = {
    show: boolean;
    className?: string;
    children?: React.ReactNode;
    centerChildren?: boolean;
    transparent?: boolean;
    zIndex?: number;
    
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

const Backdrop: React.FC<Props> = (props: Props) => {
    const { show, className, centerChildren, children, transparent, onClick, zIndex } = props;

    // Replace with redux to fix bugs with conflicting multiple
    if(show) document.body.classList.add('no-scroll');
    else document.body.classList.remove('no-scroll');
    
    return (
        <BackdropContainer
            className={className}
            centerChildren={centerChildren}
            onClick={onClick}
            show={show}
            transparent={transparent}
            zIndex={zIndex}
        >
            {children}
        </BackdropContainer>
    );
};

export default Backdrop;
