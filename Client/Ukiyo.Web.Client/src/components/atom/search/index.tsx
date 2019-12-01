import React, { ReactElement, useContext, useState, useRef } from 'react';
import { ThemeContext } from 'styled-components';
import { useOnClickOutside } from '../../../utilities/hooks';
import { GlyphType } from '../icon/glyph';
import Icon from '../icon';
import * as S from './style';

type Props = {
    name: string;
    placeholder?: string;
};

const Search: React.FC<Props> = (props: Props): ReactElement => {
    const { name, placeholder } = props;
    const [active, setActive] = useState(false);

    const themeContext = useContext(ThemeContext);

    const searchRef = useRef(document.createElement('div'));

    useOnClickOutside(searchRef, () => setActive(false));

    return (
        <S.Search ref={searchRef} className={active ? 'active' : ''}>
            <S.SearchInput type="text" name={name} placeholder={placeholder || 'Type to search'} />
            <S.SearchButton onClick={(): void => setActive(!active)}>
                <Icon glyph={GlyphType.Search} fill={themeContext.colors.accent} />
            </S.SearchButton>
        </S.Search>
    );
};

export default Search;
