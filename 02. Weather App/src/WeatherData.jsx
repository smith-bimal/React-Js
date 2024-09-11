export default function WeatherData({ weatherInfo }) {
    let weatherIconUrl = "../src/assets/Clear.png";

    if (weatherInfo.description.toLowerCase().includes("clear")) {
        weatherIconUrl = "../src/assets/Clear.png";
    } else if (weatherInfo.description.toLowerCase().includes("cloud")) {
        weatherIconUrl = "../src/assets/Clouds.png";
    } else if (weatherInfo.description.toLowerCase().includes("rain" || "sleet")) {
        weatherIconUrl = "../src/assets/Rain.png";
    } else if (weatherInfo.description.toLowerCase().includes("mist" || "fog")) {
        weatherIconUrl = "../src/assets/Mist.png";
    } else if (weatherInfo.description.toLowerCase().includes("snow" || "ice")) {
        weatherIconUrl = "../src/assets/Snow.png";
    }

    return (
        <>
            <img src={weatherIconUrl} alt={weatherInfo.description} className="w-3/4" />
            <h1 className="text-5xl font-bold mb-2 text-white">{weatherInfo.temperature}&deg;C</h1>
            <h1 className="text-3xl font-bold mb-8 text-white">{weatherInfo.city + ", " + weatherInfo.country}</h1>
            <div className="flex justify-between w-full  mb-5">
                <div className="flex items-center gap-3">
                    <img src="../src/assets/humidity.png" alt="Humidity" className="w-10 h-max" />
                    <div className="flex flex-col justify-center text-white">
                        <h3 className="text-xl font-bold">{weatherInfo.humidity}<small className="text-sm">%</small></h3>
                        <small>Humidity</small>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <img src="../src/assets/wind.png" alt="Wind Speed" className="w-10 h-max" />
                    <div className="flex flex-col justify-center text-white">
                        <h3 className="text-xl font-bold">{weatherInfo.windSpeed}<small className="text-sm">km/h</small></h3>
                        <small>Wind Speed</small>
                    </div>
                </div>
            </div>
        </>
    )
}