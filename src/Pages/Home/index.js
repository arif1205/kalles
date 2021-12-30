import React from "react";
import BannerSlider from "../../Components/BannerSlider";
import CategoryMenu from "../../Components/CategoryMenu";
import Nav from "../../Components/Nav";
import TopNav from "../../Components/TopNav";
import { Main } from "./Home.styles";

const Home = () => {
	return (
		<>
			<TopNav></TopNav>
			<Nav></Nav>
			<BannerSlider></BannerSlider>
			<Main>
				<CategoryMenu></CategoryMenu>
			</Main>
		</>
	);
};

export default Home;
