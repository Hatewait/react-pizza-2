import React from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'

const FullPizza: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pizza, setPizza] = React.useState<{
      imageUrl: string,
      title: string,
      price: number,
  }>();

  React.useEffect (() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(`https://63d6b4a7dc3c55baf43b21e5.mockapi.io/items/${id}`)
        setPizza(data)
      } catch (error) {
        alert('error');
        navigate('/');
      }
    }
    fetchPizza();
  }, [])

  if (!pizza) {
    return <>`Loading...`</>
  }

  return (
      <div className="container">
        <img
            className="pizza-block__image"
            alt={pizza.title}
            src={pizza.imageUrl}
        />
        <h2>{pizza.title}</h2>
        <h4>{pizza.price} ₽</h4>
      </div>
  );
};

export default FullPizza;
