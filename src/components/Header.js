import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import {FaCamera} from "react-icons/fa";


export default function Header() {
  return (
    <div className='header'>
       <div className='circle'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuOljglmnzFOGzU_jv6TGuQngu8uBaOr6btAG9QQrcjjYwCGSkug2GBxkdoLqMP4QiUuw&usqp=CAU' alt='' />
    </div>

      <div className='txtHeader'>
        <Link className='txtHeader' to='/'>
          Instaclone
        </Link>
      </div>

      <div className='camera'>
      <Link to='/Form'><FaCamera icon="fa-solid fa-camera-retro fa-2x" className='icon-class'/></Link>
      </div>
    </div>
  );
}
