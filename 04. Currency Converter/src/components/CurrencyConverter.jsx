import { useState, useEffect } from 'react';
import CurrencyInput from "./CurrencyInput";
import ThemeButton from './ThemeButton';

function CurrencyConverter() {
    const [theme, setTheme] = useState({color: "red-400", bgColor: "red-300",primaryColor:"red-500", secondaryColor: "red-100"});
    const [amount, setAmount] = useState(1);
    const [convertedAmount, setConvertedAmount] = useState(0);
    const [currencies, setCurrencies] = useState([]);
    const [toCurrency, setToCurrency] = useState('USD');
    const [fromCurrency, setFromCurrency] = useState('INR');

    const fetchAmount = async () => {
        try {
            const response = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`);
            const data = await response.json();
            setConvertedAmount(data.rates[toCurrency]);
        } catch (e) {
            setConvertedAmount(amount);
        }
    };

    useEffect(() => {
        fetchAmount();
    }, [amount, fromCurrency, toCurrency]);

    const fetchCurrencies = async () => {
        try {
            const res = await fetch('https://api.frankfurter.app/currencies');
            const data = await res.json();
            setCurrencies(Object.keys(data));
        } catch (error) {
            console.log(error);
        }
    };
    console.log(theme);

    useEffect(() => {
        fetchCurrencies();
    }, []);

    const handleCurrencySwap = () => {
        setAmount(convertedAmount || 0);
        setConvertedAmount(amount);
        setToCurrency(fromCurrency);
        setFromCurrency(toCurrency);
    };

    return (
        <div className={`w-screen h-screen flex items-center justify-center bg-gradient-to-tl from-${theme.secondaryColor} to-${theme.bgColor}`}>
            <div className="mx-auto p-4 h-[30rem] max-w-96 w-full rounded-xl bg-white shadow-xl flex flex-col relative">
                <div className={`absolute w-full h-1/2 top-0 left-0 bg-gradient-to-tr from-${theme.primaryColor} to-${theme.bgColor} z-0 rounded-t-xl`}>
                    <div className="absolute -top-12 flex gap-4">
                        <ThemeButton setTheme={setTheme} color="red"/>
                        <ThemeButton setTheme={setTheme} color="blue"/>
                        <ThemeButton setTheme={setTheme} color="orange"/>
                        <ThemeButton setTheme={setTheme} color="green"/>
                        <ThemeButton setTheme={setTheme} color="violet"/>
                    </div></div>
                <div className="z-5 h-full">
                    <div className="relative">
                        <h1 className="text-3xl text-white text-center">Currency Converter</h1>
                        <CurrencyInput
                            theme={theme.color}
                            color="white"
                            label="From"
                            isReadonly={false}
                            state={amount}
                            setState={setAmount}
                            currencies={currencies}
                            currency={fromCurrency}
                            setCurrency={setFromCurrency}
                        />
                        <button
                            className={`p-2 bg-white shadow-lg rounded-md text-3xl text-${theme.color} mt-16 translate-x-72 right-0`}
                            onClick={handleCurrencySwap}
                        >
                            <i className="ri-arrow-up-down-line"></i>
                        </button>
                        <CurrencyInput
                            theme={theme.color}
                            color={theme.color}
                            label="To"
                            isReadonly={true}
                            state={convertedAmount}
                            currencies={currencies}
                            currency={toCurrency}
                            setCurrency={setToCurrency}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrencyConverter;
