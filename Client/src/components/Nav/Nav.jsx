import SearchBar from "../SearchBar/SearchBar";
import styledNav from'./Nav.module.css';
import { Link } from 'react-router-dom';
import RickAndMortyLogoNav from './RickandMortyLogo.png';
import audio from './ThemeSong.mp3';

export default function Nav({onSearch,setAccess}){
    const handleLogOut = () =>{
        setAccess(false)
    }
    
    return(
        <>
            <div key="1" className={styledNav.song}>
                <audio controls autoPlay>
                    <source src={audio} type="audio/mp3" />
                </audio>
            </div>

            <div className={styledNav.containerNav}>
                <div className={styledNav.logotipoContainer}>
                    <Link to={'/Home'}>
                        <img className={styledNav.img} src={RickAndMortyLogoNav} alt=""/>
                    </Link>
                </div>

                <div className={styledNav.Nav}>
                <button>
                    <Link to={'/About'}>About</Link>
                </button>
                <button>
                    <Link to={'/Home'}>Home</Link>
                </button>
                <button>
                    <Link to={'/favorites'}>Favorites</Link>
                </button>
                    <button onClick={handleLogOut} className={styledNav.logout}>LogOut</button>
                </div>

                <div className={styledNav.searchContainer}>
                    <SearchBar onSearch = {onSearch}/>
                </div>
            </div>
        </>
    );
}