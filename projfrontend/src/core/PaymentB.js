import DropIn from 'braintree-web-drop-in-react'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../auth/helper'
import { cartEmpty, loadCart } from './helper/cardHelper'
import { createOrder } from './helper/orderHelper'
import { getmeToken, processPayment } from './helper/paymentbhelper'

const PaymentB=({products, setReload = f=>f, reload =undefined})=> {

    const [info, setInfo] = useState({
        loading:false,
        success:false,
        clientToken:null,
        error:""
    })

    const userId = isAuthenticated() && isAuthenticated().user._id;
    const token = isAuthenticated() && isAuthenticated().token;

    const getToken = (userId, token) => {
        getmeToken(userId, token).then(info => {
          console.log("INFORMATION", info);
          if (info.error) {
            setInfo({ ...info, error: info.error });
          } else {
            const clientToken = info.clientToken;
            setInfo({ clientToken:clientToken });
          }
        });
      };

    useEffect(() => {
        getToken(userId, token);
    }, [])
    return (
        <div>
            <h3>test bt</h3>
        </div>
    )
}

export default PaymentB
