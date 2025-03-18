import React from 'react';

export default function App() {
    const [score, setScore] = React.useState(0);
    const getScoreBarStyle = () => {
        // 1- Compute width
        const scoreWidth = `${score * 10}%`;

        // 2- Compute color (optional)
        let scoreColor;
        if (score <= 2) {
            scoreColor = `#eabe5d`; // Yellow
        } else if (score > 2 && score <= 5) {
            scoreColor = `#bbc55e`; // Greenish
        } else if (score > 5 && score <= 7) {
            scoreColor = `#cde66c`; // Light Green
        } else if (score > 7) {
            scoreColor = `#a4c45d`; // Dark Green
        }
        
        // 3 - Return the style object
        return {
            width: scoreWidth,
            backgroundColor: scoreColor,
        };
    };

    return (
        <>
            <div className="score-panel">
                <h1>My Score in React</h1>

                <small>Enter a score (0 to 10): </small>
                <input
                    type="number"
                    min="0"
                    max="10"
                    value={score}
                    onChange={(e) => setScore(Number(e.target.value))}
                ></input>

                <div className="score-bar">
                    <div
                        className="score-bar-value"
                        style={getScoreBarStyle()}
                    ></div>
                </div>
            </div>
        </>
    );
}
