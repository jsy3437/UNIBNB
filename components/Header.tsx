import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
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
`;

const Header: React.FC = () => {
	return (
		<Container>
			<Link href="/">
				<a className="header-logo-wrapper">
					<AirBnBLogoIcon className="header-logo" />
					<AirBnBLogoTextIcon />
				</a>
			</Link>
		</Container>
	);
};

export default Header;
