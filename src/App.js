import 'bootstrap/dist/css/bootstrap.min.css'
import { Row } from 'react-bootstrap'
import './App.css'
import Header from './Netflix/Header'
import Banner from './Netflix/Banner'
import Posters from './Netflix/Posters'
import { ActionMovies, Originals, ComedyMovies, HorrorMovies, RomanceMovies } from './Netflix/Apis'

function App() {
    return(
        <Row className="m-0 p-0">
        <Header/>
        <Banner />
        <Posters big title='Netflix Originals' url={Originals}/>
        <Posters big title='Action Movies' url={ActionMovies}/>
        <Posters big title='Romantic Movies' url={RomanceMovies}/>
        <Posters big title='Comedy Movies' url={ComedyMovies}/>
        <Posters big title='Horror Movies' url={HorrorMovies}/>
        </Row>
    )
}

export default App