import '../styles/Categories.css'

function Categories({ setActiveCategory, categories, activeCategory}) {
	return ( 
		<div className='lmj-categories'>
			<button className='btn' onClick={() => setActiveCategory('')}>Catégories</button>
			<select
				value={activeCategory}
				onChange={(e) => setActiveCategory(e.target.value)}
				className='lmj-categories-select'
			>
				<option value=''>Tous</option>
				{categories.map((cat) => (
					<option key={cat} value={cat}>
						{cat}
					</option>
				))}
			</select>
		</div>
	)
}

export default Categories
