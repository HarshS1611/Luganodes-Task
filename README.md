# Project Name
Luganodes-Task (Ronin Explorer)

# Description
This project utilizes Create React App for a transaction explorer for the Ronin blockchain to track blocks and transactions efficiently. The application provides a user-friendly interface for exploring and querying transactions on the Ronin blockchain.

# Setup Instructions
1. Clone the repository
2. Navigate to the `frontend` directory
3. Run `npm install` to install dependencies
4. Start the development server with `npm start`
5. Access the application at [http://localhost:3000](http://localhost:3000)

# Running with Docker in local
1. Clone the repo and then navigate to `Luganodes-Task`
2. Make sure you have `docker engine` running by checking `docker` command on the terminal
3. Run the `docker-compose.yaml` file command `docker-compose up` on the terminal
4. Access the application at [http://localhost:3000](http://localhost:3000)

# Project Architecture
The Luganodes-Task (Ronin Explorer) project is built using React and TailwindCSS. It includes components for blocks, transactions, and account information. The front end interacts with API endpoints to fetch data from the Ronin blockchain. 

## Components
1. Blocks: Display information about blocks on the Ronin blockchain.
2. Transactions: Show details of individual transactions.
3. Account Information: Provides data related to specific accounts.
4. Search bar: The user can search any block, tx hash, and address that is deployed on the ronin chain.

## Technologies Used
- ReactJS
- TailwindCSS
- Axios for API calls

# API Documentation
The project utilizes the following API endpoints to fetch data:
1. Ronin REST API: Used for retrieving blocks, transactions, and account details. Refer to the official documentation at [Ronin REST API](https://docs.skymavis.com/api/ronin-rest).
2. Token Metrics API: Utilized for obtaining token price predictions. Refer to the documentation at [Token Metrics API](https://developers.tokenmetrics.com/reference/price-prediction).

For specific API calls and usage within the codebase, refer to the relevant components and API integration points in the source code.

# Deployment
1. Build the app for production with `npm run build`
2. Deploy the app using the generated build files either on `vercel` or `netlify`

# Accessing the Application
1. Local Development: Open [http://localhost:3000](http://localhost:3000) in your browser
2. Production Deployment: Follow deployment instructions in the Create React App documentation
