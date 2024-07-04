FROM eclipse-temurin:17-jre

WORKDIR /account-service

# Chạy lệnh Gradle để build ứng dụng
CMD ["./gradlew", "clean", "bootJar"]

# Copy file .jar vào thư mục /account-service/app/
COPY build/libs/*.jar /account-service/app/

# Expose cổng 8081
EXPOSE 8081

# Khởi động ứng dụng
ENTRYPOINT ["java", "-jar", "/account-service/app/app.jar"]


