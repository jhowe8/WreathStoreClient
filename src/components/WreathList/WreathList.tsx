import React from 'react';
import WreathItem from '../WreathItem/WreathItem';
import styles from './WreathList.module.css';

interface Wreath {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}

interface WreathListProps {
    wreaths: Wreath[];
}

const WreathList: React.FC<WreathListProps> = ({ wreaths }) => {
    return (
        <div className={styles.wreathList}>
            {wreaths.map(wreath => (
                <WreathItem key={wreath.id} wreath={wreath} />
            ))}
        </div>
    );
};

export default WreathList;
