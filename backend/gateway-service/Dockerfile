FROM eclipse-temurin:17-jre

WORKDIR /gateway-service

CMD ["./gradlew", "clean", "bootJar"]

COPY build/libs/*.jar /gateway-service/app/

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "/gateway-service/app/app.jar"]



