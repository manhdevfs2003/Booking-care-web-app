# 🏥 Hệ Thống Đặt Lịch Khám Bệnh (BookingCare Clone)

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)](https://expressjs.com/)

Một hệ thống quản lý phòng khám và đặt lịch khám bệnh trực tuyến hoàn chỉnh, được xây dựng với công nghệ hiện đại và giao diện thân thiện người dùng.

## 📋 Mục Lục

- [Tính Năng Chính](#-tính-năng-chính)
- [Công Nghệ Sử Dụng](#-công-nghệ-sử-dụng)
- [Cấu Trúc Dự Án](#-cấu-trúc-dự-án)
- [Cài Đặt](#-cài-đặt)
- [Cấu Hình](#-cấu-hình)
- [Chạy Ứng Dụng](#-chạy-ứng-dụng)
- [API Documentation](#-api-documentation)
- [Database Schema](#-database-schema)
- [Screenshots](#-screenshots)
- [Đóng Góp](#-đóng-góp)
- [Giấy Phép](#-giấy-phép)

## ✨ Tính Năng Chính

### 👤 Quản Lý Người Dùng
- **Đa vai trò**: Admin, Bác sĩ, Bệnh nhân
- **Xác thực**: Đăng nhập/Đăng ký an toàn
- **Phân quyền**: Kiểm soát truy cập theo vai trò

### 🩺 Quản Lý Bác Sĩ
- Hồ sơ bác sĩ chi tiết với chuyên khoa
- Quản lý lịch làm việc linh hoạt
- Xem danh sách bệnh nhân đã đặt lịch
- Gửi đơn thuốc và kết quả khám

### 📅 Hệ Thống Đặt Lịch
- Đặt lịch khám trực tuyến theo khung giờ
- Kiểm tra tình trạng còn trống theo thời gian thực
- Xác nhận qua email tự động
- Hủy và thay đổi lịch hẹn

### 🏢 Quản Lý Phòng Khám
- Thông tin chi tiết về các phòng khám
- Danh sách bác sĩ theo phòng khám
- Địa chỉ và thông tin liên hệ

### 🔬 Quản Lý Chuyên Khoa
- Danh mục chuyên khoa đầy đủ
- Bác sĩ theo từng chuyên khoa
- Thông tin chi tiết về dịch vụ

### 📧 Hệ Thống Email
- Xác nhận đặt lịch tự động
- Gửi nhắc nhở lịch hẹn
- Gửi kết quả khám và đơn thuốc

### 🌐 Đa Ngôn Ngữ
- Hỗ trợ Tiếng Việt và Tiếng Anh
- Chuyển đổi ngôn ngữ linh hoạt

## 🛠 Công Nghệ Sử Dụng

### Backend (Node.js)
- **Framework**: Express.js
- **Database**: PostgreSQL với Sequelize ORM
- **Authentication**: JWT
- **Email Service**: Nodemailer
- **Validation**: Express Validator
- **File Upload**: Multer
- **Environment**: Dotenv

### Frontend (React.js)
- **UI Framework**: React 18.x
- **State Management**: Redux + Redux Toolkit
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **UI Components**: 
  - React Bootstrap
  - React Select
  - React DatePicker
  - React Toastify
- **Styling**: SCSS
- **Internationalization**: React Intl
- **Rich Text Editor**: React Markdown Editor

### DevOps & Tools
- **Containerization**: Docker & Docker Compose
- **Version Control**: Git
- **Code Formatting**: Prettier
- **Linting**: ESLint

## 📁 Cấu Trúc Dự Án

```
clinic-app/
├── 📂 nodejs/                    # Backend API
│   ├── 📂 src/
│   │   ├── 📂 config/           # Cấu hình database, email
│   │   ├── 📂 controllers/      # Logic xử lý API
│   │   ├── 📂 models/          # Models Sequelize
│   │   ├── 📂 services/        # Business logic
│   │   ├── 📂 routes/          # Định tuyến API
│   │   ├── 📂 migrations/      # Database migrations
│   │   ├── 📂 seeders/         # Database seeders
│   │   └── 📄 server.js        # Entry point
│   ├── 📂 build/               # Compiled code
│   └── 📄 package.json
├── 📂 reactjs/                  # Frontend Application
│   ├── 📂 src/
│   │   ├── 📂 components/      # Reusable components
│   │   ├── 📂 containers/      # Page components
│   │   │   ├── 📂 System/      # Admin dashboard
│   │   │   ├── 📂 Patient/     # User interface
│   │   │   └── 📂 HomePage/    # Landing page
│   │   ├── 📂 services/        # API services
│   │   ├── 📂 store/           # Redux store
│   │   ├── 📂 utils/           # Utility functions
│   │   ├── 📂 translations/    # i18n files
│   │   └── 📂 styles/          # Global styles
│   └── 📄 package.json
├── 📄 postgres.yaml            # Docker PostgreSQL setup
└── 📄 README.md               # This file
```

## 🚀 Cài Đặt

### Yêu Cầu Hệ Thống
- **Node.js**: >= 14.x
- **npm**: >= 6.x
- **PostgreSQL**: >= 12.x
- **Docker** (tùy chọn)

### 1. Clone Repository
```bash
git clone https://github.com/your-username/clinic-booking-system.git
cd clinic-booking-system
```

### 2. Cài Đặt Backend
```bash
cd nodejs
npm install
```

### 3. Cài Đặt Frontend
```bash
cd ../reactjs
npm install
```

### 4. Cài Đặt Database (Docker)
```bash
# Quay về thư mục gốc
cd ..
# Chạy PostgreSQL container
docker-compose -f postgres.yaml up -d
```

## ⚙️ Cấu Hình

### Backend Environment (.env)
Tạo file `.env` trong thư mục `nodejs/`:
```env
PORT=8080
NODE_ENV=development

# Database
DB_HOST=localhost
DB_PORT=5436
DB_USERNAME=postgres
DB_PASSWORD=123456
DB_DATABASE_NAME=clinic_booking
DB_DIALECT=postgres
DB_SSL=false

# JWT
JWT_SECRET=your_jwt_secret_key

# Email Configuration
EMAIL_APP_PASSWORD=your_app_password
EMAIL_FROM=your_email@gmail.com

# Frontend URL
URL_REACT=http://localhost:3000
```

### Frontend Environment (.env)
Tạo file `.env` trong thư mục `reactjs/`:
```env
REACT_APP_BACKEND_URL=http://localhost:8080
REACT_APP_IS_LOCALHOST=true
```

### Database Migration
```bash
cd nodejs
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

## 🎯 Chạy Ứng Dụng

### Development Mode

**Backend:**
```bash
cd nodejs
npm start
# Server sẽ chạy tại http://localhost:8080
```

**Frontend:**
```bash
cd reactjs
npm start
# Ứng dụng sẽ mở tại http://localhost:3000
```

### Production Build

**Backend:**
```bash
cd nodejs
npm run build-src
npm run build
```

**Frontend:**
```bash
cd reactjs
npm run build
```

## 📚 API Documentation

### Authentication Endpoints
```
POST   /api/login                    # Đăng nhập
POST   /api/logout                   # Đăng xuất
```

### User Management
```
GET    /api/get-all-users           # Lấy tất cả người dùng
POST   /api/create-new-user         # Tạo người dùng mới
PUT    /api/edit-user               # Cập nhật người dùng
DELETE /api/delete-user             # Xóa người dùng
```

### Doctor Management
```
GET    /api/top-doctor-home         # Bác sĩ nổi bật
GET    /api/get-all-doctors         # Tất cả bác sĩ
GET    /api/get-detail-doctor-by-id # Chi tiết bác sĩ
POST   /api/save-infor-doctors      # Lưu thông tin bác sĩ
```

### Appointment System
```
POST   /api/patient-book-appointment    # Đặt lịch khám
POST   /api/verify-book-appointment     # Xác nhận lịch hẹn
GET    /api/get-list-patient-for-doctor # DS bệnh nhân của bác sĩ
POST   /api/send-remedy                 # Gửi đơn thuốc
```

### Schedule Management
```
POST   /api/bulk-create-schedule        # Tạo lịch làm việc
GET    /api/get-schedule-doctor-by-date # Lịch bác sĩ theo ngày
```

### Clinic & Specialty
```
GET    /api/get-all-clinic              # Tất cả phòng khám
GET    /api/get-detail-clinic-by-id     # Chi tiết phòng khám
GET    /api/get-all-specialty           # Tất cả chuyên khoa
GET    /api/get-detail-specialty-by-id  # Chi tiết chuyên khoa
```

## 🗄️ Database Schema

### Các Bảng Chính
- **Users**: Thông tin người dùng
- **Doctors**: Thông tin bác sĩ
- **Patients**: Thông tin bệnh nhân
- **Bookings**: Lịch hẹn khám
- **Schedules**: Lịch làm việc bác sĩ
- **Clinics**: Thông tin phòng khám
- **Specialties**: Chuyên khoa
- **AllCodes**: Dữ liệu tham chiếu

### Relationships
- User ↔ Doctor (1:1)
- Doctor ↔ Specialty (N:M)
- Doctor ↔ Clinic (N:M)
- Doctor ↔ Schedule (1:N)
- Patient ↔ Booking (1:N)
- Doctor ↔ Booking (1:N)

## 📱 Screenshots

### Trang Chủ
![Homepage](./screenshots/homepage.png)

### Đặt Lịch Khám
![Booking](./screenshots/booking.png)

### Dashboard Admin
![Admin Dashboard](./screenshots/admin-dashboard.png)

### Dashboard Bác Sĩ
![Doctor Dashboard](./screenshots/doctor-dashboard.png)

## 🤝 Đóng Góp

Chúng tôi hoan nghênh mọi đóng góp! Vui lòng đọc [CONTRIBUTING.md](CONTRIBUTING.md) để biết thêm chi tiết.

### Quy Trình Đóng Góp
1. **Fork** dự án
2. **Tạo nhánh** tính năng (`git checkout -b feature/TinhNangMoi`)
3. **Commit** thay đổi (`git commit -m 'Thêm tính năng mới'`)
4. **Push** lên nhánh (`git push origin feature/TinhNangMoi`)
5. **Tạo Pull Request**

### Code Style
- Sử dụng ESLint và Prettier
- Tuân thủ quy ước đặt tên
- Viết test cho tính năng mới
- Cập nhật documentation

## 🐛 Bug Reports & Feature Requests

Sử dụng [GitHub Issues](https://github.com/your-username/clinic-booking-system/issues) để:
- Báo cáo lỗi
- Đề xuất tính năng mới
- Thảo luận về cải tiến

## 📄 Giấy Phép

Dự án này được cấp phép theo giấy phép **MIT License** - xem file [LICENSE](LICENSE) để biết thêm chi tiết.

## 👥 Tác Giả

- **Tên tác giả** - [GitHub Profile](https://github.com/your-username)

## 🙏 Acknowledgments

- Cảm ơn [BookingCare](https://bookingcare.vn) vì ý tưởng thiết kế
- Cảm ơn cộng đồng Open Source
- Cảm ơn tất cả contributors

## 📞 Liên Hệ

- **Email**: your.email@example.com
- **LinkedIn**: [Your LinkedIn](https://linkedin.com/in/your-profile)
- **Website**: [Your Website](https://your-website.com)

---

⭐ **Nếu dự án này hữu ích, đừng quên star repo nhé!** ⭐
