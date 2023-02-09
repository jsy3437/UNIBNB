import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import palette from '../styles/palette';
import AirBnBLogoIcon from '../public/static/svg/logo/airbnb_logo.svg';
import AirBnBLogoTextIcon from '../public/static/svg/logo/airbnb_logo_text.svg';

const Container = styled.div`
	position: sticky;
	top: 0;
	width: 100%;
	height: 80px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 80px;
	background-color: white;
	box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 1px;
	z-index: 10;
	.header-logo-wrapper {
		display: flex;
		align-items: center;
		.header-logo {
			margin-right: 6px;
		}
	}
	.header-auth-buttons {
		.header-sign-up-button {
			height: 42px;
			margin-right: 8px;
			padding: 0 16px;
			border: 0;
			border-radius: 21px;
			background-color: white;
			cursor: pointer;
			outline: none;
			&:hover {
				background-color: ${palette.gray_f7};
			}
		}
	}
	.header-login-button {
		height: 42px;
		padding: 0 16px;
		border: 0;
		box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18);
		border-radius: 21px;
		background-color: white;
		cursor: pointer;
		outline: none;
		&:hover {
			box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
		}
	}
`;

const Header: React.FC = () => {
	return (
		<Container>
			<Link href="/" legacyBehavior>
				<a className="header-logo-wrapper">
					<AirBnBLogoIcon className="header-logo" />
					<AirBnBLogoTextIcon />
				</a>
			</Link>
			<div className="header-auth-buttons">
				<button type="button" className="header-sign-up-button">
					회원가입
				</button>
				<button type="button" className="header-login-button">
					로그인
				</button>
			</div>
		</Container>
	);
};

export default Header;
