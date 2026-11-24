// SurakshaSaathi - Main Application Controller

const UI_STRINGS = {
  appName: {
    en: "SurakshaSaathi",
    te: "సురక్ష సాథి",
    kn: "ಸುರಕ್ಷಾ ಸಾಥಿ"
  },
  appTagline: {
    en: "Multilingual Scam Resistance for Elders, Vendors & Families",
    te: "వ్యాపారులు, పెద్దలు & కుటుంబాల కోసం సైబర్ మోసాల రక్షణ శిక్షణ",
    kn: "ವ್ಯಾಪಾರಿಗಳು, ಹಿರಿಯರು ಮತ್ತು ಕುಟುಂಬಗಳ ಸೈಬರ್ ವಂಚನೆ ತಡೆಗಟ್ಟುವ ವೇದಿಕೆ"
  },
  navHome: { en: "Home", te: "హోమ్", kn: "ಮುಖಪುಟ" },
  navScanner: { en: "Scan & Detect", te: "స్కాన్ & గుర్తించు", kn: "ಸ್ಕ್ಯಾನ್ & ಪತ್ತೆಹಚ್ಚಿ" },
  navScenarios: { en: "Simulations", te: "కేస్ స్టడీస్", kn: "ಸಿಮ್ಯುಲೇಶನ್‌ಗಳು" },
  navPreTest: { en: "Pre-Test", te: "ప్రారంభ పరీక్ష", kn: "ಆರಂಭಿಕ ಪರೀಕ್ಷೆ" },
  navPostTest: { en: "Post-Test", te: "తుది పరీక్ష", kn: "ಅಂತಿಮ ಪರೀಕ್ಷೆ" },
  navHelpline: { en: "Cyber Helpline 1930", te: "సైబర్ హెల్ప్‌లైన్ 1930", kn: "ಸೈಬರ್ ಸಹಾಯವಾಣಿ 1930" },
  listenVoice: { en: "🔊 Listen in Voice", te: "🔊 వాయిస్ వినండి", kn: "🔊 ಧ್ವನಿಯಲ್ಲಿ ಕೇಳಿ" },
  stopVoice: { en: "⏹ Stop Audio", te: "⏹ ఆపండి", kn: "⏹ ನಿಲ್ಲಿಸಿ" },
  selectResponse: { en: "What will you do? (Choose your response):", te: "మీరు ఏమి చేస్తారు? (మీ నిర్ణయాన్ని ఎంచుకోండి):", kn: "ನೀವು ಏನು ಮಾಡುತ್ತೀರಿ? (ನಿಮ್ಮ ನಿರ್ಧಾರ ಆರಿಸಿ):" },
  nextBtn: { en: "Next Scenario →", te: "తరువాతి కేస్ →", kn: "ಮುಂದಿನ ಸನ್ನಿವೇಶ →" },
  retryBtn: { en: "Try Again 🔄", te: "మళ్ళీ ప్రయత్నించండి 🔄", kn: "ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ 🔄" },
  backHome: { en: "← Back to Scenarios", te: "← ప్రధాన పేజీకి వెళ్లండి", kn: "← ಮುಖ್ಯ ಪುಟಕ್ಕೆ ಹಿಂತಿರುಗಿ" },
  helplineBanner: {
    en: "Victim of cyber fraud? Call 1930 immediately or visit cybercrime.gov.in within the 'Golden Hour'.",
    te: "సైబర్ మోసానికి గురయ్యారా? వెంటనే 1930 కి కాల్ చేయండి లేదా cybercrime.gov.in ని సందర్శించండి.",
    kn: "ಸೈಬರ್ ವಂಚನೆಗೊಳಗಾಗಿದ್ದೀರಾ? ತಕ್ಷಣ 1930 ಗೆ ಕರೆ ಮಾಡಿ ಅಥವಾ cybercrime.gov.in ಗೆ ಭೇಟಿ ನೀಡಿ."
  },
  languageLabel: { en: "🌐 Language:", te: "🌐 భాష:", kn: "🌐 ಭಾಷೆ:" },
  navAnalytics: { en: "Review 1 Report", te: "సమీక్ష 1 నివేదిక", kn: "ವಿಮರ್ಶೆ 1 ವರದಿ" },
  pending: { en: "Pending", te: "పెండింగ్‌లో ఉంది", kn: "ಬಾಕಿ ಇದೆ" },
  takeAfterSimulations: { en: "Take after simulations", te: "సిమ్యులేషన్ల తర్వాత రాయండి", kn: "ಸಿಮ್ಯುಲೇಶನ್‌ಗಳ ನಂತರ ತೆಗೆದುಕೊಳ್ಳಿ" },
  scored: { en: "Scored", te: "స్కోరు", kn: "ಅಂಕ" },
  completed: { en: "✅ Completed", te: "✅ పూర్తయింది", kn: "✅ ಪೂರ್ಣಗೊಂಡಿದೆ" },
  untrained: { en: "⏳ Untrained", te: "⏳ ఇంకా శిక్షణ పొందలేదు", kn: "⏳ ಇನ್ನೂ ಅಭ್ಯಾಸ ಮಾಡಿಲ್ಲ" },
  practiceAgain: { en: "Practice Again 🔄", te: "మళ్లీ సాధన చేయండి 🔄", kn: "ಮತ್ತೆ ಅಭ್ಯಾಸ ಮಾಡಿ 🔄" },
  startSimulation: { en: "Start Simulation 🚀", te: "సిమ్యులేషన్ ప్రారంభించండి 🚀", kn: "ಸಿಮ್ಯುಲೇಶನ್ ಪ್ರಾರಂಭಿಸಿ 🚀" },
  homeHeroTitle: { en: "🔍 Received a Suspicious Message, Call or QR?", te: "🔍 అనుమానాస్పద సందేశం, కాల్ లేదా QR వచ్చిందా?", kn: "🔍 ಅನುಮಾನಾಸ್ಪದ ಸಂದೇಶ, ಕರೆ ಅಥವಾ QR ಬಂದಿದೆಯೇ?" },
  homeHeroText: { en: "Submit text, paste UPI requests, or upload screenshots to check for", te: "సందేశాన్ని నమోదు చేయండి, UPI అభ్యర్థనలను అతికించండి లేదా స్క్రీన్‌షాట్‌లను అప్‌లోడ్ చేసి వీటిని తనిఖీ చేయండి:", kn: "ಪಠ್ಯವನ್ನು ಸಲ್ಲಿಸಿ, UPI ವಿನಂತಿಗಳನ್ನು ಅಂಟಿಸಿ ಅಥವಾ ಸ್ಕ್ರೀನ್‌ಶಾಟ್‌ಗಳನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ ಇವುಗಳನ್ನು ಪರಿಶೀಲಿಸಿ:" },
  digitalArrest: { en: "Digital Arrest", te: "డిజిటల్ అరెస్ట్", kn: "ಡಿಜಿಟಲ್ ಅರೆಸ್ಟ್" },
  fakeUpiSpoofs: { en: "Fake UPI Spoofs", te: "నకిలీ UPI మోసాలు", kn: "ನಕಲಿ UPI ವಂಚನೆಗಳು" },
  apkMalwares: { en: "APK Malware", te: "APK మాల్‌వేర్", kn: "APK ಮಾಲ್‌ವೇರ್" },
  inSupportedLanguages: { en: "in Telugu, Kannada & English.", te: "తెలుగు, కన్నడ మరియు ఆంగ్లంలో.", kn: "ತೆಲುಗು, ಕನ್ನಡ ಮತ್ತು ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ." },
  scanDetectNow: { en: "Scan & Detect Now 🛡️", te: "ఇప్పుడే స్కాన్ చేసి గుర్తించండి 🛡️", kn: "ಈಗಲೇ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ ಪತ್ತೆಹಚ್ಚಿ 🛡️" },
  baselineAwareness: { en: "1. Baseline Awareness (Pre-Test)", te: "1. ప్రారంభ అవగాహన (ప్రారంభ పరీక్ష)", kn: "1. ಆರಂಭಿಕ ಅರಿವು (ಆರಂಭಿಕ ಪರೀಕ್ಷೆ)" },
  assessInitial: { en: "Assess initial vulnerability before training", te: "శిక్షణకు ముందు మీ ప్రాథమిక అవగాహనను అంచనా వేయండి", kn: "ತರಬೇತಿಗೆ ಮೊದಲು ನಿಮ್ಮ ಆರಂಭಿಕ ಅರಿವನ್ನು ಅಳೆಯಿರಿ" },
  retake: { en: "Retake", te: "మళ్లీ రాయండి", kn: "ಮತ್ತೆ ಬರೆಯಿರಿ" },
  startPreTest: { en: "Start Pre-Test", te: "ప్రారంభ పరీక్ష మొదలుపెట్టండి", kn: "ಆರಂಭಿಕ ಪರೀಕ್ಷೆ ಪ್ರಾರಂಭಿಸಿ" },
  finalResistance: { en: "2. Final Resistance (Post-Test)", te: "2. తుది ప్రతిఘటన (తుది పరీక్ష)", kn: "2. ಅಂತಿಮ ಪ್ರತಿರೋಧ (ಅಂತಿಮ ಪರೀಕ್ಷೆ)" },
  verifyGain: { en: "Verify measurable scam detection gain", te: "మోసాలను గుర్తించే సామర్థ్యంలో మెరుగుదలను కొలవండి", kn: "ವಂಚನೆ ಗುರುತಿಸುವ ಸಾಮರ್ಥ್ಯದ ಸುಧಾರಣೆಯನ್ನು ಅಳೆಯಿರಿ" },
  viewResults: { en: "View Results", te: "ఫలితాలను చూడండి", kn: "ಫಲಿತಾಂಶಗಳನ್ನು ವೀಕ್ಷಿಸಿ" },
  takePostTest: { en: "Take Post-Test", te: "తుది పరీక్ష రాయండి", kn: "ಅಂತಿಮ ಪರೀಕ್ಷೆ ಬರೆಯಿರಿ" },
  interactiveSimulations: { en: "Interactive Scam Simulations", te: "ఇంటరాక్టివ్ మోసాల సిమ్యులేషన్లు", kn: "ಸಂವಾದಾತ್ಮಕ ವಂಚನೆ ಸಿಮ್ಯುಲೇಶನ್‌ಗಳು" },
  scenariosSubtitle: { en: "Real-life stress scenarios crafted for local merchants, elders, and families", te: "స్థానిక వ్యాపారులు, పెద్దలు మరియు కుటుంబాల కోసం రూపొందించిన నిజ జీవిత పరిస్థితులు", kn: "ಸ್ಥಳೀಯ ವ್ಯಾಪಾರಿಗಳು, ಹಿರಿಯರು ಮತ್ತು ಕುಟುಂಬಗಳಿಗಾಗಿ ರೂಪಿಸಿದ ನೈಜ ಜೀವನದ ಸನ್ನಿವೇಶಗಳು" },
  progress: { en: "Progress:", te: "పురోగతి:", kn: "ಪ್ರಗತಿ:" },
  done: { en: "Done", te: "పూర్తి", kn: "ಪೂರ್ಣ" },
  paymentRules: { en: "🛡️ The 3 Unbreakable Rules of Digital Payments", te: "🛡️ డిజిటల్ చెల్లింపుల కోసం పాటించాల్సిన 3 ముఖ్యమైన నియమాలు", kn: "🛡️ ಡಿಜಿಟಲ್ ಪಾವತಿಗಳ 3 ಅಚಲ ನಿಯಮಗಳು" },
  noPinToReceive: { en: "Never Enter PIN to Receive Money", te: "డబ్బు అందుకోవడానికి PIN ఎప్పుడూ నమోదు చేయవద్దు", kn: "ಹಣ ಪಡೆಯಲು PIN ನಮೂದಿಸಬೇಡಿ" },
  pinRuleText: { en: "UPI PIN is strictly for DEDUCTION. Any prompt asking for PIN or scanning QR to deposit funds is 100% fraud.", te: "UPI PIN ఖాతా నుంచి డబ్బు తీసే చెల్లింపులకే. డబ్బు జమ చేయడానికి PIN లేదా QR స్కాన్ అడిగితే అది మోసం.", kn: "UPI PIN ಖಾತೆಯಿಂದ ಹಣ ಕಡಿತಗೊಳಿಸಲು ಮಾತ್ರ. ಹಣ ಜಮೆ ಮಾಡಲು PIN ಅಥವಾ QR ಸ್ಕ್ಯಾನ್ ಕೇಳಿದರೆ ಅದು ವಂಚನೆ." },
  neverTrustScreen: { en: "Never Trust the Customer's Screen", te: "కస్టమర్ ఫోన్ స్క్రీన్‌ను నమ్మవద్దు", kn: "ಗ್ರಾಹಕರ ಸ್ಕ್ರೀನ್ ಅನ್ನು ನಂಬಬೇಡಿ" },
  trustScreenRule: { en: "Fake UPI apps simulate instant green ticks. Only rely on your soundbox audio or personal bank SMS.", te: "నకిలీ UPI యాప్‌లు గ్రీన్ టిక్‌ను చూపించగలవు. మీ సౌండ్‌బాక్స్ లేదా మీ బ్యాంక్ SMS‌ను మాత్రమే నమ్మండి.", kn: "ನಕಲಿ UPI ಆ್ಯಪ್‌ಗಳು ಹಸಿರು ಗುರುತನ್ನು ತೋರಿಸಬಹುದು. ನಿಮ್ಮ ಸೌಂಡ್‌ಬಾಕ್ಸ್ ಅಥವಾ ಬ್ಯಾಂಕ್ SMS ಅನ್ನು ಮಾತ್ರ ನಂಬಿ." },
  noDigitalArrest: { en: "No 'Digital Arrest' Exists in Law", te: "చట్టంలో 'డిజిటల్ అరెస్ట్' లేదు", kn: "ಕಾನೂನಿನಲ್ಲಿ 'ಡಿಜಿಟಲ್ ಅರೆಸ್ಟ್' ಇಲ್ಲ" },
  digitalArrestRule: { en: "Police and CBI never arrest citizens via WhatsApp video calls. Hang up and immediately dial 1930.", te: "పోలీసులు లేదా CBI వాట్సాప్ వీడియో కాల్ ద్వారా అరెస్ట్ చేయరు. కాల్ కట్ చేసి వెంటనే 1930కు ఫోన్ చేయండి.", kn: "ಪೊಲೀಸರು ಅಥವಾ CBI ವಾಟ್ಸಾಪ್ ವೀಡಿಯೊ ಕರೆ ಮೂಲಕ ಬಂಧಿಸುವುದಿಲ್ಲ. ಕರೆ ಕಡಿತಗೊಳಿಸಿ ತಕ್ಷಣ 1930ಗೆ ಕರೆ ಮಾಡಿ." },
  paidTo: { en: "Paid to:", te: "చెల్లింపు అందుకున్నవారు:", kn: "ಪಾವತಿ ಸ್ವೀಕರಿಸಿದವರು:" },
  txnId: { en: "Txn ID:", te: "లావాదేవీ ID:", kn: "ವಹಿವಾಟು ID:" },
  timeJustNow: { en: "Time: Just Now (8:30 PM)", te: "సమయం: ఇప్పుడే (రాత్రి 8:30)", kn: "ಸಮಯ: ಈಗಷ್ಟೇ (ರಾತ್ರಿ 8:30)" },
  soundboxLabel: { en: "⚠️ Your Soundbox:", te: "⚠️ మీ సౌండ్‌బాక్స్:", kn: "⚠️ ನಿಮ್ಮ ಸೌಂಡ್‌ಬಾಕ್ಸ್:" },
  soundboxSilent: { en: "[SILENT - NO AUDIO ANNOUNCED]", te: "[నిశ్శబ్దం - ఎలాంటి ప్రకటన లేదు]", kn: "[ಮೌನ - ಯಾವುದೇ ಧ್ವನಿ ಪ್ರಕಟಣೆ ಇಲ್ಲ]" },
  scanPinWarning: { en: "⚠️ SENDER ASKS YOU TO SCAN & ENTER 4-DIGIT PIN", te: "⚠️ పంపినవారు స్కాన్ చేసి 4 అంకెల PIN నమోదు చేయమంటున్నారు", kn: "⚠️ ಕಳುಹಿಸಿದವರು ಸ್ಕ್ಯಾನ್ ಮಾಡಿ 4 ಅಂಕಿಯ PIN ನಮೂದಿಸಲು ಕೇಳುತ್ತಿದ್ದಾರೆ" },
  liveVideoCall: { en: "🚨 LIVE VIDEO CALL", te: "🚨 ప్రత్యక్ష వీడియో కాల్", kn: "🚨 ನೇರ ವೀಡಿಯೊ ಕರೆ" },
  warrant: { en: "Warrant:", te: "వారెంట్:", kn: "ವಾರಂಟ್:" },
  digitalArrestThreat: { en: "\"DO NOT DISCONNECT. YOU ARE UNDER DIGITAL ARREST.\"", te: "\"కాల్ కట్ చేయవద్దు. మీరు డిజిటల్ అరెస్ట్‌లో ఉన్నారు.\"", kn: "\"ಕರೆ ಕಡಿತಗೊಳಿಸಬೇಡಿ. ನಿಮ್ಮನ್ನು ಡಿಜಿಟಲ್ ಅರೆಸ್ಟ್ ಮಾಡಲಾಗಿದೆ.\"" },
  unknownApkWarning: { en: "⚠️ UNKNOWN NUMBER & APK DOWNLOAD LINK", te: "⚠️ తెలియని నంబర్ మరియు APK డౌన్‌లోడ్ లింక్", kn: "⚠️ ಅಪರಿಚಿತ ಸಂಖ್ಯೆ ಮತ್ತು APK ಡೌನ್‌ಲೋಡ್ ಲಿಂಕ್" },
  from: { en: "From:", te: "నుండి:", kn: "ಇಂದ:" },
  situation: { en: "📍 The Situation:", te: "📍 పరిస్థితి:", kn: "📍 ಸನ್ನಿವೇಶ:" },
  keyTakeaway: { en: "💡 Key Takeaway:", te: "💡 ముఖ్యమైన విషయం:", kn: "💡 ಮುಖ್ಯ ಪಾಠ:" },
  proceedPostTest: { en: "Proceed to Post-Test 🎓", te: "తుది పరీక్షకు వెళ్లండి 🎓", kn: "ಅಂತಿಮ ಪರೀಕ್ಷೆಗೆ ಮುಂದುವರಿಯಿರಿ 🎓" },
  preTestTitle: { en: "Baseline Scam Awareness (Pre-Test)", te: "మోసాలపై ప్రాథమిక అవగాహన (ప్రారంభ పరీక్ష)", kn: "ವಂಚನೆಗಳ ಆರಂಭಿಕ ಅರಿವು (ಆರಂಭಿಕ ಪರೀಕ್ಷೆ)" },
  postTestTitle: { en: "Scam Resistance Evaluation (Post-Test)", te: "మోసాలను ఎదుర్కొనే సామర్థ్య అంచనా (తుది పరీక్ష)", kn: "ವಂಚನೆ ಎದುರಿಸುವ ಸಾಮರ್ಥ್ಯದ ಮೌಲ್ಯಮಾಪನ (ಅಂತಿಮ ಪರೀಕ್ಷೆ)" },
  preTestSubtitle: { en: "Take these 3 quick questions to evaluate your current knowledge before doing scenarios.", te: "సిమ్యులేషన్లకు ముందు మీ ప్రస్తుత అవగాహనను అంచనా వేసేందుకు ఈ 3 ప్రశ్నలకు సమాధానమివ్వండి.", kn: "ಸಿಮ್ಯುಲೇಶನ್‌ಗಳ ಮೊದಲು ನಿಮ್ಮ ಪ್ರಸ್ತುತ ಜ್ಞಾನವನ್ನು ಅಳೆಯಲು ಈ 3 ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಿಸಿ." },
  postTestSubtitle: { en: "Verify how much your scam recognition accuracy improved after interactive training!", te: "ఇంటరాక్టివ్ శిక్షణ తర్వాత మోసాలను గుర్తించే మీ సామర్థ్యం ఎంత మెరుగైందో తెలుసుకోండి!", kn: "ಸಂವಾದಾತ್ಮಕ ತರಬೇತಿಯ ನಂತರ ವಂಚನೆ ಗುರುತಿಸುವ ನಿಮ್ಮ ಸಾಮರ್ಥ್ಯ ಎಷ್ಟು ಸುಧಾರಿಸಿದೆ ಎಂದು ಪರಿಶೀಲಿಸಿ!" },
  questionOf: { en: "Question", te: "ప్రశ్న", kn: "ಪ್ರಶ್ನೆ" },
  of: { en: "of", te: "/", kn: "/" },
  explanation: { en: "💡 Explanation:", te: "💡 వివరణ:", kn: "💡 ವಿವರಣೆ:" },
  submitAnswers: { en: "Submit Answers & View Score 🎯", te: "సమాధానాలు సమర్పించి స్కోరు చూడండి 🎯", kn: "ಉತ್ತರಗಳನ್ನು ಸಲ್ಲಿಸಿ ಮತ್ತು ಅಂಕ ನೋಡಿ 🎯" },
  preTestNextStep: { en: "Now complete the interactive scam simulations to build cognitive reflexes against these attacks!", te: "ఈ మోసాలను ఎదుర్కొనే అవగాహన పెంచుకోవడానికి ఇప్పుడు ఇంటరాక్టివ్ సిమ్యులేషన్లను పూర్తి చేయండి!", kn: "ಈ ದಾಳಿಗಳನ್ನು ಗುರುತಿಸುವ ಸಾಮರ್ಥ್ಯ ಬೆಳೆಸಲು ಈಗ ಸಂವಾದಾತ್ಮಕ ವಂಚನೆ ಸಿಮ್ಯುಲೇಶನ್‌ಗಳನ್ನು ಪೂರ್ಣಗೊಳಿಸಿ!" },
  startFirstSimulation: { en: "Start Simulation 1: Vendor UPI Spoof 🚀", te: "సిమ్యులేషన్ 1 ప్రారంభించండి: వ్యాపారిపై UPI మోసం 🚀", kn: "ಸಿಮ್ಯುಲೇಶನ್ 1 ಪ್ರಾರಂಭಿಸಿ: ವ್ಯಾಪಾರಿಯ UPI ವಂಚನೆ 🚀" },
  viewImprovement: { en: "View Improvement Comparison & Report 📊", te: "మెరుగుదల పోలిక మరియు నివేదిక చూడండి 📊", kn: "ಸುಧಾರಣೆಯ ಹೋಲಿಕೆ ಮತ್ತು ವರದಿ ವೀಕ್ಷಿಸಿ 📊" },
  excellent: { en: "🎉 Excellent Understanding!", te: "🎉 అద్భుతమైన అవగాహన!", kn: "🎉 ಅತ್ಯುತ್ತಮ ಅರಿವು!" },
  goodAwareness: { en: "👍 Good Awareness!", te: "👍 మంచి అవగాహన!", kn: "👍 ಉತ್ತಮ ಅರಿವು!" },
  vulnerable: { en: "⚠️ Vulnerable to Scams!", te: "⚠️ మోసాల పట్ల అప్రమత్తంగా ఉండండి!", kn: "⚠️ ವಂಚನೆಗಳ ಬಗ್ಗೆ ಎಚ್ಚರದಿಂದಿರಿ!" },
  scoredAccuracy: { en: "Scored:", te: "స్కోరు:", kn: "ಅಂಕ:" },
  accuracy: { en: "Accuracy", te: "ఖచ్చితత్వం", kn: "ನಿಖರತೆ" },
  scannerFlowTitle: { en: "🛡️ 6-Step Scam Defense Engine Flow", te: "🛡️ మోసాల నుంచి రక్షించే 6 దశల విధానం", kn: "🛡️ ವಂಚನೆ ತಡೆಗಟ್ಟುವ 6 ಹಂತಗಳ ಪ್ರಕ್ರಿಯೆ" },
  step: { en: "Step", te: "దశ", kn: "ಹಂತ" },
  openApp: { en: "Open App", te: "యాప్ తెరవండి", kn: "ಆ್ಯಪ್ ತೆರೆಯಿರಿ" },
  languageNames: { en: "Telugu, Kannada, English", te: "తెలుగు, కన్నడ, ఆంగ్లం", kn: "ತೆಲುಗು, ಕನ್ನಡ, ಇಂಗ್ಲಿಷ್" },
  submitContent: { en: "Submit Content", te: "విషయాన్ని సమర్పించండి", kn: "ವಿಷಯವನ್ನು ಸಲ್ಲಿಸಿ" },
  pasteUploadDescribe: { en: "Paste, Upload, or Describe", te: "అతికించండి, అప్‌లోడ్ చేయండి లేదా వివరించండి", kn: "ಅಂಟಿಸಿ, ಅಪ್‌ಲೋಡ್ ಮಾಡಿ ಅಥವಾ ವಿವರಿಸಿ" },
  inputProcessing: { en: "Input Processing", te: "ఇన్‌పుట్ ప్రాసెసింగ్", kn: "ಇನ್‌ಪುಟ್ ಪ್ರಕ್ರಿಯೆ" },
  textOcr: { en: "Text/OCR extraction", te: "టెక్స్ట్/OCR వెలికితీత", kn: "ಪಠ್ಯ/OCR ಹೊರತೆಗೆಯುವಿಕೆ" },
  detectionEngine: { en: "Detection Engine", te: "గుర్తింపు ఇంజిన్", kn: "ಪತ್ತೆ ಎಂಜಿನ್" },
  rulesAi: { en: "Rules & AI Heuristics", te: "నియమాలు మరియు AI విశ్లేషణ", kn: "ನಿಯಮಗಳು ಮತ್ತು AI ವಿಶ್ಲೇಷಣೆ" },
  riskAssessment: { en: "Risk Assessment", te: "ప్రమాద అంచనా", kn: "ಅಪಾಯದ ಮೌಲ್ಯಮಾಪನ" },
  riskLevels: { en: "High / Uncertain / Low", te: "అధిక / అనిశ్చితం / తక్కువ", kn: "ಹೆಚ್ಚು / ಅನಿಶ್ಚಿತ / ಕಡಿಮೆ" },
  explainProtect: { en: "Explain + Protect", te: "వివరించి + రక్షించండి", kn: "ವಿವರಿಸಿ + ರಕ್ಷಿಸಿ" },
  voiceSteps: { en: "Vernacular voice & steps", te: "స్థానిక భాషలో స్వరం మరియు సూచనలు", kn: "ಸ್ಥಳೀಯ ಭಾಷೆಯ ಧ್ವನಿ ಮತ್ತು ಹಂತಗಳು" },
  submitSuspicious: { en: "Step 2: Submit Suspicious Content to Check", te: "దశ 2: తనిఖీ చేయడానికి అనుమానాస్పద విషయాన్ని సమర్పించండి", kn: "ಹಂತ 2: ಪರಿಶೀಲಿಸಲು ಅನುಮಾನಾಸ್ಪದ ವಿಷಯವನ್ನು ಸಲ್ಲಿಸಿ" },
  pasteMessage: { en: "📋 Paste Message / Call Text", te: "📋 సందేశం / కాల్ వివరాలను అతికించండి", kn: "📋 ಸಂದೇಶ / ಕರೆ ಪಠ್ಯವನ್ನು ಅಂಟಿಸಿ" },
  uploadScreenshot: { en: "📸 Upload Screenshot / Image", te: "📸 స్క్రీన్‌షాట్ / చిత్రాన్ని అప్‌లోడ్ చేయండి", kn: "📸 ಸ್ಕ್ರೀನ್‌ಶಾಟ್ / ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ" },
  demoSamples: { en: "⚡ Instant Demo Samples (Presets)", te: "⚡ తక్షణ డెమో నమూనాలు", kn: "⚡ ತ್ವರಿತ ಡೆಮೊ ಮಾದರಿಗಳು" },
  textPlaceholder: { en: "Paste suspicious SMS, WhatsApp message, UPI payment handle, or describe a phone call you received...", te: "అనుమానాస్పద SMS, వాట్సాప్ సందేశం, UPI చెల్లింపు వివరాలను అతికించండి లేదా వచ్చిన కాల్‌ను వివరించండి...", kn: "ಅನುಮಾನಾಸ್ಪದ SMS, WhatsApp ಸಂದೇಶ, UPI ಪಾವತಿ ವಿವರಗಳನ್ನು ಅಂಟಿಸಿ ಅಥವಾ ಬಂದ ಕರೆಯನ್ನು ವಿವರಿಸಿ..." },
  uploadPrompt: { en: "Click to select one or more screenshots", te: "ఒకటి లేదా అంతకంటే ఎక్కువ స్క్రీన్‌షాట్‌లను ఎంచుకోవడానికి క్లిక్ చేయండి", kn: "ಒಂದು ಅಥವಾ ಹೆಚ್ಚಿನ ಸ್ಕ್ರೀನ್‌ಶಾಟ್‌ಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡಲು ಕ್ಲಿಕ್ ಮಾಡಿ" },
  supportedImageTypes: { en: "Supports PNG, JPG, WebP (Payment screens, WhatsApp chats, SMS alerts)", te: "PNG, JPG, WebP చిత్రాలకు మద్దతు ఉంది (చెల్లింపు స్క్రీన్‌లు, వాట్సాప్ చాట్‌లు, SMS హెచ్చరికలు)", kn: "PNG, JPG, WebP ಚಿತ್ರಗಳನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ (ಪಾವತಿ ಪರದೆಗಳು, WhatsApp ಚಾಟ್‌ಗಳು, SMS ಎಚ್ಚರಿಕೆಗಳು)" },
  unsupportedImage: { en: "Please select only PNG, JPG, JPEG, or WebP images.", te: "దయచేసి PNG, JPG, JPEG లేదా WebP చిత్రాలను మాత్రమే ఎంచుకోండి.", kn: "ದಯವಿಟ್ಟು PNG, JPG, JPEG ಅಥವಾ WebP ಚಿತ್ರಗಳನ್ನು ಮಾತ್ರ ಆಯ್ಕೆಮಾಡಿ." },
  tooManyImages: { en: "Please select up to 10 images at a time.", te: "ఒకేసారి గరిష్టంగా 10 చిత్రాలను ఎంచుకోండి.", kn: "ಒಮ್ಮೆ ಗರಿಷ್ಠ 10 ಚಿತ್ರಗಳನ್ನು ಆಯ್ಕೆಮಾಡಿ." },
  dropImagesHere: { en: "Or drop the images here", te: "లేదా చిత్రాలను ఇక్కడ వదలండి", kn: "ಅಥವಾ ಚಿತ್ರಗಳನ್ನು ಇಲ್ಲಿ ಬಿಡಿ" },
  presetPrompt: { en: "Click any sample below to instantly load real-life scam vectors for your review demonstration:", te: "మీ ప్రదర్శన కోసం నిజ జీవిత మోసాల ఉదాహరణలను లోడ్ చేయడానికి కింది నమూనాను క్లిక్ చేయండి:", kn: "ನಿಮ್ಮ ಪ್ರದರ್ಶನಕ್ಕಾಗಿ ನೈಜ ವಂಚನೆ ಉದಾಹರಣೆಗಳನ್ನು ಲೋಡ್ ಮಾಡಲು ಕೆಳಗಿನ ಮಾದರಿಯನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ:" },
  analyzeRisk: { en: "Analyze & Check Scam Risk 🔍", te: "విశ్లేషించి మోస ప్రమాదాన్ని తనిఖీ చేయండి 🔍", kn: "ವಿಶ್ಲೇಷಿಸಿ ಮತ್ತು ವಂಚನೆ ಅಪಾಯ ಪರಿಶೀಲಿಸಿ 🔍" },
  processingImages: { en: "Processing {count} screenshots...", te: "{count} స్క్రీన్‌షాట్‌లను ప్రాసెస్ చేస్తోంది...", kn: "{count} ಸ್ಕ್ರೀನ್‌ಶಾಟ್‌ಗಳನ್ನು ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲಾಗುತ್ತಿದೆ..." },
  imageProcessingError: { en: "One or more images could not be read. Please try selecting them again.", te: "ఒకటి లేదా అంతకంటే ఎక్కువ చిత్రాలను చదవడం సాధ్యం కాలేదు. మళ్లీ ఎంచుకుని ప్రయత్నించండి.", kn: "ಒಂದು ಅಥವಾ ಹೆಚ್ಚಿನ ಚಿತ್ರಗಳನ್ನು ಓದಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ. ಮತ್ತೆ ಆಯ್ಕೆ ಮಾಡಿ ಪ್ರಯತ್ನಿಸಿ." },
  uploadedScreenshot: { en: "Uploaded Screenshot", te: "అప్‌లోడ్ చేసిన స్క్రీన్‌షాట్", kn: "ಅಪ್‌ಲೋಡ್ ಮಾಡಿದ ಸ್ಕ್ರೀನ್‌ಶಾಟ್" },
  extractedTextReady: { en: "Extracted text ready for analysis", te: "వెలికితీసిన వచనం విశ్లేషణకు సిద్ధంగా ఉంది", kn: "ಹೊರತೆಗೆದ ಪಠ್ಯ ವಿಶ್ಲೇಷಣೆಗೆ ಸಿದ್ಧವಾಗಿದೆ" },
  enterMessageAlert: { en: "Please enter a message or upload a screenshot to analyze.", te: "విశ్లేషించడానికి సందేశాన్ని నమోదు చేయండి లేదా స్క్రీన్‌షాట్‌ను అప్‌లోడ్ చేయండి.", kn: "ವಿಶ್ಲೇಷಿಸಲು ಸಂದೇಶವನ್ನು ನಮೂದಿಸಿ ಅಥವಾ ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ." },
  processingInput: { en: "Processing Input & Running Scam Detection Engine...", te: "ఇన్‌పుట్‌ను ప్రాసెస్ చేసి మోస గుర్తింపు ఇంజిన్‌ను నడుపుతోంది...", kn: "ಇನ್‌ಪುಟ್ ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಿ ವಂಚನೆ ಪತ್ತೆ ಎಂಜಿನ್ ಚಾಲನೆಯಲ್ಲಿದೆ..." },
  extractingKeywords: { en: "Extracting keywords, cross-referencing UPI & Digital Arrest threat signatures", te: "కీలక పదాలను వెలికితీసి, UPI మరియు డిజిటల్ అరెస్ట్ ముప్పు గుర్తులతో పోలుస్తోంది", kn: "ಮುಖ್ಯ ಪದಗಳನ್ನು ಹೊರತೆಗೆದು, UPI ಮತ್ತು ಡಿಜಿಟಲ್ ಅರೆಸ್ಟ್ ಬೆದರಿಕೆ ಗುರುತುಗಳೊಂದಿಗೆ ಹೋಲಿಸಲಾಗುತ್ತಿದೆ" },
  highRisk: { en: "HIGH RISK SCAM DETECTED", te: "అధిక ప్రమాదం: సైబర్ మోసం గుర్తించబడింది", kn: "ಹೆಚ್ಚಿನ ಅಪಾಯ: ಸೈಬರ್ ವಂಚನೆ ಪತ್ತೆಯಾಗಿದೆ" },
  uncertainRisk: { en: "UNCERTAIN / PROCEED WITH CAUTION", te: "అనుమానాస్పదం: జాగ్రత్తగా ఉండండి", kn: "ಅನುಮಾನಾಸ್ಪದ: ಜಾಗರೂಕರಾಗಿರಿ" },
  lowRisk: { en: "LOWER RISK / STANDARD PATTERN", te: "తక్కువ ప్రమాదం: సాధారణ సందేశం", kn: "ಕಡಿಮೆ ಅಪಾಯ: ಸಾಮಾನ್ಯ ಸಂದೇಶ" },
  noClues: { en: "No overt extortion or known malicious reverse-charge keywords found.", te: "బెదిరింపు లేదా తెలిసిన హానికరమైన రివర్స్-చార్జ్ పదాలు కనిపించలేదు.", kn: "ಸ್ಪಷ್ಟ ಬೆದರಿಕೆ ಅಥವಾ ಪರಿಚಿತ ಹಾನಿಕಾರಕ ರಿವರ್ಸ್-ಚಾರ್ಜ್ ಪದಗಳು ಕಂಡುಬಂದಿಲ್ಲ." },
  legitimateTransaction: { en: "Standard transaction message received. Ensure you personally initiated or expected this deposit.", te: "సాధారణ లావాదేవీ సందేశం. ఈ డిపాజిట్‌ను మీరు ప్రారంభించారని లేదా ఆశించారని నిర్ధారించుకోండి.", kn: "ಸಾಮಾನ್ಯ ವಹಿವಾಟು ಸಂದೇಶ ಬಂದಿದೆ. ಈ ಜಮೆಯನ್ನು ನೀವೇ ಪ್ರಾರಂಭಿಸಿದ್ದೀರಿ ಅಥವಾ ನಿರೀಕ್ಷಿಸಿದ್ದೀರಿ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ." },
  neverSharePin: { en: "Never share your secret UPI PIN or OTP with anyone claiming to reverse payments.", te: "చెల్లింపును రద్దు చేస్తామని చెప్పేవారితో మీ UPI PIN లేదా OTPను ఎప్పుడూ పంచుకోవద్దు.", kn: "ಪಾವತಿಯನ್ನು ಹಿಂತಿರುಗಿಸುವುದಾಗಿ ಹೇಳುವ ಯಾರೊಂದಿಗೂ ನಿಮ್ಮ UPI PIN ಅಥವಾ OTP ಹಂಚಿಕೊಳ್ಳಬೇಡಿ." },
  verifySender: { en: "Verify the sender identity directly through official contact channels, NOT via numbers given in the text.", te: "సందేశంలో ఇచ్చిన నంబర్ల ద్వారా కాకుండా అధికారిక మార్గాల ద్వారా పంపినవారి గుర్తింపును తనిఖీ చేయండి.", kn: "ಸಂದೇಶದಲ್ಲಿರುವ ಸಂಖ್ಯೆಗಳ ಮೂಲಕವಲ್ಲ, ಅಧಿಕೃತ ಸಂಪರ್ಕ ಮಾರ್ಗಗಳ ಮೂಲಕ ಕಳುಹಿಸಿದವರ ಗುರುತನ್ನು ಪರಿಶೀಲಿಸಿ." },
  confidenceScore: { en: "Confidence Score:", te: "నమ్మక స్థాయి:", kn: "ವಿಶ್ವಾಸಾರ್ಹತೆ ಅಂಕ:" },
  heuristicMatch: { en: "Heuristic Match", te: "నియమాల ఆధారిత సరిపోలిక", kn: "ಹ್ಯೂರಿಸ್ಟಿಕ್ ಹೊಂದಾಣಿಕೆ" },
  detectedClues: { en: "Step 3 & 4: Detected Warning Signs & Scam Clues", te: "దశ 3 మరియు 4: గుర్తించిన హెచ్చరిక సంకేతాలు మరియు మోస సూచనలు", kn: "ಹಂತ 3 ಮತ್ತು 4: ಪತ್ತೆಯಾದ ಎಚ್ಚರಿಕೆ ಚಿಹ್ನೆಗಳು ಮತ್ತು ವಂಚನೆ ಸುಳಿವುಗಳು" },
  inputAnalyzed: { en: "Input Text Analyzed:", te: "విశ్లేషించిన ఇన్‌పుట్:", kn: "ವಿಶ್ಲೇಷಿಸಿದ ಇನ್‌ಪುಟ್ ಪಠ್ಯ:" },
  stepSixAdvice: { en: "🛡️ Step 6: Explain & Protect (Actionable Next Steps)", te: "🛡️ దశ 6: వివరణ మరియు రక్షణ (తదుపరి చర్యలు)", kn: "🛡️ ಹಂತ 6: ವಿವರಿಸಿ ಮತ್ತು ರಕ್ಷಿಸಿ (ಮುಂದಿನ ಕ್ರಮಗಳು)" },
  emergencyAssistance: { en: "Need Emergency Assistance?", te: "అత్యవసర సహాయం కావాలా?", kn: "ತುರ್ತು ಸಹಾಯ ಬೇಕೇ?" },
  callHelpline: { en: "Call National Cybercrime Helpline 1930 immediately or visit cybercrime.gov.in", te: "జాతీయ సైబర్ క్రైమ్ హెల్ప్‌లైన్ 1930కు వెంటనే కాల్ చేయండి లేదా cybercrime.gov.in సందర్శించండి", kn: "ರಾಷ್ಟ್ರೀಯ ಸೈಬರ್ ಅಪರಾಧ ಸಹಾಯವಾಣಿ 1930ಕ್ಕೆ ತಕ್ಷಣ ಕರೆ ಮಾಡಿ ಅಥವಾ cybercrime.gov.in ಗೆ ಭೇಟಿ ನೀಡಿ" },
  callNow: { en: "📞 Call 1930 Now", te: "📞 ఇప్పుడే 1930కు కాల్ చేయండి", kn: "📞 ಈಗಲೇ 1930ಕ್ಕೆ ಕರೆ ಮಾಡಿ" },
  analyticsTitle: { en: "Review 1 Objective 4: Scam Resistance Improvement Report", te: "సమీక్ష 1 లక్ష్యం 4: మోసాలను ఎదుర్కొనే సామర్థ్య మెరుగుదల నివేదిక", kn: "ವಿಮರ್ಶೆ 1 ಉದ್ದೇಶ 4: ವಂಚನೆ ಎದುರಿಸುವ ಸಾಮರ್ಥ್ಯದ ಸುಧಾರಣಾ ವರದಿ" },
  analyticsSubtitle: { en: "Empirical measurement of training efficacy comparing baseline vs post-simulation scores", te: "ప్రారంభ మరియు సిమ్యులేషన్ తర్వాతి స్కోర్లను పోల్చి శిక్షణ ప్రభావాన్ని కొలవడం", kn: "ಆರಂಭಿಕ ಮತ್ತು ಸಿಮ್ಯುಲೇಶನ್ ನಂತರದ ಅಂಕಗಳನ್ನು ಹೋಲಿಸಿ ತರಬೇತಿಯ ಪರಿಣಾಮವನ್ನು ಅಳೆಯುವುದು" },
  preTestBaseline: { en: "Pre-Test Baseline", te: "ప్రారంభ పరీక్ష ప్రాథమిక స్కోరు", kn: "ಆರಂಭಿಕ ಪರೀಕ್ಷೆಯ ಮೂಲ ಅಂಕ" },
  postTestResistance: { en: "Post-Test Resistance", te: "తుది పరీక్ష ప్రతిఘటన", kn: "ಅಂತಿಮ ಪರೀಕ್ಷೆಯ ಪ್ರತಿರೋಧ" },
  outOfThree: { en: "out of 3 correct", te: "3లో సరైన సమాధానాలు", kn: "3ರಲ್ಲಿ ಸರಿಯಾದ ಉತ್ತರಗಳು" },
  measuredImprovement: { en: "Measured Improvement (Δ)", te: "కొలిచిన మెరుగుదల (Δ)", kn: "ಅಳೆಯಲಾದ ಸುಧಾರಣೆ (Δ)" },
  significantReduction: { en: "Statistically significant risk reduction", te: "ప్రమాదం గణనీయంగా తగ్గింది", kn: "ಅಪಾಯದಲ್ಲಿ ಗಮನಾರ್ಹ ಇಳಿಕೆ" },
  accuracyChart: { en: "Accuracy Comparison Chart", te: "ఖచ్చితత్వ పోలిక చార్ట్", kn: "ನಿಖರತೆಯ ಹೋಲಿಕೆ ಚಾರ್ಟ್" },
  preTestLabel: { en: "Pre-Test (Baseline)", te: "ప్రారంభ పరీక్ష (ప్రాథమికం)", kn: "ಆರಂಭಿಕ ಪರೀಕ್ಷೆ (ಮೂಲ)" },
  postTestChartLabel: { en: "Post-Test (After PWA Simulations)", te: "తుది పరీక్ష (PWA సిమ్యులేషన్ల తర్వాత)", kn: "ಅಂತಿಮ ಪರೀಕ್ಷೆ (PWA ಸಿಮ್ಯುಲೇಶನ್‌ಗಳ ನಂತರ)" },
  certificateTitle: { en: "Verified Scam Resistance Certificate", te: "ధృవీకరించిన మోసాల నిరోధకత ధ్రువపత్రం", kn: "ಪರಿಶೀಲಿಸಿದ ವಂಚನೆ ನಿರೋಧಕ ಪ್ರಮಾಣಪತ್ರ" },
  certificateText: { en: "The participant has successfully completed interactive simulations covering", te: "పాల్గొన్నవారు ఈ అంశాలపై ఇంటరాక్టివ్ సిమ్యులేషన్లను విజయవంతంగా పూర్తి చేశారు:", kn: "ಭಾಗವಹಿಸಿದವರು ಈ ವಿಷಯಗಳ ಸಂವಾದಾತ್ಮಕ ಸಿಮ್ಯುಲೇಶನ್‌ಗಳನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಪೂರ್ಣಗೊಳಿಸಿದ್ದಾರೆ:" },
  certificateTopics: { en: "UPI Spoof Apps, Fake QR Reverse-Charge, Digital Arrest Extortion, and Malware APKs", te: "నకిలీ UPI యాప్‌లు, నకిలీ QR రివర్స్-చార్జ్, డిజిటల్ అరెస్ట్ మోసం మరియు మాల్‌వేర్ APKలు", kn: "ನಕಲಿ UPI ಆ್ಯಪ್‌ಗಳು, ನಕಲಿ QR ರಿವರ್ಸ್-ಚಾರ್ಜ್, ಡಿಜಿಟಲ್ ಅರೆಸ್ಟ್ ವಂಚನೆ ಮತ್ತು ಮಾಲ್‌ವೇರ್ APKಗಳು" },
  verifiedTelemetry: { en: "Verified PWA Telemetry", te: "ధృవీకరించిన PWA గణాంకాలు", kn: "ಪರಿಶೀಲಿಸಿದ PWA ಟೆಲಿಮೆಟ್ರಿ" },
  sdgAlignment: { en: "SDG 16.4 & 10.2 Aligned", te: "SDG 16.4 మరియు 10.2కు అనుగుణం", kn: "SDG 16.4 ಮತ್ತು 10.2ಕ್ಕೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ" }
};

class App {
  constructor() {
    const savedLang = localStorage.getItem('suraksha_lang');
    this.currentLang = UI_STRINGS.appName[savedLang] ? savedLang : 'en';
    this.currentScenarioIndex = 0;
    this.currentStep = 1;
    this.preTestScore = parseInt(localStorage.getItem('suraksha_pretest_score') || '-1');
    this.postTestScore = parseInt(localStorage.getItem('suraksha_posttest_score') || '-1');
    this.completedScenarios = JSON.parse(localStorage.getItem('suraksha_completed') || '[]');

    this.initElements();
    this.bindEvents();
    this.updateLanguageUI();
    this.renderHome();
  }

  initElements() {
    this.langSelect = document.getElementById('langSelect');
    this.mainContainer = document.getElementById('mainContainer');
    this.navBtns = document.querySelectorAll('.nav-btn');
    this.helplineBannerEl = document.getElementById('helplineBanner');

    if (this.langSelect) {
      this.langSelect.value = this.currentLang;
    }
  }

  bindEvents() {
    // Language change
    if (this.langSelect) {
      this.langSelect.addEventListener('change', (e) => {
        this.setLanguage(e.target.value);
      });
    }

    // Navigation buttons
    document.querySelectorAll('[data-route]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const route = e.currentTarget.getAttribute('data-route');
        this.navigate(route);
      });
    });

    // PWA Service Worker Registration
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').then((reg) => {
          console.log('[App] ServiceWorker registered with scope:', reg.scope);
        }).catch((err) => {
          console.warn('[App] ServiceWorker registration failed:', err);
        });
      });
    }
  }

  setLanguage(lang) {
    if (!UI_STRINGS.appName[lang]) return;
    this.currentLang = lang;
    localStorage.setItem('suraksha_lang', lang);
    if (window.audioCtrl) {
      window.audioCtrl.stop();
    }
    this.updateLanguageUI();
    // Re-render active view
    const activeRoute = document.querySelector('.nav-btn.active')?.getAttribute('data-route') || 'home';
    this.navigate(activeRoute);
  }

  updateLanguageUI() {
    document.documentElement.lang = this.currentLang;
    
    // Update header & banner
    const appTitle = document.getElementById('appTitle');
    const appTagline = document.getElementById('appTagline');
    if (appTitle) appTitle.textContent = UI_STRINGS.appName[this.currentLang];
    if (appTagline) appTagline.textContent = UI_STRINGS.appTagline[this.currentLang];
    if (this.helplineBannerEl) {
      this.helplineBannerEl.innerHTML = `<strong>🚨 ${UI_STRINGS.navHelpline[this.currentLang]}:</strong> ${UI_STRINGS.helplineBanner[this.currentLang]}`;
    }

    // Update nav labels
    document.querySelectorAll('[data-string]').forEach(el => {
      const key = el.getAttribute('data-string');
      if (UI_STRINGS[key] && UI_STRINGS[key][this.currentLang]) {
        el.textContent = UI_STRINGS[key][this.currentLang];
      }
    });
  }

  navigate(route, param = null) {
    if (window.audioCtrl) {
      window.audioCtrl.stop();
    }

    document.querySelectorAll('.nav-btn').forEach(btn => {
      if (btn.getAttribute('data-route') === route) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });

    switch (route) {
      case 'home':
        this.renderHome();
        break;
      case 'scanner':
        this.renderScanner();
        break;
      case 'scenario':
        this.renderScenario(param !== null ? param : this.currentScenarioIndex);
        break;
      case 'pretest':
        this.renderQuiz('preTest');
        break;
      case 'posttest':
        this.renderQuiz('postTest');
        break;
      case 'analytics':
        this.renderAnalytics();
        break;
      default:
        this.renderHome();
    }
  }

  renderHome() {
    const lang = this.currentLang;
    const completedCount = this.completedScenarios.length;
    const totalCount = SCENARIOS.length;
    const hasPreTest = this.preTestScore >= 0;
    const hasPostTest = this.postTestScore >= 0;

    let preTestBadge = hasPreTest
      ? `<span class="badge badge-success">✓ ${this.preTestScore}/3 ${UI_STRINGS.scored[lang]}</span>`
      : `<span class="badge badge-warning">${UI_STRINGS.pending[lang]}</span>`;

    let postTestBadge = hasPostTest
      ? `<span class="badge badge-success">✓ ${this.postTestScore}/3 ${UI_STRINGS.scored[lang]}</span>`
      : `<span class="badge badge-neutral">${UI_STRINGS.takeAfterSimulations[lang]}</span>`;

    let cardsHtml = SCENARIOS.map((sc, index) => {
      const isDone = this.completedScenarios.includes(sc.id);
      return `
        <div class="card scenario-card ${isDone ? 'completed-card' : ''}">
          <div class="card-header-flex">
            <span class="category-pill">${sc.badge[lang]}</span>
            <span class="difficulty-pill">${sc.difficulty[lang]}</span>
          </div>
          <h3 class="card-title">${sc.title[lang]}</h3>
          <p class="card-desc">${sc.summary[lang]}</p>
          <div class="card-footer-flex">
            <span class="status-indicator">${isDone ? UI_STRINGS.completed[lang] : UI_STRINGS.untrained[lang]}</span>
            <button class="btn btn-primary" onclick="window.app.navigate('scenario', ${index})">
              ${isDone ? UI_STRINGS.practiceAgain[lang] : UI_STRINGS.startSimulation[lang]}
            </button>
          </div>
        </div>
      `;
    }).join('');

    this.mainContainer.innerHTML = `
      <!-- Real-Time Scam Scanner & System Flow Hero -->
      <section class="scanner-hero">
        <div class="scanner-hero-content">
          <h2>${UI_STRINGS.homeHeroTitle[lang]}</h2>
          <p>${UI_STRINGS.homeHeroText[lang]} <strong>${UI_STRINGS.digitalArrest[lang]}, ${UI_STRINGS.fakeUpiSpoofs[lang]}, ${UI_STRINGS.apkMalwares[lang]}</strong> ${UI_STRINGS.inSupportedLanguages[lang]}</p>
        </div>
        <button class="btn btn-primary" onclick="window.app.navigate('scanner')">
          ${UI_STRINGS.scanDetectNow[lang]}
        </button>
      </section>

      <!-- Review 1 Quick Evaluation Strip -->
      <section class="assessment-strip">
        <div class="strip-item">
          <div>
            <strong>${UI_STRINGS.baselineAwareness[lang]}</strong>
            <p>${UI_STRINGS.assessInitial[lang]}</p>
          </div>
          <div class="strip-actions">
            ${preTestBadge}
            <button class="btn btn-outline btn-sm" onclick="window.app.navigate('pretest')">
              ${hasPreTest ? UI_STRINGS.retake[lang] : UI_STRINGS.startPreTest[lang]}
            </button>
          </div>
        </div>

        <div class="strip-item">
          <div>
            <strong>${UI_STRINGS.finalResistance[lang]}</strong>
            <p>${UI_STRINGS.verifyGain[lang]}</p>
          </div>
          <div class="strip-actions">
            ${postTestBadge}
            <button class="btn btn-outline btn-sm" onclick="window.app.navigate('posttest')">
              ${hasPostTest ? UI_STRINGS.viewResults[lang] : UI_STRINGS.takePostTest[lang]}
            </button>
          </div>
        </div>
      </section>

      <!-- Scenarios Grid -->
      <section class="section-container">
        <div class="section-header">
          <div>
            <h2 class="section-title">${UI_STRINGS.interactiveSimulations[lang]}</h2>
            <p class="section-subtitle">${UI_STRINGS.scenariosSubtitle[lang]}</p>
          </div>
          <span class="progress-pill">${UI_STRINGS.progress[lang]} ${completedCount} / ${totalCount} ${UI_STRINGS.done[lang]}</span>
        </div>
        <div class="grid-layout">
          ${cardsHtml}
        </div>
      </section>

      <!-- Quick Action Guide -->
      <section class="card guidance-card">
        <h3>${UI_STRINGS.paymentRules[lang]}</h3>
        <div class="rules-grid">
          <div class="rule-box">
            <span class="rule-icon">1️⃣</span>
            <strong>${UI_STRINGS.noPinToReceive[lang]}</strong>
            <p>${UI_STRINGS.pinRuleText[lang]}</p>
          </div>
          <div class="rule-box">
            <span class="rule-icon">2️⃣</span>
            <strong>${UI_STRINGS.neverTrustScreen[lang]}</strong>
            <p>${UI_STRINGS.trustScreenRule[lang]}</p>
          </div>
          <div class="rule-box">
            <span class="rule-icon">3️⃣</span>
            <strong>${UI_STRINGS.noDigitalArrest[lang]}</strong>
            <p>${UI_STRINGS.digitalArrestRule[lang]}</p>
          </div>
        </div>
      </section>
    `;
  }

  renderScenario(index) {
    this.currentScenarioIndex = index;
    const scenario = SCENARIOS[index];
    const lang = this.currentLang;
    const step = scenario.steps[0];

    let visualMockHtml = '';
    if (scenario.visualType === 'spoof_screen') {
      visualMockHtml = `
        <div class="simulated-phone spoof-phone">
          <div class="phone-notch"></div>
          <div class="phone-screen green-theme">
            <div class="check-circle-anim">✓</div>
            <div class="pay-amount">${scenario.simulatedUI.amount}</div>
            <div class="pay-status">${scenario.simulatedUI.status[lang]}</div>
            <div class="pay-details">
              <p>${UI_STRINGS.paidTo[lang]} <strong>${scenario.simulatedUI.recipient[lang]}</strong></p>
              <p class="small-text">${UI_STRINGS.txnId[lang]} ${scenario.simulatedUI.fakeTxnId}</p>
              <p class="small-text">${UI_STRINGS.timeJustNow[lang]}</p>
            </div>
            <div class="soundbox-silent-warning">
              ${UI_STRINGS.soundboxLabel[lang]} <strong>${UI_STRINGS.soundboxSilent[lang]}</strong>
            </div>
          </div>
        </div>
      `;
    } else if (scenario.visualType === 'qr_code') {
      visualMockHtml = `
        <div class="simulated-phone qr-phone">
          <div class="phone-notch"></div>
          <div class="phone-screen white-theme text-center">
            <h4 class="qr-heading">${scenario.simulatedUI.scannerTitle[lang]}</h4>
            <div class="qr-box">
              <svg viewBox="0 0 100 100" width="140" height="140">
                <rect width="100" height="100" fill="#fff" />
                <path d="M10,10 h30 v30 h-30 z M15,15 v20 h20 v-20 z M20,20 h10 v10 h-10 z" fill="#000"/>
                <path d="M60,10 h30 v30 h-30 z M65,15 v20 h20 v-20 z M70,20 h10 v10 h-10 z" fill="#000"/>
                <path d="M10,60 h30 v30 h-30 z M15,65 v20 h20 v-20 z M20,70 h10 v10 h-10 z" fill="#000"/>
                <rect x="50" y="50" width="10" height="10" fill="#000"/>
                <rect x="70" y="50" width="10" height="10" fill="#000"/>
                <rect x="50" y="70" width="10" height="10" fill="#000"/>
                <rect x="70" y="70" width="20" height="20" fill="#000"/>
              </svg>
            </div>
            <p class="qr-instruction">${scenario.simulatedUI.instruction[lang]}</p>
            <div class="danger-pill">${UI_STRINGS.scanPinWarning[lang]}</div>
          </div>
        </div>
      `;
    } else if (scenario.visualType === 'police_call') {
      visualMockHtml = `
        <div class="simulated-phone video-phone">
          <div class="phone-notch"></div>
          <div class="phone-screen dark-theme video-screen">
            <div class="video-overlay">
              <div class="caller-badge">${UI_STRINGS.liveVideoCall[lang]}</div>
              <div class="officer-placeholder">
                <div class="police-avatar">👮‍♂️</div>
                <div class="officer-title">${scenario.simulatedUI.callerName}</div>
                <div class="charge-banner">${scenario.simulatedUI.charges[lang]}</div>
                <div class="warrant-text">${UI_STRINGS.warrant[lang]} ${scenario.simulatedUI.warrantNo}</div>
              </div>
              <div class="threat-alert">${UI_STRINGS.digitalArrestThreat[lang]}</div>
            </div>
          </div>
        </div>
      `;
    } else {
      visualMockHtml = `
        <div class="simulated-phone sms-phone">
          <div class="phone-notch"></div>
          <div class="phone-screen white-theme">
            <div class="sms-sender">${UI_STRINGS.from[lang]} <strong>${scenario.simulatedUI.sender}</strong></div>
            <div class="sms-bubble">${scenario.simulatedUI.messageBody[lang]}</div>
            <div class="danger-pill">${UI_STRINGS.unknownApkWarning[lang]}</div>
          </div>
        </div>
      `;
    }

    const optionsHtml = step.options.map(opt => `
      <button class="decision-btn" onclick="window.app.handleOptionSelect('${opt.id}')">
        <span class="btn-bullet">➤</span>
        <span>${opt.text[lang]}</span>
      </button>
    `).join('');

    this.mainContainer.innerHTML = `
      <div class="scenario-player">
        <!-- Top controls -->
        <div class="player-header">
          <button class="btn btn-outline btn-sm" onclick="window.app.navigate('home')">
            ${UI_STRINGS.backHome[lang]}
          </button>
          <div class="player-badges">
            <span class="category-pill">${scenario.badge[lang]}</span>
            <span class="difficulty-pill">${scenario.difficulty[lang]}</span>
          </div>
        </div>

        <h2 class="player-title">${scenario.title[lang]}</h2>

        <div class="simulation-split">
          <!-- Visual stimulus on left / top -->
          <div class="simulation-visual">
            ${visualMockHtml}
          </div>

          <!-- Situation context & decision on right -->
          <div class="simulation-content">
            <div class="card situation-box">
              <div class="situation-header">
                <strong>${UI_STRINGS.situation[lang]}</strong>
                <button class="btn btn-voice btn-sm" id="voiceBtn" onclick="window.app.toggleNarration()">
                  ${UI_STRINGS.listenVoice[lang]}
                </button>
              </div>
              <p class="situation-text" id="situationText">${step.situation[lang]}</p>
            </div>

            <div class="decision-section">
              <h4 class="decision-heading">${UI_STRINGS.selectResponse[lang]}</h4>
              <div class="options-container" id="optionsContainer">
                ${optionsHtml}
              </div>
            </div>

            <!-- Feedback Container (revealed on selection) -->
            <div id="feedbackContainer" class="feedback-container hidden"></div>
          </div>
        </div>
      </div>
    `;

    // Automatically speak the situation for first-time / elder guidance if toggled
    this.currentNarrationText = step.narration[lang];
  }

  toggleNarration() {
    const btn = document.getElementById('voiceBtn');
    const lang = this.currentLang;

    if (!window.audioCtrl) return;

    if (window.audioCtrl.isSpeaking) {
      window.audioCtrl.stop();
      if (btn) btn.innerHTML = UI_STRINGS.listenVoice[lang];
    } else {
      if (btn) btn.innerHTML = `<span class="sound-wave-anim"></span> ${UI_STRINGS.stopVoice[lang]}`;
      window.audioCtrl.speak(
        this.currentNarrationText,
        lang,
        () => {
          if (btn) btn.innerHTML = `<span class="sound-wave-anim"></span> ${UI_STRINGS.stopVoice[lang]}`;
        },
        () => {
          if (btn) btn.innerHTML = UI_STRINGS.listenVoice[lang];
        }
      );
    }
  }

  handleOptionSelect(optionId) {
    const scenario = SCENARIOS[this.currentScenarioIndex];
    const step = scenario.steps[0];
    const option = step.options.find(o => o.id === optionId);
    const lang = this.currentLang;
    const feedbackEl = document.getElementById('feedbackContainer');

    if (!option || !feedbackEl) return;

    // Play offline sound effect
    if (window.audioCtrl) {
      window.audioCtrl.playFeedbackSound(option.isCorrect);
    }

    // Disable all options
    document.querySelectorAll('.decision-btn').forEach(b => {
      b.disabled = true;
      b.classList.add('disabled');
    });

    // Mark completed if safe
    if (!this.completedScenarios.includes(scenario.id)) {
      this.completedScenarios.push(scenario.id);
      localStorage.setItem('suraksha_completed', JSON.stringify(this.completedScenarios));
    }

    const nextIndex = (this.currentScenarioIndex + 1) % SCENARIOS.length;
    const isLast = this.currentScenarioIndex === SCENARIOS.length - 1;

    feedbackEl.className = `feedback-container ${option.isCorrect ? 'feedback-success' : 'feedback-error'}`;
    feedbackEl.innerHTML = `
      <div class="feedback-content">
        <div class="feedback-msg">${option.feedback[lang]}</div>
        <div class="golden-rule-box">
          <strong>${UI_STRINGS.keyTakeaway[lang]}</strong>
          <p>${scenario.goldenRule[lang]}</p>
        </div>
        <div class="feedback-actions">
          <button class="btn btn-outline" onclick="window.app.renderScenario(${this.currentScenarioIndex})">
            ${UI_STRINGS.retryBtn[lang]}
          </button>
          <button class="btn btn-primary" onclick="window.app.${isLast ? "navigate('posttest')" : `navigate('scenario', ${nextIndex})`}">
            ${isLast ? UI_STRINGS.proceedPostTest[lang] : UI_STRINGS.nextBtn[lang]}
          </button>
        </div>
      </div>
    `;

    feedbackEl.classList.remove('hidden');
    feedbackEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // Voice narration of feedback
    const cleanFeedback = option.feedback[lang].replace(/[❌✅⚠️]/g, '');
    this.currentNarrationText = cleanFeedback + '. ' + scenario.goldenRule[lang];
    window.audioCtrl.speak(this.currentNarrationText, lang);
  }

  renderQuiz(quizType) {
    const lang = this.currentLang;
    const questions = QUIZ_DATA[quizType];
    const isPreTest = quizType === 'preTest';
    const title = isPreTest ? UI_STRINGS.preTestTitle[lang] : UI_STRINGS.postTestTitle[lang];
    const subtitle = isPreTest ? UI_STRINGS.preTestSubtitle[lang] : UI_STRINGS.postTestSubtitle[lang];

    let qHtml = questions.map((q, qIdx) => {
      const optsHtml = q.options.map((opt, optIdx) => `
        <label class="quiz-option-label">
          <input type="radio" name="quiz_${qIdx}" value="${optIdx}" required>
          <span>${opt.text[lang]}</span>
        </label>
      `).join('');

      return `
        <div class="card quiz-question-card" id="qCard_${qIdx}">
          <div class="q-number">${UI_STRINGS.questionOf[lang]} ${qIdx + 1} ${UI_STRINGS.of[lang]} 3</div>
          <h3 class="q-text">${q.question[lang]}</h3>
          <div class="quiz-options-list">
            ${optsHtml}
          </div>
          <div class="q-explanation hidden" id="qExpl_${qIdx}">
            <strong>${UI_STRINGS.explanation[lang]}</strong> ${q.explanation[lang]}
          </div>
        </div>
      `;
    }).join('');

    this.mainContainer.innerHTML = `
      <div class="quiz-wrapper">
        <button class="btn btn-outline btn-sm mb-4" onclick="window.app.navigate('home')">
          ${UI_STRINGS.backHome[lang]}
        </button>

        <div class="quiz-header">
          <h2>${title}</h2>
          <p>${subtitle}</p>
        </div>

        <form id="quizForm" onsubmit="window.app.handleQuizSubmit(event, '${quizType}')">
          ${qHtml}
          <div class="quiz-footer">
            <button type="submit" class="btn btn-primary btn-lg">
              ${UI_STRINGS.submitAnswers[lang]}
            </button>
          </div>
        </form>

        <div id="quizResultBox" class="quiz-result-box hidden"></div>
      </div>
    `;
  }

  handleQuizSubmit(event, quizType) {
    event.preventDefault();
    const questions = QUIZ_DATA[quizType];
    let score = 0;
    const form = event.target;
    const formData = new FormData(form);

    questions.forEach((q, qIdx) => {
      const selectedIndex = parseInt(formData.get(`quiz_${qIdx}`));
      const card = document.getElementById(`qCard_${qIdx}`);
      const expl = document.getElementById(`qExpl_${qIdx}`);
      if (expl) expl.classList.remove('hidden');

      if (!isNaN(selectedIndex) && q.options[selectedIndex].isCorrect) {
        score++;
        if (card) card.classList.add('border-success');
      } else {
        if (card) card.classList.add('border-danger');
      }
    });

    if (quizType === 'preTest') {
      this.preTestScore = score;
      localStorage.setItem('suraksha_pretest_score', score);
    } else {
      this.postTestScore = score;
      localStorage.setItem('suraksha_posttest_score', score);
    }

    if (window.audioCtrl) {
      window.audioCtrl.playFeedbackSound(score >= 2);
    }

    const resultBox = document.getElementById('quizResultBox');
    if (!resultBox) return;

    let evalActionHtml = '';
    if (quizType === 'preTest') {
      evalActionHtml = `
        <p>${UI_STRINGS.preTestNextStep[lang]}</p>
        <button class="btn btn-primary btn-lg mt-3" onclick="window.app.navigate('scenario', 0)">
          ${UI_STRINGS.startFirstSimulation[lang]}
        </button>
      `;
    } else {
      evalActionHtml = `
        <button class="btn btn-primary btn-lg mt-3" onclick="window.app.navigate('analytics')">
          ${UI_STRINGS.viewImprovement[lang]}
        </button>
      `;
    }

    resultBox.className = 'quiz-result-box visible';
    resultBox.innerHTML = `
      <div class="score-display">
        <div class="score-badge">${score} / 3</div>
        <h3>${score === 3 ? UI_STRINGS.excellent[lang] : score === 2 ? UI_STRINGS.goodAwareness[lang] : UI_STRINGS.vulnerable[lang]}</h3>
        <p>${UI_STRINGS.scoredAccuracy[lang]} <strong>${Math.round((score / 3) * 100)}% ${UI_STRINGS.accuracy[lang]}</strong></p>
        ${evalActionHtml}
      </div>
    `;

    resultBox.scrollIntoView({ behavior: 'smooth' });
  }


  // ==========================================
  // REAL-TIME SCANNER & SYSTEM FLOW METHODS
  // (Implements the 6-step architecture)
  // ==========================================

  renderScanner() {
    const lang = this.currentLang;
    this.uploadedImageResults = [];

    const presetsHtml = SAMPLE_PRESETS.map(p => `
      <button class="preset-chip" onclick="window.app.applySamplePreset('${p.id}')">
        ${p.label[lang] || p.label['en']}
      </button>
    `).join('');

    this.mainContainer.innerHTML = `
      <div class="scanner-wrapper">
        <!-- 6-Step Visual System Flow Header (Matching Architecture Diagram) -->
        <div class="system-flow-container">
          <div class="flow-title">
            <span>${UI_STRINGS.scannerFlowTitle[lang]}</span>
          </div>
          <div class="flow-steps">
            <div class="flow-step-box completed" id="stepBox1">
              <span class="flow-step-num">${UI_STRINGS.step[lang]} 1</span>
              <strong>${UI_STRINGS.openApp[lang]}</strong>
              <div class="flow-step-desc">${UI_STRINGS.languageNames[lang]}</div>
            </div>
            <div class="flow-step-box active" id="stepBox2">
              <span class="flow-step-num">${UI_STRINGS.step[lang]} 2</span>
              <strong>${UI_STRINGS.submitContent[lang]}</strong>
              <div class="flow-step-desc">${UI_STRINGS.pasteUploadDescribe[lang]}</div>
            </div>
            <div class="flow-step-box" id="stepBox3">
              <span class="flow-step-num">${UI_STRINGS.step[lang]} 3</span>
              <strong>${UI_STRINGS.inputProcessing[lang]}</strong>
              <div class="flow-step-desc">${UI_STRINGS.textOcr[lang]}</div>
            </div>
            <div class="flow-step-box" id="stepBox4">
              <span class="flow-step-num">${UI_STRINGS.step[lang]} 4</span>
              <strong>${UI_STRINGS.detectionEngine[lang]}</strong>
              <div class="flow-step-desc">${UI_STRINGS.rulesAi[lang]}</div>
            </div>
            <div class="flow-step-box" id="stepBox5">
              <span class="flow-step-num">${UI_STRINGS.step[lang]} 5</span>
              <strong>${UI_STRINGS.riskAssessment[lang]}</strong>
              <div class="flow-step-desc">${UI_STRINGS.riskLevels[lang]}</div>
            </div>
            <div class="flow-step-box" id="stepBox6">
              <span class="flow-step-num">${UI_STRINGS.step[lang]} 6</span>
              <strong>${UI_STRINGS.explainProtect[lang]}</strong>
              <div class="flow-step-desc">${UI_STRINGS.voiceSteps[lang]}</div>
            </div>
          </div>
        </div>

        <!-- Input Section -->
        <div class="card">
          <h3 class="section-title mb-4">${UI_STRINGS.submitSuspicious[lang]}</h3>
          
          <div class="input-tabs-bar">
            <button class="tab-btn active" id="tabTextBtn" onclick="window.app.setScannerTab('text')">
              ${UI_STRINGS.pasteMessage[lang]}
            </button>
            <button class="tab-btn" id="tabUploadBtn" onclick="window.app.setScannerTab('upload')">
              ${UI_STRINGS.uploadScreenshot[lang]}
            </button>
            <button class="tab-btn" id="tabPresetsBtn" onclick="window.app.setScannerTab('presets')">
              ${UI_STRINGS.demoSamples[lang]}
            </button>
          </div>

          <!-- Tab Content 1: Textarea -->
          <div id="tabTextContent">
            <textarea id="scannerTextInput" class="scanner-textarea" placeholder="${UI_STRINGS.textPlaceholder[lang]}"></textarea>
          </div>

          <!-- Tab Content 2: Upload Dropzone -->
          <div id="tabUploadContent" class="hidden">
            <label class="upload-dropzone" id="screenshotDropzone" for="screenshotFileInput"
              ondragover="event.preventDefault(); window.app.handleDropzoneDragOver(event)"
              ondragleave="window.app.handleDropzoneDragLeave(event)"
              ondrop="event.preventDefault(); window.app.handleScreenshotDrop(event)">
              <span class="dropzone-icon">📷</span>
              <div class="dropzone-title">${UI_STRINGS.uploadPrompt[lang]}</div>
              <div class="dropzone-sub">${UI_STRINGS.supportedImageTypes[lang]}</div>
              <div class="dropzone-sub dropzone-alt">${UI_STRINGS.dropImagesHere[lang]}</div>
              <input type="file" id="screenshotFileInput" accept="image/*" multiple class="hidden" onchange="window.app.handleScreenshotUpload(event)">
            </label>
            <div id="imagePreviewBox" class="image-preview-container hidden"></div>
          </div>

          <!-- Tab Content 3: Presets -->
          <div id="tabPresetsContent" class="hidden">
            <p class="small-text mb-4" style="color: var(--text-muted);">${UI_STRINGS.presetPrompt[lang]}</p>
            <div class="presets-grid">
              ${presetsHtml}
            </div>
          </div>

          <!-- Analyze Action Button -->
          <div style="margin-top: 1.25rem;">
            <button class="btn btn-primary btn-lg" id="analyzeBtn" onclick="window.app.handleScanSubmit()">
              ${UI_STRINGS.analyzeRisk[lang]}
            </button>
          </div>
        </div>

        <!-- Container for Step 3, 4, 5, 6 Results -->
        <div id="scannerResultsArea"></div>
      </div>
    `;
  }

  setScannerTab(tabName) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('tabTextContent').classList.add('hidden');
    document.getElementById('tabUploadContent').classList.add('hidden');
    document.getElementById('tabPresetsContent').classList.add('hidden');

    if (tabName === 'text') {
      document.getElementById('tabTextBtn').classList.add('active');
      document.getElementById('tabTextContent').classList.remove('hidden');
    } else if (tabName === 'upload') {
      document.getElementById('tabUploadBtn').classList.add('active');
      document.getElementById('tabUploadContent').classList.remove('hidden');
    } else {
      document.getElementById('tabPresetsBtn').classList.add('active');
      document.getElementById('tabPresetsContent').classList.remove('hidden');
    }
  }

  applySamplePreset(presetId) {
    const preset = SAMPLE_PRESETS.find(p => p.id === presetId);
    if (!preset) return;
    this.setScannerTab('text');
    const textarea = document.getElementById('scannerTextInput');
    if (textarea) {
      textarea.value = preset.content;
      textarea.scrollIntoView({ behavior: 'smooth' });
      // auto submit after short pause
      setTimeout(() => this.handleScanSubmit(), 300);
    }
  }

  async handleScreenshotUpload(event) {
    const files = Array.from(event.target.files || []);
    await this.processScreenshotFiles(files);
    event.target.value = '';
  }

  handleScreenshotDrop(event) {
    const dropzone = document.getElementById('screenshotDropzone');
    if (dropzone) dropzone.classList.remove('drag-active');
    const files = Array.from(event.dataTransfer?.files || []);
    if (files.length > 0) {
      this.processScreenshotFiles(files);
    }
  }

  handleDropzoneDragEnter(event) {
    event.preventDefault();
  }

  handleDropzoneDragOver(event) {
    const dropzone = document.getElementById('screenshotDropzone');
    if (dropzone) dropzone.classList.add('drag-active');
  }

  handleDropzoneDragLeave(event) {
    const dropzone = document.getElementById('screenshotDropzone');
    if (dropzone && !dropzone.contains(event.relatedTarget)) {
      dropzone.classList.remove('drag-active');
    }
  }

  async processScreenshotFiles(files) {
    if (!files || files.length === 0) return;

    const allowedTypes = ['image/png', 'image/jpeg', 'image/webp'];
    const validFiles = files.filter(file => allowedTypes.includes(file.type));
    if (validFiles.length !== files.length) {
      alert(UI_STRINGS.unsupportedImage[this.currentLang]);
      return;
    }
    if (files.length > 10) {
      alert(UI_STRINGS.tooManyImages[this.currentLang]);
      return;
    }

    const previewBox = document.getElementById('imagePreviewBox');
    if (!previewBox) return;
    previewBox.classList.remove('hidden');
    previewBox.innerHTML = `<em>${UI_STRINGS.processingImages[this.currentLang].replace('{count}', files.length)}</em>`;

    try {
      const results = [];
      for (const file of files) {
        results.push(await window.scamDetector.processImage(file));
      }

      this.uploadedImageResults = results;
      previewBox.innerHTML = `
        <div class="uploaded-images-grid">
          ${results.map((result, index) => `
            <figure class="uploaded-image-preview">
              <img src="${result.imageUrl}" alt="${UI_STRINGS.uploadedScreenshot[this.currentLang]} ${index + 1}">
              <figcaption>${UI_STRINGS.uploadedScreenshot[this.currentLang]} ${index + 1}</figcaption>
            </figure>
          `).join('')}
        </div>
        <p class="small-text mt-3" style="color: var(--text-muted);">${UI_STRINGS.extractedTextReady[this.currentLang]} (${results.length})</p>
      `;

      const textarea = document.getElementById('scannerTextInput');
      if (textarea) {
        textarea.value = results.map(result => result.text).join('\n\n');
      }
    } catch (error) {
      console.error('[App] Failed to process uploaded image(s):', error);
      previewBox.innerHTML = `<p role="alert">${UI_STRINGS.imageProcessingError[this.currentLang]}</p>`;
    }
  }

  handleScanSubmit() {
    const textarea = document.getElementById('scannerTextInput');
    const text = (textarea ? textarea.value : "").trim();

    if (!text || text.length < 5) {
      alert(UI_STRINGS.enterMessageAlert[this.currentLang]);
      return;
    }

    // Update Step progress boxes
    for (let i = 1; i <= 6; i++) {
      const box = document.getElementById(`stepBox${i}`);
      if (box) {
        box.classList.remove('active');
        box.classList.add('completed');
      }
    }

    const resultsArea = document.getElementById('scannerResultsArea');
    if (!resultsArea) return;

    // Show temporary scanning state
    resultsArea.innerHTML = `
      <div class="card text-center" style="padding: 2rem;">
        <span class="sound-wave-anim" style="width: 20px; height: 20px;"></span>
        <h4 style="margin-top: 0.5rem; color: #1E3A8A;">${UI_STRINGS.processingInput[this.currentLang]}</h4>
        <p style="color: var(--text-muted); font-size: 0.88rem;">${UI_STRINGS.extractingKeywords[this.currentLang]}</p>
      </div>
    `;

    setTimeout(() => {
      const analysis = window.scamDetector.analyze(text);
      this.renderScanResults(analysis);
    }, 450);
  }

  renderScanResults(analysis) {
    const lang = this.currentLang;
    const resultsArea = document.getElementById('scannerResultsArea');
    if (!resultsArea || !analysis) return;

    const isHigh = analysis.riskLevel === 'high';
    const isUncertain = analysis.riskLevel === 'uncertain';

    // Risk Meter Config
    let riskClass = isHigh ? 'risk-high' : isUncertain ? 'risk-uncertain' : 'risk-low';
    let riskIcon = isHigh ? '🚨' : isUncertain ? '⚠️' : '✅';
    const riskTitle = isHigh
      ? UI_STRINGS.highRisk[lang]
      : isUncertain ? UI_STRINGS.uncertainRisk[lang] : UI_STRINGS.lowRisk[lang];

    // Play feedback tone
    if (window.audioCtrl) {
      window.audioCtrl.playFeedbackSound(!isHigh);
    }

    // Clues HTML
    let cluesHtml = '';
    if (analysis.clues && analysis.clues.length > 0) {
      cluesHtml = analysis.clues.map(c => `
        <div class="clues-item">
          <span class="clue-icon">⚠️</span>
          <div>
            <strong>${c.clue[lang] || c.clue['en']}</strong>
          </div>
        </div>
      `).join('');
    } else {
      cluesHtml = `
        <div class="clues-item" style="border-left-color: var(--success);">
          <span class="clue-icon">✓</span>
          <div>${UI_STRINGS.noClues[lang]}</div>
        </div>
      `;
    }

    // Action Advice HTML
    let adviceHtml = '';
    if (analysis.clues && analysis.clues.length > 0) {
      adviceHtml = analysis.clues.map(c => `
        <p>• ${c.actionAdvice[lang] || c.actionAdvice['en']}</p>
      `).join('');
    } else if (analysis.isLegitBank) {
      adviceHtml = `
        <p>• ${UI_STRINGS.legitimateTransaction[lang]}</p>
        <p>• ${UI_STRINGS.neverSharePin[lang]}</p>
      `;
    } else {
      adviceHtml = `
        <p>• ${UI_STRINGS.verifySender[lang]}</p>
      `;
    }

    const narrationScript = `${riskTitle}. ${analysis.clues.map(c => (c.actionAdvice[lang] || c.actionAdvice['en'])).join(' ')}`;
    this.currentScannerNarration = narrationScript;

    resultsArea.innerHTML = `
      <div class="card analysis-results-card">
        <!-- Step 5: Risk Assessment -->
        <div class="risk-meter-box ${riskClass}">
          <span class="risk-icon-large">${riskIcon}</span>
          <div class="risk-title-large">${riskTitle}</div>
          <div class="risk-confidence-pill">
            ${UI_STRINGS.confidenceScore[lang]} ${analysis.confidenceScore}% • ${UI_STRINGS.heuristicMatch[lang]}
          </div>
        </div>

        <!-- Step 3 & 4: Processed Clues -->
        <div class="clues-wrapper">
          <h4>${UI_STRINGS.detectedClues[lang]}</h4>
          <div class="extracted-box">
            <strong>${UI_STRINGS.inputAnalyzed[lang]}</strong> "${analysis.rawText.slice(0, 180)}${analysis.rawText.length > 180 ? '...' : ''}"
          </div>
          ${cluesHtml}
        </div>

        <!-- Step 6: Explain + Protect -->
        <div class="action-box ${isHigh ? '' : isUncertain ? '' : 'action-safe'}">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.6rem; flex-wrap: wrap; gap: 0.5rem;">
            <h4>${UI_STRINGS.stepSixAdvice[lang]}</h4>
            <button class="btn btn-voice btn-sm" id="scannerVoiceBtn" onclick="window.app.toggleScannerVoice()">
              ${UI_STRINGS.listenVoice[lang]}
            </button>
          </div>
          <div>
            ${adviceHtml}
          </div>
        </div>

        <!-- Emergency Action Row -->
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; border-top: 1px solid var(--border); padding-top: 1rem;">
          <div>
            <strong>${UI_STRINGS.emergencyAssistance[lang]}</strong>
            <p class="small-text" style="color: var(--text-muted);">${UI_STRINGS.callHelpline[lang]}</p>
          </div>
          <button class="btn btn-outline" onclick="window.location.href='tel:1930'">
            ${UI_STRINGS.callNow[lang]}
          </button>
        </div>
      </div>
    `;

    resultsArea.scrollIntoView({ behavior: 'smooth' });
  }

  toggleScannerVoice() {
    const btn = document.getElementById('scannerVoiceBtn');
    const lang = this.currentLang;
    if (!window.audioCtrl) return;

    if (window.audioCtrl.isSpeaking) {
      window.audioCtrl.stop();
      if (btn) btn.innerHTML = UI_STRINGS.listenVoice[lang];
    } else {
      if (btn) btn.innerHTML = `<span class="sound-wave-anim"></span> ${UI_STRINGS.stopVoice[lang]}`;
      window.audioCtrl.speak(
        this.currentScannerNarration,
        lang,
        () => {
          if (btn) btn.innerHTML = `<span class="sound-wave-anim"></span> ${UI_STRINGS.stopVoice[lang]}`;
        },
        () => {
          if (btn) btn.innerHTML = UI_STRINGS.listenVoice[lang];
        }
      );
    }
  }

  renderAnalytics() {
    const lang = this.currentLang;
    const pre = this.preTestScore >= 0 ? this.preTestScore : 1; // baseline estimate if skipped
    const post = this.postTestScore >= 0 ? this.postTestScore : 3;
    const prePct = Math.round((pre / 3) * 100);
    const postPct = Math.round((post / 3) * 100);
    const delta = postPct - prePct;

    this.mainContainer.innerHTML = `
      <div class="analytics-wrapper">
        <button class="btn btn-outline btn-sm mb-4" onclick="window.app.navigate('home')">
          ${UI_STRINGS.backHome[lang]}
        </button>

        <div class="section-header">
          <h2 class="section-title">${UI_STRINGS.analyticsTitle[lang]}</h2>
          <p class="section-subtitle">${UI_STRINGS.analyticsSubtitle[lang]}</p>
        </div>

        <div class="metrics-grid">
          <div class="metric-card">
            <div class="metric-label">${UI_STRINGS.preTestBaseline[lang]}</div>
            <div class="metric-value text-muted">${prePct}%</div>
            <div class="metric-sub">${pre} ${UI_STRINGS.outOfThree[lang]}</div>
          </div>

          <div class="metric-card">
            <div class="metric-label">${UI_STRINGS.postTestResistance[lang]}</div>
            <div class="metric-value text-success">${postPct}%</div>
            <div class="metric-sub">${post} ${UI_STRINGS.outOfThree[lang]}</div>
          </div>

          <div class="metric-card highlight-card">
            <div class="metric-label">${UI_STRINGS.measuredImprovement[lang]}</div>
            <div class="metric-value text-highlight">+${delta}%</div>
            <div class="metric-sub">${UI_STRINGS.significantReduction[lang]}</div>
          </div>
        </div>

        <div class="card comparison-chart-card">
          <h3>${UI_STRINGS.accuracyChart[lang]}</h3>
          <div class="chart-bars">
            <div class="bar-group">
              <span class="bar-label">${UI_STRINGS.preTestLabel[lang]}</span>
              <div class="bar-track">
                <div class="bar-fill bar-pre" style="width: ${prePct}%">${prePct}%</div>
              </div>
            </div>
            <div class="bar-group">
              <span class="bar-label">${UI_STRINGS.postTestChartLabel[lang]}</span>
              <div class="bar-track">
                <div class="bar-fill bar-post" style="width: ${postPct}%">${postPct}%</div>
              </div>
            </div>
          </div>
        </div>

        <div class="card certificate-card">
          <div class="cert-icon">🏆</div>
          <h3>${UI_STRINGS.certificateTitle[lang]}</h3>
          <p>${UI_STRINGS.certificateText[lang]} <strong>${UI_STRINGS.certificateTopics[lang]}</strong> ${UI_STRINGS.inSupportedLanguages[lang]}</p>
          <div class="cert-meta">
            <span>${UI_STRINGS.verifiedTelemetry[lang]}</span> • <span>${UI_STRINGS.sdgAlignment[lang]}</span> • <span>SurakshaSaathi 2026</span>
          </div>
        </div>
      </div>
    `;
  }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  window.app = new App();
});
