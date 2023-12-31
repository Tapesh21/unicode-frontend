import React from 'react'
import AddressCard from '../Address/AddressCard'
import CartItem from '../Cart/CartItem'
import { Button } from '@mui/material'

const OrderSummary = () => {
  return (
    <div className="space-y-5">
        <div className="p-5 shadow-lg rounded-md border ">
                <AddressCard/>
        </div>
        <div className='mt-10'>

            <div className="lg:grid grid-cols-3 lg:px-16 relative">
                <div className='col-span-2'>
                   {[1,1,1].map((item)=> <CartItem />) }
                </div>

                <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 ">

                    <div className='border'>
                        <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
                        <hr />

                        <div className="space-y-3 font-semibold mb-10 px-2 py-2">
                            <div className="flex justify-between pt-3 text-black ">
                                <span>Price </span>
                                <span>₹12789</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Discount</span>
                                <span className="text-green-700">-₹3419</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Delivery Charges</span>
                                <span className="text-green-700">Free</span>
                            </div>
                            <hr />
                            <div className="flex justify-between font-bold text-lg">
                                <span>Total Amount</span>
                                <span className="text-green-700">₹9999</span>
                            </div>
                        </div>

                        <Button
                            variant="contained"
                            type="submit"
                            sx={{ bgcolor:"#8e2de2 ",padding: ".8rem 2rem", marginTop: "2rem", width: "100%" }}
                        >
                            Payment
                        </Button>


                    </div>
                </div>

            </div>







        </div>
    </div>
  )
}

export default OrderSummary