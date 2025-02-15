## GigsUp Backend 

Install Dependencies: `pip install -r requirements.txt`

### Using Docker
Is a platform used to develop, ship, and run applications inside containers. Containers are lightweight and portable.

**Docker Setup**
Install Docker Desktop (this will include the Docker engine along with it)
> Link to installing Docker Desktop: https://docs.docker.com/desktop/setup/install/windows-install/

Go to the `backend/mysql-docker` directory, then run: `docker-compose -p <container-name> up --build -d`

to check container status: `docker ps -a`

to start/stop container: `docker start <container-name>` | `docker stop <container-name>`

to run commands inside a running docker container: `docker exec -it <container-name> bash`
* this will help in checking the tables if you want to use the terminal instead of the workbench

---

### Database Initialization
To create the tables, make sure you are in the `backend` directory then run: `python db_commands.py`
* this will create the tables outlined in the `models.py`

If you want to "reset" the database, run: `python db_commands.py drop`
* this will drop all the tables then create them again
* it will only have the test user if you had any previous data
