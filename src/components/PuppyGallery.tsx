import { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecommendedPuppies from './RecommendedPups';

function PuppyGallery() {
  const [puppyImage, setPuppyImage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [cooldown, setCooldown] = useState<boolean>(false);
  const COOLDOWN_TIME = 500; // milliseconds (0.5 seconds)

  const fetchPuppyImage = async () => {
    if (isLoading || cooldown) return; // Prevent fetching if loading or in cooldown
    
    setIsLoading(true);
    setCooldown(true);

    try {
      const response = await axios.get('https://dog.ceo/api/breeds/image/random');
      setPuppyImage(response.data.message);
    } catch (error) {
      console.error('Error fetching puppy image:', error);
    }
    
    setIsLoading(false);
    
    // Start cooldown timer
    setTimeout(() => {
      setCooldown(false);
    }, COOLDOWN_TIME);
  };

  useEffect(() => {
    fetchPuppyImage();
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="min-vh-100 w-100 bg-light d-flex justify-content-center align-items-center">
      <div className="container py-5">
        <div className="mx-auto" style={{ maxWidth: '800px' }}>
          <div className="bg-white rounded-4 shadow-lg p-4 p-md-5 text-center">
            <div className="mb-5">
              <h1 className="display-4 mb-3 text-primary fw-bold">
                🐶 Puppy Paradise
              </h1>
              <p className="lead text-muted mb-4 fs-4">
                Discover adorable puppies with just one click!
              </p>
              <button 
                className={`btn btn-lg px-5 py-3 rounded-pill shadow-sm fs-5 ${
                  isLoading || cooldown ? 'btn-secondary' : 'btn-primary'
                }`}
                onClick={fetchPuppyImage}
                disabled={isLoading || cooldown}
              >
                {isLoading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Fetching Puppy...
                  </>
                ) : cooldown ? (
                  'Wait a moment... 🐕'
                ) : (
                  'Show Me A Puppy! 🐾'
                )}
              </button>
            </div>

            {puppyImage && (
              <div className="position-relative">
                <div className="image-container rounded-4 shadow overflow-hidden">
                  <img 
                    src={puppyImage} 
                    alt="Random puppy" 
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>
                <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4">
                  <button 
                    className={`btn btn-lg shadow ${
                      isLoading || cooldown ? 'btn-secondary' : 'btn-light'
                    }`}
                    onClick={fetchPuppyImage}
                    disabled={isLoading || cooldown}
                  >
                    Next Puppy →
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Render the recommended puppies component */}
          <RecommendedPuppies />
        </div>
      </div>
    </div>
  );
}

export default PuppyGallery;
