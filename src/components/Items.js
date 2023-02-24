import React, { useState } from 'react'

const Items = ({iteminfo,sepetItemEkle,sepetItemSil,newId}) => {
    const [itemAdet, setitemAdet] = useState(0)
    

    const satinAlBtn = ()=>{
        setitemAdet(itemAdet+1)
        sepetItemEkle(iteminfo.name,iteminfo.price,iteminfo.id)
    }
    const satBtn = ()=>{
        itemAdet > 0 && setitemAdet(itemAdet-1);
        sepetItemSil(iteminfo.id,iteminfo.price,itemAdet)
    }
  return (
    <div className='Card'>
        <img className='CardImg' src={iteminfo.imgURL} alt="" />
        <p className='CardName'> {iteminfo.name} </p>
        <p className='Cardprice'> {iteminfo.price} TL </p>
        <div className='CardButons'>
            <button onClick={satBtn} className='CardSat'>Sat</button>
            <p> {itemAdet} </p>
            <button onClick={satinAlBtn} className='CardSatinAl'>Satın Al</button>
        </div>
        
    </div>
  )
}

export default Items