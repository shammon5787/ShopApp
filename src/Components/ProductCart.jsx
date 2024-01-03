import React from 'react';
import {
    MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBContainer, MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../feature/cartSlice';
import Button from './Button';
import propP from '../props';

export default function App() {
    
    const items = useSelector((state)=>state.allCart.items);
    const dispetch = useDispatch();

    return (
        <div className='m-2'>
            <MDBContainer>
            <MDBRow className='mb-3'>

           { 
            items.map((item)=>(
           <MDBCol size='md' key={item.id}>
                <MDBCard style={{backgroundColor: 'blue',margin:'3px', color:'white', alignItems:'center', justifyContent:'space-between', textAlign:'center'}}>
                    <MDBCardImage style={{width: '230px', height: '250px', margin:'5px', }}  src={item.img} position='top' alt='...' />
                    <MDBCardBody>
                        <MDBCardTitle>{item.title}</MDBCardTitle>
                        <MDBCardText>{item.price}</MDBCardText>
                        <MDBBtn onClick={()=>dispetch(addToCart(item))}>Add To Cart</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
                </MDBCol>
                ))
                }
                </MDBRow>
            </MDBContainer><Button buttonText="SHowasdfmaklsmdaslsmd Time"/>

            <div className="mainbutton" style={{textAlign:'center'}} >
                <div className="Child"> <Button buttonText="SHow Time" bgcolor="red"/></div>
                <div className="Child"> <Button buttonText="Show Date" bgcolor="green" /></div>
                <div className="Child"> <Button buttonText="Merged" fontSize={"30px"}/></div>
            </div>
            <div className="mainbutton" style={{textAlign:'center'}} >
                <div className="Child"> <propP name="SHow Time" bgcolor="yello"/></div>
            </div>

        </div>
    );
}