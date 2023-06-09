# Photo Snap

Photo Snap is a web application for sharing and exploring photos. It is built using React.js, HTML, CSS, and React Router. The project is set up with Vite and React, allowing for efficient development. You can view the live preview of the application [here](https://photo-site1.netlify.app/).

## Prerequisites

Before running the project, make sure you have the following dependencies installed:

- Node.js (version v18.13.0)
- npm (Node Package Manager, version 8.19.3)

## Getting Started

To get started with the project, follow the steps below:

1. Clone the repository:

```
git clone https://github.com/Bronze14/Photosite.git
```

2. Navigate to the project directory:

```
cd Photosite
```

3. Install the dependencies:

```
npm install
```

## Development

To start the development server, run the following command:

```
npm run dev
```

This will launch the development server and open the application in your default browser. Any changes you make to the source code will automatically trigger hot module replacement and update the application in real-time.

## Build

To build the project for production, use the following command:

```
npm run build
```

This will generate a `dist` directory with optimized and minified files ready for deployment.

## React Router

React Router is used for client-side routing in the Photo Snap application. Routes are defined in the `src/App.js` file. You can add or modify routes as per your requirements.

## Deployment

To deploy the project, you can use any hosting platform of your choice. One option is to use Netlify:

1. Create an account on [Netlify](https://www.netlify.com/) (if you don't have one already).

2. Connect your project repository to Netlify.

3. Set the build command to:

```
npm run build
```

4. Set the publish directory to:

```
dist
```

5. Click on the "Deploy" button.

Netlify will automatically build and deploy your project whenever you push changes to the repository.

## Contributing

Contributions to the project are welcome. If you find any issues or have suggestions for improvements, feel free to open a pull request or submit an issue in the project repository.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- This project was built using Vite (https://vitejs.dev/), React (https://reactjs.org/), and React Router (https://reactrouter.com/).
- The design and functionality of Photo Snap were inspired by popular photo sharing websites.
