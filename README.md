🚨 FraudShield-AI
An Intelligent Fraud Awareness & Detection Web Platform
Problem:
India loses thousands of crores every year due to digital fraud — affecting students, elders, and first-time internet users the most.
Solution:
FraudShield-AI is a real-time, AI-powered web platform that helps users:
Detect fraudulent messages
Analyze suspicious transactions
Understand why something is risky (Explainable AI)
Learn online safety practices
—all in one place.
🌐 Live Demo
🔗 Website:
https://25A31A05KF.github.io/FraudShield-AI/
🎯 Key Features
🔐 Secure Authentication
Email/Password login
Google Sign-In using Firebase Authentication
Session-based access protection
🧠 AI-Based Fraud Detection
📩 Message Fraud Detection
Detects phishing & scam messages
Uses TensorFlow.js ML model
Analyzes keywords, links, urgency signals
Outputs:
Fraud / Medium Risk / Safe
AI Risk Score (%)
Explainable reasons
💳 Transaction Fraud Detection
Analyzes:
Amount
Location
Time anomaly
Device trust
ML-based risk prediction
Visual risk meter + explanation
📊 Fraud History & Analytics
Stores past checks using LocalStorage
Interactive dashboard
Google Charts visualization
Risk distribution (Safe / Medium / Fraud)
Clear history option
🌙 Dark Mode
Fully supported across all pages
Persistent using localStorage
One-click toggle
👨‍💼 Admin Dashboard
Secure admin-only access
View registered users
Firebase Firestore integration
Last login tracking
📚 Awareness Pages
Safety Tips
Help & Support
Contact Information
Cybercrime portal links
🛠️ Tech Stack
Layer
Technology
Frontend
HTML, CSS, JavaScript
Styling
Custom CSS + Dark Mode
AI / ML
TensorFlow.js
Charts
Google Charts
Auth
Firebase Authentication
Database
Firebase Firestore
Hosting
GitHub Pages
🧩 System Architecture
Copy code

User
 ↓
Browser (HTML / CSS / JS)
 ↓
TensorFlow.js (Client-side ML)
 ↓
Firebase Auth + Firestore
 ↓
Risk Score + Explainable Output
✔ No backend server required
✔ Fully client-side & scalable
🔐 Security Note (IMPORTANT)
This project uses Firebase in a frontend-only environment.
Firebase Web API keys are intentionally public
The API key is:
✅ Restricted by domain
✅ Limited to required Firebase APIs only
Firestore access is protected using:
Firebase Authentication
Firestore Security Rules
For production systems, sensitive logic would be handled via a backend server.
🚀 How to Run Locally
Clone the repository
Copy code
Bash
git clone https://github.com/25A31A05KF/FraudShield-AI.git
Open folder
Copy code
Bash
cd FraudShield-AI
Open index.html in browser
(or use VS Code Live Server)
🧪 Demo Credentials (for judges)
Admin Login
Copy code

Username: admin
Password: 1234
Or
Sign in using Google
