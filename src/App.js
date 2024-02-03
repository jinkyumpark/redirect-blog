import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import HomeId from './HomeId'

function App() {
	return (
		<div className='App'>
			<Router>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/:id' element={<HomeId />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App
