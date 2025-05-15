import React from 'react'

const Welcome = () => {
    const firmName = localStorage.getItem("firmName");
    const firmImage = localStorage.getItem("firmImage"); // Retrieve the image path

    return (
        <div className='welcomeSection'>
            <h2>Welcome {firmName}</h2>
            <div className="landingImage">
                {/* Conditionally render the firm image */}
                {firmImage ? (
                    <img src={`${API_URL}/uploads/${firmImage}`} alt='Firm Image' />
                ) : (
                    <img src='chef.jpg' alt='Welcome' />
                )}
            </div>
        </div>
    );
}

export default Welcome;
