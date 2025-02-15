import React from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCartItem } from '../../../Redux/Cart/ActionCreator';
import { updateCartItem } from '../../../Redux/Cart/ActionCreator';

const CartItemCard = (props) => {

    //const { cart } = useSelector(store => store);
    

   


    

    return (
        <div className='border cm:m-4  shadow-2xl cm:w-full h-auto bg-gray-700 rounded-xl w-[20rem] '>
            <div className='w-[10rem] m-10 flex cm:flex-row flex-col '>
                <img className="object-cover object-center w-full h-full rounded-lg 
            " src={props.item?.product?.image_URL} />
                <div className='cm:w-96 p-3 text-white'>
                    <h2 className='w-fit cm:pb-3 text-left font-bold'>{props.item?.product?.title}</h2>
                    <p className='text-left space-x-10 cm:pb-3 pl-3'><span>{props.item?.size}</span><span>{props.item?.product?.color}</span></p>
                    <p className=" cm:pb-3 lowercase text-grey-900 space-x-3 text-left"><span>₹{props.item?.product?.discountedPrice}</span><span className='line-through'>₹{props.item?.product?.price}</span><span className='text-green-500'>{props.item?.product?.discountedPercent}% off</span></p>
                    <div className='border-2 cursor-auto w-14 rounded-md'>{props.item?.quantity}</div>
                </div>
            </div>
        </div>
    )
}

export default CartItemCard;
