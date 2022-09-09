import BrandLogo from '../assets/brand-assets/logo.png'
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux';
import { LOADING } from '../redux/reducer/PostalStore';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const loading = useSelector(LOADING)
    const navigate = useNavigate()
    const backToCategory = () => {
        navigate('/')
    }
    
  return (
    <header>
        <div className='headerbar-container'>
            Do you need to know further about the developer?
            <a href="https://www.linkedin.com/in/tehseen-jawed-0b2854b6/" target={'_blank'}>
                Visit Prifle
            </a>
        </div>
        <div className='header-logoidentifier'>
            <div>
                <img onClick={backToCategory} src={BrandLogo} alt="Brand Logo" />
                <span onClick={backToCategory}>
                    {
                        loading ? <CircularProgress color={'secondary'} /> : "Categories"
                    }
                </span>
            </div>
        </div>
    </header>
  )
}

export default Header