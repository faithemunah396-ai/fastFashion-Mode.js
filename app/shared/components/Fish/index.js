
"use client";

import { useEffect, useState } from "react";

const numOfFish = 90

// make fish swim around

export default function swim() {
    const verticalMin = 0 
    const verticalMax = 100

    for(let i = 0; i < numOfFish; ++ i) {
        const verticalPosition = Math.random(verticalMin, verticalMax + 1)
    }
}



// when clicked - fish stop




// lose point (hearts) when fish is clicked




//fish changes -- when winning fish are happy -- when losing fish are sad/ dead 