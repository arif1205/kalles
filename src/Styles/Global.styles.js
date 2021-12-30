import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --dark-color: #222222;
    --gray-color: #878787;
    --price-gray-color: #696969;
    --skyblue-color: #56cfe1;
    --orange-color: #FF4E00;
    --red-color: #ec0101;
    --green-color: #109533;
    --yellow-color: #FFA800;
    --primary-font: 'Poppins', sans-serif;
    --secondary-font: 'Libre Baskerville', serif;
    --transition: all .3s;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: var(--primary-font);
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style-type: none;
    margin-bottom: 0;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin-bottom: 0;
  }

  /* customizing swiper pagination  */
  .swiper-pagination {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    background: rgba(0, 0, 0, 0.9) !important;
    transition: all .2s;
  }
  
  .swiper-pagination-bullet-active {
    width: 12px;
    height: 12px;
  }
`;

export const Flex = styled.div`
	display: flex;
	justify-content: ${(props) => props.horizontal || "flex-start"};
	align-items: ${(props) => props.vertical || "stretch"};
	flex-grow: ${(props) => props.grow || "0"};
	flex-direction: ${(props) => props.direction || "row"};
	flex-wrap: ${(props) => props.wrap || "wrap"};
	gap: ${(props) => props.gap || "10px"};
`;

export const Grid = styled.div`
	display: grid;
	justify-content: ${(props) => props.horizontal || "flex-start"};
	align-items: ${(props) => props.vertical || "stretch"};
	grid-template-columns: ${(props) => props.columns || ""};
	grid-template-rows: ${(props) => props.rows || ""};
	grid-gap: ${(props) => props.gap || "10px"};
`;

export const PrimaryLink = styled.a`
	transition: all 0.3s;
	color: var(--gray-color);

	&:hover {
		color: var(--skyblue-color) !important;
	}
`;

export const Badge = styled.div`
	position: absolute;
	top: -10px;
	right: -20px;
	padding: 2px 9px;
	border-radius: 10px;
	color: white;
	background: ${(props) => props.bg};
	font-size: 9px;
`;

export const PrimaryBtn = styled.button`
	border: none;
	cursor: pointer;
	color: ${(props) => props.color};
	background: ${(props) => props.bg};
	font-weight: 600;
	font-size: 14px;
	padding: 13px 15px;
	min-width: 150px;
	text-align: center;
	transition: all 0.1s;

	&:hover {
		opacity: 0.8;
	}
`;
