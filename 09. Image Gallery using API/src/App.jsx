import { useEffect, useState } from "react"
import InputBox from "./components/InputBox";
import ImageCard from "./components/ImageCard";

const apiKey = import.meta.env.VITE_PIXABAY_API_KEY;

function App() {

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [term, setTerm] = useState("");


  useEffect(() => {
    setLoading(true);

    fetch(`https://pixabay.com/api/?key=${apiKey}&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => setImages(data.hits))
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }, [term])

  return (
    <div>
      <h1 className="text-center text-6xl mb-8 font-semibold text-purple-700">Image Gallery</h1>
      <InputBox setTerm={setTerm}/>
      {loading ? /* From Uiverse.io by Fresnel11 */
        <div
          className=" my-20 mx-auto w-10 h-10 border-4 border-t-purple-500 border-gray-300 rounded-full animate-spin"
        ></div>
        : ( images.length<1? <h1 className="text-indigo-300 font-semibold text-3xl w-fit m-auto mt-20 text-center">Oops... No data found.<br />Try searching with differet keyword.</h1>:<div className="m-6 flex flex-wrap items-stretch justify-center gap-6 max-w-4/5">
          {images.map(image => (
            <ImageCard image={image} key={image.id} />
          ))}
        </div>)}
    </div>
  )
}

export default App
