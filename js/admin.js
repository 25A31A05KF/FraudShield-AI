import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
  getFirestore, 
  collection, 
  getDocs 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDEPmk6-Wj5nShat4sxfHV-NMPOrcg6cn8",
  authDomain: "fraudshield-ai-4f6a1.firebaseapp.com",
  projectId: "fraudshield-ai-4f6a1",
  storageBucket: "fraudshield-ai-4f6a1.firebasestorage.app",
  messagingSenderId: "436125953232",
  appId: "1:436125953232:web:92776cabe4c1bf0b7302d5",
  measurementId: "G-8MS1GRFHHV"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Load users
async function loadUsers() {
    const querySnapshot = await getDocs(collection(db, "users"));
    const table = document.getElementById("userTable");
    let count = 0;

    querySnapshot.forEach(doc => {
        const u = doc.data();
        count++;

        table.innerHTML += `
            <tr>
                <td>${u.name || "-"}</td>
                <td>${u.email}</td>
                <td>${u.role || "user"}</td>
                <td>${u.lastLogin?.toDate().toLocaleString() || "-"}</td>
            </tr>
        `;
    });

    document.getElementById("userCount").innerText = count;
}

loadUsers();

window.logout = function(){
    sessionStorage.clear();
    window.location.href = "login.html";
};