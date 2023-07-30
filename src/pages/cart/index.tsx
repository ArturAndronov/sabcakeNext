import React from 'react'
import {NextPage} from "next"
import Layout from "@/components/common/Layout";

const Cart: NextPage = () => {
   return (
       <Layout title={"Cart"} description={"shopping cart"}>
           <h1>Корзина</h1>
       </Layout>
   )
}

export default Cart;