import './App.css'
import { BrowserRouter as Router, Link } from "react-router-dom"
import AppRoutes from './AppRoutes'

const App = () => {
  return (
    <Router>
    <div>
      <Link to="/home">Home </Link>
      {/* Add Link to Detail here */}
      {/* Add Link to AboutUs here */}
      <AppRoutes />
    </div>
  </Router>
  )
}

export default App
