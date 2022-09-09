import React, { useState } from 'react';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import { CURRENTSNAKE } from '../redux/reducer/PostalStore';
import { SnakeBar } from '../redux/action/PostalAction';
import { useSelector, useDispatch } from 'react-redux';
import { CurrentSnake } from '../typeCasting/expectedModels/model';

export interface State extends SnackbarOrigin {
  // open: boolean;
}

export default function PositionedSnackbar() {
  const dispatch = useDispatch()
  const currentSnake: CurrentSnake = useSelector(CURRENTSNAKE)
  const { open, message } = currentSnake;
  const [state, setState] = React.useState<State>({
    vertical: 'bottom',
    horizontal: 'center',
  });
  const { vertical, horizontal } = state;


  const handleClose = () => {
    const newObj: CurrentSnake = {
      message: '',
      open: false
    }
    dispatch(SnakeBar(newObj))
  };


  return <Snackbar
    anchorOrigin={{ vertical, horizontal }}
    open={open}
    onClose={handleClose}
    message={message}
    key={vertical + horizontal}
  />
}
