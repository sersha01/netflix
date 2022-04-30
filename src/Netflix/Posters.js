import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import YouTube from 'react-youtube'
import { IMAGE_URl,BASE_URL,API_KEY } from './Apis'


function Posters(props) {

    const [movies, setMovies] = useState([])
    const [url, setUrl] = useState('')
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          autoplay: 0,
        },
      };

    useEffect(() => {
        axios.get(props.url).then((response) => {
            setMovies(response.data.results)
        })
    },[])
    function handleClick(movie) {
        axios.get( BASE_URL + `/movie/${movie}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
            setUrl(response.data.results[0])
        }).catch((error) => {
            setUrl('')
        })}
    
    return(
        <Row className='m-0 py-2 posterBackground'>

            <Col xs='12' className='text-light'><h2>{props.title}</h2></Col>
            <Col xs='12' className='m-0 posterRow d-flex py-3'>
                {movies.map((movie) => {
                    return(
                <div key={movie.id} className='image' onClick={()=>{handleClick(movie.id)}}><img alt='pic' className={`${props.big ? 'bigPoster' : 'smallPoster'} mx-2`} 
                src={`${movies ? IMAGE_URl + movie.backdrop_path : ''}`}/></div>
                )
                })}
            </Col>
            <Col xs='12' className='youtube d-flex justify-content-center w-100 row'>
            {url  && <YouTube className='w-100 col-12'  videoId={url.key} opts={opts} onEnd={()=>{
                setUrl('')
            }}/>}
            {url  && <div className='d-flex col-12 w-100 justify-content-end close mt-3 ms-4'><Button className='rounded rounded-circle' onClick={()=>{setUrl('')}} variant="secondary"><i class="fa fa-times text-dark" aria-hidden="true"></i></Button></div>}
            </Col >
        </Row>
    )
} 

export default Posters