import React from "react";
import BannerSlider from "../../Components/BannerSlider";
import Nav from "../../Components/Nav";
import TopNav from "../../Components/TopNav";

const Home = () => {
	return (
		<>
			<TopNav></TopNav>
			<Nav></Nav>
			<BannerSlider></BannerSlider>
		</>
	);
};

export default Home;
