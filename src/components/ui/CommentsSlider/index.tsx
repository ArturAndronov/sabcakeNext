import React, {FC} from 'react';
import Slider from 'react-slick';

import {Box, Typography} from "@mui/material";
import { CommentsSliderContainer} from "@/components/ui/CommentsSlider/style";

const CommentsSlider: FC = () => {
    const comments = [
        {
            id: 1,
            text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit dictumst curabitur interdum leo,' +
                ' nunc aptent himenaeos convallis porttitor consequat placerat laoreet quisque molestie facilisis mauris, ' +
                'sociosqu egestas magnis urna ultrices maecenas non litora aliquet dignissim. Metus quis massa platea ultricies fermentum feugiat lectus.',
            author: 'John Doe'
        },
        {id: 2, text: 'Рекомендую!!! Очень вкусный, нежный, пропитанный торт!!! Дети были в восторге!', author: 'Natalya Yakubenko'},
        {id: 3, text: 'Я в восторге от качества!', author: 'Петр'},
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <CommentsSliderContainer>
                <Slider {...settings}>
                    {comments.map((comment) => (
                        <Box key={comment.id}>
                            <Typography
                                style={{
                                    padding: "25px 0px",
                                    fontFamily: 'Quicksand',
                                    fontWeight: "400",
                                    fontSize: "24px",
                                    textAlign: 'center'

                                }}>
                                {comment.text}
                            </Typography>
                            <Typography
                                style={{
                                    fontFamily: 'Rubik',
                                    fontWeight: "400",
                                    fontSize: "31px",
                                    lineHeight: "38px",
                                    textAlign: 'center',
                                    paddingBottom: "45px"
                                }}>
                                {comment.author}
                            </Typography>
                        </Box>

                    ))}
                </Slider>
        </CommentsSliderContainer>
    );
};

export default CommentsSlider;