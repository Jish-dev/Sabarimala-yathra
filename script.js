
"use strict";

// ==========================================
// SHARANAM DIGITAL YATRA 2026
// Complete script.js - PART 1
// Temple images managed by developer
// ==========================================

const SVG_ASSETS = {
 coverScene: `
  <div class="cover-scene">
    <img
      src="assets/sabarimala.jpeg"
      alt="ശബരിമല ക്ഷേത്രം"
      class="cover-scene-image"
      loading="eager"
    />
    <div class="cover-scene-overlay"></div>
    <div class="cover-scene-bottom"></div>
  </div>
`,

  nilavilakku: `
    <img
      src="assets/nilavilakku.png"
      alt="Nilavilakku"
      class="banner-lamp"
      loading="lazy"
    />
  `
};
// ==========================================
// DEVELOPER-MANAGED TEMPLE PHOTOS
// ==========================================

const TEMPLE_IMAGES = {
  "Guruvayur Temple Kerala": "assets/guruvayur.webp",
  "Thriprayar Sree Rama Temple Kerala": "assets/thriprayar.png",
  "Kodungallur Bhagavathy Temple Kerala": "assets/kodungallur.webp",
  "Aluva Shiva Temple Kerala": "assets/aluva.jpeg",
  "Chottanikkara Devi Temple Kerala": "assets/chottanikkara.jpg",
  "Vaikom Mahadeva Temple Kerala": "assets/vaikom.jpeg",
  "Malliyoor Maha Ganapathi Temple Kerala": "assets/malliyoor.jpeg",
  "Kaduthuruthy Mahadeva Temple Kerala": "assets/kaduthuruthy.jpeg",
  "Ettumanoor Mahadeva Temple Kerala": "assets/ettumanoor.jpeg",
  "Kidangoor Subramanya Swami Temple Kerala": "assets/kidangoor.jpeg",
  "Kadappattoor Mahadeva Temple Kerala": "assets/kadappattoor.jpeg",
  "Erumeli Sree Dharma Sastha Temple Kerala": "assets/erumeli.jpeg",
  "Pamba Triveni Sangamam Kerala": "assets/pamba.jpeg",
  "Pandalam Valiyakoikkal Temple Kerala": "assets/pandalam.jpeg",
  "Chakkulathukavu Bhagavathy Temple Kerala": "assets/chakkulathukavu.jpg",
  "Haripad Sree Subrahmanya Swamy Temple Kerala": "assets/haripad.jpeg",
  "Mannarasala Sree Nagaraja Temple Kerala": "assets/mannarasala.jpeg",
  "Ambalappuzha Sree Krishna Swamy Temple Kerala": "assets/ambalapuzha.webp"
};

function fallbackImage() {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 160">
      <rect width="200" height="160" fill="#0D261F"/>
      <circle cx="100" cy="48" r="32" fill="#EAB308" opacity=".15"/>
      <path d="M40 85 L100 35 L160 85Z" fill="#EAB308"/>
      <path d="M55 85 H145 V140 H55Z" fill="#78350F"/>
      <path d="M70 96 H130 V140 H70Z"
        fill="#18120E" stroke="#FACC15" stroke-width="3"/>
      <circle cx="100" cy="116" r="13" fill="#EAB308"/>
    </svg>
  `;

  return "data:image/svg+xml;charset=UTF-8," +
    encodeURIComponent(svg);
}

const FALLBACK_IMAGE = fallbackImage();

// ==========================================
// PILGRIMAGE DATA
// ==========================================

const CHAPTERS = [
  {
    id: "overview",
    shortTitle: "സംഗ്രഹം",
    headerTitle: "SHARANAM – Digital Yatra 2026",
    type: "overview",
    readText:
      "സ്വാമിയേ ശരണമയ്യപ്പ. ശരണം ഡിജിറ്റൽ യാത്ര 2026. കൈപ്പുള്ളി വിഷ്ണു നരസിംഹമൂർത്തി വേട്ടേക്കരൻ ക്ഷേത്രം. ശബരിമല തീർത്ഥാടന യാത്രാ വിവരങ്ങളും ക്ഷേത്ര ദർശന ക്രമവും. ഒന്നാം ദിവസം ഒൻപത് ക്ഷേത്ര ദർശനങ്ങൾ. രണ്ടാം ദിവസം ശബരിമല യാത്ര. ഡിസംബർ നാല് മടക്കയാത്ര."
  },

  {
    id: "phase-1",
    shortTitle: "ഒന്നാം ദിവസം",
    headerTitle: "ഘട്ടം 1 • ഒന്നാം ദിവസം",
    type: "phase1",
    kicker: "First Day • ഘട്ടം 1",
    title: "ഒന്നാം ദിവസം – ക്ഷേത്ര ദർശനങ്ങൾ",
    subtitle: "First Day: Temple Visits (1 മുതൽ 9 വരെ ദർശന ക്രമം)",

    temples: [
      {
        num: 1,
        nameMl: "ഗുരുവായൂർ ശ്രീകൃഷ്ണ ക്ഷേത്രം",
        nameEn: "Guruvayur Temple",
        location: "ഗുരുവായൂർ, തൃശ്ശൂർ ജില്ല (Guruvayur, Thrissur)",
        purpose: "ദർശനം (Darshan)",
        foodTag: "🍛 അന്നദാനം (Annadanam)",
        note: "യാത്രയുടെ ആദ്യ പുണ്യദർശനവും അന്നദാനവും.",
        mapQuery: "Guruvayur Temple Kerala"
      },
      {
        num: 2,
        nameMl: "തൃപ്രയാർ ശ്രീരാമ ക്ഷേത്രം",
        nameEn: "Thriprayar Temple",
        location: "തൃപ്രയാർ, തൃശ്ശൂർ ജില്ല (Thriprayar, Thrissur)",
        purpose: "പുറത്തുനിന്നുള്ള ദർശനം (Darshan from outside)",
        note: "ക്ഷേത്രത്തിന് പുറത്തുനിന്ന് തൊഴുത് ദർശനം നടത്തുന്നു.",
        mapQuery: "Thriprayar Sree Rama Temple Kerala"
      },
      {
        num: 3,
        nameMl: "കൊടുങ്ങല്ലൂർ ശ്രീ കുരുംബ ഭഗവതി ക്ഷേത്രം",
        nameEn: "Kodungallur Temple",
        location: "കൊടുങ്ങല്ലൂർ, തൃശ്ശൂർ ജില്ല (Kodungallur, Thrissur)",
        purpose: "ക്ഷേത്ര ദർശനം (Temple darshan)",
        foodTag: "☕ ചായ ഇടവേള (Tea Break)",
        note: "ഭഗവതി ദർശനത്തിന് ശേഷം ചായ കുടിച്ച് വിശ്രമിക്കുന്നു.",
        mapQuery: "Kodungallur Bhagavathy Temple Kerala"
      },
      {
        num: 4,
        nameMl: "ആലുവ ശിവക്ഷേത്രം",
        nameEn: "Aluva Shiva Temple",
        location: "ആലുവ മണപ്പുറം, എറണാകുളം (Aluva, Ernakulam)",
        purpose: "കുളി, ദർശനം (Bath & darshan)",
        note: "പെരിയാർ തീരത്ത് സ്നാനവും മഹാദേവ ദർശനവും.",
        mapQuery: "Aluva Shiva Temple Kerala"
      },
      {
        num: 5,
        nameMl: "ചോറ്റാനിക്കര ഭഗവതി ക്ഷേത്രം",
        nameEn: "Chottanikkara Temple",
        location: "ചോറ്റാനിക്കര, എറണാകുളം (Chottanikkara, Ernakulam)",
        purpose: "ദർശനം, അന്നദാനം (Darshan & Annadanam)",
        foodTag: "🍛 അന്നദാനം (Annadanam)",
        note: "ദേവീ ദർശനവും ഉച്ചയ്ക്കുള്ള അന്നദാനവും.",
        mapQuery: "Chottanikkara Devi Temple Kerala"
      },
      {
        num: 6,
        nameMl: "വൈക്കം മഹാദേവ ക്ഷേത്രം",
        nameEn: "Vaikom Temple",
        location: "വൈക്കം, കോട്ടയം ജില്ല (Vaikom, Kottayam)",
        purpose: "സമയലഭ്യത അനുസരിച്ച് മാത്രം (Optional visit, depending on available time)",
        optionalTag: "⏳ സമയലഭ്യത അനുസരിച്ച് (Optional)",
        isOptional: true,
        note: "യാത്രാ സമയം അനുകൂലമാണെങ്കിൽ മാത്രം സന്ദർശിക്കുന്ന ക്ഷേത്രം.",
        mapQuery: "Vaikom Mahadeva Temple Kerala"
      },
      {
        num: 7,
        nameMl: "മള്ളിയൂർ മഹാഗണപതി ക്ഷേത്രം",
        nameEn: "Malliyoor Temple",
        location: "കുറുപ്പന്തറ, കോട്ടയം ജില്ല (Malliyoor, Kottayam)",
        purpose: "ക്ഷേത്ര ദർശനം (Temple visit)",
        note: "മള്ളിയൂർ മഹാഗണപതി സന്നിധിയിൽ ദർശനം.",
        mapQuery: "Malliyoor Maha Ganapathi Temple Kerala"
      },
      {
        num: 8,
        nameMl: "കടുത്തുരുത്തി തളിയൽ മഹാദേവ ക്ഷേത്രം",
        nameEn: "Kaduthuruthy Temple",
        location: "കടുത്തുരുത്തി, കോട്ടയം ജില്ല (Kaduthuruthy, Kottayam)",
        purpose: "ക്ഷേത്ര ദർശനം (Temple visit)",
        note: "കടുത്തുരുത്തി ക്ഷേത്ര ദർശനം.",
        mapQuery: "Kaduthuruthy Mahadeva Temple Kerala"
      },
      {
        num: 9,
        nameMl: "ഏറ്റുമാനൂർ മഹാദേവ ക്ഷേത്രം",
        nameEn: "Ettumanoor Temple",
        location: "ഏറ്റുമാനൂർ, കോട്ടയം ജില്ല (Ettumanoor, Kottayam)",
        purpose: "ആദ്യ ദിവസത്തെ യാത്രാ സമാപനം (Final destination of the first day)",
        isFinale: true,
        note: "ഒന്നാം ദിവസത്തെ യാത്ര ഏറ്റുമാനൂരിൽ സമാപിക്കുന്നു.",
        mapQuery: "Ettumanoor Mahadeva Temple Kerala"
      }
    ],

    readText:
      "ഒന്നാം ദിവസം ക്ഷേത്ര ദർശനങ്ങൾ. ഒന്ന് ഗുരുവായൂർ ദർശനം അന്നദാനം. രണ്ട് തൃപ്രയാർ പുറത്തുനിന്നുള്ള ദർശനം. മൂന്ന് കൊടുങ്ങല്ലൂർ ക്ഷേത്ര ദർശനം ചായ ഇടവേള. നാല് ആലുവ ശിവക്ഷേത്രം കുളി ദർശനം. അഞ്ച് ചോറ്റാനിക്കര ദർശനം അന്നദാനം. ആറ് വൈക്കം സമയലഭ്യത അനുസരിച്ച് മാത്രം. ഏഴ് മള്ളിയൂർ ക്ഷേത്ര ദർശനം. എട്ട് കടുത്തുരുത്തി ക്ഷേത്ര ദർശനം. ഒൻപത് ഏറ്റുമാനൂർ ആദ്യ ദിവസത്തെ യാത്ര സമാപിക്കുന്നു."
  },

  {
    id: "phase-2",
    shortTitle: "രണ്ടാം ദിവസം",
    headerTitle: "ഘട്ടം 2 • രണ്ടാം ദിവസം",
    type: "phase2",
    kicker: "Second Day • ഘട്ടം 2",
    title: "രണ്ടാം ദിവസം – ശബരിമല യാത്ര",
    subtitle: "Journey to Sabarimala • പുലർച്ചെ 4:00 മുതൽ",

    morningStops: [
      {
        num: 1,
        nameMl: "ഏറ്റുമാനൂർ മഹാദേവ ക്ഷേത്രം",
        nameEn: "Ettumanoor Darshan",
        location: "ഏറ്റുമാനൂർ, കോട്ടയം (Ettumanoor, Kottayam)",
        purpose: "രാവിലെ 4:00 – ഏറ്റുമാനൂർ ദർശനം (4:00 AM – Ettumanoor darshan)",
        note: "പുലർച്ചെ 4:00 മണിക്ക് ഏറ്റുമാനൂർ ദർശനത്തോടെ രണ്ടാം ദിവസത്തെ യാത്ര ആരംഭിക്കുന്നു.",
        mapQuery: "Ettumanoor Mahadeva Temple Kerala"
      },
      {
        num: 2,
        nameMl: "കിടങ്ങൂർ സുബ്രഹ്മണ്യ സ്വാമി ക്ഷേത്രം",
        nameEn: "Kidangoor Temple",
        location: "കിടങ്ങൂർ, കോട്ടയം ജില്ല (Kidangoor, Kottayam)",
        purpose: "ക്ഷേത്ര ദർശനം (Temple visit)",
        note: "കിടങ്ങൂർ ക്ഷേത്രത്തിൽ ദർശനം.",
        mapQuery: "Kidangoor Subramanya Swami Temple Kerala"
      },
      {
        num: 3,
        nameMl: "കടപ്പാട്ടൂർ മഹാദേവ ക്ഷേത്രം",
        nameEn: "Kadappattoor Temple",
        location: "കടപ്പാട്ടൂർ, പാലാ (Kadappattoor, Pala)",
        purpose: "ദർശനം, പ്രഭാതഭക്ഷണം (Darshan and breakfast)",
        foodTag: "🍽️ പ്രഭാതഭക്ഷണം (Breakfast)",
        note: "മഹാദേവ ദർശനത്തിന് ശേഷം പ്രഭാതഭക്ഷണം കഴിക്കുന്നു.",
        mapQuery: "Kadappattoor Mahadeva Temple Kerala"
      },
      {
        num: 4,
        nameMl: "എരുമേലി ശ്രീ ധർമ്മശാസ്താ ക്ഷേത്രം",
        nameEn: "Erumeli Temple & Petta",
        location: "എരുമേലി, കോട്ടയം ജില്ല (Erumeli, Kottayam)",
        purpose: "പേട്ടതുള്ളൽ, ക്ഷേത്ര ദർശനം (Petta and temple darshan)",
        note: "എരുമേലി പേട്ടതുള്ളലും ക്ഷേത്ര ദർശനവും പൂർത്തിയാക്കുന്നു.",
        mapQuery: "Erumeli Sree Dharma Sastha Temple Kerala"
      }
    ],

    pambaStop: {
      num: 5,
      nameMl: "പമ്പ (പമ്പാ നദീതീരം)",
      nameEn: "Pamba",
      location: "പമ്പ, പത്തനംതിട്ട ജില്ല (Pamba, Pathanamthitta)",
      purpose: "കുളി, ബലിതർപ്പണം (Bath and Bali Tharpanam)",
      note: "പമ്പയിൽ പമ്പാസ്നാനം (കുളി), പിതൃക്കൾക്കുള്ള ബലിതർപ്പണം എന്നിവ നിർവ്വഹിക്കുന്നു.",
      mapQuery: "Pamba Triveni Sangamam Kerala"
    },

    readText:
      "രണ്ടാം ദിവസം ശബരിമല യാത്ര. രാവിലെ നാല് മണിക്ക് ഏറ്റുമാനൂർ ദർശനം. തുടർന്ന് കിടങ്ങൂർ ക്ഷേത്ര ദർശനം. കടപ്പാട്ടൂർ ദർശനവും പ്രഭാതഭക്ഷണവും. എരുമേലി പേട്ടതുള്ളലും ക്ഷേത്ര ദർശനവും. തുടർന്ന് ഭക്ഷണം. എരുമേലിയിൽ നിന്ന് പമ്പയിലേക്ക് കെ.എസ്.ആർ.ടി.സി ബസ് യാത്ര. പമ്പയിൽ കുളി, ബലിതർപ്പണം. തുടർന്ന് പമ്പയിൽ നിന്ന് ശബരിമലയിലേക്ക് മലകയറ്റം."
  },

  {
    id: "navigator",
    shortTitle: "നാവിഗേറ്റർ",
    headerTitle: "അടുത്ത ലക്ഷ്യസ്ഥാനം • Next Stop",
    type: "navigator",
    kicker: "Yatra Companion • യാത്രാ സഹായി",
    title: "അടുത്ത ക്ഷേത്രം",
    subtitle: "Next Stop Navigator • യാത്രാക്രമം അനുസരിച്ച്",
    readText: "യാത്രാക്രമം അനുസരിച്ച് അടുത്ത ക്ഷേത്രവും വഴിയും കണ്ടെത്താനുള്ള സഹായി."
  },

  {
    id: "phase-3",
    shortTitle: "മടക്കയാത്ര (ഡിസം 4)",
    headerTitle: "ഘട്ടം 3 • ഡിസംബർ 4",
    type: "phase3",
    kicker: "Return Journey • ഡിസംബർ 4",
    title: "മടക്കയാത്ര – ഡിസംബർ 4",
    subtitle: "Return Journey: December 4 • രാവിലെ 7:00 ന് മലയിറക്കം",

    returnTemples: [
      {
        num: 1,
        nameMl: "പന്തളം വലിയകോയിക്കൽ ക്ഷേത്രം",
        nameEn: "Pandalam Temple",
        location: "പന്തളം, പത്തനംതിട്ട ജില്ല (Pandalam, Pathanamthitta)",
        purpose: "മടക്കയാത്രയിലെ ക്ഷേത്ര ദർശനം (Temple darshan on return)",
        note: "ശ്രീ അയ്യപ്പസ്വാമിയുടെ വളർത്തച്ഛന്റെ പുണ്യഭൂമിയായ പന്തളം ക്ഷേത്ര ദർശനം.",
        mapQuery: "Pandalam Valiyakoikkal Temple Kerala"
      },
      {
        num: 2,
        nameMl: "ചക്കുളത്തുകാവ് ഭഗവതി ക്ഷേത്രം",
        nameEn: "Chakkulathukavu Temple",
        location: "നീരേറ്റുപുറം, ആലപ്പുഴ ജില്ല (Neerettupuram, Alappuzha)",
        purpose: "ക്ഷേത്ര ദർശനം (Temple darshan)",
        note: "ചക്കുളത്തുകാവ് ഭഗവതി ക്ഷേത്രത്തിൽ ദർശനം.",
        mapQuery: "Chakkulathukavu Bhagavathy Temple Kerala"
      },
      {
        num: 3,
        nameMl: "ഹരിപ്പാട് ശ്രീ സുബ്രഹ്മണ്യ സ്വാമി ക്ഷേത്രം",
        nameEn: "Haripad Temple",
        location: "ഹരിപ്പാട്, ആലപ്പുഴ ജില്ല (Haripad, Alappuzha)",
        purpose: "മടക്കയാത്രയിലെ ക്ഷേത്ര ദർശനം (Temple darshan on return)",
        note: "ഹരിപ്പാട് ക്ഷേത്രത്തിൽ ദർശനം.",
        mapQuery: "Haripad Sree Subrahmanya Swamy Temple Kerala"
      },
      {
        num: 4,
        nameMl: "മണ്ണാറശാല ശ്രീ നാഗരാജ ക്ഷേത്രം",
        nameEn: "Mannarasala Temple",
        location: "ഹരിപ്പാട്, ആലപ്പുഴ ജില്ല (Mannarasala, Alappuzha)",
        purpose: "മടക്കയാത്രയിലെ ക്ഷേത്ര ദർശനം (Temple darshan on return)",
        note: "മണ്ണാറശാല നാഗരാജ ക്ഷേത്രത്തിൽ ദർശനം.",
        mapQuery: "Mannarasala Sree Nagaraja Temple Kerala"
      },
      {
        num: 5,
        nameMl: "അമ്പലപ്പുഴ ശ്രീകൃഷ്ണ സ്വാമി ക്ഷേത്രം",
        nameEn: "Ambalappuzha Temple",
        location: "അമ്പലപ്പുഴ, ആലപ്പുഴ ജില്ല (Ambalappuzha, Alappuzha)",
        purpose: "മടക്കയാത്രയിലെ സമാപന ദർശനം (Final temple darshan)",
        isFinale: true,
        note: "അമ്പലപ്പുഴ ശ്രീകൃഷ്ണ സ്വാമി ദർശനത്തോടെ മടക്കയാത്ര സമാപിക്കുന്നു.",
        mapQuery: "Ambalappuzha Sree Krishna Swamy Temple Kerala"
      }
    ],

    readText:
      "ഘട്ടം മൂന്ന്. മടക്കയാത്ര ഡിസംബർ നാല്. രാവിലെ ഏഴ് മണിക്ക് ശബരിമലയിൽ നിന്ന് മലയിറക്കം ആരംഭിക്കുന്നു. മടക്കയാത്രയിൽ പന്തളം ക്ഷേത്രം, ചക്കുളത്തുകാവ് ക്ഷേത്രം, ഹരിപ്പാട് ക്ഷേത്രം, മണ്ണാറശാല ക്ഷേത്രം, അമ്പലപ്പുഴ ക്ഷേത്രം എന്നിവ ദർശിക്കുന്നു. സ്വാമിയേ ശരണമയ്യപ്പ."
  },

  {
    id: "instructions",
    shortTitle: "നിർദ്ദേശങ്ങൾ",
    headerTitle: "യാത്രാ നിർദ്ദേശങ്ങൾ",
    type: "instructions",
    kicker: "Important Pilgrim Guide • യാത്രാ സഹായി",
    title: "പ്രധാന നിർദ്ദേശങ്ങളും യാത്രാ വിവരങ്ങളും",
    subtitle: "ഭക്ഷണ ഇടവേളകൾ, യാത്രാ ക്രമീകരണങ്ങൾ, സുരക്ഷാ നിർദ്ദേശങ്ങൾ",
    readText:
      "പ്രധാന നിർദ്ദേശങ്ങളും യാത്രാ വിവരങ്ങളും. ഭക്ഷണ ഇടവേളകൾ: ഗുരുവായൂർ, ചോറ്റാനിക്കര എന്നിവിടങ്ങളിൽ അന്നദാനം. കൊടുങ്ങല്ലൂരിൽ ചായ. കടപ്പാട്ടൂരിൽ പ്രഭാതഭക്ഷണം. എരുമേലി ദർശനത്തിന് ശേഷം ഭക്ഷണം. എരുമേലിയിൽ നിന്ന് പമ്പയിലേക്ക് കെ.എസ്.ആർ.ടി.സി ബസ് യാത്രയും തുടർന്ന് മലകയറ്റവും. എല്ലാവരും സംഘത്തോടൊപ്പം ചേർന്ന് യാത്ര ചെയ്യുക."
  }
];

// ==========================================
// STATE AND DOM
// ==========================================

let currentChapterIdx = 0;
let toastTimer = null;

const chapterViewport = document.getElementById("chapterViewport");
const prevChapterBtn = document.getElementById("prevChapterBtn");
const nextChapterBtn = document.getElementById("nextChapterBtn");
const pageDots = document.getElementById("pageDots");
const toastBanner = document.getElementById("toastBanner");
const bookStage = document.getElementById("bookStage");


 // ==========================================
 // TOAST
 // ==========================================

function showToast(message) {
  if (!toastBanner) return;

  toastBanner.textContent = message;
  toastBanner.hidden = false;

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toastBanner.hidden = true;
  }, 2800);
}

// ==========================================
// SHARING
// ==========================================

function buildShareMessage() {
  return (
    "🙏 സ്വാമിയേ ശരണമയ്യപ്പ!\n" +
    "SHARANAM – Digital Yatra 2026\n" +
    "🛕 കൈപ്പുള്ളി വിഷ്ണു (നരസിംഹമൂർത്തി) - വേട്ടേക്കരൻ ക്ഷേത്രം\n" +
    "• ഒന്നാം ദിവസം: ഗുരുവായൂർ മുതൽ ഏറ്റുമാനൂർ വരെ (9 ക്ഷേത്രങ്ങൾ)\n" +
    "• രണ്ടാം ദിവസം: പുലർച്ചെ 4:00 ഏറ്റുമാനൂർ, എരുമേലി, ഭക്ഷണം,പമ്പ, മലകയറ്റം\n" +
    "• മടക്കയാത്ര (ഡിസംബർ 4): രാവിലെ 7:00 മലയിറക്കം, പന്തളം, ചക്കുളത്തുകാവ്, ഹരിപ്പാട്, മണ്ണാറശാല, അമ്പലപ്പുഴ\n" +
    window.location.href
  );
}

function shareToWhatsApp() {
  const url =
    `https://wa.me/?text=${encodeURIComponent(buildShareMessage())}`;

  window.open(url, "_blank", "noopener,noreferrer");
}

function copyGuideLink() {
  const link = window.location.href;
  const input = document.createElement("textarea");

  input.value = link;
  input.setAttribute("readonly", "");
  input.style.position = "fixed";
  input.style.opacity = "0";

  document.body.appendChild(input);
  input.select();

  try {
    document.execCommand("copy");
    showToast("യാത്രാ ലിങ്ക് പകർത്തി (Link Copied)");
  } catch (error) {
    showToast("ലിങ്ക് പകർത്താൻ സാധിച്ചില്ല");
  }

  input.remove();
}

function getGoogleMapsUrl(query) {
  return (
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(query)
  );
}

// ==========================================
// DESTINATION CARD
// ==========================================

function renderDestinationCard(item) {
  const extraClass = item.isFinale
    ? "highlight-finale"
    : item.isOptional
      ? "highlight-optional"
      : "";

  const badges = [
    `<span class="info-badge badge-purpose">🛕 ${item.purpose}</span>`,
    item.foodTag
      ? `<span class="info-badge badge-food">${item.foodTag}</span>`
      : "",
    item.optionalTag
      ? `<span class="info-badge badge-optional">${item.optionalTag}</span>`
      : "",
    item.timeTag
      ? `<span class="info-badge badge-time">${item.timeTag}</span>`
      : ""
  ].filter(Boolean).join("");

  const imagePath = TEMPLE_IMAGES[item.mapQuery] || FALLBACK_IMAGE;

  return `
    <li class="destination-card ${extraClass}">
      <div class="dest-top">
        <span class="dest-num">${item.num}</span>

        <div class="dest-main">
          <div class="dest-name-ml">${item.nameMl}</div>
          <div class="dest-name-en">${item.nameEn}</div>
          <div class="dest-location">📍 ${item.location}</div>
        </div>

        <div class="dest-thumb"
          style="width:120px;height:110px;flex-shrink:0;overflow:hidden;">
          <img
            src="${imagePath}"
            alt="${item.nameEn}"
            loading="lazy"
            style="width:100%;height:100%;object-fit:cover;border-radius:inherit;display:block;"
            onerror="this.onerror=null;this.src=window.SHARANAM_FALLBACK_IMAGE;"
          />
        </div>
      </div>

      <div class="dest-badges">
        ${badges}
      </div>

      <p class="dest-note">${item.note}</p>

      <a
        href="${getGoogleMapsUrl(item.mapQuery)}"
        target="_blank"
        rel="noopener noreferrer"
        class="maps-link-btn"
        aria-label="${item.nameEn} Google Maps വഴി തുറക്കുക"
      >
        <span>🗺️ Google Maps വഴി (Directions)</span>
      </a>
    </li>
  `;
}

window.SHARANAM_FALLBACK_IMAGE = FALLBACK_IMAGE;

// ==========================================
// OVERVIEW
// ==========================================

function renderOverviewChapter() {
  return `
    <article class="book-leaf cover-leaf">
      <div class="cover-hero">
        <span class="sacred-pill">✦ സ്വാമിയേ ശരണമയ്യപ്പ ✦</span>

        <h1 class="cover-main-title">
          ശരണം – ശബരിമല യാത്ര 2026
        </h1>

        <p class="cover-en-title">
          SHARANAM – Digital Yatra 2026
        </p>

        <p class="cover-temple-subtitle">
          കൈപ്പുള്ളി വിഷ്ണു (നരസിംഹമൂർത്തി) - വേട്ടേക്കരൻ ക്ഷേത്രം
        </p>

        <p class="cover-desc">
          ഭക്തജനങ്ങൾക്ക് ശബരിമല തീർത്ഥാടന ക്രമം,
          ക്ഷേത്ര ദർശനങ്ങൾ,Google Maps എന്നിവ ലളിതമായി
          ഒരിടത്ത് ലഭ്യമാക്കുന്ന ഡിജിറ്റൽ യാത്രാ ഗ്രന്ഥം.
        </p>

        <div class="cover-illustration">
          ${SVG_ASSETS.coverScene}
        </div>
      </div>

      <h2 class="overview-section-title">
        <span>📖</span>
        <span>യാത്രാ സംഗ്രഹം (3 ഘട്ടങ്ങൾ)</span>
      </h2>

      <div class="phase-summary-grid">
        <button type="button" class="phase-card" data-jump-chapter="1">
          <div>
            <span class="phase-kicker">First Day • ഘട്ടം 1</span>
            <div class="phase-name">
              ഒന്നാം ദിവസം – ക്ഷേത്ര ദർശനങ്ങൾ
            </div>
            <div class="phase-meta">
              ഗുരുവായൂർ മുതൽ ഏറ്റുമാനൂർ വരെയുള്ള 9 പുണ്യക്ഷേത്രങ്ങൾ
            </div>
          </div>
          <span class="phase-arrow" aria-hidden="true">→</span>
        </button>

        <button type="button" class="phase-card" data-jump-chapter="2">
          <div>
            <span class="phase-kicker">Second Day • ഘട്ടം 2</span>
            <div class="phase-name">
              രണ്ടാം ദിവസം – ശബരിമല യാത്ര
            </div>
            <div class="phase-meta">
              രാവിലെ 4:00 ഏറ്റുമാനൂർ, എരുമേലി പേട്ട,
              പമ്പ, മലകയറ്റം
            </div>
          </div>
          <span class="phase-arrow" aria-hidden="true">→</span>
        </button>

        <button type="button" class="phase-card" data-jump-chapter="4">
          <div>
            <span class="phase-kicker">
              Return Journey • ഡിസംബർ 4
            </span>
            <div class="phase-name">
              മടക്കയാത്ര – ഡിസംബർ 4
            </div>
            <div class="phase-meta">
              രാവിലെ 7:00 മലയിറക്കം • പന്തളം,
              ചക്കുളത്തുകാവ്, ഹരിപ്പാട്, മണ്ണാറശാല, അമ്പലപ്പുഴ
            </div>
          </div>
          <span class="phase-arrow" aria-hidden="true">→</span>
        </button>
      </div>

      <button type="button" class="navigator-overview-link" data-jump-chapter="3">
        <span>🧭 അടുത്ത ക്ഷേത്രം – Next Stop Navigator</span>
        <span aria-hidden="true">→</span>
      </button>
    </article>
  `;
}

 // ==========================================
 // PHASE 1
 // ==========================================

function renderPhase1Chapter(ch) {
  return `
    <article class="book-leaf parchment-leaf">
      <div class="chapter-banner">
        <div>
          <span class="chapter-kicker">${ch.kicker}</span>
          <h1 class="chapter-title">${ch.title}</h1>
          <p class="chapter-subtitle">${ch.subtitle}</p>
        </div>
        ${SVG_ASSETS.nilavilakku}
      </div>

      <div class="section-divider">
        <span class="section-divider-title">
          യാത്രാ ക്രമത്തിലുള്ള ക്ഷേത്രങ്ങൾ
        </span>
        <span class="section-count-tag">9 ക്ഷേത്രങ്ങൾ</span>
      </div>

      <ol class="destination-list">
        ${ch.temples.map(renderDestinationCard).join("")}
      </ol>

      <div class="blessing-footer-card">
        <div class="blessing-chant">
          സ്വാമിയേ ശരണമയ്യപ്പ
        </div>
        <div class="blessing-sub">
          ഒന്നാം ദിവസത്തെ ദർശനങ്ങൾ ഏറ്റുമാനൂരിൽ പൂർത്തിയാകുന്നു
        </div>
      </div>
    </article>
  `;
}

// ==========================================
// PHASE 2
// ERUMELI -> FOOD -> KSRTC -> PAMBA
// ==========================================

function renderPhase2Chapter(ch) {
  return `
    <article class="book-leaf parchment-leaf">
      <div class="chapter-banner">
        <div>
          <span class="chapter-kicker">${ch.kicker}</span>
          <h1 class="chapter-title">${ch.title}</h1>
          <p class="chapter-subtitle">${ch.subtitle}</p>
        </div>
        ${SVG_ASSETS.nilavilakku}
      </div>

      <div class="section-divider">
        <span class="section-divider-title">
          പുലർച്ചെ ദർശനവും എരുമേലി യാത്രയും
        </span>
        <span class="section-count-tag">
          രാവിലെ 4:00 മുതൽ
        </span>
      </div>

      <ol class="destination-list">
        ${ch.morningStops.map(renderDestinationCard).join("")}
      </ol>

      <!-- FOOD SECTION AFTER ERUMELI -->
      <div class="special-stop-card food-card">
        <div class="stop-header">
          <span class="stop-icon" aria-hidden="true">🍛</span>
          <div>
            <div class="stop-title">ഭക്ഷണം</div>
            <div class="stop-subtitle">Food Stop</div>
          </div>
        </div>

        <p class="stop-body">
          എരുമേലി പേട്ടതുള്ളലിനും ക്ഷേത്ര ദർശനത്തിനും
          ശേഷം ഭക്ഷണം കഴിക്കുന്നു.
        </p>
      </div>

      <!-- KSRTC TRANSPORT -->
      <div class="special-stop-card transport-card">
        <div class="stop-header">
          <span class="stop-icon" aria-hidden="true">🚌</span>
          <div>
            <div class="stop-title">
              എരുമേലിയിൽ നിന്ന് പമ്പയിലേക്ക് KSRTC ബസ് യാത്ര
            </div>
            <div class="stop-subtitle">
              Travel from Erumeli to Pamba by KSRTC
            </div>
          </div>
        </div>

        <img src="assets/ksrtc.webp" alt="KSRTC bus" class="special-stop-image" loading="lazy" onerror="this.style.display='none'" />

        <p class="stop-body">
          എരുമേലി പേട്ടതുള്ളലിനും ക്ഷേത്ര ദർശനത്തിനും
          ഭക്ഷണത്തിനും ശേഷം KSRTC ബസിൽ പമ്പയിലേക്ക്
          യാത്ര തിരിക്കുന്നു.
        </p>

        <a
          href="${getGoogleMapsUrl("Erumeli KSRTC Bus Stand to Pamba Kerala")}"
          target="_blank"
          rel="noopener noreferrer"
          class="dark-maps-btn"
        >
          <span>
            🗺️ എരുമേലി – പമ്പ റൂട്ട് (Google Maps)
          </span>
        </a>
      </div>

      <!-- PAMBA WITHOUT FOOD -->
      <ol class="destination-list">
        ${renderDestinationCard(ch.pambaStop)}
      </ol>

      <!-- TREKKING -->
      <div class="special-stop-card trekking-card">
        <div class="stop-header">
          <span class="stop-icon" aria-hidden="true">⛰️</span>
          <div>
            <div class="stop-title">
              പമ്പയിൽ നിന്ന് ശബരിമലയിലേക്ക് മലകയറ്റം
            </div>
            <div class="stop-subtitle">
              Trekking from Pamba to Sabarimala Sannidhanam
            </div>
          </div>
        </div>

        <img src="assets/malakkayattam.png" alt="Sabarimala trekking" class="special-stop-image" loading="lazy" onerror="this.style.display='none'" />

        <p class="stop-body">
          പമ്പയിലെ സ്നാനവും ബലിതർപ്പണവും കഴിഞ്ഞ്
          ശരണം വിളികളോടെ നീലിമലയും അപ്പാച്ചിമേടും കടന്ന് അയ്യന്റെ സന്നിധിയിലേക്ക്.
        </p>

        <a
          href="${getGoogleMapsUrl("Sabarimala Sannidhanam Temple Kerala")}"
          target="_blank"
          rel="noopener noreferrer"
          class="dark-maps-btn"
        >
          <span>
            🗺️ ശബരിമല സന്നിധാനം (Google Maps)
          </span>
        </a>
      </div>
    </article>
  `;
}

// ==========================================
// PHASE 3
// ==========================================

function renderPhase3Chapter(ch) {
  return `
    <article class="book-leaf parchment-leaf">
      <div class="chapter-banner">
        <div>
          <span class="chapter-kicker">${ch.kicker}</span>
          <h1 class="chapter-title">${ch.title}</h1>
          <p class="chapter-subtitle">${ch.subtitle}</p>
        </div>
        ${SVG_ASSETS.nilavilakku}
      </div>

      <div
        class="special-stop-card transport-card"
        style="margin-top:0;"
      >
        <div class="stop-header">
          <span class="stop-icon" aria-hidden="true">🌄</span>
          <div>
            <div class="stop-title">
              രാവിലെ 7:00 – മലയിറക്കം ആരംഭിക്കുന്നു
            </div>
            <div class="stop-subtitle">
              7:00 AM – Begin descending from Sabarimala (December 4)
            </div>
          </div>
        </div>

        <p class="stop-body">
          ഡിസംബർ 4 രാവിലെ 7:00 മണിക്ക് ശബരിമല
          സന്നിധാനത്ത് നിന്ന് പമ്പയിലേക്ക് മലയിറക്കം
          ആരംഭിക്കുന്നു.
        </p>
      </div>

      <div class="section-divider">
        <span class="section-divider-title">
          മടക്കയാത്രയിലെ ക്ഷേത്ര ദർശനങ്ങൾ
        </span>
        <span class="section-count-tag">5 ക്ഷേത്രങ്ങൾ</span>
      </div>

      <ol class="destination-list">
        ${ch.returnTemples.map(renderDestinationCard).join("")}
      </ol>

      <div class="blessing-footer-card">
        <div class="blessing-chant">
          സ്വാമിയേ ശരണമയ്യപ്പ
        </div>
        <div class="blessing-sub">
          സമ്പൂർണ്ണ തീർത്ഥാടന സമർപ്പണം • SHARANAM 2026
        </div>
      </div>
    </article>
  `;
}

// ==========================================
// INSTRUCTIONS
// ==========================================

function renderInstructionsChapter(ch) {
  return `
    <article class="book-leaf parchment-leaf">
      <div class="chapter-banner">
        <div>
          <span class="chapter-kicker">${ch.kicker}</span>
          <h1 class="chapter-title">${ch.title}</h1>
          <p class="chapter-subtitle">${ch.subtitle}</p>
        </div>
        ${SVG_ASSETS.nilavilakku}
      </div>

      <div class="guide-block">
        <h2 class="guide-block-title">
          🍛 ഭക്ഷണവും വിശ്രമ ഇടവേളകളും (Food &amp; Rest Stops)
        </h2>

        <ul class="guide-list">
          <li>
            <strong>ഗുരുവായൂർ (ഒന്നാം ദിവസം):</strong>
            ക്ഷേത്ര ദർശനവും അന്നദാനവും.
          </li>
          <li>
            <strong>കൊടുങ്ങല്ലൂർ (ഒന്നാം ദിവസം):</strong>
            ക്ഷേത്ര ദർശനത്തിന് ശേഷം ചായ ഇടവേള.
          </li>
          <li>
            <strong>ചോറ്റാനിക്കര (ഒന്നാം ദിവസം):</strong>
            ദേവീ ദർശനവും അന്നദാനവും.
          </li>
          <li>
            <strong>കടപ്പാട്ടൂർ (രണ്ടാം ദിവസം):</strong>
            ദർശനവും പ്രഭാതഭക്ഷണവും.
          </li>
          <li>
            <strong>എരുമേലി (രണ്ടാം ദിവസം):</strong>
            പേട്ടതുള്ളലിനും ദർശനത്തിനും ശേഷം ഭക്ഷണം.
          </li>
        </ul>
      </div>

      <div class="guide-block">
        <h2 class="guide-block-title">
          🚌 യാത്രാ ക്രമീകരണങ്ങൾ (Transportation &amp; Trekking)
        </h2>

        <ul class="guide-list">
          <li>
            <strong>KSRTC യാത്ര:</strong>
            എരുമേലിയിൽ നിന്ന് പമ്പയിലേക്ക് KSRTC ബസിലാണ്
            യാത്ര ചെയ്യുന്നത്.
          </li>
          <li>
            <strong>മലകയറ്റം:</strong>
            പമ്പയിൽ നിന്ന് ശബരിമല സന്നിധാനത്തേക്ക്
            കാൽനടയായി മലകയറ്റം. പ്രായമായവർ സാവധാനം
            വിശ്രമിച്ച് മാത്രം മലകയറുക.
          </li>
          <li>
            <strong>സമയക്രമം:</strong>
            രണ്ടാം ദിവസം പുലർച്ചെ 4:00 മണിക്ക് ഏറ്റുമാനൂർ
            ദർശനവും, ഡിസംബർ 4 രാവിലെ 7:00 മണിക്ക്
            മലയിറക്കവും ആരംഭിക്കുന്നു.
          </li>
        </ul>
      </div>

      <div class="guide-block">
        <h2 class="guide-block-title">
          🙏 ഭക്തർക്കുള്ള പൊതു നിർദ്ദേശങ്ങൾ (Pilgrim Reminders)
        </h2>

        <ul class="guide-list">
          <li>
            യാത്രയിലുടനീളം സംഘാംഗങ്ങളോടൊപ്പം ചേർന്ന്
            സഞ്ചരിക്കുക; തിരക്കുള്ള ഇടങ്ങളിൽ പരസ്പരം ശ്രദ്ധിക്കുക.
          </li>
          <li>
            ഇരുമുടിക്കെട്ട്, തിരിച്ചറിയൽ രേഖകൾ, അത്യാവശ്യ
            മരുന്നുകൾ, കുടിവെള്ളം എന്നിവ സുരക്ഷിതമായി
            കൈവശം കരുതുക.
          </li>
          <li>
            ക്ഷേത്ര ആചാരങ്ങളും വനംവകുപ്പിന്റെയും പോലീസിന്റെയും
            നിർദ്ദേശങ്ങളും കർശനമായി പാലിക്കുക.
          </li>
          <li>
            പ്ലാസ്റ്റിക് മാലിന്യങ്ങൾ പമ്പയിലും കാനനപാതയിലും
            നിക്ഷേപിക്കാതെ ശുചിത്വം പാലിക്കുക.
          </li>
        </ul>
      </div>

      <div class="share-strip">
        <button
          type="button"
          class="share-action-btn whatsapp-btn"
          id="guideWhatsappBtn"
        >
          <span>💬 WhatsApp വഴി അയക്കുക</span>
        </button>

        <button
          type="button"
          class="share-action-btn copylink-btn"
          id="guideCopyBtn"
        >
          <span>🔗 ലിങ്ക് പകർത്തുക</span>
        </button>
      </div>

      <div class="blessing-footer-card">
        <div class="blessing-chant">
          സ്വാമിയേ ശരണമയ്യപ്പ
        </div>
        <div class="blessing-sub">
          എല്ലാ ഭക്തർക്കും സുഖദർശനവും ഐശ്വര്യവും നേരുന്നു
        </div>
      </div>
    </article>
  `;
}

 // ==========================================
 // NEXT STOP NAVIGATOR
 // Uses existing itinerary data and developer-managed photos.
 // No visited-state or progress tracking.
 // ==========================================

const NAV_STOPS = [
  ...CHAPTERS.find(ch => ch.type === "phase1").temples.map(t => ({ ...t, phase: "ഒന്നാം ദിവസം" })),
  ...CHAPTERS.find(ch => ch.type === "phase2").morningStops.map(t => ({ ...t, phase: "രണ്ടാം ദിവസം" })),
  { id: "erumeli-food", nameMl: "ഭക്ഷണ ഇടവേള", nameEn: "Food Stop", phase: "രണ്ടാം ദിവസം", purpose: "എരുമേലി ദർശനത്തിന് ശേഷം ഭക്ഷണം", icon: "🍛", mapQuery: "Erumeli Kerala" },
  { id: "ksrtc", nameMl: "KSRTC ബസ് യാത്ര", nameEn: "Erumeli to Pamba", phase: "രണ്ടാം ദിവസം", purpose: "എരുമേലിയിൽ നിന്ന് പമ്പയിലേക്ക് KSRTC", icon: "🚌", mapQuery: "Erumeli KSRTC Bus Stand Kerala" },
  { ...CHAPTERS.find(ch => ch.type === "phase2").pambaStop, phase: "രണ്ടാം ദിവസം" },
  { id: "sannidhanam", nameMl: "ശബരിമല സന്നിധാനം", nameEn: "Sabarimala Sannidhanam", phase: "രണ്ടാം ദിവസം", purpose: "പമ്പയിൽ നിന്ന് മലകയറ്റം", icon: "⛰️", mapQuery: "Sabarimala Sannidhanam Temple Kerala" },
  ...CHAPTERS.find(ch => ch.type === "phase3").returnTemples.map(t => ({ ...t, phase: "മടക്കയാത്ര • ഡിസംബർ 4" }))
];

let navigatorStopIndex = 0;
let navigatorSkipVaikom = false;

function getNavigatorStops() {
  return navigatorSkipVaikom
    ? NAV_STOPS.filter(stop => !stop.isOptional)
    : NAV_STOPS;
}

function navigatorImage(stop) {
  const path = TEMPLE_IMAGES[stop.mapQuery];
  return path
    ? `<img src="${path}" alt="${stop.nameEn}" loading="lazy" onerror="this.onerror=null;this.src=window.SHARANAM_FALLBACK_IMAGE;">`
    : `<div class="navigator-symbol" aria-hidden="true">${stop.icon || "🛕"}</div>`;
}

function renderNavigatorChapter(ch) {
  const stops = getNavigatorStops();
  const selected = Math.min(navigatorStopIndex, stops.length - 1);
  const current = stops[selected];
  const next = stops[selected + 1];
  return `
    <article class="book-leaf parchment-leaf">
      <div class="chapter-banner">
        <div>
          <span class="chapter-kicker">${ch.kicker}</span>
          <h1 class="chapter-title">${ch.title}</h1>
          <p class="chapter-subtitle">${ch.subtitle}</p>
        </div>
        ${SVG_ASSETS.nilavilakku}
      </div>
      <section class="navigator-panel">
        <p class="navigator-caption">📍 ഇപ്പോൾ ഏത് സ്ഥലത്താണ്?</p>
        <label class="navigator-label" for="navigatorCurrent">നിലവിലെ സ്ഥലം തിരഞ്ഞെടുക്കൂ</label>
        <select id="navigatorCurrent" class="navigator-select">
          ${stops.map((stop, i) => `<option value="${i}" ${i === selected ? "selected" : ""}>${stop.phase} • ${stop.nameMl}</option>`).join("")}
        </select>
        <label class="navigator-toggle">
          <input type="checkbox" id="navigatorSkipVaikom" ${navigatorSkipVaikom ? "checked" : ""}>
          <span>വൈക്കം സന്ദർശനം ഒഴിവാക്കുക (Optional)</span>
        </label>
        <div class="navigator-current">
          <span>നിലവിലെ സ്ഥലം</span>
          <strong>${current.nameMl}</strong>
          <small>${current.phase}</small>
        </div>
        ${next ? `
          <div class="navigator-next">
            <span class="navigator-eyebrow">✦ അടുത്ത ലക്ഷ്യസ്ഥാനം</span>
            <div class="navigator-photo">${navigatorImage(next)}</div>
            <h2>${next.nameMl}</h2>
            <p>${next.nameEn}</p>
            <div class="navigator-purpose">${next.purpose || next.note || "യാത്രയിലെ അടുത്ത സ്ഥലം"}</div>
            ${next.foodTag ? `<div class="navigator-food">${next.foodTag}</div>` : ""}
            ${next.location ? `<div class="navigator-location">📍 ${next.location}</div>` : ""}
            <a class="navigator-map-btn" href="https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(current.mapQuery)}&destination=${encodeURIComponent(next.mapQuery)}&travelmode=${next.id === "sannidhanam" ? "walking" : "driving"}" target="_blank" rel="noopener noreferrer">🗺️ Google Maps Directions ↗</a>
          </div>
          <button type="button" class="navigator-next-btn" id="navigatorNextStop">അടുത്ത സ്ഥലം കാണുക →</button>
        ` : `<div class="navigator-finished">🙏 യാത്രാക്രമത്തിലെ അവസാന സ്ഥലം. സ്വാമിയേ ശരണമയ്യപ്പ.</div>`}
        <p class="navigator-note">ഇത് യാത്രാക്രമം കാണിക്കുന്ന സഹായിയാണ്. GPS tracking അല്ല; Maps-ൽ കാണുന്ന route യാത്രയ്ക്ക് മുമ്പ് പരിശോധിക്കുക.</p>
      </section>
    </article>
  `;
}

function bindNavigatorEvents() {
  const selector = document.getElementById("navigatorCurrent");
  const skip = document.getElementById("navigatorSkipVaikom");
  const next = document.getElementById("navigatorNextStop");
  selector?.addEventListener("change", () => {
    navigatorStopIndex = Number(selector.value);
    renderChapter(currentChapterIdx, false);
  });
  skip?.addEventListener("change", () => {
    const oldStop = getNavigatorStops()[navigatorStopIndex];
    navigatorSkipVaikom = skip.checked;
    const newIndex = getNavigatorStops().findIndex(s => s.mapQuery === oldStop.mapQuery && s.nameMl === oldStop.nameMl);
    navigatorStopIndex = Math.max(0, newIndex);
    renderChapter(currentChapterIdx, false);
  });
  next?.addEventListener("click", () => {
    navigatorStopIndex = Math.min(navigatorStopIndex + 1, getNavigatorStops().length - 1);
    renderChapter(currentChapterIdx, false);
  });
}
 
 // ==========================================
 // CHAPTER RENDER CONTROLLER
 // ==========================================

function renderChapter(index, scrollTop = true) {
  if (index < 0 || index >= CHAPTERS.length) return;
  if (!chapterViewport) return;

  currentChapterIdx = index;

  const ch = CHAPTERS[index];
  let html = "";

  if (ch.type === "overview") {
    html = renderOverviewChapter();
  } else if (ch.type === "phase1") {
    html = renderPhase1Chapter(ch);
  } else if (ch.type === "phase2") {
    html = renderPhase2Chapter(ch);
  } else if (ch.type === "navigator") {
    html = renderNavigatorChapter(ch);
  } else if (ch.type === "phase3") {
    html = renderPhase3Chapter(ch);
  } else {
    html = renderInstructionsChapter(ch);
  }

  chapterViewport.innerHTML = html;

  if (prevChapterBtn) {
    prevChapterBtn.disabled = index === 0;
  }

  if (nextChapterBtn) {
    nextChapterBtn.disabled = index === CHAPTERS.length - 1;
  }

  if (pageDots) {
    Array.from(pageDots.children).forEach((dot, idx) => {
      dot.classList.toggle("active", idx === index);
      dot.setAttribute("aria-selected", String(idx === index));
    });
  }

  bindDynamicEvents();

  if (ch.type === "navigator") {
    bindNavigatorEvents();
  }

  if (scrollTop) {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
}

// ==========================================
// MOBILE BOTTOM NAVIGATION
// ==========================================

function initBottomNavigation() {
  const tabs = document.querySelectorAll(".bottom-tab");

  function updateActiveTab(index) {
    tabs.forEach((tab) => {
      const active = Number(tab.dataset.chapter) === index;
      tab.classList.toggle("active", active);
      tab.setAttribute("aria-current", active ? "page" : "false");
    });
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const index = Number(tab.dataset.chapter);

      if (Number.isInteger(index)) {
        renderChapter(index);
        updateActiveTab(index);
      }
    });
  });

  // Sync active tab when navigating through other controls.
  const originalRenderChapter = renderChapter;

  renderChapter = function(index, scrollTop = true) {
    originalRenderChapter(index, scrollTop);
    updateActiveTab(currentChapterIdx);
  };

  updateActiveTab(currentChapterIdx);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initBottomNavigation);
} else {
  initBottomNavigation();
}

// ==========================================
// DYNAMIC BUTTON EVENTS
// ==========================================

function bindDynamicEvents() {
  if (!chapterViewport) return;

  chapterViewport
    .querySelectorAll("[data-jump-chapter]")
    .forEach(btn => {
      btn.addEventListener("click", () => {
        const target = Number.parseInt(
          btn.dataset.jumpChapter,
          10
        );

        if (Number.isInteger(target)) {
          renderChapter(target);
        }
      });
    });

  const coverWa = document.getElementById("coverWhatsappBtn");
  const coverCp = document.getElementById("coverCopyBtn");
  const guideWa = document.getElementById("guideWhatsappBtn");
  const guideCp = document.getElementById("guideCopyBtn");

  if (coverWa) {
    coverWa.addEventListener("click", shareToWhatsApp);
  }

  if (coverCp) {
    coverCp.addEventListener("click", copyGuideLink);
  }

  if (guideWa) {
    guideWa.addEventListener("click", shareToWhatsApp);
  }

  if (guideCp) {
    guideCp.addEventListener("click", copyGuideLink);
  }
}

// ==========================================
// BOTTOM NAVIGATION
// ==========================================

function buildNavigationChrome() {
  if (!pageDots) return;

  pageDots.innerHTML = "";

  CHAPTERS.forEach((ch, idx) => {
    const dot = document.createElement("button");

    dot.type = "button";
    dot.className = "dot-btn";
    dot.setAttribute("role", "tab");
    dot.setAttribute("aria-label", ch.shortTitle);

    dot.addEventListener("click", () => {
      renderChapter(idx);
    });

    pageDots.appendChild(dot);
  });
}

// ==========================================
// MOBILE SWIPE
// ==========================================

function initSwipeGestures() {
  if (!bookStage) return;

  let startX = 0;
  let startY = 0;
  let tracking = false;

  bookStage.addEventListener(
    "touchstart",
    e => {
      if (e.touches.length !== 1) return;

      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      tracking = true;
    },
    { passive: true }
  );

  bookStage.addEventListener(
    "touchend",
    e => {
      if (!tracking || e.changedTouches.length !== 1) return;

      tracking = false;

      const dx = e.changedTouches[0].clientX - startX;
      const dy = e.changedTouches[0].clientY - startY;

      if (
        Math.abs(dx) > 65 &&
        Math.abs(dx) > Math.abs(dy) * 1.5
      ) {
        if (
          dx < 0 &&
          currentChapterIdx < CHAPTERS.length - 1
        ) {
          renderChapter(currentChapterIdx + 1);
        } else if (
          dx > 0 &&
          currentChapterIdx > 0
        ) {
          renderChapter(currentChapterIdx - 1);
        }
      }
    },
    { passive: true }
  );
}

// ==========================================
// INITIALIZE
// ==========================================

function initApp() {
  if (!chapterViewport) {
    console.error("chapterViewport not found");
    return;
  }

  buildNavigationChrome();
  initSwipeGestures();
  renderChapter(0, false);

  if (prevChapterBtn) {
    prevChapterBtn.addEventListener("click", () => {
      if (currentChapterIdx > 0) {
        renderChapter(currentChapterIdx - 1);
      }
    });
  }

  if (nextChapterBtn) {
    nextChapterBtn.addEventListener("click", () => {
      if (currentChapterIdx < CHAPTERS.length - 1) {
        renderChapter(currentChapterIdx + 1);
      }
    });
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}
