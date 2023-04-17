import { userType } from './user';

export type UserState = userType & {
	isLogged: boolean;
};
