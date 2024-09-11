import { useState } from "react"

export default function SearchBox({ updateWeatherData }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);


    const API_URL = "http://api.weatherapi.com/v1/current.json"
    const API_KEY = "050a60d990e44f34ae671436241109"

    let handleChange = (e) => {
        setCity(e.target.value);
    }

    let fetchWeatherData = async () => {
        try {
            let response = await fetch(`${API_URL}?key=${API_KEY}&q=${city}`);
            let data = await response.json();

            console.log(data.current.condition.text)

            updateWeatherData({
                city: data.location.name,
                country: data.location.country,
                temperature: data.current.temp_c,
                humidity: data.current.humidity,
                windSpeed: data.current.wind_kph,
                description: data.current.condition.text
            });
        } catch (err) {
            setError(err);
        }
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        fetchWeatherData();
        setCity("");
        setError(false);
    }

    return (
        <>
            <form className="w-full flex gap-4" onSubmit={handleSubmit}>
                <input type="text" className="bg-white border px-4 py-3 rounded-full outline-none flex-1 shadow-md" placeholder="Enter City Name" onChange={handleChange} value={city} />
                <button type="submit" className="text-black border px-4 py-3 rounded-full bg-white shadow-md outline-none text-sm font-semibold hover:bg-white/80 duration-200"><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>
            {error && <p className="text-white text-center mt-2">Failed to fetch weather data. Check city name.</p>}
        </>

    )
}