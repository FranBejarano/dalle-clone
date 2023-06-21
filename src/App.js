// Imports the useState hook from the React library and the Modal component from a local file
import { useState } from "react"
import Modal from "./components/Modal"

// Functional component that represents the main component of the React application
const App = () => {
  // Declares state variables using the useState hook. These variables are used to manage the component's state
  const [images, setImages] = useState(null) // Stores an array of images generated or uploaded by the user
  const [value, setValue] = useState(null) // Represents the user's input or search term
  const [error, setError] = useState(null) // Holds any error message that occurs during the image generation or editing process
  const [selectedImage, setSelectedImage] = useState(null) // Represents the currently selected image uploaded by the user
  const [modalOpen, setModalOpen] = useState(false) // Determines whether the modal for editing the image variations is open or closed
  // contains a list of surprise options that can be randomly selected to set the value state variable when the user 
  // clicks on the "Surprise Me" button
  const surpriseOption = [
    'A blue ostrich eating melon',
    'A matisse style shark on the telephone',
    'A pineapple sunbathing on an island',
    'Maradona wearing Sevilla FC t-shirt with the Ramon Sanchez Pizjuan as the background'
  ]

  // Randomly selects a surprise option from the surpriseOption array and sets it as the new value state variable
  const surpriseMe = () => {
    setImages(null)
    const randomValue = surpriseOption[Math.floor(Math.random() * surpriseOption.length)]
    setValue(randomValue)
  }

  // It performs an asynchronous HTTP POST request to a local server (http://localhost:8000/images) to fetch images 
  // based on the current value state variable.The response is then stored in the images state variable
  const getImages = async () => { 
    setImages(null)
    if (value === null) {
      setError('Error! Must have a search term')
      return
    }
    try {
      const options = {
        method: "POST",
        body: JSON.stringify ({
          message: value
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }
      const response = await fetch('http://localhost:8000/images', options)
      const data = await response.json()
      console.log(data)
      setImages(data)
    } catch (error) { 
      console.error(error)
    }
  }

  // It uploads the selected image file to a local server (http://localhost:8000/upload) using an asynchronous HTTP 
  // POST request
  const uploadImage = async (e) => {
    const formData = new FormData()
    formData.append('file', e.target.files[0])
    setModalOpen(true)
    setSelectedImage(e.target.files[0])
    e.target.value = null
    try {
      const options = {
        method: "POST",
        body: formData
      }
      const response = await fetch('http://localhost:8000/upload', options)
      const data = await response.json()
    } catch (error) {
      console.error(error)
    }
  }

  // It performs an asynchronous HTTP POST request to a local server (http://localhost:8000/variations) to generate 
  // image variations based on the selected image.The response is then stored in the images state variable
  const generateVariations = async () => { 
    setImages(null)
    if (selectedImage === null) { 
      setError('Error! Must have an existing image')
      setModalOpen(false)
      return
    }
    try {
      const options = {
        method: "POST",
      }
      const response = await fetch('http://localhost:8000/variations', options)
      const data = await response.json()
      console.log(data)
      setImages(data)
      setError(null)
      setModalOpen(false)
    } catch (error) { 
      console.error(error)
    }
  }

  return (
    <div className="app">
      <section className="search-section">
        <p>Start with a detailed description
          <span className="surprise" onClick={surpriseMe}>Surprise me</span>
        </p>
        <div className="input-container">
          <input
            value={value}
            placeholder="An impressionist oil painting of a sunflower in a purple vase..."
            onChange={e => setValue(e.target.value)}
          />
          <button onClick={getImages}>Generate</button>
        </div>
        <p className="extra-info">Or,
          <span>
            <label htmlFor="files"> upload an image </label>
            <input onChange={uploadImage} id="files" accept="image/*" type="file" hidden/>
          </span>
          to edit.
        </p>
        {error && <p>{error}</p>}
        {modalOpen && <div className="overlay">
          <Modal
            setModalOpen={setModalOpen}
            setSelectedImage={setSelectedImage}
            selectedImage={selectedImage}
            generateVariations={generateVariations}
          />
        </div>}
      </section>
      <section className="images-section">
        {images?.map((image, _index) => (
          <img key={_index} src={image.url} alt={`Generated image of ${value}`} />
        ))}
      </section>
    </div>
  );
}

export default App;
