# 🛡️ SurakshaSaathi (సురక్ష సాథి / ಸುರಕ್ಷಾ ಸಾಥಿ)
**A Multilingual (Telugu, Kannada & English) Scenario-Based PWA to Build Scam Resistance Among First-Time Digital Payment Users, Elders, and Local Vendors**

[![SDG 16](https://img.shields.io/badge/SDG_16-Peace%2C_Justice_%26_Strong_Institutions-blue)](https://sdgs.un.org/goals/goal16)
[![SDG 10](https://img.shields.io/badge/SDG_10-Reduced_Inequalities-orange)](https://sdgs.un.org/goals/goal10)
[![SDG 4](https://img.shields.io/badge/SDG_4-Quality_Education-red)](https://sdgs.un.org/goals/goal4)
[![PWA](https://img.shields.io/badge/PWA-Offline_First-green)](https://web.dev/progressive-web-apps/)

---

## 🌟 Project Overview
**SurakshaSaathi** is an interactive, voice-assisted Progressive Web App (PWA) designed to build real-time cognitive resistance against financial cybercrimes targeting senior citizens, grassroots shopkeepers, and semi-urban families in South India (Andhra Pradesh, Telangana, and Karnataka).

Unlike passive educational posters or generic English videos, SurakshaSaathi immerses users into realistic branching decision scenarios (such as rush-hour fake UPI screenshots, QR reverse-charge scams, and intimidation "digital arrest" extortion calls) with instant feedback and voice narration in **Telugu**, **Kannada**, and **English**.

---

## 🚀 Key Features Built

1. **Real-Time Scam Scanner & 6-Step System Flow (Matching Project Architecture):**
   - **Step 1:** Choose Telugu, Kannada, or English.
   - **Step 2:** User submits suspicious content (paste message, upload screenshot, or describe phone call).
   - **Step 3:** Input processing (extract text, OCR metadata, detect language & clues).
   - **Step 4:** Heuristic Scam Detection Engine (analyzes Digital Arrest, UPI reverse charges, spoof apps, malicious APKs).
   - **Step 5:** Tri-state Risk Assessment (🔴 High Risk / 🟡 Uncertain / 🟢 Lower Risk) with confidence percentage.
   - **Step 6:** Explain + Protect (vernacular warning explanation, actionable next steps, and **🔊 Voice Audio narration**).

2. **Multilingual Trilingual Engine (One-Tap Switch):**
   - **Telugu (తెలుగు)**
   - **Kannada (ಕನ್ನಡ)**
   - **English**

3. **Branching Decision Simulations (Realistic Hardware Mockups):**
   - **Scenario 1 (Vendor Protection):** Rush-hour Fake UPI Screenshot / Spoof App green tick trap.
   - **Scenario 2 (Elder Protection):** QR Code "Scan to Receive Money" reverse payment trap.
   - **Scenario 3 (Extortion Protection):** Fake Police / CBI WhatsApp Video Call ("Digital Arrest") threat.
   - **Scenario 4 (Malware Protection):** Electricity Disconnection SMS with malicious `.apk` download.

4. **Audio / TTS Voice Guidance:**
   - Text-to-Speech narration tailored for elders (0.9x speed for clear comprehension) and offline synthesized feedback chimes using Web Audio API.

5. **Review 1 Objective 4 Validation (Pre-Test & Post-Test Engine):**
   - **Pre-Test:** Captures baseline cyber vulnerability score.
   - **Post-Test:** Evaluates retention and measurable percentage gain in scam detection accuracy.
   - **Analytics Report:** Generates an empirical comparison chart showing delta ($\Delta$) improvement.

6. **Offline-First PWA:**
   - Full Service Worker (`sw.js`) and Web Manifest (`manifest.json`) supporting offline caching, homescreen installation, and entry-level Android devices without internet.

---

## 📂 Project Structure

```text
surakshasaati/
├── index.html            # Main PWA application container
├── styles.css            # Accessible, high-contrast, responsive stylesheet
├── manifest.json         # PWA Web Manifest (installable on mobile/desktop)
├── sw.js                 # Service Worker for offline asset caching
├── README.md             # Project documentation and Review 1 guide
├── icons/
│   ├── icon-192.svg      # PWA 192x192 SVG App Icon
│   └── icon-512.svg      # PWA 512x512 SVG App Icon
└── scripts/
    ├── app.js            # Main UI navigation, routing, and state manager
    ├── detector.js       # Real-time Scam Detection Engine (6-Step flow)
    ├── scenarios.js      # Multilingual branching scenario decision trees
    ├── quiz.js           # Pre-test and post-test evaluation assessment engine
    └── audio.js          # Speech synthesis and offline audio tone controller
```

---

## 🖥️ How to Run & Demo for Review 1

### Option 1: Instant Local HTTP Server (Recommended for PWA Service Workers)
Open PowerShell inside this folder and run:

```powershell
python -m http.server 8080
```
Then open your browser at:
```text
http://localhost:8080
```

### Option 2: Using Node.js `npx serve`
```powershell
npx serve .
```

### Option 3: Direct File Launch
Double-click `index.html` to open directly in any modern browser (Chrome, Edge, Firefox).

---

## 🎯 Review 1 Presentation Guide (What to Show the Panel)

1. **Step 1: Language Switch:**
   - Switch language to **తెలుగు (Telugu)** or **ಕನ್ನಡ (Kannada)** in the top right.
   - Demonstrate how all scenarios, buttons, and voice narrations switch seamlessly.

2. **Step 2: Pre-Test Assessment:**
   - Click **Pre-Test** in the navigation bar to demonstrate baseline evaluation (e.g., getting 1/3 correct).

3. **Step 3: Interactive Simulation Demo:**
   - Click **Simulations** -> **The Rush-Hour Fake UPI Screenshot**.
   - Point out the realistic simulated mobile phone screen with the fake green Paytm tick.
   - Click **🔊 Listen in Voice** to let the panel hear the vernacular narration.
   - Select the incorrect option to show the "Financial Loss" warning, then retry with the correct defense ("Verify on your own Soundbox or SMS").

4. **Step 4: Post-Test & Review 1 Report:**
   - Complete the **Post-Test** (scoring 3/3).
   - Click **Review 1 Report** to present the **Accuracy Comparison Chart (+67% Gain)** satisfying **Objective 4**.
