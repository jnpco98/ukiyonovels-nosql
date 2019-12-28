import React, { ReactElement } from 'react';

export enum AvatarType {}

type Props = {
    className?: string;
    children?: React.ReactNode;
    type?: AvatarType;
};

const Avatar: React.FC<Props> = (props: Props): ReactElement => {
    const { children = '', className = '', type } = props;

    let StyledAvatar;

    return <StyledAvatar className={className}>{{ children }}</StyledAvatar>;
};

export default Avatar;
