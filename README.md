# ZaloLite Clone
  ### <i>My Role: Frontend Developer, DevOps</i>
  <i>Contact: tranquanghuyit09@gmail.com</i>
#### Members size: 4

#### Technologies Used:
- Frontend: React, Tailwind CSS, Material-UI, Ant Design, Vercel, Cloudinary, Socket.io.
- Backend: Java Spring, WebFlux, JWT, Reactive Mongo, Microservice Architecture.
- Deployment: EC2(BE), Vercel(FE), MongoDB Clusters(DB)
#### Descriptions:
- Implemented features such as user login and registration, friend requests, direct messaging, and group chat.
- Developed and implemented user-friendly interfaces using ReactJS, ensuring a seamless user experience.
- Styled the application using Tailwind CSS and Material-UI, maintaining consistency and responsiveness across all devices.
- Integrated real-time chat functionality using Socket.io for instant messaging capabilities.

# Image Demo
## LoginPage
![Ảnh màn hình 2024-07-06 lúc 22 51 08](https://github.com/tranquanghuy-09/ZaloLite-Clone/assets/107989088/cfcf60c8-7f04-4677-bd55-3ba6d3320765)

## HomePage
![Ảnh màn hình 2024-07-06 lúc 23 00 36](https://github.com/tranquanghuy-09/ZaloLite-Clone/assets/107989088/84c6e995-d78f-40a5-8e61-ecd7fdfad413)

## ChatPage
![Ảnh màn hình 2024-07-06 lúc 23 00 06](https://github.com/tranquanghuy-09/ZaloLite-Clone/assets/107989088/607e84da-2e13-4a99-b69e-85b0a5cf4d6c)


# FRONT END WEB
### Deploy on Vercel: 
[https://www.zaloweb.click](https://www.zaloweb.click)

### Vercel’s deployment diagram:
![](https://b1410584.smushcdn.com/1410584/wp-content/uploads/2022/11/v2-768x545.png?lossy=0&strip=1&webp=1)

### Demo:
<img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png?20220706172052" alt="run-in-android" height="12" width="20">  [Run in web](https://youtu.be/HcMB9w4fMNo)

### Run:
<br>
`WEB INIT`
```
npm i
npm run dev
```
`Login` :
```
http://localhost:5173/auth/login
```


# FRONT END APP
```
npx expo start --port 3005
```

# BACK END
### Architectural diagram - Microservice
![arch](https://github.com/sonnees/ZaloLite/assets/110987763/6355f4e8-975e-4242-a387-b97881806fcd)

<hr>

### Deploy on EC2(AWS):
#### Technologies Used: Docker-compose, Nginx
Some API & Socket:
```
http://tranquanghuyit09.website/api/v1/auth/check-uniqueness-phone-number/0000000000
```
```
https://tranquanghuyit09.website/api/v1/user/info/26ce60d1-64b9-45d2-8053-7746760a8354
```
```
wss://tranquanghuyit09.website/ws/user/26ce60d1-64b9-45d2-8053-7746760a8354
```
```
wss://tranquanghuyit09.website/ws/chat/5b685d06-8fbe-4ab7-8053-7746760a8001
```

### API & Data Transfer Object
Xem chi tiết tại enpoint `/swagger-index`
