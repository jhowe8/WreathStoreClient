import React, { useEffect, useState } from 'react';
import WreathList from '../../components/WreathList/WreathList';
import Filters from '../../components/Filters/Filters';
import styles from './ProductsPage.module.css';
import { Filtering, Wreath } from '../../types';


const ProductsPage: React.FC = () => {
    const [wreaths, setWreaths] = useState<Wreath[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        // Placeholder for fetching data from API
        fetchWreaths({
          style: '',
          size: '',
          color: '',
          priceRange: ''
        });
    }, []);

    const fetchWreaths = async (filters: Filtering) => {
        console.log({ filters })
        setLoading(true);
        // Replace with actual API call
        // const response = await fetch('/api/wreaths');
        // const data = await response.json();
        const data = [
          {
            id: 6668,
            name: 'Patriot Summer 2024',
            description: '',
            price: 32,
            imageUrl: '',
            size: 18,
            color: ['red', 'white', 'blue', 'yellow'],
            season: ['summer', 'july4']
          },          
          {
            id: 1234,
            name: 'Jesus Rises',
            description: '',
            price: 35,
            imageUrl: '',
            size: 24,
            color: ['green', 'yellow', 'white'],
            season: ['spring', 'easter']
          },
        ]
        
        setWreaths(data);
        setLoading(false);
    };

    const handleFilterChange = (filters: Filtering) => {
      fetchWreaths(filters);
    };

    return (
        <div className={styles.productsPage}>
            <h1>Our Wreaths</h1>
            <Filters onFilterChange={handleFilterChange}/>
            {loading ? (
                <p>Loading wreaths...</p>
            ) : (
                <WreathList wreaths={wreaths} />
            )}
        </div>
    );
};

export default ProductsPage;
