import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Itemlist from './components/Itemlist';



function App() {
  const [para, setpara] = useState(100000)
  const [sepetIds, setsepetIds] = useState(0)
  const [sepet, setsepet] = useState([])
  const sepetItemEkle = (itemName,itemPrice,itemId) =>{

    setsepet([...sepet,{"id":sepetIds, "name" :itemName,"price":itemPrice}])
    setsepetIds(sepetIds+1)
    setpara(para-itemPrice);
  }
  
  const sepetItemSil = (id,itemprice,itemAdet)=>{
    const afterDeleting = sepet.filter((sepet)=>{
      return sepet.id !== id;
    })
    setsepet(afterDeleting)
    
    itemAdet > 0 && setpara(para+itemprice);
  }
  return (
    <div className="App">
      <Header para={para} />
      <Itemlist sepetItemEkle={sepetItemEkle} sepetItemSil={sepetItemSil} />
      
    </div>
  );
}

export default App;
