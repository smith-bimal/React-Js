import { useEffect, useState } from "react";

export default function Joke() {
    let [joke, setJoke] = useState({ setup: '', punchline: '' });
    const URL = "https://official-joke-api.appspot.com/random_joke"

    const getRandomJoke = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setJoke({ setup: data.setup, punchline: data.punchline });
    }

    useEffect(function () {
        const getFirstJoke = async () => {
            const response = await fetch(URL);
            const data = await response.json();
            setJoke({ setup: data.setup, punchline: data.punchline });
        }
        getFirstJoke();
    }, [])

    return (
        <>
            <h3>{joke.setup}</h3>
            <h3>{joke.punchline}</h3>
            <button onClick={getRandomJoke}>Get a Joke</button>
        </>
    )
}