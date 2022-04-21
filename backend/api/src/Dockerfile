# Set Python image
FROM python:3.10.4-bullseye
# Prevents infinite buffering
ENV PYTHONUNBUFFERED 1
# create root directory for our project in the container
RUN mkdir /usr/src/django/
RUN mkdir /usr/src/django/musicapi
# Set the working directory to /musicapi
WORKDIR /usr/src/django/musicapi
# Copy the current directory contents into the container at /musicapi
ADD . /usr/src/django/musicapi
# Install any needed packages specified in requirements.txt
RUN pip install -r requirements.txt