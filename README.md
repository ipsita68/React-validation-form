# React Validation Form

This project is a React-based validation form that allows users to input their personal details, such as name, username, email, password, phone number, country, and city. The form includes validation for each input field and integrates a phone number input component with country code selection. Upon successful submission, the form data is navigated to a success page.

## Features

- **Form Validation**: Ensures that all required fields are filled out correctly.
- **Password Toggle**: Allows users to show/hide their password.
- **Country and City Selection**: Dynamically updates city options based on the selected country.
- **Phone Number Input**: Integrates with `react-phone-input-2` for international phone number input.
- **Success Page Navigation**: Redirects to a success page with the submitted form data.

## Technologies Used

- React
- React Router
- React Hook Form
- `react-phone-input-2`
- CSS for styling

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/react-validation-form.git
   ```
2. Navigate to the project directory:
   ```bash
   cd react-validation-form
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the development server:
   ```bash
   npm start
   ```
2. Open your browser and navigate to `http://localhost:3000`.

## Form Fields

- **First Name**: Required
- **Last Name**: Required
- **Username**: Required, must be at least 4 characters long
- **Email**: Required, must be a valid email format
- **Password**: Required, must be at least 8 characters long
- **Phone Number**: Required, using `react-phone-input-2`
- **Country**: Required, dynamically loads cities based on the selected country
- **City**: Required, options are populated based on the selected country

## Project Structure

```bash
.
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── Form.js
│   │   ├── Success.js
│   │   └── form.css
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
└── README.md
```

## Code Explanation

### Form Component (`Form.js`)

- Uses `react-hook-form` for form handling and validation.
- Includes various input fields with validation rules.
- Integrates `react-phone-input-2` for phone number input.
- Dynamically loads cities based on the selected country.
- Handles form submission and navigates to the success page.

### Success Component (`Success.js`)

- Displays the submitted form data.
- Uses React Router's `useLocation` to access the form data passed through navigation state.

### CSS (`form.css`)

- Styles for the form components.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## Screenshots of the app
![image](https://github.com/ipsita68/React-validation-form/assets/121110612/cb63aa57-df6f-4d0a-86f7-d0ab4ae04068)
![image](https://github.com/ipsita68/React-validation-form/assets/121110612/14476d4c-ec27-48bd-8173-9c1fceaa95b1)



## When filled with details:
![image](https://github.com/ipsita68/React-validation-form/assets/121110612/afa9115b-73ca-43eb-9d65-320f07cd093f)
![image](https://github.com/ipsita68/React-validation-form/assets/121110612/f6db83d3-656f-4af3-a793-f553f3a092c4)

## success page after submitting:
![image](https://github.com/ipsita68/React-validation-form/assets/121110612/f571deac-b022-448a-abb8-1a9406635600)




