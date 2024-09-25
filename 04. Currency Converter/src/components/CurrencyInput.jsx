function CurrencyInput({ theme, color, label, isReadonly, state, setState, currencies, currency, setCurrency }) {
    // Make sure to default to an empty string if state or currency is undefined
    const inputValue = state !== undefined ? state : '';
    const selectValue = currency !== undefined ? currency : (currencies.length > 0 ? currencies[0] : '');

    return (
        <div className="flex items-center justify-center gap-2 mt-14">
            <div className="flex items-center justify-center">
                <div className="relative">
                    <input
                        value={inputValue}
                        id="label"
                        type="number"
                        className={`border-b-2 border-${color} py-1 text-3xl font-medium max-w-40 transition-colors focus:outline-none peer bg-transparent text-${color} ${isReadonly ? 'cursor-not-allowed' : 'cursor-auto'}`}
                        readOnly={isReadonly}
                        onChange={(e) => setState(e.target.value)}
                    />
                    <label
                        htmlFor="label"
                        className={`absolute left-0 cursor-text text-xs -top-4 transition-all text-${color}`}
                    >
                        {label}
                    </label>
                </div>
            </div>

            <select 
                className={`inline-block w-fit text-${color} bg-transparent focus:outline-none focus-visible:outline-none border-none p-2 text-xl`} 
                onChange={(e) => setCurrency(e.target.value)} 
                value={selectValue}
            >
                {currencies.map(c => (
                    <option key={c} className={`bg-transparent text-${theme}`}>{c}</option>
                ))}
            </select>
        </div>
    );
}

export default CurrencyInput;
