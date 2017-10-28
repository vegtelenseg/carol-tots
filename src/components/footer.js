import { Footer } from 'react-materialize';
import React from 'react';

const Foot = () => {
	const styles = {
		background: "rgba(110, 127, 238, 0.76)"
	}
  return (
    <Footer style={styles} copyrights="Designed and Developed by Otooto Pty (LTD)"
	moreLinks={
		<a className="grey-text text-lighten-4 right" href="#!">All right reserved © 2017</a>
	}
	links={
		<ul>
			<li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
			<li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
			<li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
			<li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
		</ul>
	}
	className='example'
>
		<h5 className="white-text">Carol Tots Creche & Pre-School</h5>
		<p className="grey-text text-lighten-4">
      Address: 13 Rhebok Street, Fauna Park
    </p>
    <p className="grey-text text-lighten-4">Tel: 072 900 1544</p>
</Footer>
  );
}
export default Foot;
