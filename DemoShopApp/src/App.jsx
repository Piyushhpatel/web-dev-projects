import React from 'react'
import './App.css'
import Products from './Components/Products'
import NewProduct from './Components/NewProduct'

const App = () => {
  const products = [
    {
      id: 'p1',
      title: 'Nirma',
      amount: '200',
      date: new Date(2021, 8, 10),
    },
    {
      id: 'p2',
      title: 'Surf Excel',
      amount: '130',
      date: new Date(2021, 2, 2),
    },
    {
      id: 'p3',
      title: 'Tide',
      amount: '100',
      date: new Date(2022, 0, 28),
    },
    {
      id: 'p4',
      title: 'Ariel',
      amount: '150',
      date: new Date(2021, 5, 5),
    }
  ]

  function printProductData(data){
    console.log('you are in app')
    products.push(data);
    console.log(products);
  }

  return (
      <div>
        <NewProduct productData={printProductData} />
        <Products item={products} />
      </div>
  )
}

export default App
