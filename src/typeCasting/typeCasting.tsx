import {
    CurrentSnake,
    Postal,
} from './expectedModels/model'

export interface STATE {
    CalendarStore: {
        baseUrl: string,
        loading: boolean,
        currentSnake: CurrentSnake,
        postal: Postal[],
        postalField: number,
    }
}
