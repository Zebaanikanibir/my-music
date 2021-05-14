import React from 'react';
import {Card} from 'react-bootstrap';
import './ShowsDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faClipboardList} from '@fortawesome/free-solid-svg-icons'
import logo from '../../../Images/logo1.png';
const ShowsDetail = (props) => {
    const {singer, type, image} =props.show
    return (
        <div className="col-md-3">
            <Card  className="card1">
        <Card.Img variant="top" src={image} />
        <Card.Body className="singer">
        <div className="nameBtn">
        <button className="btnColor">{type}</button>
        <h4>{singer}</h4>
        </div>
        <div className="d-flex justify-content-around">
        <a className="nav-a mr-5 ms-5" href="/">More Info <FontAwesomeIcon icon={faArrowRight} /></a> 
        <h4 id='listBoard'><FontAwesomeIcon icon={faClipboardList} /></h4>
        </div>
        </Card.Body>
       
      </Card>
        </div>
    );
};

export default ShowsDetail;