import { useState, useEffect } from 'react';
import Banner from './Banner';
import logo from '../assets/logo.png';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import Login from './login';
import '../styles/Layout.css';
import '../styles/login.css';
// import Menu from "./Menu"

function App() {
	const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

	return (
		<div>
			{/* <Menu></Menu> */}
			<Login/>
			<Banner>
				<img src={logo} alt='logo-la-maison-jungle' className='lmj-logo' />
				<h1 className='lmj-title'>MI HOTEL</h1>
			</Banner>
			<h1 className='titre'> NOS PLATS ET SPECIALITES </h1>
			<div className='lmj-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} />
				<ShoppingList cart={cart} updateCart={updateCart} />
			</div>
		</div>
	)
}
export default App
