import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'app',
    initialState: {
        appStatus: 'loading',
        error: null
    } as AppStateType,
    reducers:{
        changeAppStatus(state,action: PayloadAction<{ status: appStatus }>){
            state.appStatus = action.payload.status
        },
        setError(state, action: { payload: { error: string } }){
            state.error = action.payload.error
        }
    }
})

export const appReducer = slice.reducer;
export const {changeAppStatus, setError} = slice.actions

export type appActions =
     | ReturnType<typeof changeAppStatus>
     | ReturnType<typeof setError>

export type AppStateType = {
    appStatus: appStatus
    error: null | string
}

type appStatus = 'loading' | 'idle' | 'error'