import { useCallback, useEffect, useRef, useState } from "react";

export default function PasswordGenerator() {
    const [length, setLength] = useState(8);
    const [isNumber, setIsNumber] = useState(false);
    const [isChar, setIsChar] = useState(false);
    const [password, setPassword] = useState("");
    const [isCopied, setIsCopied] = useState(false);


    let refElem = useRef();

    const copyToClipboard = ()=> {
        refElem.current?.select();
        window.navigator.clipboard.writeText(password);
        setIsCopied(true);
    }

    let genPassword = useCallback(() => {
        setIsCopied(false);

        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        if (isChar) str += "~`!@#$%^&*_-+={[}]";
        if (isNumber) str += "0123456789";

        for (let i = 0; i < length; i++) {
            let randomChar = str.charAt(Math.floor(Math.random() * str.length));
            pass += randomChar;
        }
        setPassword(pass)
    }, [length, isChar, isNumber, setPassword]);

    useEffect(() => genPassword(), [length, isChar, isNumber, genPassword]);

    return (
        <div className="w-max text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 border-zinc-300 rounded-2xl shadow-md shadow-zinc-500 space-y-7 bg-gradient-to-tr bg-[#cccccc36] backdrop-blur-xl">
            <h1 className="font-bold text-3xl">Password Generator</h1>
            <div className="relative">
                <textarea ref={refElem} type="text" placeholder="Password" className="outline-none border py-4 px-6 rounded-xl text-black w-full pr-20" rows={5} value={password} readOnly> </textarea>
                <button className="absolute right-4 top-4 bg-blue-500 p-2 rounded-md hover:bg-blue-400" onClick={copyToClipboard}>Copy</button>
            {isCopied && <p>Password Copied to clipboard!!!</p>}
            </div>
            <button className="p-4 shadow-md shadow-zinc-500 bg-blue-500 rounded-full hover:bg-blue-400" onClick={genPassword}>Generate</button>
            <div>
                <div>
                    <input type="range" min={6} max={50} value={length} onChange={(e) => { setLength(e.target.value) }} className="cursor-pointer" />
                    <label> Length: {length}</label>
                </div>

                <div className="flex justify-around mt-4">
                    <div>
                        <input type="checkbox" id="number" onChange={() => setIsNumber((prev) => !prev)} />
                        <label htmlFor="number">&nbsp;Numbers</label>
                    </div>
                    <div>
                        <input type="checkbox" id="char" onChange={() => setIsChar((prev) => !prev)} />
                        <label htmlFor="char">&nbsp;Symbols</label>
                    </div>
                </div>
            </div>
        </div>
    )
}