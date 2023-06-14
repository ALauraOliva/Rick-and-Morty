import SearchBar from "../SearchBar/SearchBar";
import styledNav from'./Nav.module.css';
import {Link} from 'react-router-dom';
import RickAndMortyLogoNav from './RickandMortyLogo.png';

export default function Nav({onSearch}){
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
        </div>
    );
}