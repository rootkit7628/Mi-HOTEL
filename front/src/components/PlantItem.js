import '../styles/PlantItem.css'

function handleClick(plantName) {
	alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
}

function PlantItem({ cover, name, price }) {
	return (
		<li className='lmj-plant-item' onClick={() => handleClick}>
			<span className='lmj-plant-item-price'>{price}Ar</span>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
		</li>
	)
}

export default PlantItem
