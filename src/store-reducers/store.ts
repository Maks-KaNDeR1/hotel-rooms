import { HotelRoomsActionsType, hotelRoomsReducer } from './hotelRooms-reducer';
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { appReducer, AppActionsType } from './app-reducer';

export const rootReducer = combineReducers({
    app: appReducer,
    hotel: hotelRoomsReducer,
})


export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof store.getState>
export type AppRootActionType = AppActionsType | HotelRoomsActionsType

// export type AppDispatch = typeof store.dispatch
export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AppRootActionType>
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppRootActionType>



// @ts-ignore
window.store = store
