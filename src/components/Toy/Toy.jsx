import React from 'react';
import './Toy.css';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Toy = ({ toy }) => {
    const handleAddToCart = (id) => {
        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
          });
    }
    return (
        
            <div className="toy-card">
                <Link to={`/toys/${toy._id}`}><img src={toy.image} alt={toy.toyName} className="toy-image" /></Link>
                <button onClick={() => handleAddToCart(toy._id)} className='toy-btn'>Add to Cart</button>
                <h3 className="toy-name">{toy.toyName}</h3>
                <p className="toy-price">${toy.price}.00</p>
                <p className="toy-rating">Rating: {toy.rating}</p>
            </div>
        
    );
};

export default Toy;
