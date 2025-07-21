# Application Overview

<img width="1919" height="966" alt="Screenshot 2025-07-20 002802" src="https://github.com/user-attachments/assets/0856f3a4-2109-4c20-8f68-81e6b6e3babb" />
<img width="1919" height="903" alt="Screenshot 2025-07-20 003352" src="https://github.com/user-attachments/assets/38ec7c70-8567-474f-8222-fafb2f44bc5c" />
<img width="1919" height="904" alt="Screenshot 2025-07-20 002944" src="https://github.com/user-attachments/assets/1a716f39-9ff5-48e8-8311-61c6b336352a" />
<img width="1695" height="697" alt="Screenshot 2025-07-20 003036" src="https://github.com/user-attachments/assets/104da4cd-b1c8-4a7a-87bd-71b5f1f25c27" />

# Features

- Create, switch, and delete chat threads.

- Real-time AI-powered chat responses (e.g., via Google Gemini API).

- Responsive UI with a sidebar for thread navigation and a chat window with markdown rendering.

- Typewriter effect for AI responses using ReactMarkdown and rehype-highlight.

- Loading animations with ScaleLoader for better UX.

- Environment variable management with dotenv.

- Thread-based chat history persistence with MongoDB.

# Technologies Used  

## Backend:

 - Node.js

 - Express.js

 - MongoDB (Mongoose)

 - CORS

 - dotenv

## Frontend:

 - React.js

 - React Context API

 - UUID (v1) for unique thread IDs

 - ReactMarkdown with rehype-highlight for markdown and code highlighting

 - react-spinners (ScaleLoader) for loading states

 - Font Awesome for icons

## External APIs:

 - Google Gemini API (free API keys available per their documentation)

# Prerequisites

- Node.js v18 or higher

- npm v8 or higher

- MongoDB (local or cloud, e.g., MongoDB Atlas)

- Google Gemini API key (optional, for AI responses)

### 📋 Prerequisites

- Python 3.8 or higher.
- A webcam for image capture.
- Git for repository cloning.

### 🧱 Setting Up Your Development Environment

1. **Install Git**:
   - Download and install Git from [git-scm.com](https://git-scm.com/).

2. **Clone the Repository**:
   ```bash
   git clone https://github.com/VenkataSatya05/IntelliGem.git

3. **Backend SetUp**:
   - Navigate to the Backend Repository
     
    ```bash
       cd backend
    
   - Install dependencies:
   
    ```bash
       npm install

   - Create a .env file in the backend directory:
   
    ```bash
       MONGODB_URI=your_mongodb_connection_string

  - Start the backend server:
   ```bash
      npm start
```


4. **Frontend Setup:**:
   - Navigate to the frontend directory:

   ```bash
     cd frontend

   - Install dependencies:

   ```bash
     npm install

   - Start the development server:

   ```bash
     npm start
``

5. **API Key Configuration**:
   
   - Obtain a free Google Gemini API key (see their documentation for details).
   - Configure the API key in your backend if required by your chat.js router logic.
