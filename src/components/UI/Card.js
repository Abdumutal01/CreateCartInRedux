import React from 'react';

function Card(props) {
     
     return (
          <div {...props}>
               {props.children}
          </div>
     );
}

export default Card;