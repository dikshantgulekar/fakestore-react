import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import useFetchapi from '../customHooks/useFetchapi';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addRecordIncart } from '../redux/Slices/cartSlice';


export default function Productpage() {
    let navigate  = useNavigate();
    let dispatch = useDispatch();
    let {productid} = useParams();
    console.log(productid)

    var allProducts = useFetchapi(process.env.REACT_APP_FAKESTORE + '/products/' + productid);
    console.log(allProducts);

    console.log(`/fakestore-electronics/+ allProducts.category`)


    function addToCart(obj){
        console.log(obj);
        var dataToStore = obj;

        var cartRecord = localStorage.getItem('cartRecord');
        console.log(cartRecord);  //null 

        
        if(cartRecord == null){
            console.log('Adding First Product ')

            var arr = []
            arr.push(dataToStore);
            localStorage.setItem('cartRecord', JSON.stringify(arr));
            dispatch(addRecordIncart(dataToStore))

            console.log("product Added");
            navigate('/cart');
        }
        else{
            console.log('2nd Product onward');
            var cartRecord = JSON.parse(cartRecord);
            console.log(cartRecord);
            /////////////
            //////////////////  Filter

            var filterData = cartRecord.filter(val=> val.id == dataToStore.id);
            console.log(filterData, filterData.length)

            if(filterData.length == 0){
                dispatch(addRecordIncart(dataToStore));
                cartRecord.push(dataToStore);
                localStorage.setItem('cartRecord', JSON.stringify(cartRecord));

                console.log('product Update')
                navigate('/cart');
            }
            else{
                alert("PRODUCT Exist In Cart")
            }
        }

    }
  return (
    <>
    {
        allProducts && Object.keys(allProducts).length>0 &&(
            // console.log(`/fakestore-electronics/+ allProducts.category`)/;

            <Container className='pt-4 border'>
                <Row>
                    <Col xs={6}>
                        <Image fluid src={allProducts.image}/>
                    </Col>
                    <Col xs={6}>
                        <h2>{allProducts.price}</h2>
                        <h4>{allProducts.title}</h4>
                        <h6>Category :
                            <Link className="nav-link" to={'/fakestore-electronics/'+ allProducts.category}>{allProducts.category}</Link>
                           
                        </h6>
                        <p>{allProducts.description}</p>
                        <p>
                            <Button onClick={()=>{addToCart(allProducts)}}>Add To Cart</Button>
                        </p>
                    </Col>
                </Row>
            </Container>
        )
    }
    </>
  )
}
