import BSItems from './components/BSItems/BSItems';
import Copyright from './components/Copyright/Copyright';
import DOTWeek from './components/DOTWeek/DOTWeek';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import TCateg from './components/TCateg/TCateg';
import './global.css'

function App() {
  return (
    <>
      <Header />
      <BSItems />
      <DOTWeek />
      <TCateg />
      <Footer />
      <Copyright />
    </>
  )
}

export default App;