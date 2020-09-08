import React from 'react';
import './header.css';
export interface HeaderProps {
    user?: Record<string, unknown>;
    onLogin: () => void;
    onLogout: () => void;
    onCreateAccount: () => void;
}
export declare const Header: React.FC<HeaderProps>;
export default Header;
