import React from 'react'
import Items from './Items'
import Product from "./Product.json"

const Itemlist = ({sepetItemEkle,sepetItemSil}) => {
  return (
    <div className='CardList'>
        {
            Product.map((iteminfo,index)=>{
                return <Items iteminfo={iteminfo} key={index} sepetItemEkle={sepetItemEkle} sepetItemSil={sepetItemSil} newId = {index} />
            })
        }
    
    </div>
  )
}

export default Itemlist