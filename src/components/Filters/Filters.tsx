import React, { useState } from 'react';
import styles from './Filters.module.css';
import { Filtering } from '../../types';

interface FilterProps {
    onFilterChange: (filters: Filtering) => void;
}

const Filters: React.FC<FilterProps> = ({ onFilterChange }) => {
    const [style, setStyle] = useState<string>('');
    const [size, setSize] = useState<string>('');
    const [color, setColor] = useState<string>('');
    const [priceRange, setPriceRange] = useState<string>('');

    const handleFilterChange = () => {
        onFilterChange({ style, size, color, priceRange });
    };

    return (
        <div className={styles.filters}>
            <div className={styles.filter}>
                <label htmlFor="style">Style:</label>
                <select id="style" value={style} onChange={(e) => setStyle(e.target.value)}>
                    <option value="">All</option>
                    <option value="classic">Classic</option>
                    <option value="modern">Modern</option>
                    // Add more styles as needed
                </select>
            </div>

            <div className={styles.filter}>
                <label htmlFor="size">Size:</label>
                <select id="size" value={size} onChange={(e) => setSize(e.target.value)}>
                    <option value="">All</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                    // Add more sizes as needed
                </select>
            </div>

            <div className={styles.filter}>
                <label htmlFor="color">Color:</label>
                <select id="color" value={color} onChange={(e) => setColor(e.target.value)}>
                    <option value="">All</option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    // Add more colors as needed
                </select>
            </div>

            <div className={styles.filter}>
                <label htmlFor="priceRange">Price:</label>
                <select id="priceRange" value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
                    <option value="">All</option>
                    <option value="0-50">$0 - $50</option>
                    <option value="51-100">$51 - $100</option>
                    <option value="101-150">$101 - $150</option>
                    // Add more price ranges as needed
                </select>
            </div>

            <button onClick={handleFilterChange}>Apply Filters</button>
        </div>
    );
};

export default Filters;
