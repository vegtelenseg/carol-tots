import React from 'react';
import { Slider, Slide } from 'react-materialize';
import crecheSetup from '../images/creche1.jpg';
import crecheClass from '../images/creche2.jpg';
import crechePlay from '../images/creche3.jpg'

const Hero = () => {
  return (
    <Slider interval={3000} transition={600} indicators={false}>
    	<Slide
    		src={crecheSetup}
    		title="To grow in favour with God and men"
				placement="right">
    	</Slide>
    	<Slide
    		src={crecheClass}
    		title="Play, Learn and Grow together"
    		placement="right">
    	</Slide>
    	<Slide
    		src={crechePlay}
				title="Investing in a brighter future"
    		placement="left">
    	</Slide>
    </Slider>
  )
}

export default Hero;
