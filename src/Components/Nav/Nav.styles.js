import styled from "styled-components";

export const Container = styled.nav`
	background: white;
	width: 100%;
	padding: 17px 15px;

	.nav_container {
		height: 100%;
	}

	.logo {
		padding-left: 10px;
	}

	.links {
		justify-self: center;
	}

	.link_item {
		position: relative;
	}

	.link_item a {
		font-size: 14px;
		color: #222;
	}

	.link_item-red a {
		color: var(--red-color);
	}

	.cart_user_fav .icon {
		color: #222;
		font-size: 20px;
	}
`;
