import React from 'react';
import ShowsDetail from '../ShowsDetail/ShowsDetail';


const showsData = [
    {
        singer: 'Benny Dayal',
        type: 'Folk',
        image: "https://i.ibb.co/fCxyW3p/Img1.png",
        
    },
    {
        singer: 'Vijay Yesudas',
        type: 'BollyWood',
        image: "https://i.ibb.co/2hmFMhV/Img2.png",
    },
    {
        singer: 'Andrea Jeremiah',
        type: 'Folk',
        image: "https://i.ibb.co/L6GYz1w/Img3.png",
    },
    {
        singer: 'Shilpa Rao',
        type: 'Folk',
        image: "https://i.ibb.co/kywNsTC/Img4.png",
    }
]





const Shows = () => {
    return (
        
        <div>
            <div className="d-flex">
            <h2 className="text-white start">Upcoming Shows</h2>
            <p className="end">View all</p>
            </div>
            <div className="row container-fluid mt-5">
            
            {
                    showsData.map(show => <ShowsDetail show={show} key={show.singer}></ShowsDetail>)
            }
        </div>
        </div>
    );
};

export default Shows;
