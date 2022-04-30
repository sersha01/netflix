import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { API_KEY, IMAGE_URl } from './Apis'

function Banner() {
    const [movie, setMovie] = useState([])
    const gradiant = {
        height: '7.4rem',
        backgroundImage: `linear-gradient(180deg,transparent, rgba(37,37,37,.61), #111)`
    }

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
            setMovie(response.data.results[getRndInteger()])
        })
    },[])
    function getRndInteger() {
        return Math.floor(Math.random() * (20) ) + 1;
    }

    return (
        <Row className='m-0 p-0'>
            <Col xs='12' className='d-flex bg-dark justify-content-between p-0 m-0'>
                <Row 
                style={{backgroundImage: `url(${movie ? IMAGE_URl + movie.backdrop_path : ''})`}}
                className='w-100 banner align-items-end m-0'>
                    <Col md='4' className='ps-5 bannerMovie'>
                        <div><h1 className='movieName'>{movie.title}</h1>
                        </div>
                        <div className='d-flex justify-content-between col-6'>
                            <Button variant='' className='btns px-4'  >
                                Play
                            </Button>
                            <Button variant='' className='btns me-5 px-3'  >
                                My list
                            </Button>
                        </div>
                        <div className='discription mt-5 col-10'>{movie.overview}</div>
                    </Col>
                    <Col xs='12' className='gradian' style={gradiant}></Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Banner