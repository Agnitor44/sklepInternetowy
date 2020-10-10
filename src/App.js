import React, {useState, useContext, createContext} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header'
import './App.css';
import Page from './components/page'


const myMoney = 1000


const HistoryF = createContext()
const History = createContext()
const Products = createContext()
const Buy = createContext()
const Hajs = createContext()
const HajsFunkcja = createContext()
export const useHistory = () => {
  return useContext(History)
}
export const useHistoryFunction = () => {
  return useContext(HistoryF)
}
export const useMoney = () => {
  return useContext(Hajs)
}
export const useMoneyFunction = () => {
  return useContext(HajsFunkcja)
}
export const useProduts = () => {
  return useContext(Products)
}
export const useBuy = () => {
  return useContext(Buy)
}
function App() {

  const [money, setMoney] = useState(myMoney)
 
  const [bought, setBought] = useState(
    [

    ]
  )
  const [history, setHistory] = useState(

    []
  )



  return (
 
 <Router>
   <HistoryF.Provider value = {setHistory}>
   <History.Provider value = {history}>
   <HajsFunkcja.Provider value = {setMoney}>
   <Hajs.Provider value = {money}>
   <Products.Provider value = {bought}>
   <Buy.Provider value = {setBought}>
  <Header/>
  <Page/>
  </Buy.Provider>
  </Products.Provider>
  </Hajs.Provider>
  </HajsFunkcja.Provider>
  </History.Provider>
  </HistoryF.Provider>
  </Router>
 
  );
}

export default App;
