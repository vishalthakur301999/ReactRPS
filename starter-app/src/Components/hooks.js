import React, { useState, useEffect } from "react";
import { Button } from '@geist-ui/core'

function Timer() {
    const [count, setCount] = useState(0);
    const [calculcations, setCalculations] = useState(0);
    useEffect(() => {
        setCalculations(() => count * 2);
    }, [count])
    return (
        <div>
            <h1>This count has been rendered {count} times</h1>
            <Button onClick={() => setCount((c) => c+1)}>+</Button>
            <Button onClick={() => setCount((c) => c-1)}>-</Button>
            <p>calculcations : {calculcations}</p>
        </div>
    )
}

export default Timer;