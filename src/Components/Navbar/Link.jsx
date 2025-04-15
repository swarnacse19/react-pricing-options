import React from 'react';

function Link({route}) {
  return (
    //console.log(route)
    
    <li>
        <a href={route.path}>{route.name}</a>
    </li>
  );
}

export default Link;