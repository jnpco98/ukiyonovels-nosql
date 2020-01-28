import React, { ReactElement } from 'react';
import { AnyStyledComponent } from 'styled-components/macro';
import * as S from './style';

export enum InputType {
    Multi,
    Single
}

type Props = {
    className?: string;
    inputType?: InputType;
}

const Input: React.FC<Props> = (props: Props): ReactElement => {
    const { className = '', inputType } = props;

    let StyledInput: AnyStyledComponent;

    switch (inputType) {
        case InputType.Multi:
            StyledInput = S.TextArea;
            break;
        default:
        case InputType.Single:
            StyledInput = S.Input;
            break;
    }

    return (
        <StyledInput className={className} {...props}/>
    );
};

export default Input;
