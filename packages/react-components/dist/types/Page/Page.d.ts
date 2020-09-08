import React from 'react';
import './page.css';
export interface PageProps {
    user?: Record<string, unknown>;
    onLogin: () => void;
    onLogout: () => void;
    onCreateAccount: () => void;
}
export declare const Page: React.FC<PageProps>;
export default Page;
