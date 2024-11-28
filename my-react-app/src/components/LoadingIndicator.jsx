
/* import './LoadingIndicator.css'; */ // Import the CSS for styling

const LoadingIndicator = () => {
    return (
        <div className="loading-indicator">
            <div className="spinner"></div>
            <p>Loading...</p>
        </div>
    );
};

export default LoadingIndicator;