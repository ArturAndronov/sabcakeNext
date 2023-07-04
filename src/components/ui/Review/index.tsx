import React, {FC} from 'react'

import CommentsSlider from "@/components/ui/CommentsSlider";
import {ReviewContainer} from "@/components/ui/Review/style";

const Review: FC = () => {
    return (
        <>
            <ReviewContainer>
                <div className='ReviewContent'>
                    <h1>Reviews</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dictumst curabitur interdum leo, nunc
                        aptent himenaeos convallis porttitor consequat placerat laoreet quisque molestie facilisis
                        mauris, sociosqu egestas magnis urna ultrices maecenas non litora aliquet dignissim. Metus quis
                        massa platea ultricies fermentum feugiat lectus.</p>
                    <span>John Doe</span>
                    {/*<CommentsSlider />*/}
                </div>
            </ReviewContainer>
        </>
    )
}

export default Review;