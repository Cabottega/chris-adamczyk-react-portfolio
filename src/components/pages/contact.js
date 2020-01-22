import React from 'react';
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import contactPagePicture from "../../../static/assets/images/bio/contact-picture.jpg";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div 
        className="left-column"
        style={{
          background: "url(" + contactPagePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="right-column">
        <div className="contact-bullet-points">
            <div className="bullet-point-group">
              <div className="icon">
                <FontAwesomeIcon icon="phone" />
              </div>

              <div className="text">862-209-0847</div>
            </div>

            <div className="bullet-point-group">
              <div className="icon">
                <FontAwesomeIcon icon="envelope" />
              </div>

              <div className="text">adamczykchris@gmail.com</div>
            </div>

            <div className="bullet-point-group">
              <div className="icon">
                <FontAwesomeIcon icon="map-marked-alt" />
              </div>

              <div className="text">Weehawken, NJ</div>
            </div>

            <div className="bullet-point-group">
              <div className="icon">
                <FontAwesomeIcon icon="sign-out-alt" />
              </div>

              <div className="text">
                <div className="nav-link-wrapper">
                    <a href="https://www.linkedin.com/in/christopheradamczyk">Linkedin.com</a>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}