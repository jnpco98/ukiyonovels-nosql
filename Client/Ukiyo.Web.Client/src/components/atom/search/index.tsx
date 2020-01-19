import React, { ReactElement, useState, useRef } from 'react';
import { useOnClickOutside } from '../../../utilities/hooks';
import * as S from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

type Props = {
    name: string;
    placeholder?: string;
};

const Search: React.FC<Props> = (props: Props): ReactElement => {
    const { name, placeholder } = props;
    const [active, setActive] = useState(false);

    const searchRef = useRef(document.createElement('div'));

    useOnClickOutside(searchRef, () => setActive(false));

    return (
        <S.SearchContainer ref={searchRef} active={active}>
            <S.SearchInput type="text" name={name} placeholder={placeholder || 'Type to search'} />
            <S.SearchButton onClick={(): void => setActive(!active)}>
                <FontAwesomeIcon icon={faSearch}/>
            </S.SearchButton>
        </S.SearchContainer>
    );
};

export default Search;
