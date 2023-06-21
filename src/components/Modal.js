// Hooks from the React library
import { useState, useRef } from "react"

// Represents a modal window within the React application
const Modal = ({setModalOpen, setSelectedImage, selectedImage, generateVariations}) => {
    // Declares state variables using the useState hook
    const [error, setError] = useState(null) // Holds an error message if any error occurs during the image generation or editing process within the modal
    const ref = useRef(null) // Represents a reference to an HTML element (<img> tag) to access its properties, in this case, width and height

    // This function is called when the user clicks on the close button (✖)
    const closeModal = () => { 
        setModalOpen(false)
        setSelectedImage(null)
    }

    // It checks if the width and height of the selected image (accessed through the ref object) are both less than or 
    // equal to 256. If the condition is true, it calls the generateVariations function from the props, which generates 
    // variations of the image.Otherwise, it sets the error state variable with an error message
    const checkSize = () => {
        if (ref.current.width <= 256 && ref.current.height <= 256) {
            generateVariations()
        } else {
            setError('Error: Choose 256 x 256 image')
        }
    }
    return (
        <div className="modal">
            <div onClick={closeModal}>✖</div>
            <div className="img-container">
                {selectedImage && <img ref={ref} src={URL.createObjectURL(selectedImage)} alt="uploaded image"/>}
            </div>
            <p>{error || "* Image must be 256 x 256"} </p>
            {! error && <button onClick={checkSize}>Generate</button>}    
            {error && <button onClick={closeModal}>Close this and try again</button>}
            
        </div>
    )
}

export default Modal