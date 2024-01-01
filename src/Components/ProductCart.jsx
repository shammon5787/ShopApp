import React from 'react';
import {
    MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBContainer, MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../feature/cartSlice';

export default function App() {
    
    const items = useSelector((state)=>state.allCart.items);
    const dispetch = useDispatch();

    return (
        <div className='m-2'>
            <MDBContainer>
            <MDBRow className='mb-3'>

           { 
            items.map((item)=>(
           <MDBCol size='md'>
                <MDBCard key={item.id} style={{backgroundColor: 'blue', color:'white', alignItems:'center', justifyContent:'space-between', textAlign:'center'}}>
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
            </MDBContainer>

        </div>
    );
}