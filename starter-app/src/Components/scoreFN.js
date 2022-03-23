import React, { memo } from 'react'

export default memo(function ScoreFN({ score = 0, total = 100 }) {
    return (
        <div>
            <h2>
                Score
            </h2>
            <p>
                {Math.round(score / total * 100)}%
            </p>
        </div>
    )
});
