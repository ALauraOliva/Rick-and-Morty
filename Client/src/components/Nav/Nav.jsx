import SearchBar from "../SearchBar/SearchBar";
import styledNav from'./Nav.module.css';
import {Link, useNavigate} from 'react-router-dom';
import RickAndMortyLogoNav from './RickandMortyLogo.png';

export default function Nav({onSearch,setAccess}){
    const navigate = useNavigate()

    const handleLogOut = () =>{
        setAccess(false)
    }
    return(
        <div>
            <img className={styledNav.img} src={RickAndMortyLogoNav} alt=""/>
            <SearchBar onSearch = {onSearch}/>
            <button>
                <Link to = {'/About'}>About</Link>
            </button>
            <button>
                <Link to = {'/Home'}>Home</Link>
            </button>
            <button>
                <Link to = {'/favorites'}>Favorites</Link>
            </button>
            <button onClick={handleLogOut}>LogOut</button>
        </div>
    );
}