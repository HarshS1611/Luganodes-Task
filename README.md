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

# API Documentation
API endpoints are used to fetch data for blocks, transactions, and account details. Refer to the codebase for specific API calls.
- https://docs.skymavis.com/api/ronin-rest
- https://developers.tokenmetrics.com/reference/price-prediction (for getting the token price)

# Deployment
1. Build the app for production with `npm run build`
2. Deploy the app using the generated build files either on `vercel` or `netlify`

# Accessing the Application
1. Local Development: Open [http://localhost:3000](http://localhost:3000) in your browser
2. Production Deployment: Follow deployment instructions in the Create React App documentation
