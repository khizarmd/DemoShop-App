import React from 'react';
import NewProduct from './components/NewProduct';




import Products from './components/Products';

const App = () => {
  const products = [
    {
      id: 'p1',
      title: 'Product-1',
      amount: 100,
      date: new Date(2021, 8, 10),
    },
    { 
      id: 'p2', 
      title: 'Product-2', 
      amount: 200, 
      date: new Date(2021, 2, 2) },
    {
      id: 'p3',
      title: 'Product-3',
      amount: 130,
      date: new Date(2021, 12, 28),
    },
    {
      id: 'p4',
      title: 'Product-4',
      amount: 450,
      date: new Date(2021, 5, 5),
    },
  ];

  function ahandler(data){
    console.log("i m inside app")
    console.log(data)
  }
  

  return (
    <div>
      <NewProduct onA={ahandler}/>
      <Products items={products} />
      
    </div>
  );
}

export default App;