export default function ThemeButton({ theme, setTheme, color }) {
    return(
        <button className={`p-4 rounded-full bg-${color}-400 shadow-md`} onClick={()=> setTheme({color: `${color}-400`, bgColor: `${color}-300`,primaryColor:`${color}-500`, secondaryColor: `${color}-100`})}></button>
    )
}