// SurakshaSaathi - Pre-Test and Post-Test Evaluation Engine
// Used for Review 1 Objective 4: Evaluating Scam Resistance Improvement

const QUIZ_DATA = {
  preTest: [
    {
      id: "q1",
      question: {
        en: "Do you need to enter your 4-digit or 6-digit UPI PIN when someone is sending money into your bank account?",
        te: "ఇతరులు మీ బ్యాంక్ ఖాతాకు డబ్బులు పంపుతున్నప్పుడు, మీరు మీ 4 లేదా 6 అంకెల UPI పిన్ కొట్టాలా?",
        kn: "ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ಯಾರಾದರೂ ಹಣ ಕಳುಹಿಸುವಾಗ, ನೀವು ನಿಮ್ಮ 4 ಅಥವಾ 6 ಅಂಕಿಗಳ UPI ಪಿನ್ ನಮೂದಿಸಬೇಕೇ?"
      },
      options: [
        { text: { en: "Yes, PIN is required to receive money", te: "అవును, డబ్బులు జమ కావడానికి పిన్ అవసరం", kn: "ಹೌದು, ಹಣ ಬರಲು ಪಿನ್ ಅಗತ್ಯವಿದೆ" }, isCorrect: false },
        { text: { en: "No, PIN is NEVER required to receive money", te: "లేదు, డబ్బులు అందుకోవడానికి పిన్ ఎప్పుడూ అవసరం లేదు", kn: "ಇಲ್ಲ, ಹಣ ಪಡೆಯಲು ಎಂದಿಗೂ ಪಿನ್ ಅಗತ್ಯವಿಲ್ಲ" }, isCorrect: true },
        { text: { en: "Only required for amounts above ₹1,000", te: "₹1,000 కంటే ఎక్కువ ఉన్నప్పుడు మాత్రమే", kn: "₹1,000 ಕ್ಕಿಂತ ಹೆಚ್ಚಿದ್ದರೆ ಮಾತ್ರ" }, isCorrect: false }
      ],
      explanation: {
        en: "UPI PIN is only used for authorizing withdrawals/debits. You NEVER enter a PIN to receive money.",
        te: "UPI పిన్ అనేది మీ ఖాతా నుండి డబ్బులు కట్ కావడానికి మాత్రమే. డబ్బులు తీసుకోవడానికి ఎప్పుడూ పిన్ అవసరం లేదు.",
        kn: "UPI ಪಿನ್ ನಿಮ್ಮ ಖಾತೆಯಿಂದ ಹಣ ಕಡಿತಗೊಳಿಸಲು ಮಾತ್ರ. ಹಣ ಪಡೆಯಲು ಎಂದಿಗೂ ಪಿನ್ ಅಗತ್ಯವಿಲ್ಲ."
      }
    },
    {
      id: "q2",
      question: {
        en: "A customer shows you a green 'Payment Successful' screen on their phone. When can you safely hand over the goods?",
        te: "కస్టమర్ తన ఫోన్‌లో 'పేమెంట్ సక్సెస్' గ్రీన్ స్క్రీన్ చూపించాడు. మీరు ఎప్పుడు సరుకులను సురక్షితంగా ఇవ్వవచ్చు?",
        kn: "ಗ್ರಾಹಕರು ತಮ್ಮ ಮೊಬೈಲ್‌ನಲ್ಲಿ 'Payment Successful' ಸ್ಕ್ರೀನ್ ತೋರಿಸಿದರು. ನೀವು ಯಾವಾಗ ಸಾಮಾನುಗಳನ್ನು ನೀಡಬಹುದು?"
      },
      options: [
        { text: { en: "As soon as customer shows the tick mark", te: "కస్టమర్ గ్రీన్ టిక్ చూపించిన వెంటనే", kn: "ಗ್ರಾಹಕರು ಹಸಿರು ಟಿಕ್ ತೋರಿಸಿದ ತಕ್ಷಣ" }, isCorrect: false },
        { text: { en: "Only after hearing soundbox voice or receiving official bank SMS", te: "సౌండ్‌బాక్స్ వాయిస్ విన్న తర్వాత లేదా బ్యాంక్ SMS చూసిన తర్వాత మాత్రమే", kn: "ಸೌಂಡ್‌ಬಾಕ್ಸ್ ಧ್ವನಿ ಕೇಳಿದ ನಂತರ ಅಥವಾ ಅಧಿಕೃತ ಬ್ಯಾಂಕ್ SMS ಬಂದ ನಂತರ ಮಾತ್ರ" }, isCorrect: true },
        { text: { en: "If customer shows their Aadhaar card", te: "కస్టమర్ తన ఆధార్ కార్డు చూపించినప్పుడు", kn: "ಗ್ರಾಹಕರು ಆಧಾರ್ ಕಾರ್ಡ್ ತೋರಿಸಿದರೆ" }, isCorrect: false }
      ],
      explanation: {
        en: "Spoof apps can generate identical fake payment screens without transferring money. Always rely on YOUR soundbox or bank balance.",
        te: "నకిలీ స్పూఫ్ యాప్స్ సులభంగా గ్రీన్ స్క్రీన్ సృష్టిస్తాయి. మీ సౌండ్‌బాక్స్ లేదా మీ బ్యాంక్ మెసేజ్ మాత్రమే ప్రామాణికం.",
        kn: "ನಕಲಿ ಆ್ಯಪ್‌ಗಳು ಸುಲಭವಾಗಿ ಹಸಿರು ಸ್ಕ್ರೀನ್ ಸೃಷ್ಟಿಸುತ್ತವೆ. ನಿಮ್ಮ ಸೌಂಡ್‌ಬಾಕ್ಸ್ ಅಥವಾ ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ಮೆಸೇಜ್ ಮಾತ್ರ ನಂಬಿ."
      }
    },
    {
      id: "q3",
      question: {
        en: "Can Police, CBI, or Customs place a citizen under 'Digital Arrest' via a WhatsApp video call?",
        te: "పోలీసులు లేదా సిబిఐ వాట్సాప్ వీడియో కాల్ ద్వారా భారత పౌరులను 'డిజిటల్ అరెస్ట్' చేయవచ్చా?",
        kn: "ಪೊಲೀಸರು ಅಥವಾ ಸಿಬಿಐ ವಾಟ್ಸಾಪ್ ವೀಡಿಯೊ ಕರೆಯ ಮೂಲಕ ನಾಗರಿಕರನ್ನು 'ಡಿಜಿಟಲ್ ಅರೆಸ್ಟ್' ಮಾಡಬಹುದೇ?"
      },
      options: [
        { text: { en: "Yes, it is a newly introduced legal procedure", te: "అవును, ఇది కొత్తగా వచ్చిన చట్టపరమైన పద్ధతి", kn: "ಹೌದು, ಇದು ಹೊಸ ಕಾನೂನು ಕ್ರಮವಾಗಿದೆ" }, isCorrect: false },
        { text: { en: "No! There is NO such law. It is 100% cyber extortion.", te: "లేదు! చట్టంలో అలాంటిదేమీ లేదు. ఇది నూటికి నూరు శాతం సైబర్ మోసం.", kn: "ಇಲ್ಲ! ಅಂತಹ ಯಾವುದೇ ಕಾನೂನು ಇಲ್ಲ. ಇದು 100% ಸೈಬರ್ ವಂಚನೆ." }, isCorrect: true },
        { text: { en: "Yes, if they wear an official police uniform", te: "యూనిఫామ్ వేసుకుని ఉంటే చేయవచ్చు", kn: "ಪೊಲೀಸ್ ಸಮವಸ್ತ್ರ ಧರಿಸಿದ್ದರೆ ಮಾಡಬಹುದು" }, isCorrect: false }
      ],
      explanation: {
        en: "Indian law does not recognize 'Digital Arrest'. Real law enforcement never interrogates or demands money over video calls.",
        te: "భారత చట్టంలో 'డిజిటల్ అరెస్ట్' అనే నియమమే లేదు. పోలీసులు ఎప్పుడూ వీడియో కాల్స్‌లో డబ్బులు అడగరు.",
        kn: "ಭಾರತೀಯ ಕಾನೂನಿನಲ್ಲಿ 'ಡಿಜಿಟಲ್ ಅರೆಸ್ಟ್' ಇಲ್ಲ. ಪೊಲೀಸರು ಎಂದಿಗೂ ವೀಡಿಯೊ ಕರೆಯಲ್ಲಿ ಹಣ ಕೇಳುವುದಿಲ್ಲ."
      }
    }
  ],

  postTest: [
    {
      id: "post_q1",
      question: {
        en: "A caller promises to send you ₹5,000 lottery winnings. He asks you to scan a QR code and enter your secret PIN. What will happen if you enter your PIN?",
        te: "ఒక వ్యక్తి మీకు ₹5,000 లాటరీ వచ్చిందని, QR స్కాన్ చేసి సీక్రెట్ పిన్ కొట్టమన్నాడు. మీరు పిన్ కొడితే ఏమి జరుగుతుంది?",
        kn: "ಒಬ್ಬ ವ್ಯಕ್ತಿ ನಿಮಗೆ ₹5,000 ಲಾಟರಿ ಬಂದಿದೆ ಎಂದು QR ಕೋಡ್ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ ಪಿನ್ ಹಾಕಲು ಹೇಳುತ್ತಾನೆ. ನೀವು ಪಿನ್ ಹಾಕಿದರೆ ಏನಾಗುತ್ತದೆ?"
      },
      options: [
        { text: { en: "₹5,000 will be credited into your account", te: "మీ ఖాతాలో ₹5,000 జమ అవుతాయి", kn: "ನಿಮ್ಮ ಖಾತೆಗೆ ₹5,000 ಜಮೆಯಾಗುತ್ತದೆ" }, isCorrect: false },
        { text: { en: "₹5,000 will be STOLEN and deducted from your account", te: "మీ ఖాతా నుండి ₹5,000 దొంగిలించబడి కట్ అవుతాయి", kn: "ನಿಮ್ಮ ಖಾತೆಯಿಂದಲೇ ₹5,000 ಕಡಿತವಾಗಿ ನಷ್ಟವಾಗುತ್ತದೆ" }, isCorrect: true },
        { text: { en: "The bank will call you to confirm", te: "బ్యాంక్ వారు నిర్ధారణ కోసం కాల్ చేస్తారు", kn: "ಬ್ಯಾಂಕ್‌ನವರು ಕರೆ ಮಾಡಿ ಖಚಿತಪಡಿಸುತ್ತಾರೆ" }, isCorrect: false }
      ],
      explanation: {
        en: "Entering a UPI PIN authorizes payment DEBIT, not credit. You will lose ₹5,000 instantly.",
        te: "UPI పిన్ కొడితే డబ్బులు కట్ అవుతాయి తప్ప జమ కావు.",
        kn: "UPI ಪಿನ್ ನಮೂದಿಸಿದರೆ ಖಾತೆಯಿಂದ ಹಣ ಕಡಿತವಾಗುತ್ತದೆ."
      }
    },
    {
      id: "post_q2",
      question: {
        en: "What should a local shopkeeper do when a customer claims their payment succeeded but the soundbox is silent?",
        te: "కస్టమర్ పేమెంట్ అయిపోయిందని చెప్పినప్పుడు, సౌండ్‌బాక్స్ శబ్దం చేయకపోతే దుకాణదారుడు ఏమి చేయాలి?",
        kn: "ಗ್ರಾಹಕರು ಹಣ ಪಾವತಿಸಿದ್ದೇನೆ ಎಂದಾಗ, ಸೌಂಡ್‌ಬಾಕ್ಸ್‌ನಲ್ಲಿ ಧ್ವನಿ ಬಾರದಿದ್ದರೆ ಅಂಗಡಿಯವರು ಏನು ಮಾಡಬೇಕು?"
      },
      options: [
        { text: { en: "Politely hold items until personal phone SMS or soundbox confirms", te: "సౌండ్‌బాక్స్ లేదా బ్యాంక్ SMS వచ్చే వరకు వస్తువులను వేచి ఉంచాలి", kn: "ಸೌಂಡ್‌ಬಾಕ್ಸ್ ಅಥವಾ ಬ್ಯಾಂಕ್ SMS ಬರುವವರೆಗೆ ಸಾಮಾನು ನೀಡದೆ ಕಾಯಬೇಕು" }, isCorrect: true },
        { text: { en: "Take a photo of customer's phone screen and let them go", te: "కస్టమర్ ఫోన్ ఫోటో తీసుకుని పంపించేయాలి", kn: "ಗ್ರಾಹಕರ ಮೊಬೈಲ್ ಫೋಟೋ ತೆಗೆದು ಕಳುಹಿಸಬೇಕು" }, isCorrect: false },
        { text: { en: "Assume network delay and give the goods", te: "నెట్‌వర్క్ లేట్ అనుకుని సరుకులు ఇచ్చేయాలి", kn: "ನೆಟ್‌ವರ್ಕ್ ತಡವಾಗಿದೆ ಎಂದು ಭಾವಿಸಿ ಸಾಮಾನು ಕೊಡಬೇಕು" }, isCorrect: false }
      ],
      explanation: {
        en: "Never trust customer screens. Wait for your own soundbox or bank app update.",
        te: "కస్టమర్ ఫోన్ నమ్మవద్దు. మీ సౌండ్‌బాక్స్ లేదా బ్యాంక్ మెసేజ్ మాత్రమే నిజం.",
        kn: "ಗ್ರಾಹಕರ ಮೊಬೈಲ್ ನಂಬಬೇಡಿ. ನಿಮ್ಮದೇ ಸೌಂಡ್‌ಬಾಕ್ಸ್ ಅಥವಾ ಬ್ಯಾಂಕ್ SMS ಖಚಿತವಾಗಿರಲಿ."
      }
    },
    {
      id: "post_q3",
      question: {
        en: "If you receive an intimidation call threatening arrest or demanding money, which toll-free national number should you call immediately?",
        te: "నకిలీ అరెస్ట్ బెదిరింపులు లేదా సైబర్ మోసాల కాల్స్ వస్తే, వెంటనే ఏ జాతీయ నంబర్‌కు కాల్ చేయాలి?",
        kn: "ನಕಲಿ ಅರೆಸ್ಟ್ ಅಥವಾ ಸೈಬರ್ ವಂಚನೆಯ ಕರೆ ಬಂದರೆ, ತಕ್ಷಣ ಯಾವ ರಾಷ್ಟ್ರೀಯ ಉಚಿತ ಸಂಖ್ಯೆಗೆ ಕರೆ ಮಾಡಬೇಕು?"
      },
      options: [
        { text: { en: "1930 (National Cyber Crime Helpline)", te: "1930 (జాతీయ సైబర్ క్రైమ్ హెల్ప్‌లైన్)", kn: "1930 (ರಾಷ್ಟ್ರೀಯ ಸೈಬರ್ ಅಪರಾಧ ಸಹಾಯವಾಣಿ)" }, isCorrect: true },
        { text: { en: "100 only", te: "100 మాత్రమే", kn: "100 ಮಾತ್ರ" }, isCorrect: false },
        { text: { en: "Send message on social media", te: "సోషల్ మీడియాలో మెసేజ్ చేయాలి", kn: "ಸಾಮಾಜಿಕ ಜಾಲತಾಣದಲ್ಲಿ ಸಂದೇಶ ಕಳುಹಿಸಬೇಕು" }, isCorrect: false }
      ],
      explanation: {
        en: "1930 is the Government of India's direct helpline to freeze fraudulent financial transactions and report cybercriminals.",
        te: "1930 అనేది మోసపోయిన డబ్బులను ఆపడానికి భారత ప్రభుత్వం ఏర్పాటు చేసిన అధికారిక సైబర్ హెల్ప్‌లైన్ నంబర్.",
        kn: "1930 ಭಾರತ ಸರ್ಕಾರದ ಅಧಿಕೃತ ಸೈಬರ್ ಸಹಾಯವಾಣಿಯಾಗಿದ್ದು, ವಂಚನೆಯ ಹಣವನ್ನು ತಡೆಯಲು ತಕ್ಷಣ ಕರೆ ಮಾಡಬೇಕು."
      }
    }
  ]
};
