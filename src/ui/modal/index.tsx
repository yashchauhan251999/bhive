const Modal = ({ children, closeModal = () => {}, isModalOpen }: {
    closeModal?: () => void,
    isModalOpen: boolean,
    children: React.ReactNode
}) => {
    return (
        <div
            className={`fixed inset-0 z-50 overflow-auto bg-black bg-opacity-80 flex justify-center items-center transition-all duration-300 ${isModalOpen ? 'opacity-100 block' : 'opacity-0 hidden'
                }`}
            onClick={closeModal}
        >
            <div
                className={`bg-white rounded md:max-w-[50rem] md:h-[70%] h-[90%] w-[100%] transform transition-transform duration-300 ${isModalOpen ? 'scale-100' : 'scale-95'
                    }`}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default Modal;