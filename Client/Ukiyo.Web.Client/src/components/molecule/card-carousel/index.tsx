import React, { ReactElement } from 'react';
import Card from '../../atom/card';
import * as S from './style';

type Props = {
    content: {
        heading: string;
        subtitle: string;
        genre: string;
        link: string;
        image: string;
    }[];
};

const CardCarousel: React.FC<Props> = (props: Props): ReactElement => {
    const { content } = props;

    return (
        <div style={{ display: 'flex' }}>
            {content.map(({ heading, subtitle, genre, link, image }) => (
                <Card
                    key={heading + subtitle}
                    heading={heading}
                    subtitle={subtitle}
                    genre={genre}
                    link={link}
                    image={image}
                />
            ))}
        </div>
    );
};

export default CardCarousel;
