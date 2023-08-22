import React, {useState} from "react"
function Meme(){
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemes, setallMemes] = useState([])

    React.useEffect(() =>{
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setallMemes(data.data.memes))
    },[])

    
    
    function getMeme(){
        const memesArray = allMemes
        const randomNumber = Math.floor(Math.random()* memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event){
        const {value, name} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    return(
        <main>
            <div className='form'>
                <input 
                type='text' 
                className='form-input' 
                placeholder="Top text"
                value={meme.topText}
                name="topText"
                onChange={handleChange}
                />

                <input 
                type='text' 
                className='form-input' 
                placeholder='Bottom text'
                value={meme.bottomText}
                name="bottomText"
                onChange={handleChange}

                />

                <button 
                onClick={getMeme} 
                className="form-button">Get a new meme image  🖼
                </button>

            </div>
            <div className="meme">
                <img src={meme.randomImage} className='meme-image'/>
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
            
        </main>
    )
}

export default Meme