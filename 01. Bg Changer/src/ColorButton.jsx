export default function ColorButton ({name, textColor, changeColor}) {
    return (
        <button className="outline-none px-4 py-1 rounded-full shadow-md" style={{backgroundColor: name, color: textColor}} onClick={changeColor}>{name}</button>
    )
}