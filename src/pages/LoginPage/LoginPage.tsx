import React, { useState, useContext } from 'react';
import UserContext from '../../context/UserContext';
import styles from './LoginPage.module.css';

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const userContext = useContext(UserContext);

    if (!userContext) {
      throw new Error('LoginPage must be used within a UserProvider');
    }

    const { setUser } = userContext;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically make an API call to login
        // For this example, we'll just set the user in context
        setUser({ username });
        // Redirect to home page or dashboard after login
    };

    return (
        <div className={styles.loginContainer}>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginPage;
