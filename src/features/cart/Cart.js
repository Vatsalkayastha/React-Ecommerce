import React, { useState, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteItemFromCartAsync, increment, incrementAsync, selectItems, updateItemAsync } from './cartSlice';

import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom';


export default function Cart() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);
  const items = useSelector(selectItems);
  const totalAmount = items.reduce((amount, item)=>item.price*item.quantity +amount,0)
  const totalItems = items.reduce((total, item)=>item.quantity + total,0)
  const handleQuantity = (e,item) => {
    dispatch(updateItemAsync({...item, quantity: +e.target.value}))
  }
  const handleRemove = (e,id) =>{
    dispatch(deleteItemFromCartAsync(id))
  }
  return (
    <>
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-white mt-20 my-5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8 my-5 py-5">
    <h1 className="text-4xl font-bold tracking-tight text-gray-900 my-7">
                Cart
              </h1>
        <div className="flow-root">
          <ul role="list" className="-my-6 divide-y divide-gray-200">
            {items.map((item) => (
              <li key={item.id} className="flex py-6">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>
                      <a href={item.href}>{item.title}</a>
                      </h3>
                      <p className="ml-4">${item.price}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">
                      {item.brand}
                    </p>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-gray-500">Qty 
                    <select onChange={(e)=>handleQuantity(e,item)} value={item.quantity} name="qnty" id="qnty" className="mx-5">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="4">5</option>
                    </select>
                    </p>

                    <div className="flex">
                      <button
                        onClick={e=>handleRemove(e,item.id)}
                        type="button"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
        <div className="flex justify-between my-2 text-base font-medium text-gray-900">
          <p>Subtotal</p>
          <p>$ {totalAmount}</p>
            </div>
            <div className="flex justify-between my-2 text-base font-medium text-gray-900">
              <p>Total Items in Cart</p>
              <p>{totalItems} items</p>
        </div>
        <p className="mt-0.5 text-sm text-gray-500">
          Shipping and taxes calculated at checkout.
        </p>
        <div className="mt-6">
          <Link to='/checkout'
            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            Checkout
          </Link>
        </div>
        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
          <p>
            or
            <Link to='/'>
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500 mx-3"
              onClick={() => setOpen(false)}
            >
              Continue Shopping
              <span aria-hidden="true"> &rarr;</span>
            </button>
            </Link>
          </p>
        </div>
      </div>
      </div>
    </>
  );
}
