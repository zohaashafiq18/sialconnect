# 🏭 SialConnect - Industrial Portal

**A comprehensive digital platform connecting Sialkot's manufacturing industries with global markets.**

![SialConnect Banner](https://via.placeholder.com/800x200/1A2234/FFFFFF?text=SialConnect+-+Industrial+Portal)

## 🌟 Features

### 🔍 **Core Functionality**
- **Factory Directory** - Comprehensive database of Sialkot manufacturers
- **Smart Search** - Advanced filtering by category, location  
- **Product Catalog** - Detailed product listings with specification
- **User Authentication** - Secure login/signup system
- **Admin Dashboard** - Complete management interface

### 📱 **User Features**
- **Interactive Factory Search** with live suggestions
- **Category-based Product Browsing** (Sports, Surgical, Leather, etc.)
- **Product Reviews & Ratings** system
- **User Profiles** with notification management
- **Real-time Notifications** for events and updates
- **Responsive Design** - works on all devices

### 👨‍💼 **Admin Features**
- **Factory Management** - Add, edit, delete factory profiles
- **Category Management** - Organize products and subcategories  
- **Product Management** - Comprehensive product database
- **User Management** - Monitor and manage user accounts
- **Event Management** - Create and manage industry events
- **Notification System** - Send targeted notifications to users

## 🏗️ **Tech Stack**

### **Frontend**
- **HTML5** - Modern semantic markup
- **CSS3** - Responsive styling with custom design
- **Vanilla JavaScript** - Dynamic interactions
- **Firebase SDK** - Real-time database integration

### **Backend & Database**
- **Firebase Authentication** - Secure user management
- **Firestore Database** - NoSQL real-time database

### **Key Industries Covered**
- 🏈 **Sports Goods** - FIFA approved footballs, sports equipment
- ⚕️ **Surgical Instruments** - World-class medical tools  
- 👜 **Leather Products** - Premium quality leather goods
- 🎵 **Musical Instruments** - Traditional and modern instruments
- 👔 **Textile & Apparel** - Fashion and industrial textiles
- 🍴 **Cutlery & Hardware** - Precision tools and utensils

## 🚀 **Getting Started**

### **Prerequisites**
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection for Firebase services
- Basic knowledge of HTML/CSS/JS for development

### **Installation**

1. **Clone the repository:**
```bash
git clone https://github.com/yourusername/sialconnect.git
cd sialconnect
```

2. **Set up Firebase:**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com)
   - Enable Authentication, Firestore, and Storage
   - Copy your Firebase config and update in the HTML files

3. **Project Structure:**
```
sialconnect/
├── sialconnt.html          # Homepage 
├── aboutme.html            # About page
├── categories.html         # Product categories
├── factories.html          # Factory directory  
├── factory1.html           # Factory details
├── product1.html           # Product details
├── profile.html            # User profile
├── login.html              # User login
├── signin.html             # User registration
├── simple_admin_dashboard.html  # Admin panel
├── chatbot.html            # AI assistant
├── css/                    # Stylesheets
├── images/                 # Image assets
├── js/                     # JavaScript files
└── README.md              # Project documentation
```

4. **Launch the application:**
   - Open `sialconnt.html` in your web browser
   - Or serve via local development server

## 🔥 **Firebase Configuration**

### **Required Firebase Services:**
- **Authentication** - Email/password authentication
- **Firestore Database** - Document-based database
- **Storage** - File and image storage

### **Database Collections:**
```
firestore/
├── users/              # User profiles and data
├── factories/          # Factory information  
├── categories/         # Product categories and items
├── products/           # Product catalog
├── events/             # Industry events
├── notifications/      # User notifications
└── reviews/            # Product reviews
```

### **Security Rules:**
```javascript
// Firestore Security Rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can read/write their own data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Public read access to factories and categories
    match /factories/{document} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    match /categories/{document} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

## 👥 **User Roles**

### **👤 Regular Users**
- Browse factories and products
- Search and filter listings  
- Create account and manage profile
- Submit reviews and ratings
- Receive notifications

### **👨‍💼 Admin Users**
- Full dashboard access
- Manage all factories and products
- Send notifications to users
- Create and manage events
- User account management

## 🌐 **Live Demo**

- **Frontend:** [Your GitHub Pages Link]
- **Admin Panel:** [Admin Dashboard Link]
- **Test Credentials:**
  - Admin: `admin@sialconnect.com` / `password123`
  - User: `test@user.com` / `password123`

## 📸 **Screenshots**

### Homepage
![Homepage](https://via.placeholder.com/600x400/1A2234/FFFFFF?text=Homepage+Screenshot)

### Factory Directory  
![Factory Directory](https://via.placeholder.com/600x400/1A2234/FFFFFF?text=Factory+Directory)

### Admin Dashboard
![Admin Dashboard](https://via.placeholder.com/600x400/1A2234/FFFFFF?text=Admin+Dashboard)

## 🤝 **Contributing**

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 **Contact & Support**

- **Email:** sialconnect@gmail.com
- **Location:** Sialkot, Punjab, Pakistan
- **Website:** [Your Website URL]
- **Issues:** [GitHub Issues Link]

## 🙏 **Acknowledgments**

- Firebase team for excellent backend services
- Sialkot Chamber of Commerce for industry insights  
- Local manufacturers for collaboration and feedback
- Open source community for inspiration

---

### 🌟 **Star this repository if you found it helpful!**


Made with ❤️ for Sialkot's industrial community
