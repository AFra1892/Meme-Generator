import React from "react"
import memesData from "./memesData"
export default function Meme() {
    /**
     
     
     * Lastly, update the `getMemeImage` function and the markup 
     * to reflect our newly reformed state object and array in the
     * correct way.
     */
    const [meme,setMeme] = React.useState( {
        topTetx:'',
        bottomText:'',
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })
    const [allMemeImages,setAllMemeImages] = React.useState(memesData)

    
    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme =>({
            ...prevMeme,
            randomImage:url
        })) 
        
    }
    return (
        <main>
        
        <div className="form">
            <input 
                type="text"
                placeholder="Top text"
                className="form--input"
            />
            <input 
                type="text"
                placeholder="Bottom text"
                className="form--input"
            />
            <button 
                className="form--button"
                onClick={getMemeImage}
            >
                Get a new meme image 🖼
            </button>
        </div>
        <img src={meme.randomImage} className="meme--image"/>
    </main>
    )
}