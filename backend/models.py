# far from being finalized, only an outline of the actual database for now
import enum
from sqlalchemy.orm import DeclarativeBase, mapped_column
from sqlalchemy import Integer, String, DateTime, func, Enum ,ForeignKey, Float, DECIMAL, BigInteger, Text

class Base(DeclarativeBase):
  pass 

class Users(Base):
  __tablename__ = "users"
  user_id = mapped_column(Integer, primary_key=True, autoincrement=True)
  email = mapped_column(String(255), unique=True, nullable=False)
  password = mapped_column(String(255), nullable=False) # make sure password gets hashed 
  first_name = mapped_column(String(100), nullable=False)
  last_name = mapped_column(String(100), nullable=False)
  current_education = mapped_column(String(255), nullable=True)
  income = mapped_column(DECIMAL(10, 2), nullable=True)
  created_at = mapped_column(DateTime, default=func.now())
  user_skills = mapped_column(Text, nullable=True)

class Jobs(Base):
  __tablename__ = "jobs"
  job_id = mapped_column(Integer, primary_key=True, autoincrement=True)
  job_name = mapped_column(String(255), nullable=False)
  industry = mapped_column(String(255), nullable=False)
  education_req = mapped_column(Text, nullable=True)
  salary = mapped_column(Float, nullable=True)
  hourly_wage = mapped_column(Float, nullable=True)
  skills_req = mapped_column(Text, nullable=True)

class JobMatches(Base):
  __tablename__ = "job_matches"
  match_id = mapped_column(Integer, primary_key=True, autoincrement=True)
  user_id = mapped_column(Integer, ForeignKey("users.user_id"))
  job_id = mapped_column(Integer, ForeignKey("jobs.job_id"))
  description_match = mapped_column(Text, nullable=True)
  match_score = mapped_column(Float, nullable=True) # the weighting thing she talked about.. ig?