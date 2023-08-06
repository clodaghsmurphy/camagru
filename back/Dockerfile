FROM ubuntu:20.04

RUN apt-get update && apt-get install -y 

RUN apt install default-jdk -y

COPY . .

RUN javac Main.java

CMD ["java", "Main"]