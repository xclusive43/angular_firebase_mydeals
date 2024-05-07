# Angular E-Commerce App

Welcome to our Angular-based e-commerce application! This project facilitates the buying and selling of products. The frontend is built using Angular, and the backend is powered by Firebase.

## Description

This application enables users to browse, search, and purchase a variety of products. It provides a seamless shopping experience with features such as product categorization, user authentication, cart management, and secure payments.

## Features

- User authentication (signup, login, logout)
- Product browsing and searching
- Product categorization and filtering
- Adding products to cart
- Cart management (edit quantity, remove items)
- Secure checkout process
- Order history tracking

## Installation

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd angular-e-commerce`
3. Install dependencies: `npm install`

## Firebase Setup

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Set up Firebase Authentication, Firestore (for database), and Firebase Hosting as per your requirements
3. Add Firebase configuration to `src/environments/environment.ts` and `src/environments/environment.prod.ts`

```typescript
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
  }
};
```

## Usage

To run the development server, use the following command:

```bash
ng serve
```

Navigate to `http://localhost:4200/` in your browser. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Contributing

Contributions are welcome! Please see our [contributing guidelines](CONTRIBUTING.md) for details on how to contribute to this project.

## License

This project is licensed under the [MIT License](LICENSE).

## Credits

- Author: [AJAY PRAJAPATI](https://github.com/ajayxd43)

## Contact

If you have any questions or suggestions, feel free to reach out to us at [ajayxd43@gmail.com](mailto:ajayxd43@gmail.com).
