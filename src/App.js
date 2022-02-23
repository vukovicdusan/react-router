import {Route, Switch} from 'react-router-dom';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import MainHeader from './components/MainHeader';
import ProductDetail from './pages/ProductDetail';
import React, { createContext } from 'react';

export const Context = createContext(); 

function App() {
  return (
	 <Context.Provider value={'excercise'}>
    <div>
		<MainHeader />
		<main>
	  <Switch>
		<Route path="/welcome" >
			<Welcome></Welcome>
		</Route>
		<Route path="/products" exact>
			<Products></Products>
		</Route>
		<Route path="/products/:productId" >
			<ProductDetail />
		</Route>
	  </Switch>
		</main>
    </div>
	</Context.Provider>
  );
}

export default App;
