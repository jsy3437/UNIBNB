import axios from '.';

interface SignUpAPIBody {
	email: string;
	firstname: string;
	lastname: string;
	password: string;
	birthday: string;
}

export const signupAPI = (body: SignUpAPIBody) => {
	axios.post('auth/signup', body);
};
