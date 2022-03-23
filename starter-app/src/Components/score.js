import React, { PureComponent } from 'react'

export default class Score extends PureComponent {
    render() {
        const { score, total = Math.max(1, score) } = this.props;
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
    }
}
