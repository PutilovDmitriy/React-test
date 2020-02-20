import React from 'react'
import {Link} from 'react-router-dom';

const ListMenu = () => {
      
    return(
      <div>
        <ul>
            <li><Link to='/service'>Service</Link></li>
            <li><Link to='/car'>Car</Link></li>
            <li><Link to='/staff'>Staff</Link></li>
        </ul>
      </div>

)}

export default ListMenu;