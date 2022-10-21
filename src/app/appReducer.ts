import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'app',
    initialState: {
        isInitialized: true,
        appStatus: 'loading',
        error: null
    } as AppStateType,
    reducers:{
        changeAppStatus(state,action: PayloadAction<{ status: appStatus }>){
            state.appStatus = action.payload.status
        },
        setError(state,action: PayloadAction<{ error: string | null }>){
            state.error = action.payload.error
        }
    }
})

export const appReducer = slice.reducer;
export const {changeAppStatus, setError} = slice.actions

export type appActions =
     | ReturnType<typeof changeAppStatus>
     | ReturnType<typeof setError>

type AppStateType = {
    isInitialized: boolean
    appStatus: appStatus
    error: null | string
}

type appStatus = 'loading' | 'idle' | 'error'