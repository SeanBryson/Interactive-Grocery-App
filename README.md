# Docker Multi-Tier App
### Multi-Container Application Using Python Flask & React

A multi-container shopping list application that allows CRUD operations. This project is easily launched using the Docker Compose file.

## Running the Application

To run this application with Docker Compose, follow these steps:

1. **Build & Run the Docker Images**: Run the following command in the directory that contains the docker-compose.yml file as well as both the frontend and backend subdirectories.
   
    ```bash
    docker-compose up --build
    ```

    This command builds the images (if they haven't been built) and starts the containers. Your application will have the same name as your current directory.
   
2. **Access the application**: You can now access the application in your web browser at `http://localhost:80`.



## Docker Images

The Docker images for this application are available on Docker Hub. Feel free to pull and run images for the [frontend](https://hub.docker.com/r/seanbryson/capstone_solution-frontend) and [backend](https://hub.docker.com/r/seanbryson/capstone_solution-backend).

