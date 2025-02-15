import os
import yaml
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv

# Load environment variables from a .env file
load_dotenv()  # This will read the .env file and add variables to the environment

# Load the YAML configuration file
with open('db_conf.yaml', 'r') as f:
  db_config = yaml.safe_load(f.read())

# Access the datastore part of the configuration
db_s = db_config['datastore']

# Use environment variables directly (they should be loaded by dotenv)
user = os.getenv('DB_USER', db_s['user'])
password = os.getenv('DB_PASSWORD', db_s['password'])
hostname = os.getenv('DB_HOSTNAME', db_s['hostname'])
port = os.getenv('DB_PORT', db_s['port'])
db_name = os.getenv('DB_NAME', db_s['db'])

# Create the database engine with the substituted values
engine = create_engine(f"mysql://{user}:{password}@{hostname}:{port}/{db_name}")

def make_session():
  return sessionmaker(bind=engine)()
