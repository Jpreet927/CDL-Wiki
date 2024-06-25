FROM eclipse-temurin:17-jdk-alpine

WORKDIR /app

RUN mvn clean install -DskipTests

COPY target/cdlwiki-0.0.1.jar cdlwiki.jar

EXPOSE 8090

CMD ["java", "-jar", "cdlwiki.jar"]