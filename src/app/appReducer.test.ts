import {appReducer, AppStateType, changeAppStatus, setError} from './appReducer';

let startState: AppStateType;

beforeEach(() => {
    startState = {
        appStatus: 'loading',
        error: null
    }
})

test('correct error should be set', () => {
    const endState = appReducer(startState, setError({error: '123'}))
    expect(endState.error).toBe('123')
    expect(endState.appStatus).toBe('loading')
    expect(startState.error).toBe(null)
    expect(startState.appStatus).toBe('loading')
});

test('correct app status should be set', () => {
    const endState = appReducer(startState, changeAppStatus({status: 'idle'}))
    expect(endState.appStatus).toBe('idle')
    expect(endState.error).toBe(null)
    expect(startState.error).toBe(null)
    expect(startState.appStatus).toBe('loading')
});