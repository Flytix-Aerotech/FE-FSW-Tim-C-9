import React, { useState } from 'react';
import Calendar from '../Calendar/Calendar';

const Beep = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        onClick={openModal}
      >
        Open Modal
      </button>
      <Calendar isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Beep;