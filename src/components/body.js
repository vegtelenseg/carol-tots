import React, { Component } from 'react';
import { Parallax, Row, Input, Button, Table,
	Collapsible, CollapsibleItem } from 'react-materialize';
import paraChild from '../images/parallax1.jpg';
import paraChild2 from '../images/parallax2.jpg';
import paraChild3 from '../images/parallax3.jpg';
import Map from './Map';

class Body extends Component {
  render() {
    return (
      <div>
        <div id="for-who" className="section ">
          <div className="row container">
            <h2 className="header">Is your child six years or less?</h2>
            <p className="grey-text text-darken-3 lighten-3">
							Carol Tots Creche and Pre-School provides a quality learning
							environment through qualified ECD educators. Our teaching philosophy
							is child-centric, bible-based with an emphasis on <b>learning
							through play</b>. This is a breakdown of the cost structure.
            </p>
            <Table>
	       			<thead>
		       			<tr>
			       			<th data-field="id">Years</th>
			           	<th data-field="monthly-price">Fee Per Month</th>
									<th data-field="yearly-price">Fee Per Year</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>0 - 1</td>
									<td>R1 300</td>
									<td>R15 600</td>
									</tr>
								<tr>
									<td>2 - 6</td>
									<td>R1 000</td>
									<td>R12 000</td>
								</tr>
							</tbody>
						</Table>
          </div>
        </div>
	      <Parallax imageSrc={paraChild2}/>
	      <div id="where" className="section ">
		      <div className="row container">
			      <h2 className="header">Where to find us</h2>
			      <p className="grey-text text-darken-3 lighten-3">
            	We are situated in a very convenient area, right nearby the Savannah Mall.
							Follow the map to locate us :)
             </p>
						 <Map isMarkerShown={true}
						 			googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCKPnmvXy4rQR6R7esDDm3SxqXYAckD1Kc&v=3.exp&libraries=geometry,drawing,places"
  								loadingElement={<div style={{ height: `100%` }} />}
  								containerElement={<div style={{ height: `400px` }} />}
  								mapElement={<div style={{ height: `100%` }} />}/>
		      </div>
	      </div>
	      <Parallax imageSrc={paraChild}/>
        <div id="why" className="section ">
		      <div className="row container">
			      <h2 className="header">A few reasons, in many, to choose us</h2>
						<Collapsible  popout defaultActiveKey={1}>
							<CollapsibleItem header="Quality Education" >
								Lorem ipsum dolor sit amet.
							</CollapsibleItem>
							<CollapsibleItem header='Transport Provision'>
								Lorem ipsum dolor sit amet.
							</CollapsibleItem>
							<CollapsibleItem header='Qualified ECD Educators' >
								Lorem ipsum dolor sit amet.
							</CollapsibleItem>
							<CollapsibleItem header='Free Computer Lessons' >
								Lorem ipsum dolor sit amet.
							</CollapsibleItem>
						</Collapsible>
		      </div>
	      </div>
        <Parallax imageSrc={paraChild3}/>
        <div id="contact" className="section ">
          <div className="row container">
            <h2 className="header">Get in touch</h2>
            <Row>
        	   <Input label="Parent's Firstname" s={6} />
        	   <Input label="Parent's Lastname" s={6} />
        	   <Input label="Parent's email address" s={12} />
        	   <Input label="Child's name" s={12} />
             <Input name="Child's birthdate" s={12} type='date' onChange={function(e, value) {}} />
		           <Button waves='light'>Submit</Button>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
