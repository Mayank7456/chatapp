# ChatApp Website

This repository contains the source code for a ChatApp website built with React. The application provides a platform for real-time messaging, along with user authentication and a responsive design.

## Features

### Authentication
- **Sign Up:** Allows users to register for a new account.
- **Sign In:** Enables existing users to sign in securely.

### Messaging
- **Real-Time Chat:** Users can send and receive messages instantly.
- **Message Notifications:** Users receive notifications for new messages.

### User Interface
- **Responsive Design:** Ensures a seamless experience across devices.
- **Custom Fonts:** Google Fonts are used for a modern and cohesive look.

## Demo
- **Live Demo:**
- https://mayank7456.github.io/chatapp/

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/mayank7456/chatapp.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd chatapp
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Set Up Firebase:**

    - Create a Firebase project in the (https://console.firebase.google.com/).
    - Enable Firebase Authentication and Firestore Database.
    - Add your Firebase configuration details to the project:

      ```javascript
      // firebase-config.js
      const firebaseConfig = {
        apiKey: "your-api-key",
        authDomain: "your-auth-domain",
        projectId: "your-project-id",
        storageBucket: "your-storage-bucket",
        messagingSenderId: "your-messaging-sender-id",
        appId: "your-app-id"
      };
      ```

5. **Start the development server:**

    ```bash
    npm start
    ```

    The app will be running on `http://localhost:3000`.

## Technologies Used

- **React.js**
- **Firebase**
- **Google Fonts**

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

## Contact

For any questions or feedback, feel free to contact me at tomarmayank219@gmail.com.
