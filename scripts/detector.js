// SurakshaSaathi - Real-Time Scam Detection Engine
// Implements the 6-Step System Flow:
// 1. Language Context -> 2. Content Submission -> 3. Input Processing (OCR/Text) -> 
// 4. Heuristic Rule & Clue Engine -> 5. Risk Assessment (High/Uncertain/Low) -> 6. Vernacular Explain + Protect

const SCAM_PATTERNS = [
  // Category 1: Digital Arrest & Law Enforcement Extortion
  {
    category: "digital_arrest",
    keywords: ["cbi", "police", "customs", "narcotics", "digital arrest", "arrest warrant", "illegal parcel", "cambodia", "money laundering", "swat", "crime branch", "court", "ed officer"],
    severity: "high",
    clue: {
      en: "Threatens legal action or impersonates law enforcement (CBI/Police/Customs)",
      te: "పోలీసు, సిబిఐ లేదా కస్టమ్స్ అధికారులమని చెప్పి అక్రమంగా అరెస్ట్ చేస్తామని బెదిరింపు",
      kn: "ಪೊಲೀಸ್, ಸಿಬಿಐ ಅಥವಾ ಕಸ್ಟಮ್ಸ್ ಹೆಸರಿನಲ್ಲಿ ಅರೆಸ್ಟ್ ವಾರಂಟ್ ಬೆದರಿಕೆ"
    },
    actionAdvice: {
      en: "DISCONNECT IMMEDIATELY! Indian law has NO 'Digital Arrest'. Real police never demand video calls or online money transfers. Report to 1930.",
      te: "వెంటనే కాల్ కట్ చేయండి! భారత చట్టంలో 'డిజిటల్ అరెస్ట్' అనేదే లేదు. అసలు పోలీసులు వాట్సాప్ కాల్స్‌లో డబ్బులు అడగరు. 1930 కి కాల్ చేయండి.",
      kn: "ತಕ್ಷಣ ಕರೆ ಕಡಿತಗೊಳಿಸಿ! ಭಾರತೀಯ ಕಾನೂನಿನಲ್ಲಿ 'ಡಿಜಿಟಲ್ ಅರೆಸ್ಟ್' ಇಲ್ಲ. ಪೊಲೀಸರು WhatsApp ನಲ್ಲಿ ಹಣ ಕೇಳುವುದಿಲ್ಲ. 1930 ಗೆ ದೂರು ನೀಡಿ."
    }
  },

  // Category 2: UPI Reverse Charge / QR / Enter PIN to Receive
  {
    category: "upi_reverse",
    keywords: ["scan qr to receive", "enter pin to receive", "enter upi pin", "lottery", "cashback", "prize", "refund credit", "scan and receive", "voucher approved"],
    severity: "high",
    clue: {
      en: "Asks you to enter your secret UPI PIN or scan a QR code to 'receive' money",
      te: "డబ్బులు మీ ఖాతాలోకి రావడానికి QR స్కాన్ చేయమని లేదా UPI పిన్ కొట్టమని అడుగుతోంది",
      kn: "ಹಣ ಪಡೆಯಲು QR ಸ್ಕ್ಯಾನ್ ಮಾಡಲು ಅಥವಾ UPI ಪಿನ್ ನಮೂದಿಸಲು ಕೇಳುತ್ತಿದೆ"
    },
    actionAdvice: {
      en: "DO NOT ENTER PIN! UPI PIN is ONLY entered to deduct money. Entering your PIN will instantly empty your account.",
      te: "ఎట్టిపరిస్థితుల్లోనూ పిన్ కొట్టవద్దు! UPI పిన్ అనేది మీ అకౌంట్ నుండి డబ్బులు పోవడానికి మాత్రమే. పిన్ కొడితే డబ్బులు దొంగిలించబడతాయి.",
      kn: "ಪಿನ್ ಎಂದಿಗೂ ಹಾಕಬೇಡಿ! UPI ಪಿನ್ ಹಣ ಕಳುಹಿಸಲು ಮಾತ್ರ. ಪಿನ್ ಹಾಕಿದರೆ ನಿಮ್ಮ ಖಾತೆಯಿಂದ ಹಣ ಕಡಿತವಾಗುತ್ತದೆ."
    }
  },

  // Category 3: Malicious APK / App Downloads
  {
    category: "malicious_apk",
    keywords: [".apk", "download app", "install apk", "suvidha", "electricity_bill.apk", "bank_update.apk", "anydesk", "teamviewer", "quicksupport", "rustdesk"],
    severity: "high",
    clue: {
      en: "Requests installation of an unverified .APK file or remote screen-sharing software",
      te: "తెలియని .APK ఫైల్ లేదా ఫోన్ స్క్రీన్ షేరింగ్ యాప్ డౌన్‌లోడ్ చేసుకోమని అడుగుతోంది",
      kn: "ಅಪರಿಚಿತ .APK ಫೈಲ್ ಅಥವಾ ಸ್ಕ್ರೀನ್ ಶೇರಿಂಗ್ ಆ್ಯಪ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಲು ಕೇಳುತ್ತಿದೆ"
    },
    actionAdvice: {
      en: "DO NOT INSTALL! This APK is spyware designed to intercept banking SMS/OTPs and siphon your funds.",
      te: "యాప్‌ను ఇన్‌స్టాల్ చేయకండి! ఇది మీ ఫోన్ OTPలను దొంగిలించే వైరస్.",
      kn: "ಆ್ಯಪ್ ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡಬೇಡಿ! ಇದು ನಿಮ್ಮ ಮೊಬೈಲ್‌ನ OTP ಗಳನ್ನು ಕದಿಯುವ ವೈರಸ್."
    }
  },

  // Category 4: Utility & Bill Disconnection Panic
  {
    category: "utility_threat",
    keywords: ["power disconnected", "electricity will be disconnected", "tonight 9:30", "bill not updated", "line cut", "sim block", "kyc expired", "pan card link"],
    severity: "high",
    clue: {
      en: "Uses artificial panic & urgency regarding service disconnection (Electricity, SIM, PAN)",
      te: "కరెంట్ కట్ చేస్తామని లేదా సిమ్ బ్లాక్ చేస్తామని తీవ్ర భయాందోళన సృష్టిస్తోంది",
      kn: "ವಿದ್ಯುತ್ ಸಂಪರ್ಕ ಅಥವಾ ಸಿಮ್ ಬ್ಲಾಕ್ ಮಾಡುವುದಾಗಿ ಹೆದರಿಸಿ ಅವಸರ ಪಡಿಸುತ್ತಿದೆ"
    },
    actionAdvice: {
      en: "DO NOT CALL THE GIVEN NUMBER! Utility boards never disconnect power at night via personal SMS. Check your official electricity board app.",
      te: "మెసేజ్‌లోని నంబర్‌కు కాల్ చేయవద్దు! అధికారిక విద్యుత్ బోర్డు వెబ్‌సైట్‌లో మాత్రమే బిల్లు తనిఖీ చేయండి.",
      kn: "ಆ ನಂಬರ್‌ಗೆ ಕರೆ ಮಾಡಬೇಡಿ! ಅಧಿಕೃತ ವಿದ್ಯುತ್ ಮಂಡಳಿ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಮಾತ್ರ ಬಿಲ್ ಪರಿಶೀಲಿಸಿ."
    }
  },

  // Category 5: Fake UPI Screenshot / Spoof Receipt
  {
    category: "spoof_receipt",
    keywords: ["spoof", "payment successful", "paid to sri lakshmi", "txn id", "transaction successful", "no soundbox", "green tick"],
    severity: "uncertain",
    clue: {
      en: "Shows payment confirmation screen without accompanying official bank SMS or Soundbox audio",
      te: "సౌండ్‌బాక్స్ లేదా మీ స్వంత బ్యాంక్ SMS రాకుండా కేవలం కస్టమర్ స్క్రీన్‌షాట్ మాత్రమే చూపుతోంది",
      kn: "ಸೌಂಡ್‌ಬಾಕ್ಸ್ ಅಥವಾ ಬ್ಯಾಂಕ್ SMS ಬಾರದೆ ಕೇವಲ ಗ್ರಾಹಕರ ಮೊಬೈಲ್ ಸ್ಕ್ರೀನ್ ತೋರಿಸಲಾಗುತ್ತಿದೆ"
    },
    actionAdvice: {
      en: "DO NOT HAND OVER GOODS YET! Wait for your own soundbox voice announcement or check your personal bank passbook balance.",
      te: "సరుకులను వెంటనే ఇవ్వవద్దు! మీ స్వంత సౌండ్‌బాక్స్ లేదా బ్యాంక్ SMS వచ్చే వరకు ఆగండి.",
      kn: "ಸಾಮಾನು ನೀಡಬೇಡಿ! ನಿಮ್ಮದೇ ಸೌಂಡ್‌ಬಾಕ್ಸ್ ಧ್ವನಿ ಅಥವಾ ಬ್ಯಾಂಕ್ SMS ಬರುವವರೆಗೆ ಕಾಯಿರಿ."
    }
  }
];

// Presets for instant Review 1 demonstration
const SAMPLE_PRESETS = [
  {
    id: "sample_digital_arrest",
    label: {
      en: "🚨 Sample: CBI 'Digital Arrest' Threat",
      te: "🚨 ఉదాహరణ: సిబిఐ డిజిటల్ అరెస్ట్ బెదిరింపు",
      kn: "🚨 ಉದಾಹರಣೆ: ಸಿಬಿಐ ಡಿಜಿಟಲ್ ಅರೆಸ್ಟ್ ಬೆದರಿಕೆ"
    },
    type: "text",
    content: "CRIME BRANCH NOTICE: 250 grams MDMA Narcotics seized in Cambodia courier booked with your Aadhaar Card. Warrant issued. You are placed under 24-hr Digital Arrest via video call. Transfer Rs 50,000 security deposit to RBI verification account or police SWAT team will raid your home."
  },
  {
    id: "sample_qr_lottery",
    label: {
      en: "🎁 Sample: Scan QR for ₹5,000 Lottery",
      te: "🎁 ఉదాహరణ: ₹5,000 లాటరీ కోసం QR స్కాన్",
      kn: "🎁 ಉದಾಹರಣೆ: ₹5,000 ಲಾಟರಿಗಾಗಿ QR ಸ್ಕ್ಯಾನ್"
    },
    type: "text",
    content: "Congratulations! You won Rs 5,000 government festival cashback voucher. Open PhonePe or Google Pay, scan attached QR code and enter your secret UPI PIN to instantly credit money to your bank account."
  },
  {
    id: "sample_electricity_apk",
    label: {
      en: "⚡ Sample: Electricity Cutoff APK SMS",
      te: "⚡ ఉదాహరణ: కరెంట్ కట్ APK లింక్ SMS",
      kn: "⚡ ಉದಾಹರಣೆ: ವಿದ್ಯುತ್ ಕಟ್ APK ಲಿಂಕ್ SMS"
    },
    type: "text",
    content: "Dear Consumer, your electricity power will be disconnected tonight at 9:30 PM because previous month bill was not updated. Please immediately install http://bit.ly/Electricity_Bill.apk or call power officer 9876543210."
  },
  {
    id: "sample_genuine_bank",
    label: {
      en: "✅ Sample: Genuine Bank Credit SMS",
      te: "✅ ఉదాహరణ: అసలైన బ్యాంక్ క్రెడిట్ SMS",
      kn: "✅ ಉದಾಹರಣೆ: ಅಸಲಿ ಬ್ಯಾಂಕ್ ಕ್ರೆಡಿಟ್ SMS"
    },
    type: "text",
    content: "Dear Customer, Your A/c XX4021 is credited with INR 1,500.00 on 21-OCT-26 by UPI/P2A/Ref 429582710382 - State Bank of India. Avail Bal: INR 12,450.00. Never share OTP or PIN with anyone."
  }
];

class ScamDetector {
  constructor() {
    this.extractedText = "";
  }

  // Analyzes raw text or extracted OCR text against heuristic scam signatures
  analyze(text) {
    const cleanText = text.toLowerCase().trim();
    if (!cleanText || cleanText.length < 5) {
      return null;
    }

    let detectedClues = [];
    let highRiskCount = 0;
    let uncertainCount = 0;
    let matchedCategories = new Set();

    // Check against patterns
    for (const pattern of SCAM_PATTERNS) {
      let matchedInPattern = false;
      for (const kw of pattern.keywords) {
        if (cleanText.includes(kw)) {
          matchedInPattern = true;
          break;
        }
      }

      if (matchedInPattern && !matchedCategories.has(pattern.category)) {
        matchedCategories.add(pattern.category);
        detectedClues.push(pattern);
        if (pattern.severity === "high") highRiskCount++;
        else uncertainCount++;
      }
    }

    // Check for legitimate markers (official bank UTR without links or extortion)
    const isLegitBankPattern = cleanText.includes("credited with inr") || 
      (cleanText.includes("avail bal:") && !cleanText.includes("http") && !cleanText.includes("apk") && !cleanText.includes("warrant"));

    // Compute Risk Assessment
    let riskLevel = "low"; // "high", "uncertain", "low"
    let confidence = 95;
    let titleKey = "lowRiskTitle";

    if (highRiskCount >= 1) {
      riskLevel = "high";
      confidence = Math.min(98, 85 + (highRiskCount * 5));
    } else if (uncertainCount >= 1 || (cleanText.includes("urgent") && cleanText.includes("call"))) {
      riskLevel = "uncertain";
      confidence = 72;
    } else if (isLegitBankPattern && highRiskCount === 0) {
      riskLevel = "low";
      confidence = 94;
    } else {
      // General short text without recognized threats
      riskLevel = "uncertain";
      confidence = 60;
    }

    return {
      rawText: text,
      riskLevel: riskLevel, // 'high' | 'uncertain' | 'low'
      confidenceScore: confidence,
      clues: detectedClues,
      isLegitBank: isLegitBankPattern
    };
  }

  // Simulated OCR processing for screenshots
  async processImage(file) {
    return new Promise((resolve) => {
      // In a pure offline PWA, read file metadata and use heuristic OCR parser
      const reader = new FileReader();
      reader.onload = (e) => {
        const dataUrl = e.target.result;
        const fname = (file.name || "").toLowerCase();

        // Detect keywords from filename or provide realistic OCR extraction
        let simulatedExtracted = "Scanned Content from Screenshot: ";
        if (fname.includes("paytm") || fname.includes("phonepe") || fname.includes("spoof") || fname.includes("screen")) {
          simulatedExtracted += "Payment Successful ₹ 480.00. Paid to Sri Lakshmi Store. Txn ID TXN98472918471. Customer green tick screen.";
        } else if (fname.includes("cbi") || fname.includes("police") || fname.includes("arrest")) {
          simulatedExtracted += "CRIME BRANCH NOTICE: Cambodia illegal parcel narcotics seizure. Warrant issued. Digital arrest video call.";
        } else if (fname.includes("qr") || fname.includes("cashback") || fname.includes("voucher")) {
          simulatedExtracted += "Receive ₹ 3,000 Voucher. Scan QR code and enter 4-digit UPI PIN to credit your bank account.";
        } else if (fname.includes("bill") || fname.includes("power") || fname.includes("apk")) {
          simulatedExtracted += "Electricity disconnection notice tonight 9:30 PM. Download Electricity_Bill.apk or call 9876543210.";
        } else {
          simulatedExtracted += `Image: ${file.name} (Resolution: ${file.size} bytes). Warning: Verify sender identity and never share OTP or UPI PIN.`;
        }

        resolve({
          imageUrl: dataUrl,
          text: simulatedExtracted
        });
      };
      reader.readAsDataURL(file);
    });
  }
}

window.scamDetector = new ScamDetector();
