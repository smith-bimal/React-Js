import "./ImageGenerator.css"
import {useRef, useState} from "react"

const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

const ImageGenerator = () => {

    const [image_url, setImage_url] = useState("https://cdn.pixabay.com/photo/2019/09/26/08/10/detective-4505353_1280.png");
    const inputRef = useRef(null);

    const ImageGenerator =async()=> {
        if(inputRef.current.values===''){
            return 0;
        }
        const response = await fetch(
            apiUrl,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${apiKey}`,
                },
                body: JSON.stringify({
                    prompt: `${inputRef.current.value}`,
                    n:1,
                    size:"512x512",
                }),
            }
        );
        const data = await response.json();
        const data_array=data.data;
        setImage_url(data_array[0].url);
    }

    return (
        <div className="ai-image-generator">
            <div className="header">AI Image <span>Generator</span></div>
            <div className="img-loading">
                <div className="image"><img src={image_url} alt="Image Box" /></div>
            </div>
            <div className="search-box">
                <input type="text" ref={inputRef} className="search-input" placeholder="Describe what you want to see" />
                <button className="generate-btn" onClick={()=>{ImageGenerator()}}>Generate</button>
            </div>
        </div>
    )
}

export default ImageGenerator