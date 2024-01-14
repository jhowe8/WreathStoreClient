import React from 'react';
import styles from './WreathItem.module.css';

interface Wreath {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}

interface WreathItemProps {
    wreath: Wreath;
}

const WreathItem: React.FC<WreathItemProps> = ({ wreath }) => {
    return (
        <div className={styles.wreathItem}>
            <img src={wreath.imageUrl} alt={wreath.name} className={styles.wreathImage} />
            <h3>{wreath.name}</h3>
            <p>{wreath.description}</p>
            <p className={styles.price}>${wreath.price}</p>
            {/* You can add an "Add to Cart" button here */}
        </div>
    );
};

export default WreathItem;
