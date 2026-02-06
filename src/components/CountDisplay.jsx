import './CountDisplay.css';

const CountDisplay = ({ count }) => {
    return (
        <p className="countDisplay">Current Count: {count}</p>
    );
};

export default CountDisplay;