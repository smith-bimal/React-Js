import { useState, useEffect } from 'react';

import CurrencyInput from "./CurrencyInput";
import useFetchAPI from '../hooks/useFetchAPI';

function CurrencyConverter() {
    const [amount, setAmount] = useState(1);
    const [convertedAmount, setConvertedAmount] = useState(0);
    const [currencies, setCurrencies] = useState([]);
    const [toCurrency, setToCurrency] = useState('USD');
    const [fromCurrency, setFromCurrency] = useState('INR');

    const amountFetchURL = `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`;
    const currencyFetchURL = 'https://api.frankfurter.app/currencies';

    const conversionData = useFetchAPI(amountFetchURL);
    const currencyData = useFetchAPI(currencyFetchURL);

    useEffect(() => {
        if (conversionData) {
            setConvertedAmount(conversionData.rates[toCurrency]);
        }
    }, [amount, fromCurrency, toCurrency, amountFetchURL, conversionData]);

    useEffect(() => {
        if (currencyData) {
            setCurrencies(Object.keys(currencyData));
          }
    }, [currencyData]);

    const handleCurrencySwap = () => {
        setAmount(convertedAmount || 0);
        setConvertedAmount(amount);
        setToCurrency(fromCurrency);
        setFromCurrency(toCurrency);
    };

    return (
        <div className={`w-screen h-screen flex items-center justify-center bg-gradient-to-tl from-blue-100 to-blue-300`}>
            <div className="mx-auto p-4 h-[30rem] max-w-96 w-full rounded-xl bg-white shadow-xl flex flex-col relative">
                <div className={`absolute w-full h-1/2 top-0 left-0 bg-gradient-to-tr from-blue-500 to-blue-300 z-0 rounded-t-xl`}></div>
                <div className="z-5 h-full">
                    <div className="relative">
                        <h1 className="text-3xl text-white text-center">Currency Converter</h1>
                        <CurrencyInput
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
                            className={`p-2 bg-white shadow-lg rounded-md text-3xl text-blue-400 mt-16 translate-x-72 right-0`}
                            onClick={handleCurrencySwap}
                        >
                            <i className="ri-arrow-up-down-line"></i>
                        </button>
                        <CurrencyInput
                            color="blue-400"
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
