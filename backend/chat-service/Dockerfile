FROM eclipse-temurin:17-jre

WORKDIR /chat-service

CMD ["./gradlew", "clean", "bootJar"]

COPY build/libs/*.jar app.jar

# Expose cổng 8082
EXPOSE 8082

# Khởi động ứng dụng
ENTRYPOINT ["java", "-jar", "app.jar"]