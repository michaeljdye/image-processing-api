# Image Processing API

This repository contains an Image Processing API built using React, TypeScript, and Jasmine. The API accepts an image endpoint along with preferred image size values and returns the image resized according to the specified dimensions.

## Features

- Resize images based on preferred dimensions
- Built using React and TypeScript
- Utilizes Prettier and ESLint for code formatting and style consistency
- Includes unit tests written in Jasmine for thorough application testing

## Installation

1. Clone the repository to your local machine:

   ```shell
   git clone https://github.com/your-username/image-processing-api.git
   ```

2. Navigate to the project directory:

   ```shell
   cd image-processing-api
   ```

3. Install the dependencies:

   ```shell
   npm install
   ```

## Usage

1. Start the development server:

   ```shell
   npm start
   ```

   This command will run the application and host it locally on `http://localhost:3000`.

2. Access the API endpoints using your preferred HTTP client or a web browser.

   The API accepts the following parameters:

   - `image`: The image endpoint URL.
   - `width` (optional): The preferred width of the resized image.
   - `height` (optional): The preferred height of the resized image.

   An example request URL would look like:

   ```
   http://localhost:3000/api/resize?image=https://example.com/image.jpg&width=800&height=600
   ```

   Replace `https://example.com/image.jpg` with the URL of the image you want to resize, and `800` and `600` with your desired width and height, respectively.

## Code Formatting and Linting

To maintain code formatting consistency, this project utilizes Prettier and ESLint.

- Prettier is used to automatically format the code according to predefined rules.
- ESLint is used to enforce code quality and detect potential errors.

To format the code using Prettier, run the following command:

```shell
npm run format
```

To lint the code using ESLint, run the following command:

```shell
npm run lint
```

## Testing

Unit tests for the Image Processing API have been implemented using Jasmine. You can run the tests with the following command:

```shell
npm test
```

The test suite will execute and provide feedback on the test results and code coverage.

## Contributions

Contributions to this project are welcome. If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request.

Before contributing, make sure to familiarize yourself with the [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).

Feel free to use and modify the codebase as per the terms of the license.

## Acknowledgements

- This project was built using React and TypeScript.
- Prettier and ESLint were used for code formatting and linting.
- Jasmine was used for unit testing.
