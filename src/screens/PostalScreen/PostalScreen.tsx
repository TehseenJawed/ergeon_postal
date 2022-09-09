import React, {useState, useEffect} from 'react';
import { PostalField } from './InnerComponents';
import {  } from '../../redux/reducer/PostalStore';
import { GetPostal } from '../../redux/action/PostalAction';
import { useDispatch, useSelector } from 'react-redux';

const Calendar = () => {
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(GetPostal())
    // window.scrollTo(0, 0);
  }, []);
  return (
    <div className='postal-wrapper'>
      <span>Type your postal code here</span>
      <PostalField />
    </div>
  )
}

export default Calendar; 