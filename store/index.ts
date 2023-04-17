import { configureStore } from '@reduxjs/toolkit';
import { createWrapper, HYDRATE, MakeStore } from 'next-redux-wrapper';
import {
	TypedUseSelectorHook,
	useSelector as useReduxSelector,
} from 'react-redux';
import { combineReducers } from 'redux';
import user from './user';

const rootReducer = combineReducers({
	user: user.reducer,
});

export type rootState = ReturnType<typeof rootReducer>;

let initialRootState: rootState;

const reducer = (state: any, action: any) => {
	if (action.type === HYDRATE) {
		if (state === initialRootState) {
			return {
				...state,
				...action.payload,
			};
		}
		return state;
	}
	return rootReducer(state, action);
};

export const useSelector: TypedUseSelectorHook<rootState> = useReduxSelector;

const initStore: MakeStore = () => {
	const store = configureStore({
		reducer,
		devTools: true,
	});
	initialRootState = store.getState();
	return store;
};

export const wrapper = createWrapper(initStore);
