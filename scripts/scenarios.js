// SurakshaSaathi - Vernacular Scam Scenarios Data
// Supports: English (en), Telugu (te), Kannada (kn)

const SCENARIOS = [
  {
    id: "upi_spoof",
    category: "Vendor Protection",
    badge: {
      en: "Local Vendor Scam",
      te: "వ్యాపారుల మోసం",
      kn: "ವ್ಯಾಪಾರಿಗಳ ವಂಚನೆ"
    },
    title: {
      en: "The Rush-Hour Fake UPI Screenshot",
      te: "రద్దీ సమయంలో నకిలీ UPI స్క్రీన్‌షాట్",
      kn: "ರಶ್ ಅವಧಿಯಲ್ಲಿ ನಕಲಿ UPI ಸ್ಕ್ರೀನ್‌ಶಾಟ್"
    },
    difficulty: {
      en: "High Risk",
      te: "అధిక ప్రమాదం",
      kn: "ಹೆಚ್ಚಿನ ಅಪಾಯ"
    },
    summary: {
      en: "A customer shows a green 'Payment Successful' screen in a hurry without waiting for soundbox confirmation.",
      te: "కస్టమర్ సౌండ్‌బాక్స్ లేదా మెసేజ్ వచ్చేలోపు ఆతురుతగా గ్రీన్ టిక్ చూపించి వెళ్లిపోవాలని చూస్తాడు.",
      kn: "ಗ್ರಾಹಕರು ಸೌಂಡ್‌ಬಾಕ್ಸ್ ಧ್ವನಿ ಬರುವ ಮೊದಲೇ ಗ್ರೀನ್ ಟಿಕ್ ಸ್ಕ್ರೀನ್ ತೋರಿಸಿ ಬೇಗ ಹೊರಡಲು ಯತ್ನಿಸುತ್ತಾರೆ."
    },
    visualType: "spoof_screen",
    simulatedUI: {
      appName: "Paytm Spoof / Fake UPI",
      amount: "₹ 480.00",
      recipient: {
        en: "Sri Lakshmi Kirana Store",
        te: "శ్రీ లక్ష్మి కిరాణా దుకాణం",
        kn: "ಶ್ರೀ ಲಕ್ಷ್ಮೀ ಕಿರಾಣಿ ಅಂಗಡಿ"
      },
      status: {
        en: "Successful",
        te: "విజయవంతం",
        kn: "ಯಶಸ್ವಿಯಾಗಿದೆ"
      },
      fakeTxnId: "TXN98472918471"
    },
    steps: [
      {
        stepId: 1,
        situation: {
          en: "It is 8:30 PM at your shop. A customer quickly buys items worth ₹480, shows a green 'Payment Successful ₹480' screen on their mobile, and says: 'Anna! My bus is leaving, see the screen tick mark. Please give the bag quickly!' Your UPI soundbox hasn't announced any payment yet.",
          te: "రాత్రి 8:30 గంటల సమయం. మీ దుకాణంలో ఒక కస్టమర్ ₹480 సరుకులు తీసుకుని, తన ఫోన్‌లో గ్రీన్ కలర్ 'పేమెంట్ సక్సెస్' స్క్రీన్ చూపిస్తూ: 'అన్నా! నా బస్సు వెళ్ళిపోతుంది, స్క్రీన్ చూడండి టిక్ పడింది. త్వరగా సంచి ఇవ్వండి!' అని అంటాడు. మీ సౌండ్‌బాక్స్ ఇంకా ఏ శబ్దం చేయలేదు.",
          kn: "ರಾತ್ರಿ 8:30 ಗಂಟೆಗೆ ನಿಮ್ಮ ಅಂಗಡಿಯಲ್ಲಿ ಒಬ್ಬ ಗ್ರಾಹಕ ₹480 ಮೌಲ್ಯದ ವಸ್ತುಗಳನ್ನು ಖರೀದಿಸಿ, ತನ್ನ ಮೊಬೈಲ್‌ನಲ್ಲಿ ಹಸಿರು ಬಣ್ಣದ 'Payment Successful' ಪರದೆಯನ್ನು ತೋರಿಸಿ: 'ಅಣ್ಣಾ! ನನ್ನ ಬಸ್ಸು ಹೊರಡುತ್ತಿದೆ, ಸ್ಕ್ರೀನ್ ನೋಡಿ ಹಣ ಕಳಿಸಿದ್ದೇನೆ. ಬೇಗ ಬ್ಯಾಗ್ ಕೊಡಿ!' ಎನ್ನುತ್ತಾನೆ. ನಿಮ್ಮ ಸೌಂಡ್‌ಬಾಕ್ಸ್‌ನಲ್ಲಿ ಯಾವುದೇ ಧ್ವನಿ ಬಂದಿಲ್ಲ."
        },
        narration: {
          en: "A customer shows a green payment successful screen on their phone and rushes you to hand over the items without waiting for soundbox confirmation. What will you do?",
          te: "కస్టమర్ తన ఫోన్‌లో పేమెంట్ సక్సెస్ అయిందని గ్రీన్ స్క్రీన్ చూపిస్తూ, బస్సు వెళ్ళిపోతుందని తొందరపెడుతున్నాడు. మీ సౌండ్‌బాక్స్ ఏమీ చెప్పలేదు. ఇప్పుడు మీరు ఏమి చేస్తారు?",
          kn: "ಗ್ರಾಹಕರು ಮೊಬೈಲ್‌ನಲ್ಲಿ ಹಣ ಪಾವತಿಯಾಗಿದೆ ಎಂದು ಹಸಿರು ಸ್ಕ್ರೀನ್ ತೋರಿಸಿ, ಬಸ್ಸು ಹೋಗುತ್ತಿದೆ ಎಂದು ಗಡಿಬಿಡಿ ಮಾಡುತ್ತಿದ್ದಾರೆ. ನಿಮ್ಮ ಸೌಂಡ್‌ಬಾಕ್ಸ್ ಇನ್ನೂ ಕೂಗಿಲ್ಲ. ನೀವು ಏನು ಮಾಡುತ್ತೀರಿ?"
        },
        options: [
          {
            id: "opt_trust",
            text: {
              en: "Trust the customer's screen and let them leave with the goods.",
              te: "కస్టమర్ స్క్రీన్ చూసి నమ్మి, సరుకులను ఇచ్చి పంపించేయండి.",
              kn: "ಗ್ರಾಹಕನ ಮೊಬೈಲ್ ಸ್ಕ್ರೀನ್ ನೋಡಿ ನಂಬಿ, ಸಾಮಾನುಗಳನ್ನು ಕೊಟ್ಟು ಕಳುಹಿಸಿ."
            },
            isCorrect: false,
            feedback: {
              en: "❌ FINANCIAL LOSS! The customer used a 'Spoof Payment App' (fake generator) that creates real-looking green tick screens without transferring a single rupee. You lost ₹480.",
              te: "❌ భారీ నష్టం! కస్టమర్ 'స్పూఫ్ పేమెంట్ యాప్' (నకిలీ స్క్రీన్‌షాట్ యాప్) ఉపయోగించాడు. అది ఒక్క రూపాయి కూడా పంపకుండా గ్రీన్ స్క్రీన్ సృష్టిస్తుంది. మీరు ₹480 నష్టపోయారు.",
              kn: "❌ ಆರ್ಥಿಕ ನಷ್ಟ! ಆ ಗ್ರಾಹಕ ನಕಲಿ 'ಸ್ಪೂಫ್ ಆ್ಯಪ್' ಬಳಸಿ ಕೇವಲ ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಸೃಷ್ಟಿಸಿದ್ದಾನೆ, ನೈಜವಾಗಿ ಯಾವುದೇ ಹಣ ಬಂದಿಲ್ಲ. ನೀವು ₹480 ಕಳೆದುಕೊಂಡಿರಿ."
            },
            nextStep: null
          },
          {
            id: "opt_verify",
            text: {
              en: "Hold the bag politely and verify on your own Soundbox, SMS, or Merchant App.",
              te: "సంచిని ఆపి, మీ స్వంత సౌండ్‌బాక్స్ శబ్దం లేదా మీ ఫోన్ బ్యాంక్ మెసేజ్ చూసేవరకు ఆగమని చెప్పండి.",
              kn: "ಸಾಮಾನು ತಡೆಹಿಡಿದು, ನಿಮ್ಮ ಸೌಂಡ್‌ಬಾಕ್ಸ್ ಧ್ವನಿ ಅಥವಾ ನಿಮ್ಮ ಮೊಬೈಲ್‌ನ ಬ್ಯಾಂಕ್ ಸಂದೇಶ ಪರಿಶೀಲಿಸುವಂತೆ ವಿನಂತಿಸಿ."
            },
            isCorrect: true,
            feedback: {
              en: "✅ EXCELLENT DEFENSE! In real commerce, the customer's screen is meaningless. Only trust YOUR Soundbox or YOUR bank balance confirmation. The fraudster ran away without paying.",
              te: "✅ సరైన నిర్ణయం! వ్యాపారంలో కస్టమర్ చూపించే స్క్రీన్‌ను ఎప్పుడూ నమ్మకూడదు. మీ సౌండ్‌బాక్స్ చెప్పే మాట లేదా మీ ఫోన్‌కు వచ్చే బ్యాంక్ SMS మాత్రమే నిజం. దొంగ పారిపోయాడు!",
              kn: "✅ ಅತ್ಯುತ್ತಮ ನಿರ್ಧಾರ! ವ್ಯಾಪಾರದಲ್ಲಿ ಗ್ರಾಹಕನ ಸ್ಕ್ರೀನ್ ಎಂದಿಗೂ ನಂಬಬಾರದು. ನಿಮ್ಮದೇ ಸೌಂಡ್‌ಬಾಕ್ಸ್ ಅಥವಾ ನಿಮ್ಮ ಬ್ಯಾಂಕ್ SMS ಬಂದರೆ ಮಾತ್ರ ಹಣ ಸಂದಾಯವಾದಂತೆ. ವಂಚಕ ಓಡಿಹೋದ!"
            },
            nextStep: null
          },
          {
            id: "opt_check_txn",
            text: {
              en: "Ask the customer to click 'Share Receipt' or refresh their screen in front of you.",
              te: "కస్టమర్‌ని మీ ముందే ఆ స్క్రీన్‌ను రిఫ్రెష్ చేసి 'షేర్ రసీదు' నొక్కమని అడగండి.",
              kn: "ಗ್ರಾಹಕರಿಗೆ ನಿಮ್ಮ ಎದುರೇ ಆ ಸ್ಕ್ರೀನ್ ರಿಫ್ರೆಶ್ ಮಾಡಿ 'ಶೇರ್ ರಶೀದಿ' ಒತ್ತುವಂತೆ ಕೇಳಿ."
            },
            isCorrect: true,
            feedback: {
              en: "⚠️ CLEVER INSPECTION! Fake spoof apps freeze or cannot show live transaction history. When asked to refresh, the customer got nervous and admitted they had not completed the payment.",
              te: "⚠️ తెలివైన ఆలోచన! నకిలీ యాప్‌లలో లైవ్ ట్రాన్సాక్షన్ హిస్టరీ ఉండదు. రిఫ్రెష్ చేయమనగానే అతను భయపడి నిజం ఒప్పుకున్నాడు.",
              kn: "⚠️ ಜಾಣ್ಮೆಯ ತಪಾಸಣೆ! ನಕಲಿ ಅಪ್ಲಿಕೇಶನ್‌ಗಳಲ್ಲಿ ಲೈವ್ ವಹಿವಾಟಿನ ವಿವರಗಳಿರುವುದಿಲ್ಲ. ರಿಫ್ರೆಶ್ ಮಾಡಲು ಹೇಳಿದಾಗ ಆತ ಗಾಬರಿಯಾಗಿ ವಂಚನೆ ಬಯಲಾಯಿತು."
            },
            nextStep: null
          }
        ]
      }
    ],
    goldenRule: {
      en: "Golden Rule: Never trust the customer's screen. Trust only YOUR Soundbox audio announcement or YOUR bank app balance.",
      te: "బంగారు నియమం: కస్టమర్ ఫోన్ స్క్రీన్‌ను ఎప్పుడూ నమ్మకండి. మీ సౌండ్‌బాక్స్ వాయిస్ లేదా మీ బ్యాంక్ మెసేజ్ మాత్రమే నమ్మండి.",
      kn: "ಬಂಗಾರದ ನಿಯಮ: ಗ್ರಾಹಕರ ಮೊಬೈಲ್ ಸ್ಕ್ರೀನ್ ಎಂದಿಗೂ ನಂಬಬೇಡಿ. ನಿಮ್ಮ ಸೌಂಡ್‌ಬಾಕ್ಸ್ ಅಥವಾ ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ಮೆಸೇಜ್ ಮಾತ್ರ ನಂಬಿ."
    }
  },

  {
    id: "qr_reverse_scam",
    category: "Elder & General User",
    badge: {
      en: "QR Reverse Charge Trap",
      te: "QR కోడ్ రివర్స్ మోసం",
      kn: "QR ಕೋಡ್ ರಿವರ್ಸ್ ವಂಚನೆ"
    },
    title: {
      en: "Scan QR Code to Receive Money",
      te: "డబ్బులు అందుకోవడానికి QR స్కాన్ చేయండి",
      kn: "ಹಣ ಪಡೆಯಲು QR ಕೋಡ್ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ"
    },
    difficulty: {
      en: "Very High Risk",
      te: "తీవ్ర ప్రమాదం",
      kn: "ಅತ್ಯಂತ ಅಪಾಯಕಾರಿ"
    },
    summary: {
      en: "A buyer on OLX or a caller claiming to send lottery/pension asks you to scan a QR code and enter your UPI PIN to 'receive' money.",
      te: "మీ ఖాతాలోకి పెన్షన్ లేదా బహుమతి డబ్బు జమ కావాలంటే QR కోడ్ స్కాన్ చేసి UPI పిన్ కొట్టమని మోసగాడు అడుగుతాడు.",
      kn: "ನಿಮ್ಮ ಖಾತೆಗೆ ಪಿಂಚಣಿ ಅಥವಾ ಬಹುಮಾನದ ಹಣ ಜಮಾ ಮಾಡಲು QR ಕೋಡ್ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ UPI ಪಿನ್ ನಮೂದಿಸಲು ಕೇಳುತ್ತಾರೆ."
    },
    visualType: "qr_code",
    simulatedUI: {
      scannerTitle: {
        en: "Receive ₹ 3,000 Voucher",
        te: "₹ 3,000 వోచర్‌ను పొందండి",
        kn: "₹ 3,000 ವೋಚರ್ ಪಡೆಯಿರಿ"
      },
      instruction: {
        en: "Scan & Enter UPI PIN to deposit ₹3,000 to your bank account",
        te: "మీ ఖాతాలో ₹3,000 జమ కావడానికి స్కాన్ చేసి UPI PIN నమోదు చేయండి",
        kn: "ನಿಮ್ಮ ಖಾತೆಗೆ ₹3,000 ಜಮೆಯಾಗಲು ಸ್ಕ್ಯಾನ್ ಮಾಡಿ UPI PIN ನಮೂದಿಸಿ"
      },
      qrLabel: "UPI://PAY?PA=SCAMMER99@OKAXIS&AM=3000"
    },
    steps: [
      {
        stepId: 1,
        situation: {
          en: "You get a call from someone claiming to be from the Welfare Department: 'Sir, your ₹3,000 senior citizen assistance fund is approved! We have sent a QR code to your WhatsApp. Just open PhonePe/GPay, scan this QR, and enter your 4-digit UPI PIN to credit ₹3,000 into your account.'",
          te: "ఒక అపరిచిత వ్యక్తి ఫోన్ చేసి: 'సార్, మీ సీనియర్ సిటిజన్ పథకం ₹3,000 ప్రభుత్వం మంజూరు చేసింది! మీ వాట్సాప్‌కి ఒక QR కోడ్ పంపాను. ఫోన్‌పే లేదా గూగుల్ పే ఓపెన్ చేసి, ఈ QR స్కాన్ చేసి మీ 4 అంకెల UPI పిన్ నొక్కితే డబ్బులు మీ అకౌంట్‌లో పడతాయి' అని అంటాడు.",
          kn: "ನಿಮಗೆ ಒಬ್ಬ ಅಪರಿಚಿತ ಕರೆ ಮಾಡಿ: 'ಸರ್, ನಿಮ್ಮ ಹಿರಿಯ ನಾಗರಿಕರ ಸಹಾಯಧನ ₹3,000 ಮಂಜೂರಾಗಿದೆ! ನಿಮ್ಮ ವಾಟ್ಸಾಪ್‌ಗೆ QR ಕೋಡ್ ಕಳುಹಿಸಿದ್ದೇನೆ. PhonePe ಅಥವಾ Google Pay ತೆರೆದು, QR ಸ್ಕ್ಯಾನ್ ಮಾಡಿ ನಿಮ್ಮ 4 ಅಂಕಿಗಳ UPI ಪಿನ್ ಹಾಕಿದರೆ ಹಣ ನಿಮ್ಮ ಖಾತೆಗೆ ಜಮೆಯಾಗುತ್ತದೆ' ಎನ್ನುತ್ತಾರೆ."
        },
        narration: {
          en: "A caller claims to send 3,000 rupees to your account. They ask you to scan a QR code and enter your secret UPI PIN to claim the money. What should you do?",
          te: "మీ ఖాతాలోకి 3,000 రూపాయలు జమ కావాలంటే వాట్సాప్‌లో వచ్చిన QR కోడ్‌ను స్కాన్ చేసి, మీ రహస్య UPI పిన్ ఎంటర్ చేయాలని చెబుతున్నారు. మీరు ఏమి చేస్తారు?",
          kn: "ನಿಮ್ಮ ಖಾತೆಗೆ 3,000 ರೂಪಾಯಿ ಬರಬೇಕಾದರೆ WhatsApp ನಲ್ಲಿ ಬಂದ QR ಕೋಡ್ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ ನಿಮ್ಮ ರಹಸ್ಯ UPI ಪಿನ್ ಹಾಕಲು ಹೇಳುತ್ತಿದ್ದಾರೆ. ನೀವು ಏನು ಮಾಡುತ್ತೀರಿ?"
        },
        options: [
          {
            id: "opt_enter_pin",
            text: {
              en: "Scan the QR code and enter your 4-digit UPI PIN to receive the ₹3,000.",
              te: "QR కోడ్ స్కాన్ చేసి, ₹3,000 రావడం కోసం మీ 4 అంకెల UPI పిన్ ఎంటర్ చేయండి.",
              kn: "QR ಕೋಡ್ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ ₹3,000 ಪಡೆಯಲು ನಿಮ್ಮ 4 ಅಂಕಿಗಳ UPI ಪಿನ್ ನಮೂದಿಸಿ."
            },
            isCorrect: false,
            feedback: {
              en: "❌ DISASTER! ₹3,000 WAS DEDUCTED FROM YOUR ACCOUNT! You NEVER need a UPI PIN to receive money. A UPI PIN is ONLY entered when money is leaving your bank account.",
              te: "❌ మోసపోయారు! మీ ఖాతా నుండి ₹3,000 కట్ అయిపోయాయి! గుర్తుపెట్టుకోండి: డబ్బులు తీసుకోవడానికి ఎప్పుడూ UPI పిన్ అవసరం లేదు. పిన్ కొట్టారంటే మీ డబ్బులు ఇతరులకు వెళ్లిపోతాయి!",
              kn: "❌ ವಂಚನೆ! ನಿಮ್ಮ ಖಾತೆಯಿಂದ ₹3,000 ಕಡಿತವಾಯಿತು! ನೆನಪಿಡಿ: ಹಣ ಪಡೆಯಲು ಎಂದಿಗೂ UPI ಪಿನ್ ಅಗತ್ಯವಿಲ್ಲ. ಪಿನ್ ಹಾಕಿದರೆ ನಿಮ್ಮ ಖಾತೆಯಿಂದ ಹಣ ಬೇರೆಯವರಿಗೆ ಹೋಗುತ್ತದೆ!"
            },
            nextStep: null
          },
          {
            id: "opt_reject_qr",
            text: {
              en: "Refuse immediately and disconnect. You NEVER enter a PIN to receive money.",
              te: "వెంటనే కాల్ కట్ చేయండి. డబ్బులు తీసుకోవడానికి UPI పిన్ ఎప్పుడూ అవసరం లేదని చెప్పండి.",
              kn: "ಕೂಡಲೇ ಕರೆ ಕಡಿತಗೊಳಿಸಿ. ಹಣ ಸ್ವೀಕರಿಸಲು ಎಂದಿಗೂ ಪಿನ್ ಅಗತ್ಯವಿಲ್ಲ ಎಂದು ನಿರಾಕರಿಸಿ."
            },
            isCorrect: true,
            feedback: {
              en: "✅ 100% CORRECT! You saved your hard-earned money. Real transfers only require sharing your mobile number or UPI ID, NEVER scanning a QR or entering a PIN.",
              te: "✅ అద్భుతం! మీ కష్టార్జితాన్ని కాపాడుకున్నారు. ఎవరైనా మీకు డబ్బులు పంపాలంటే మీ ఫోన్ నంబర్ చాలు. పిన్ లేదా QR స్కాన్ అడిగితే అది 100% మోసమే!",
              kn: "✅ ಅತ್ಯುತ್ತಮ ಜಾಗರೂಕತೆ! ನಿಮ್ಮ ಹಣವನ್ನು ಉಳಿಸಿಕೊಂಡಿರಿ. ಯಾರಾದರೂ ಹಣ ಕಳಿಸುವುದಾದರೆ ನಿಮ್ಮ ಮೊಬೈಲ್ ನಂಬರ್ ಸಾಕು. QR ಸ್ಕ್ಯಾನ್ ಅಥವಾ ಪಿನ್ ಕೇಳಿದರೆ ಅದು ಖಚಿತ ವಂಚನೆ!"
            },
            nextStep: null
          },
          {
            id: "opt_ask_bank",
            text: {
              en: "Ask them to send the money via Direct Bank NEFT/IMPS or visit the branch.",
              te: "డబ్బులు బ్యాంక్ అకౌంట్ నంబర్ లేదా నేరుగా బ్రాంచ్ ద్వారా పంపమని చెప్పండి.",
              kn: "ಹಣವನ್ನು ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ನೇರವಾಗಿ NEFT/IMPS ಮೂಲಕ ಕಳುಹಿಸಲು ಅಥವಾ ಬ್ಯಾಂಕ್‌ಗೆ ಬರುವಂತೆ ಹೇಳಿ."
            },
            isCorrect: true,
            feedback: {
              en: "✅ SAFE RESPONSE! Scammers immediately disconnect when asked for direct bank account details or branch verification, because they rely on instant UPI traps.",
              te: "✅ సరైన సమాధానం! బ్యాంక్ వివరాలు అడగ్గానే మోసగాడు భయపడి ఫోన్ కట్ చేశాడు.",
              kn: "✅ ಸುರಕ್ಷಿತ ಪ್ರತಿಕ್ರಿಯೆ! ಬ್ಯಾಂಕ್ ವಿವರ ಕೇಳಿದ ತಕ್ಷಣ ವಂಚಕ ಕರೆಯನ್ನು ಕಡಿತಗೊಳಿಸಿದ."
            },
            nextStep: null
          }
        ]
      }
    ],
    goldenRule: {
      en: "Golden Rule: UPI PIN is ONLY for SENDING money. You NEVER need to enter your PIN or scan a QR code to RECEIVE money.",
      te: "బంగారు నియమం: UPI పిన్ అనేది డబ్బులు పంపించడానికి మాత్రమే. ఇతరుల నుండి డబ్బులు తీసుకోవడానికి ఎప్పుడూ పిన్ కొట్టకూడదు.",
      kn: "ಬಂಗಾರದ ನಿಯಮ: UPI ಪಿನ್ ಹಣ ಕಳುಹಿಸಲು ಮಾತ್ರ. ಬೇರೆಯವರಿಂದ ಹಣ ಪಡೆಯಲು ಎಂದಿಗೂ ಪಿನ್ ಹಾಕಬೇಕಾಗಿಲ್ಲ."
    }
  },

  {
    id: "digital_arrest",
    category: "Extortion / Cyber Threat",
    badge: {
      en: "Digital Arrest Scam",
      te: "డిజిటల్ అరెస్ట్ మోసం",
      kn: "ಡಿಜಿಟಲ್ ಅರೆಸ್ಟ್ ಬೆದರಿಕೆ"
    },
    title: {
      en: "The Fake Police Video Call ('Digital Arrest')",
      te: "నకిలీ పోలీస్ వీడియో కాల్ ('డిజిటల్ అరెస్ట్')",
      kn: "ನಕಲಿ ಪೊಲೀಸ್ ವೀಡಿಯೊ ಕರೆ ('ಡಿಜಿಟಲ್ ಅರೆಸ್ಟ್')"
    },
    difficulty: {
      en: "Extreme Danger",
      te: "అత్యంత ప్రమాదకరం",
      kn: "ತೀವ್ರ ಆತಂಕಕಾರಿ"
    },
    summary: {
      en: "Imposters posing as Police/CBI threaten arrest over fake narcotics in your courier and demand funds transfer to 'verify' your innocence.",
      te: "పోలీస్ డ్రెస్ ధరించి, మీ పేరు మీద డ్రగ్స్ పార్శిల్ దొరికిందని అరెస్ట్ చేస్తామని భయపెట్టి డబ్బులు గుంజే మోసం.",
      kn: "ಪೊಲೀಸ್ ಸಮವಸ್ತ್ರ ಧರಿಸಿ, ನಿಮ್ಮ ಹೆಸರಿನಲ್ಲಿ ಮಾದಕ ವಸ್ತುಗಳ ಪಾರ್ಸೆಲ್ ಸಿಕ್ಕಿದೆ ಎಂದು ಬಂಧನದ ಬೆದರಿಕೆ ಹಾಕಿ ಹಣ ವಸೂಲಿ ಮಾಡುವ ವಂಚನೆ."
    },
    visualType: "police_call",
    simulatedUI: {
      callerName: "CBI Cyber Cell / Delhi Police",
      charges: {
        en: "Narcotics Seizure & Money Laundering",
        te: "మత్తు పదార్థాల స్వాధీనం మరియు మనీ లాండరింగ్",
        kn: "ಮಾದಕ ವಸ್ತುಗಳ ವಶಪಡಿಸಿಕೊಳ್ಳುವಿಕೆ ಮತ್ತು ಹಣ ಅಕ್ರಮ ವರ್ಗಾವಣೆ"
      },
      warrantNo: "ARREST-SEC-144-CYB"
    },
    steps: [
      {
        stepId: 1,
        situation: {
          en: "You receive a video call on WhatsApp. A man in an official police uniform sitting in front of a police backdrop appears. He sternly says: 'This is Crime Branch Inspector Sharma. A courier to Cambodia containing 16 fake passports and 250 grams of drugs under your Aadhaar number has been seized. A non-bailable warrant is issued. You are placed under 24-hour Digital Arrest. Do not tell your family or leave the room. Transfer ₹50,000 security deposit immediately to the RBI Verification Account, or the SWAT team will raid your house.'",
          te: "మీ వాట్సాప్‌కి ఒక వీడియో కాల్ వస్తుంది. స్క్రీన్‌పై పోలీస్ యూనిఫామ్ వేసుకున్న వ్యక్తి పోలీస్ బ్యాక్‌డ్రాప్ ముందు కూర్చుని తీవ్రంగా మాట్లాడతాడు: 'నేను క్రైమ్ బ్రాంచ్ ఇన్‌స్పెక్టర్‌ని. మీ ఆధార్ నంబర్‌తో విదేశాలకు వెళ్తున్న పార్శిల్‌లో 16 దొంగ పాస్‌పోర్టులు, 250 గ్రాముల మత్తు పదార్థాలు పట్టుబడ్డాయి. మీపై అరెస్ట్ వారెంట్ జారీ అయింది. మీరు 24 గంటల డిజిటల్ అరెస్ట్‌లో ఉన్నారు. ఎవరికీ చెప్పవద్దు. మీ నిర్దోషిత్వాన్ని రుజువు చేయడానికి వెంటనే ₹50,000 ఆర్‌బిఐ వెరిఫికేషన్ ఖాతాకు బదిలీ చేయండి, లేకపోతే పోలీస్ బృందం మీ ఇంటికి వస్తుంది!'",
          kn: "ನಿಮ್ಮ WhatsApp ಗೆ ಒಂದು ವೀಡಿಯೋ ಕರೆ ಬರುತ್ತದೆ. ಪೊಲೀಸ್ ಸಮವಸ್ತ್ರ ಧರಿಸಿದ ವ್ಯಕ್ತಿ ಗಂಭೀರವಾಗಿ ಹೇಳುತ್ತಾನೆ: 'ನಾನು ಕ್ರೈಂ ಬ್ರಾಂಚ್ ಇನ್ಸ್‌ಪೆಕ್ಟರ್. ನಿಮ್ಮ ಆಧಾರ್ ಹೆಸರಿನಲ್ಲಿ ವಿದೇಶಕ್ಕೆ ಕಳುಹಿಸುತ್ತಿದ್ದ ಪಾರ್ಸೆಲ್‌ನಲ್ಲಿ ಡ್ರಗ್ಸ್ ಮತ್ತು ನಕಲಿ ಪಾಸ್‌ಪೋರ್ಟ್ ಪತ್ತೆಯಾಗಿದೆ. ನಿಮ್ಮ ವಿರುದ್ಧ ವಾರಂಟ್ ಹೊರಡಿಸಲಾಗಿದೆ. ನೀವು ಡಿಜಿಟಲ್ ಅರೆಸ್ಟ್‌ನಲ್ಲಿದ್ದೀರಿ. ಯಾರಿಗೂ ಹೇಳದೆ ತಕ್ಷಣ ₹50,000 ಠೇವಣಿ ಹಣವನ್ನು ಆರ್‌ಬಿಐ ಪರಿಶೀಲನಾ ಖಾತೆಗೆ ಕಳುಹಿಸಿ, ಇಲ್ಲದಿದ್ದರೆ ನಿಮ್ಮನ್ನು ಬಂಧಿಸಲಾಗುವುದು!'"
        },
        narration: {
          en: "A fake police officer on a video call claims illegal drugs were found in a courier with your Aadhaar number. He places you under 'Digital Arrest' and demands 50,000 rupees to clear your name. What will you do?",
          te: "వీడియో కాల్‌లో పోలీస్ అధికారి లాంటి వ్యక్తి మీపై నకిలీ కేసు పెట్టి డిజిటల్ అరెస్ట్ చేసామని, ₹50,000 బదిలీ చేయకపోతే జైలుకు పంపుతామని బెదిరిస్తున్నాడు. మీరు ఏమి చేస్తారు?",
          kn: "ವೀಡಿಯೋ ಕರೆಯಲ್ಲಿ ನಕಲಿ ಪೊಲೀಸರು ನಿಮ್ಮ ಹೆಸರಿನಲ್ಲಿ ಡ್ರಗ್ಸ್ ಪಾರ್ಸೆಲ್ ಸಿಕ್ಕಿದೆ ಎಂದು ಬೆದರಿಸಿ, ₹50,000 ಹಣ ನೀಡದಿದ್ದರೆ ಬಂಧಿಸುವುದಾಗಿ ಹೆದರಿಸುತ್ತಿದ್ದಾರೆ. ನೀವು ಏನು ಮಾಡುತ್ತೀರಿ?"
        },
        options: [
          {
            id: "opt_pay_extortion",
            text: {
              en: "Panic, stay silent in the room, and transfer the ₹50,000 as ordered to avoid arrest.",
              te: "భయపడి, గదిలో ఒంటరిగా ఉండి, అరెస్ట్ కాకుండా ఉండటానికి వెంటనే ₹50,000 బదిలీ చేయండి.",
              kn: "ಭಯಪಟ್ಟು, ಮನೆಯಲ್ಲಿ ಯಾರಿಗೂ ತಿಳಿಸದೆ ಬಂಧನದಿಂದ ತಪ್ಪಿಸಿಕೊಳ್ಳಲು ₹50,000 ವರ್ಗಾಯಿಸಿ."
            },
            isCorrect: false,
            feedback: {
              en: "❌ EXTORTION VICTIM! You lost ₹50,000 of your life savings! Indian Law has NO concept of 'Digital Arrest'. Real police or CBI NEVER arrest people on WhatsApp or ask for online deposits.",
              te: "❌ మోసపోయారు! మీ ₹50,000 పోయాయి! భారత చట్టంలో 'డిజిటల్ అరెస్ట్' అనేదే లేదు. అసలైన పోలీసులు వాట్సాప్ కాల్స్‌లో డబ్బులు బదిలీ చేయమని ఎప్పుడూ అడగరు. ఇది పూర్తిగా సైబర్ నేరగాళ్ల నాటకం!",
              kn: "❌ ವಂಚನೆಗೆ ಬಲಿಯಾದಿರಿ! ಭಾರತೀಯ ಕಾನೂನಿನಲ್ಲಿ 'ಡಿಜಿಟಲ್ ಅರೆಸ್ಟ್' ಎಂಬ ಯಾವುದೇ ನಿಯಮವಿಲ್ಲ. ನಿಜವಾದ ಪೊಲೀಸರು ಎಂದಿಗೂ WhatsApp ನಲ್ಲಿ ಹಣ ವರ್ಗಾಯಿಸಲು ಕೇಳುವುದಿಲ್ಲ. ಇದು ಬೃಹತ್ ವಂಚನೆ!"
            },
            nextStep: null
          },
          {
            id: "opt_hangup_1930",
            text: {
              en: "Immediately disconnect the video call, tell your family, and dial Cyber Helpline 1930.",
              te: "వెంటనే వీడియో కాల్ కట్ చేయండి, మీ కుటుంబానికి చెప్పి జాతీయ సైబర్ హెల్ప్‌లైన్ 1930 కి కాల్ చేయండి.",
              kn: "ಕೂಡಲೇ ವೀಡಿಯೋ ಕರೆ ಕಡಿತಗೊಳಿಸಿ, ಕುಟುಂಬಕ್ಕೆ ತಿಳಿಸಿ ಮತ್ತು ಸೈಬರ್ ಸಹಾಯವಾಣಿ 1930 ಗೆ ಕರೆ ಮಾಡಿ."
            },
            isCorrect: true,
            feedback: {
              en: "✅ HEROIC ACTION! You defeated the scammer. 'Digital Arrest' is 100% fake. By hanging up and calling 1930 (or visiting cybercrime.gov.in), you protected your family and reported the criminals.",
              te: "✅ ధైర్యమైన సరైన నిర్ణయం! 'డిజిటల్ అరెస్ట్' అనేది వంద శాతం బూటకం. కాల్ కట్ చేసి 1930 కి సమాచారం ఇవ్వడం ద్వారా మీరు మీ డబ్బును కాపాడుకున్నారు.",
              kn: "✅ ಅತ್ಯಂತ ಪ್ರಶಂಸನೀಯ ಕ್ರಮ! 'ಡಿಜಿಟಲ್ ಅರೆಸ್ಟ್' ಸಂಪೂರ್ಣ ಸುಳ್ಳು. ಕರೆಯನ್ನು ಕಡಿತಗೊಳಿಸಿ 1930 ಗೆ ದೂರು ನೀಡುವ ಮೂಲಕ ನೀವು ನಿಮ್ಮ ಹಣ ಮತ್ತು ನೆಮ್ಮದಿಯನ್ನು ಕಾಪಾಡಿಕೊಂಡಿರಿ."
            },
            nextStep: null
          },
          {
            id: "opt_visit_thana",
            text: {
              en: "Say: 'I am coming to the nearest local Police Station right now with my lawyer' and hang up.",
              te: "'నేను ఇప్పుడే మా ఊరి పోలీస్ స్టేషన్‌కు వస్తున్నాను' అని చెప్పి ఫోన్ పెట్టేయండి.",
              kn: "'ನಾನು ಈಗಲೇ ಸಮೀಪದ ಪೊಲೀಸ್ ಠಾಣೆಗೆ ಬರುತ್ತಿದ್ದೇನೆ' ಎಂದು ಹೇಳಿ ಕರೆ ಕಡಿತಗೊಳಿಸಿ."
            },
            isCorrect: true,
            feedback: {
              en: "✅ FEARLESS DEFENSE! Scammers prey on fear and isolation. The moment you mention visiting a physical police station, they panic and disconnect because they are overseas or interstate imposters.",
              te: "✅ సూపర్ ధైర్యం! స్థానిక పోలీస్ స్టేషన్ పేరు చెప్పగానే మోసగాడు భయపడి పారిపోయాడు.",
              kn: "✅ ಜಾಣ್ಮೆಯ ಉತ್ತರ! ಸಮೀಪದ ಪೊಲೀಸ್ ಠಾಣೆ ಹೆಸರು ಕೇಳಿದ ತಕ್ಷಣ ವಂಚಕ ಗಾಬರಿಯಿಂದ ಕರೆ ಕಟ್ ಮಾಡಿದ."
            },
            nextStep: null
          }
        ]
      }
    ],
    goldenRule: {
      en: "Golden Rule: There is NO 'Digital Arrest' under Indian Law. Real Police/CBI never interrogate or demand money via WhatsApp video calls. Report to 1930 immediately.",
      te: "బంగారు నియమం: భారత చట్టంలో 'డిజిటల్ అరెస్ట్' అనేదే లేదు. అసలు పోలీసులు వాట్సాప్ వీడియో కాల్స్‌లో బెదిరించి డబ్బులు అడగరు. వెంటనే 1930 కి కాల్ చేయండి.",
      kn: "ಬಂಗಾರದ ನಿಯಮ: ಭಾರತೀಯ ಕಾನೂನಿನಲ್ಲಿ 'ಡಿಜಿಟಲ್ ಅರೆಸ್ಟ್' ಇಲ್ಲ. ಪೊಲೀಸರು ಎಂದಿಗೂ WhatsApp ನಲ್ಲಿ ಹಣ ಕೇಳುವುದಿಲ್ಲ. ತಕ್ಷಣ 1930 ಗೆ ಕರೆ ಮಾಡಿ."
    }
  },

  {
    id: "electricity_apk",
    category: "Malware & SMS Trap",
    badge: {
      en: "Fake Electricity Bill Scam",
      te: "కరెంట్ బిల్లు నకిలీ SMS",
      kn: "ವಿದ್ಯುತ್ ಬಿಲ್ ನಕಲಿ SMS"
    },
    title: {
      en: "Power Disconnection Threat via APK",
      te: "రాత్రికి కరెంట్ కట్ చేస్తామని బెదిరించే APK మెసేజ్",
      kn: "ರಾತ್ರಿ ವಿದ್ಯುತ್ ಸಂಪರ್ಕ ಕಡಿತಗೊಳಿಸುವ ಬೆದರಿಕೆ APK"
    },
    difficulty: {
      en: "High Risk",
      te: "అధిక ప్రమాదం",
      kn: "ಹೆಚ್ಚಿನ ಅಪಾಯ"
    },
    summary: {
      en: "An SMS threatens electricity disconnection tonight unless you install an APK file or call an unknown personal mobile number.",
      te: "కరెంట్ బిల్లు చెల్లించలేదని, రాత్రికి కరెంట్ తీసేస్తామని, ఇచ్చిన APK యాప్ డౌన్‌లోడ్ చేసుకోమని వచ్చే మోసపూరిత మెసేజ్.",
      kn: "ವಿದ್ಯುತ್ ಬಿಲ್ ಬಾಕಿ ಇದೆ, ಇಂದೇ ಸಂಪರ್ಕ ಕಡಿತಗೊಳಿಸುತ್ತೇವೆ ಎಂದು APK ಆ್ಯಪ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಲು ಬರುವ ಸಂದೇಶ."
    },
    visualType: "sms_alert",
    simulatedUI: {
      sender: "BZ-VPDIST",
      messageBody: {
        en: "Dear Consumer, your electricity power will be disconnected tonight at 9:30 PM from the power office because your previous month bill was not updated. Please immediately update via: http://bit.ly/Electricity_Bill_Update.apk or call Officer 9876543210.",
        te: "వినియోగదారుడికి, గత నెల బిల్లు నవీకరించనందున ఈ రాత్రి 9:30 గంటలకు మీ విద్యుత్ సరఫరా నిలిపివేయబడుతుంది. వెంటనే ఈ లింక్ ద్వారా నవీకరించండి: http://bit.ly/Electricity_Bill_Update.apk లేదా అధికారికి 9876543210కు కాల్ చేయండి.",
        kn: "ಗ್ರಾಹಕರೇ, ಹಿಂದಿನ ತಿಂಗಳ ಬಿಲ್ ನವೀಕರಿಸದ ಕಾರಣ ಇಂದು ರಾತ್ರಿ 9:30ಕ್ಕೆ ವಿದ್ಯುತ್ ಸಂಪರ್ಕ ಕಡಿತಗೊಳಿಸಲಾಗುತ್ತದೆ. ತಕ್ಷಣ ಈ ಲಿಂಕ್ ಮೂಲಕ ನವೀಕರಿಸಿ: http://bit.ly/Electricity_Bill_Update.apk ಅಥವಾ ಅಧಿಕಾರಿ 9876543210ಕ್ಕೆ ಕರೆ ಮಾಡಿ."
      }
    },
    steps: [
      {
        stepId: 1,
        situation: {
          en: "You receive an SMS: 'Dear consumer, electricity will be disconnected tonight at 9:30 PM due to unpaid bill. Click http://bit.ly/Electricity_Bill.apk to pay ₹10 fee and update immediately.' What should you do?",
          te: "మీ ఫోన్‌కు ఒక SMS వచ్చింది: 'గౌరవనీయ వినియోగదారుడా, మీ గత నెల కరెంట్ బిల్లు అప్‌డేట్ కానందున ఈ రాత్రి 9:30 గంటలకు మీ విద్యుత్ సరఫరా నిలిపివేయబడుతుంది. వెంటనే ఈ లింక్ http://bit.ly/Electricity_Bill.apk క్లిక్ చేసి ₹10 ఫీజు చెల్లించి అప్‌డేట్ చేసుకోండి.' మీరు ఏమి చేస్తారు?",
          kn: "ನಿಮಗೆ ಒಂದು SMS ಬಂದಿದೆ: 'ಗ್ರಾಹಕರೇ, ನಿಮ್ಮ ವಿದ್ಯುತ್ ಬಿಲ್ ಅಪ್‌ಡೇಟ್ ಆಗಿಲ್ಲ, ಇಂದು ರಾತ್ರಿ 9:30 ಕ್ಕೆ ಕರೆಂಟ್ ಕಟ್ ಆಗಲಿದೆ. ತಕ್ಷಣ http://bit.ly/Electricity_Bill.apk ಲಿಂಕ್ ಒತ್ತಿ ₹10 ಪಾವತಿಸಿ.' ನೀವು ಏನು ಮಾಡುತ್ತೀರಿ?"
        },
        narration: {
          en: "An SMS threatens that your electricity will be disconnected tonight unless you download an APK link to pay 10 rupees. How will you respond?",
          te: "ఈ రాత్రికి కరెంట్ తీసేస్తామని, లింక్ క్లిక్ చేసి యాప్ డౌన్‌లోడ్ చేయాలని మెసేజ్ వచ్చింది. మీరు ఏమి చేస్తారు?",
          kn: "ಇಂದು ರಾತ್ರಿ ವಿದ್ಯುತ್ ಕಟ್ ಮಾಡುತ್ತೇವೆ ಎಂದು APK ಲಿಂಕ್ ಕಳುಹಿಸಿ ₹10 ಕಟ್ಟಲು ಹೇಳುತ್ತಿದ್ದಾರೆ. ನೀವು ಏನು ಮಾಡುತ್ತೀರಿ?"
        },
        options: [
          {
            id: "opt_install_apk",
            text: {
              en: "Click the link and install the APK to pay ₹10 and keep electricity running.",
              te: "కరెంట్ పోకుండా ఉండటం కోసం ఆ లింక్ నొక్కి యాప్ డౌన్‌లోడ్ చేసి ₹10 కట్టండి.",
              kn: "ಕರೆಂಟ್ ಕಟ್ ಆಗಬಾರದು ಎಂದು ಆ ಲಿಂಕ್ ಒತ್ತಿ APK ಆ್ಯಪ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ ₹10 ಕಟ್ಟಿ."
            },
            isCorrect: false,
            feedback: {
              en: "❌ ACCOUNT HACKED! The APK file is a malicious spyware that steals your banking OTPs and forwards your SMS to scammers. Within minutes, your bank account is emptied.",
              te: "❌ భారీ మోసం! ఆ APK ఫైల్ ఒక డేంజరస్ వైరస్. అది మీ ఫోన్‌లోని బ్యాంక్ OTPలను దొంగిలించి మీ ఖాతాలోని డబ్బంతా ఖాళీ చేస్తుంది. ఎప్పుడూ APK ఫైల్స్ ఇన్‌స్టాల్ చేయకండి!",
              kn: "❌ ಮೊಬೈಲ್ ಹ್ಯಾಕ್ ಆಯಿತು! ಆ APK ಫೈಲ್ ನಿಮ್ಮ ಮೊಬೈಲ್‌ನ OTP ಗಳನ್ನು ಕದಿಯುವ ವೈರಸ್ ಆಗಿದೆ. ನಿಮಿಷಗಳಲ್ಲಿ ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ಖಾತೆ ಖಾಲಿಯಾಗುತ್ತದೆ!"
            },
            nextStep: null
          },
          {
            id: "opt_official_check",
            text: {
              en: "Ignore the SMS, open official electricity board app/portal, or call your local power lineman.",
              te: "ఆ మెసేజ్‌ను పట్టించుకోకండి. అధికారిక విద్యుత్ శాఖ యాప్ లేదా మీ స్థానిక విద్యుత్ కార్యాలయంలో మాత్రమే తనిఖీ చేయండి.",
              kn: "ಆ ಸಂದೇಶ ನಿರ್ಲಕ್ಷಿಸಿ. ಅಧಿಕೃತ ವಿದ್ಯುತ್ ಮಂಡಳಿಯ ಆ್ಯಪ್ ಅಥವಾ ಕಚೇರಿಯಲ್ಲಿ ಮಾತ್ರ ಪರಿಶೀಲಿಸಿ."
            },
            isCorrect: true,
            feedback: {
              en: "✅ SHARP VIGILANCE! Power distribution companies NEVER send APK installation links or personal 10-digit phone numbers for bill payments. You protected your smartphone and bank balance.",
              te: "✅ సరైన రక్షణ! ప్రభుత్వ విద్యుత్ శాఖ ఎప్పుడూ వాట్సాప్ లేదా లింకుల ద్వారా APK యాప్‌లను పంపదు. బిల్లులను ఎల్లప్పుడూ అధికారిక పోర్టల్స్‌లోనే కట్టాలి.",
              kn: "✅ ಅತ್ಯುತ್ತಮ ಜಾಗರೂಕತೆ! ವಿದ್ಯುತ್ ನಿಗಮಗಳು ಎಂದಿಗೂ ವೈಯಕ್ತಿಕ ನಂಬರ್ ಅಥವಾ APK ಲಿಂಕ್ ಕಳುಹಿಸುವುದಿಲ್ಲ. ಅಧಿಕೃತ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಮಾತ್ರ ಬಿಲ್ ಪಾವತಿಸಬೇಕು."
            },
            nextStep: null
          }
        ]
      }
    ],
    goldenRule: {
      en: "Golden Rule: NEVER download or install '.apk' files from SMS or WhatsApp. Electricity boards never ask you to install apps via unofficial links.",
      te: "బంగారు నియమం: SMS లేదా వాట్సాప్‌లో వచ్చే '.apk' ఫైల్స్‌ని ఎప్పుడూ డౌన్‌లోడ్ చేయకండి. విద్యుత్ బోర్డులు ఎప్పుడూ APK లింకులు పంపవు.",
      kn: "ಬಂಗಾರದ ನಿಯಮ: SMS ಅಥವಾ WhatsApp ನಲ್ಲಿ ಬರುವ '.apk' ಫೈಲ್‌ಗಳನ್ನು ಎಂದಿಗೂ ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡಬೇಡಿ. ಅಧಿಕೃತ ಇಲಾಖೆಗಳು ಹೀಗೆ ಲಿಂಕ್ ಕಳುಹಿಸುವುದಿಲ್ಲ."
    }
  }
];
