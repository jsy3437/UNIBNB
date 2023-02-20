import React, { useState } from 'react';
import styled from 'styled-components';
import CloseXIcon from '../../public/static/svg/auth/modal_close_x_icon.svg';
import MailIcon from '../../public/static/svg/auth/mail.svg';
import PersonIcon from '../../public/static/svg/auth/person.svg';
import OpenedEyeIcon from '../../public/static/svg/auth/opened-eye.svg';
import ClosedEyeIcon from '../../public/static/svg/auth/closed_eye.svg';
import Input from '../common/Input';
import palette from '../../styles/palette';
import Selector from '../common/Selector';
import { monthList } from '../../lib/staticData';

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
`;

const SignUpModal: React.FC = () => {
	const [email, setEmail] = useState('');
	const [lastname, setLastname] = useState('');
	const [firstname, setFirstname] = useState('');
	const [password, setPassword] = useState('');
	const [hidePassword, setHidePassword] = useState(true);

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

	const toggleHidePassword = () => {
		setHidePassword(!hidePassword);
	};

	return (
		<Container>
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
			<Selector
				options={['월', ...monthList]}
				disabledOptions={['월']}
				defaultValue="월"
			/>
		</Container>
	);
};

export default SignUpModal;
