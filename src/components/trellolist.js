import React from "react";
import trellocard from "./trellocard";


const trellolist=({title})=>{
    return(
    <div style={styles.container}>
    <h4>{title}</h4>
    <trellocard/>
    </div>
    )
};

const styles={
    container:{
        backgroundColor: "ccc",
        borderRadius: 3, 
        width: 300,
        padding: 8

    }
};

export default trellolist;
