import React, { FormEvent, useState } from 'react';
import styled from 'styled-components';
import CloseXIcon from '../../public/static/svg/auth/modal_close_x_icon.svg';
import MailIcon from '../../public/static/svg/auth/mail.svg';
import PersonIcon from '../../public/static/svg/auth/person.svg';
import OpenedEyeIcon from '../../public/static/svg/auth/opened-eye.svg';
import ClosedEyeIcon from '../../public/static/svg/auth/closed_eye.svg';
import Input from '../common/Input';
import palette from '../../styles/palette';
import Selector from '../common/Selector';
import { dayList, monthList, yearList } from '../../lib/staticData';
import Button from '../common/Button';
import { signupAPI } from '../../lib/api/auth';

const Container = styled.form`
	width: 568px;
	padding: 32px;
	background-color: white;
	z-index: 12;

	.mordal-close-x-icon {
		cursor: pointer;
		display: block;
		margin: 0 0 40px auto;
	}

	.input-wrapper {
		position: relative;
		margin-bottom: 16px;
	}

	.sign-up-password-input-wrapper {
		svg {
			cursor: pointer;
		}
	}

	.sign-up-birthday-label {
		font-size: 16px;
		font-weight: 600;
		margin-top: 16px;
		margin-bottom: 8px;
	}

	.sign-up-modal-birthday-info {
		margin-bottom: 16px;
		color: ${palette.charcoal};
	}

	.sign-up-modal-birthday-selectors {
		display: flex;
		margin-bottom: 24px;
		.sign-up-modal-birthday-month-selector {
			margin-right: 16px;
			flex-grow: 1;
		}
		.sign-up-modal-birthday-day-selector {
			margin-right: 16px;
			width: 25%;
		}
		.sign-up-modal-birthday-year-selector {
			width: 33.3333%;
		}
	}

	.sign-up-modal-submit-button-wrapper {
		margin-bottom: 16px;
		padding-bottom: 16px;
		border-bottom: 1px solid ${palette.gray_eb};
	}
`;

const SignUpModal: React.FC = () => {
	const [email, setEmail] = useState('');
	const [lastname, setLastname] = useState('');
	const [firstname, setFirstname] = useState('');
	const [password, setPassword] = useState('');
	const [hidePassword, setHidePassword] = useState(true);
	const [birthYear, setBirthYear] = useState<string | undefined>();
	const [birthDay, setBirthDay] = useState<string | undefined>();
	const [birthMonth, setBirthMonth] = useState<string | undefined>();

	const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	};

	const onChangeLastname = (event: React.ChangeEvent<HTMLInputElement>) => {
		setLastname(event.target.value);
	};

	const onChangeFirstname = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFirstname(event.target.value);
	};

	const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
	};

	const onChangeBirthMonth = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setBirthMonth(event.target.value);
	};

	const onChangeBirthDay = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setBirthDay(event.target.value);
	};

	const onChangeBirthYear = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setBirthYear(event.target.value);
	};

	const toggleHidePassword = () => {
		setHidePassword(!hidePassword);
	};

	const onSubmitSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		try {
			const signUpBody = {
				email,
				lastname,
				firstname,
				password,
				birthday: new Date(
					`${birthYear}-${birthMonth!.replace('월', '')}-${birthDay}`
				).toISOString(),
			};
			signupAPI(signUpBody);
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<Container onSubmit={onSubmitSignUp}>
			<CloseXIcon className="mordal-close-x-icon" />
			<div className="input-wrapper">
				<Input
					placeholder="이메일 주소"
					type="email"
					icon={<MailIcon />}
					name="email"
					value={email}
					onChange={onChangeEmail}
				/>
			</div>
			<div className="input-wrapper">
				<Input
					placeholder="이름(예:길동)"
					icon={<PersonIcon />}
					value={lastname}
					onChange={onChangeLastname}
				/>
			</div>
			<div className="input-wrapper">
				<Input
					placeholder="성(예:홍)"
					icon={<PersonIcon />}
					value={firstname}
					onChange={onChangeFirstname}
				/>
			</div>
			<div className="input-wrapper sign-up-password-input-wrapper">
				<Input
					placeholder="비밀번호 설정하기"
					type={hidePassword ? 'password' : 'text'}
					icon={
						hidePassword ? (
							<ClosedEyeIcon onClick={toggleHidePassword} />
						) : (
							<OpenedEyeIcon onClick={toggleHidePassword} />
						)
					}
					value={password}
					onChange={onChangePassword}
				/>
			</div>
			<p className="sign-up-birthday-label">생일</p>
			<p className="sign-up-modal-birthday-info">
				만 18세 이상의 성인만 회원으로 가입할 수 있습니다. 생일은 다른
				에어비엔비 이용자에게 공개되지 않습니다.
			</p>
			<div className="sign-up-modal-birthday-selectors">
				<div className="sign-up-modal-birthday-month-selector">
					<Selector
						options={['월', ...monthList]}
						disabledOptions={['월']}
						defaultValue="월"
						value={birthMonth}
						onChange={onChangeBirthMonth}
					/>
				</div>
				<div className="sign-up-modal-birthday-day-selector">
					<Selector
						options={['일', ...dayList]}
						disabledOptions={['일']}
						defaultValue={'일'}
						value={birthDay}
						onChange={onChangeBirthDay}
					/>
				</div>
				<div className="sign-up-modal-birthday-year-selector">
					<Selector
						options={['년', ...yearList]}
						disabledOptions={['년']}
						defaultValue={'년'}
						value={birthYear}
						onChange={onChangeBirthYear}
					/>
				</div>
			</div>
			<div className="sign-up-modal-submit-button-wrapper">
				<Button type="submit">가입하기</Button>
			</div>
		</Container>
	);
};

export default SignUpModal;
