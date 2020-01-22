import React from 'react';
import profilePicture from "../../../static/assets/images/bio/headshots.jpg"

export default function() {
  return (
    <div className="content-page-wrapper">
      <div 
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
        <div className="right-column">
          Maecenas faucibus mollis interdum. Integer posuere erat a ante venenatis
          dapibus posuere velit aliquet. Sed posuere consectetur est at lobortis.
          Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
          Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget
          risus varius blandit sit amet non magna. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida
          at eget metus. Donec sed odio dui. Cras mattis consectetur purus sit
          amet fermentum. Etiam porta sem malesuada magna mollis e
        </div>
    </div>
  );
}