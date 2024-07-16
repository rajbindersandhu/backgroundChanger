 import "./ButtonContainer.css"
 export function ButtonContainer({setColor}){
    const buttonList = ["red", "yellow", "black", "purple", "green", "blue", "default"]
    function captilze(name){
        return name.replace(name[0], name[0].toUpperCase());
    }
    return (
        <div id="button-container">
            {buttonList.map((color, index) => <button key={index} style={{color:`${color != "black" ? "black": "white"}`, backgroundColor:`${color!="default" ? color : "white"}`}} onClick={() => color!="default" ? setColor(color) : setColor("white")}>{captilze(color)}</button>)}
        </div>
    )
 }