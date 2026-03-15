"use client"
import { useState } from "react"

export default function ButtonGroups({onDump}){
    return(
        <div>
            <button onClick={onDump}>
                Dump Me
            </button>
        </div>
    )
}