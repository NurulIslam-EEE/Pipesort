import React from 'react';
import './Empty.css'
import emptyImg from '../../asset/images/empty.gif'

const Empty = () => (
  <div className='emptyView-wrap'>
    <img src={emptyImg} alt='' />
  </div>
);

export default Empty;