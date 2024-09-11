import { useState } from "react"
import SearchBox from "./SearchBox.jsx"
import WeatherData from "./WeatherData.jsx"

export default function WeatherApp() {
    let [weatherInfo, setWeatherInfo] = useState({
        city: "--",
        country: "--",
        temperature: "--",
        humidity: "--",
        windSpeed: "--",
        description: "--"
    })

    let updateWeatherData = (result) => {
        setWeatherInfo(result)
    }

    return (
        <div className="p-5 w-[350px] absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 bg-gradient-to-tl from-green-400 to-sky-600 rounded-xl">
            <div className="pt-4">
                <SearchBox updateWeatherData={updateWeatherData} />
            </div>
            <div className="px-4 flex flex-col items-center">
                <WeatherData weatherInfo={weatherInfo} />
            </div>
        </div>
    )
}