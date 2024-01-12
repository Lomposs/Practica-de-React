import React from "react"


export default function Saludar (props){
    const {UserInfo, SaludarFn} = props
    const {nombre = "Anonimo", edad = 0, color = "Caca"  } = UserInfo //Default Anonimo


    return(
        <button onClick={() => SaludarFn(nombre, edad, color)}>Saludar</button>
    )
}