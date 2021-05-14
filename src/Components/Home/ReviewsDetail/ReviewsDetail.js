import React from 'react';
import './ReviewsDetail.css';
const ReviewsDetail = (props) => {
    const {image, name, flag} = props.review
    
    return (
        <div className="col-md-4 container">
            <div className="box">
                <div className="image d-flex">
                    <img style={{width: '50px'}} src={image} alt="" />
                    <div className="name1">
                        <h5>{name}</h5>
                        <div className="d-flex">
                        <img style={{width: '30px'}} src={flag} alt="" />
                        <h6>PALO ALTO, CA</h6>
                        </div>
                    </div>
                </div>
                <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum harum atque labore omnis ullam deleniti porro, laboriosam illo quidem mollitia veniam eveniet dolorem similique illum maxime fugiat reiciendis id repellat quisquam, dolore delectus! Dolorem repudiandae delectus, quam corrupti id non?</small></p>
            </div>
        </div>
    );
};

export default ReviewsDetail;