import React from "react";
import { Flex, PrimaryLink } from "../../Styles/Global.styles";
import { Container } from "./TopNav.styles";

const TopNav = () => {
	return (
		<Container>
			<Flex horizontal='space-between'>
				<Flex className='phone_email' gap='15px'>
					<div className='phone'>
						<span className='icon'>
							<i className='fas fa-phone-alt'></i>
						</span>
						<PrimaryLink href='tel:+8801234567891'>+8801234567891</PrimaryLink>
					</div>
					<div className='email'>
						<span className='icon'>
							<i className='fas fa-envelope'></i>
						</span>
						<PrimaryLink href='mailto:kalles@domain.com'>
							kalles@domain.com
						</PrimaryLink>
					</div>
				</Flex>
				<Flex className='discount'>
					<p>
						Summer sale discount off{" "}
						<span className='discount_amount'>50%</span>!{" "}
						<PrimaryLink href='#'>Shop Now</PrimaryLink>
					</p>
				</Flex>
				<Flex className='location_lang' gap='15px'>
					<div className='location'>
						<span className='icon'>
							<i className='fas fa-map-marker-alt'></i>
						</span>
						<PrimaryLink href='#'>Location</PrimaryLink>
					</div>
					<div className='lang'>
						<span>English</span>
						<span className='icon-right'>
							<i className='fa fa-angle-down'></i>
						</span>
					</div>
				</Flex>
			</Flex>
		</Container>
	);
};

export default TopNav;
