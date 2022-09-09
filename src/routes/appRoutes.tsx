import {
    BrowserRouter as Router,
    Routes, 
    Route
} from 'react-router-dom';
import Calendar from '../screens/PostalScreen/PostalScreen';
import SnakeBar from '../components/Snakebar';
import Header from '../components/Header';
import Screen from '../constants/Screen'


const AppRoutes = () => {
  return (
    <Router>
      <SnakeBar />
      <Header />
      <Routes>
        <Route path={Screen.CALENDAR} element = {<Calendar />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes;