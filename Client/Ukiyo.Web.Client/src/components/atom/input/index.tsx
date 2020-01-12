import React, { ReactElement, useState, useRef } from 'react';
import * as S from './style';
import { useOnClickOutside } from '../../../utilities/hooks';

type Props = {
    name: string;
    label: string;
    required?: boolean;
    autoComplete?: string;
};

const Input: React.FC<Props> = (props: Props): ReactElement => {
    const { name, label, required, autoComplete } = props;
    const [active, setActive] = useState(false);
    const [empty, setEmpty] = useState(true);

    const inputRef = useRef(document.createElement('input'));

    useOnClickOutside(inputRef, () => empty && setActive(false));

    return (
        <S.InputContainer ref={inputRef} onClick={(): void => setActive(true)}>
            <S.InputField
                type="text"
                name={name}
                autoComplete={autoComplete}
                required={required}
                active={active}
                onChange={(e): void => (e.target.value.length ? setEmpty(false) : setEmpty(true))}
            />
            <S.InputLabel active={active} htmlFor={name}>
                <S.InputLabelSpan active={active}>{label}</S.InputLabelSpan>
            </S.InputLabel>
        </S.InputContainer>
    );
};

export default Input;
