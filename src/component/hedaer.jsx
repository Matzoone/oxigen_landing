import React, { useState } from 'react';
import Modal from './modal';

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <header>
            <button onClick={() => setIsModalOpen(true)}>باز کردن مودال</button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </header>
    );
};
export default Header