import sys
from models import Base, Users
from database import engine, make_session
from app import app

def init_db():
  # creates all tables first
  Base.metadata.create_all(engine)

  session = make_session()

  test_email = "test@example.com"
  test_pass = "password123"
  test_first_name = "johnny"
  test_last_name = "test"

  test_user = Users(
    email=test_email,
    first_name=test_first_name,
    last_name=test_last_name,
    password=test_pass
  )

  session.add(test_user)
  session.commit()

  print("created tables and added test user.")

  session.close()

def drop_tables():
  Base.metadata.drop_all(engine)

  print("dropping all tables.")

if __name__ == "__main__":
  if len(sys.argv) > 1 and sys.argv[1] == "drop":
    drop_tables()
  
  init_db()