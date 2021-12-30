import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	margin-bottom: 100px;

	.women,
	.acessories,
	.watches,
	.footwear {
		overflow: hidden;
		padding-top: 110%;
		position: relative;

		img {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			transition: all 0.6s ease-in-out;
			object-fit: cover;
		}

		button {
			position: absolute;
			left: 50%;
			bottom: 20px;
			transform: translateX(-50%);

			&:hover {
				opacity: 1;
			}
		}

		&:hover img {
			transform: scale(1.1);
		}
	}
`;

export const Women = styled.div`
	grid-row: 1 / span 2;
	grid-column: 1 / span 1;
`;

export const Acessories = styled.div``;

export const Watches = styled.div`
	grid-row: 1 / span 2;
	grid-column: 3 / span 1;
`;

export const Footwear = styled.div``;
