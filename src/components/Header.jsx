import troll from '../assets/troll-face.png'
function Header(){
    return(
        <header>
            <img src={troll} className='header-img' alt='troll'/>
            <h1 className='header-title'>Meme Generator</h1>
        </header>
    )
}

export default Header