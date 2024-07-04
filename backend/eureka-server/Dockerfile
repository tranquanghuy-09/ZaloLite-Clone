FROM eclipse-temurin:17-jre

WORKDIR /eureka-server
# Chạy lệnh Gradle để build ứng dụng
CMD ["./gradlew", "clean", "bootJar"]

# Copy file .jar vào thư mục /eureka-server/app/
COPY build/libs/*.jar /eureka-server/app/

# Expose cổng 8761
EXPOSE 8761

# Khởi động ứng dụng
ENTRYPOINT ["java", "-jar", "/eureka-server/app/app.jar"]
