import React from "react";
import { Badge, Flex, Grid, PrimaryLink } from "../../Styles/Global.styles";
import { Container } from "./Nav.styles";
import { Link } from "react-router-dom";
import KallesLogo from "../../Images/kalles.png";
import { BsSearch, BsCart3 } from "react-icons/bs";
import { FiUser, FiHeart } from "react-icons/fi";

const Nav = () => {
	return (
		<Container>
			<Grid
				className='nav_container'
				horizontal='space-between'
				vertical='center'
				gap='20px'
				columns='1fr 2fr 1fr'>
				<div className='logo'>
					<Link to='/'>
						<img src={KallesLogo} alt='logo kalles' />
					</Link>
				</div>
				<div className='links'>
					<Flex horizontal='center' vertical='center' gap='30px'>
						<div className='link_item'>
							<PrimaryLink to='/' as={Link}>
								Demo
							</PrimaryLink>
						</div>
						<div className='link_item'>
							<Badge bg='var(--skyblue-color)'>New</Badge>
							<PrimaryLink to='/' as={Link}>
								Shop
							</PrimaryLink>
						</div>
						<div className='link_item'>
							<PrimaryLink to='/' as={Link}>
								Product
							</PrimaryLink>
						</div>
						<div className='link_item link_item-red'>
							<Badge bg='var(--yellow-color)'>Sale</Badge>
							<PrimaryLink to='/' as={Link}>
								Sale
							</PrimaryLink>
						</div>
						<div className='link_item'>
							<PrimaryLink to='/' as={Link}>
								Demo
							</PrimaryLink>
						</div>
						<div className='link_item'>
							<PrimaryLink to='/' as={Link}>
								Blog
							</PrimaryLink>
						</div>
					</Flex>
				</div>
				<div className='cart_user_fav'>
					<Flex horizontal='flex-end' gap='15px'>
						<div className='search'>
							<span className='icon'>
								<PrimaryLink to='/' as={Link}>
									<BsSearch />
								</PrimaryLink>
							</span>
						</div>
						<div className='user'>
							<span className='icon'>
								<PrimaryLink to='/' as={Link}>
									<FiUser />
								</PrimaryLink>
							</span>
						</div>
						<div className='fav'>
							<span className='icon'>
								<PrimaryLink to='/' as={Link}>
									<FiHeart />
								</PrimaryLink>
							</span>
						</div>
						<div className='cart'>
							<span className='icon'>
								<PrimaryLink to='/' as={Link}>
									<BsCart3 />
								</PrimaryLink>
							</span>
						</div>
					</Flex>
				</div>
			</Grid>
		</Container>
	);
};

export default Nav;
