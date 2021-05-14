import React from 'react';
import './Bar.css';
import image from '../../../Images/Vector1.png';
import image1 from '../../../Images/Vector.png';
import image2 from '../../../Images/imagea.png'
const Bar = () => {
    return (


        <div className="row mt-5 container-fluid">
            <div className="col-md-3">
               
                <div className="container">
                <div className="bar">
                    <svg>
                        <circle className="circle2" cx="50%" cy="50%" r="50%" />
                    </svg>
                    <div className="logo">
                        <img src={image2} alt="" />
                        
                        
                        <h6>60%</h6>
                        <p>Label</p>
                    </div>
                    
                </div>
                </div>
            </div>
            <div className="col-md-3">
               
                <div className="container">
                <div className="bar">
                    <svg>
                        <circle className="circle1" cx="50%" cy="50%" r="50%" />
                    </svg>
                    <div className="logo">
                        <img src={image} alt="" />
                        
                        <img className="image1" src={image1} alt="" />
                        
                        <h6>90%</h6>
                        <p>Label</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-md-3">
               
                <div className="container">
                <div className="bar">
                    <svg>
                        <circle className="circle2" cx="50%" cy="50%" r="50%" />
                    </svg>
                    <div className="logo">
                        <img src={image} alt="" />
                        
                        <img className="image1" src={image1} alt="" />
                        
                        <h6>60%</h6>
                        <p>Label</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-md-3">
               
                <div className="container">
                <div className="bar">
                    <svg>
                        <circle className="circle1" cx="50%" cy="50%" r="50%" />
                    </svg>
                    <div className="logo">
                        <img src={image} alt="" />
                        
                        <img className="image1" src={image1} alt="" />
                        
                        <h6>90%</h6>
                        <p>Label</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Bar;