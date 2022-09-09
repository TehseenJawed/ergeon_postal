import axios from 'axios'
import { STATE } from '../../typeCasting/typeCasting';
import PostalData from '../../constants/USCities.json';
import {
  Postal,
  CurrentSnake
} from '../../typeCasting/expectedModels/model';


export const Loading = (load: boolean) => {
  return {
    type: "Loading",
    load,
  };
};

export const UpdatePostal = (load: string) => {
  return {
    type: "UpdatePostal",
    load,
  };
};

export const SetPostal = (load: Postal[]) => {
  return {
    type: "SetPostal",
    load,
  };
};

export const SnakeBar = (load: CurrentSnake) => {
  return {
    type: "SnakeBar",
    load,
  };
};

export const GetPostal = () => {
  return async (dispatch: any, state: any) => {
    try {
      dispatch(Loading(true))
      const data: Postal[] = PostalData.map(({zip_code}) => zip_code)
      dispatch(SetPostal(data))
      const snakeObj = {
        message: 'Data Fetched Successfully. You can now enter your zipcode to get suggestions.',
        open: true
      }
      dispatch(SnakeBar(snakeObj))
      dispatch(Loading(false))
    }
    catch (err) {
      dispatch(Loading(false))
    }
  }
};

