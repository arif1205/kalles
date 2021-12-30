import React from "react";
import { Grid, PrimaryBtn } from "../../Styles/Global.styles";
import {
	Acessories,
	Container,
	Footwear,
	Watches,
	Women,
} from "./CategoryMenu.styles";
import { Link } from "react-router-dom";
// Images
import women from "../../Images/category/women.jpg";
import acessories from "../../Images/category/acessories.jpg";
import watches from "../../Images/category/watches.jpg";
import footwear from "../../Images/category/footwear.jpg";

const CategoryMenu = () => {
	return (
		<Container>
			<Grid columns='2fr 1fr 1fr' gap='30px' rows='1fr 1fr'>
				<Women className='women' as={Link} to='/'>
					<img src={women} alt='women' />
					<PrimaryBtn bg='#fff' color='#222'>
						Women
					</PrimaryBtn>
				</Women>
				<Acessories className='acessories' as={Link} to='/'>
					<img src={acessories} alt='acessories' />
					<PrimaryBtn bg='#fff' color='#222'>
						Acessories
					</PrimaryBtn>
				</Acessories>
				<Watches className='watches' as={Link} to='/'>
					<img src={watches} alt='watches' />
					<PrimaryBtn bg='#fff' color='#222'>
						Watches
					</PrimaryBtn>
				</Watches>
				<Footwear className='footwear' bg={footwear} as={Link} to='/'>
					<img src={footwear} alt='footwear' />
					<PrimaryBtn bg='#fff' color='#222'>
						Footwear
					</PrimaryBtn>
				</Footwear>
			</Grid>
		</Container>
	);
};

export default CategoryMenu;
