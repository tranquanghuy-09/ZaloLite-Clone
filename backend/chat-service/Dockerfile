FROM eclipse-temurin:17-jre

WORKDIR /chat-service

# Chạy lệnh Gradle để build ứng dụng
CMD ["./gradlew", "clean", "bootJar"]

# Copy file .jar vào thư mục /chat-service/app/
COPY build/libs/*.jar /chat-service/app/

# Expose cổng 8082
EXPOSE 8082

# Khởi động ứng dụng
ENTRYPOINT ["java", "-jar", "/chat-service/app/app.jar"]