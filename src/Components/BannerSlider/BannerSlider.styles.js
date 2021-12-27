import styled from "styled-components";

export const Container = styled.div``;

export const SlideContainer = styled.div`
	width: 100%;
	height: 600px;
	background: url(${(props) => props.bg});
	background-size: cover;
	position: relative;

	div.content {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: 100px;
		color: var(--dark-color);

		p.pre-title {
			font-size: 18px;
			text-transform: uppercase;
			font-weight: 500;
		}

		h1.title {
			font-size: 55px;
			font-weight: 600;
			margin-bottom: 10px;
		}
	}

	div.content--right {
		right: 100px;
		left: auto;
		text-align: right;
	}
`;
