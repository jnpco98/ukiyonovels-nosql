import React, { ReactElement, useState, useContext, useRef } from 'react';
import { ThemeContext } from 'styled-components';
import { GlyphType } from '../icon/glyph';
import { useOnClickOutside } from '../../../utilities/hooks';
import * as S from './style';

interface SelectOptions {
    displayName: string;
    value: string;
}

type Props = {
    options: SelectOptions[];
    optionName: string;
    onSelect: (o: SelectOptions) => void;
    defaultValue?: string;
    maxHeight?: string;
};

const Select = (props: Props): ReactElement => {
    const { onSelect, defaultValue, options, optionName, maxHeight } = props;
    const [selected, setSelected] = useState(-1);
    const [selectOpen, setSelectOpen] = useState(false);

    const themeContext = useContext(ThemeContext);
    const selectRef = useRef(document.createElement('div'));

    useOnClickOutside(selectRef, () => setSelectOpen(false));

    return (
        <S.Select ref={selectRef} onClick={(): void => setSelectOpen(!selectOpen)}>
            <S.OptionSelected>
                {selected === -1 ? defaultValue : options[selected].displayName}
                <S.SelectIcon
                    className={selectOpen ? 'active' : ''}
                    glyph={GlyphType.DownFill}
                    size="1.5rem"
                    fill={selectOpen ? themeContext.colors.default : themeContext.colors.accent}
                />
            </S.OptionSelected>
            <S.OptionContainer className={selectOpen ? 'active' : ''} height={maxHeight} autoHide>
                {options.map((o, idx) => (
                    <S.Option
                        className={idx === selected ? 'selected' : ''}
                        key={o.value}
                        onClick={(): void => {
                            if (idx === selected) return;
                            setSelected(idx);
                            onSelect(options[idx]);
                        }}
                    >
                        <S.OptionInput id={`${o.displayName}_${o.value}`} name={optionName} />
                        <S.OptionLabel htmlFor={`${o.displayName}_${o.value}`}>{o.displayName}</S.OptionLabel>
                    </S.Option>
                ))}
            </S.OptionContainer>
        </S.Select>
    );
};

export default Select;
