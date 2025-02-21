import { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function RecommendedPuppies() {
  const [puppyGallery, setPuppyGallery] = useState<string[]>([]);

  const fetchPuppyGallery = async () => {
    try {
      const response = await axios.get('https://dog.ceo/api/breeds/image/random/5'); // if i add /5 to the end of this itll make 5 spawn
      setPuppyGallery(response.data.message);
    } catch (error) {
      console.error('Error fetching puppy gallery:', error);
    }
  };

  useEffect(() => {
    fetchPuppyGallery();
  }, []); // Fetch data on mount

  return (
    <div className="mt-5">
      <h2 className="h4 mb-4">Recommended Puppies</h2>
      <div className="row row-cols-2 row-cols-md-3 g-4">
        {puppyGallery.map((imageUrl, index) => (
          <div className="col" key={index}>
            <div className="card">
              <img 
                src={imageUrl} 
                alt={`Puppy ${index + 1}`} 
                className="card-img-top pointer"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecommendedPuppies;
