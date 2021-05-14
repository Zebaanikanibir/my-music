import React from 'react';
import ReviewsDetail from '../ReviewsDetail/ReviewsDetail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons'
const reviewsData = [
    {
        name: 'Helen Jummy',
        image: "https://i.ibb.co/1QtZX4q/Img-2.png",
        flag:"https://i.ibb.co/1253msX/flags-PNG14592.png",
        
        
    },
    {
        name: 'Issac Oluwatemilorun',
        image: "https://i.ibb.co/Rg8Z41v/Img.png",
        flag:"https://i.ibb.co/s1tr1fs/download.png",
    },
    {
        name: 'Helen Jummy1',
        image: "https://i.ibb.co/PmCgWrF/Img-1.png",
        flag:"https://i.ibb.co/1253msX/flags-PNG14592.png",
    },

]


const Reviews = () => {


    return (
        <div>
            <div className="d-flex">
            <h2 className="text-white start">Reviews</h2>
            <p className="end1">1/3<FontAwesomeIcon icon={faArrowLeft} /> <FontAwesomeIcon icon={faArrowRight} /></p>
            </div>
            <div className="row container-fluid mt-5">
            {
                    reviewsData.map(review => <ReviewsDetail review={review} key={review.name}></ReviewsDetail>)
            }
        </div>
        </div>
    );
};

export default Reviews;