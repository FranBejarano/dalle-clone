# Dall-E Clone

This project is a web application that generates and manipulates images based on textual prompts. It utilizes the OpenAI API to create images and variations using natural language descriptions.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- Node.js: A JavaScript runtime environment for server-side development.
- Express.js: A web application framework for Node.js.
- OpenAI API: An artificial intelligence model used for image generation and manipulation.
- Multer: A middleware for handling file uploads in Node.js.
- CORS: A middleware for enabling Cross-Origin Resource Sharing.

## Installation

To run this application locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies by running the following command:

   ```shell
   npm install
   ```

4. Create a `.env` file in the root directory of the project.
5. Obtain an API key from the OpenAI website by following these steps:

   - Visit the OpenAI website at [https://openai.com/](https://openai.com/).
   - Sign in to your account or create a new one if needed.
   - Navigate to the API section and generate an API key for GPT-3.5.
   - Copy the API key and paste it into the `.env` file using the following format:

     ```
     API_KEY=YOUR_API_KEY
     ```

6. Save the `.env` file.
7. Start the development server by running the following command:

   ```shell
   npm run start:frontend
   ```

8. Start the development server by running the following command:

   ```shell
   npm run start:backend
   ```

9. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to access the application.

## Obtaining OpenAI API Key

To use the OpenAI API in this project, you need to obtain an API key. Follow these steps to get your API key:

1. Visit the OpenAI website at [https://openai.com](https://openai.com).

2. Sign in to your OpenAI account or create a new account if you don't have one.

3. Navigate to the API section of your OpenAI account dashboard.

4. Generate an API key for your account.

5. Copy the API key and store it securely.

6. Create a `.env` file in the project root directory.

7. Add the following line to the `.env` file, replacing `<YOUR_API_KEY>` with your actual API key:

```plaintext
API_KEY=<YOUR_API_KEY>
```

8. Save the `.env` file.

With the API key properly set up, the application will be able to communicate with the OpenAI API for image generation and manipulation.

Feel free to explore the application and generate unique images based on your creative prompts!
