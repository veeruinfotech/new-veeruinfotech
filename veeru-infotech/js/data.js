// ============================================================
// SERVICE DATA
// ============================================================
const serviceData = {
  ac: {
    title: 'AC Service & Repair', icon: 'fa-snowflake', subtitle: 'Installation, gas refill, maintenance – all brands.',
    image: '❄️', photo: 'https://images.unsplash.com/photo-1631545806609-b9c3a3b0f0c9?w=800&q=80&auto=format&fit=crop',
    shortDesc: 'Professional AC service for split, window, and cassette units. Our certified technicians handle gas refilling, deep cleaning, installation, and complete repair of all brands including Daikin, LG, Samsung, Voltas, Blue Star, Hitachi, and more.',
    included: ['Complete AC diagnosis & inspection','Gas pressure check & refilling','Indoor & outdoor unit deep cleaning','Filter cleaning & sanitization','Drain pipe cleaning & unclogging','Electrical component check','Split & window AC installation','Remote & PCB troubleshooting','Compressor testing & repair','30-day service warranty'],
    priceLabel: 'Starting from', priceValue: '₹499', priceUnit: '/ visit',
    quickFeatures: ['Free diagnosis with paid visit','All brands supported','Same-day service available','Genuine spare parts only','Certified technicians'],
    chargeTable: [
      { service: 'Basic Visit & Diagnosis', desc: 'Technician visit with full AC inspection', price: '₹250' },
      { service: 'AC Deep Cleaning (Split)', desc: 'Indoor & outdoor unit jet cleaning', price: '₹599' },
      { service: 'AC Deep Cleaning (Window)', desc: 'Full service with filter & coil cleaning', price: '₹499' },
      { service: 'Gas Refill (R22)', desc: 'R22 gas top-up with leak test', price: '₹1,800' },
      { service: 'Gas Refill (R32/R410a)', desc: 'Eco-friendly gas top-up with leak test', price: '₹2,200' },
      { service: 'AC Installation (Split)', desc: 'Includes copper piping up to 3m', price: '₹1,499' },
      { service: 'AC Uninstallation', desc: 'Safe removal with gas recovery', price: '₹799' },
      { service: 'PCB Repair', desc: 'Circuit board repair or replacement', price: '₹1,200' },
      { service: 'Compressor Repair', desc: 'Compressor replacement (part extra)', price: '₹1,500' },
      { service: 'Annual Maintenance Contract', desc: '4 services/year + priority support', price: '₹2,999' }
    ],
    steps: ['Call or WhatsApp us to book your AC service','We confirm the appointment within 10 minutes','Certified technician arrives on time with tools','Full diagnosis done, quote shared before work','Service completed & tested in front of you','Payment accepted via cash / UPI / card'],
    faqs: [
      { q: 'How often should I service my AC?', a: 'We recommend servicing your AC at least twice a year — once before summer and once after the monsoon season.' },
      { q: 'Do you provide a warranty on repairs?', a: 'Yes! All our repairs come with a 30-day service warranty on workmanship. Spare parts carry the manufacturer warranty.' },
      { q: 'Which brands do you service?', a: 'We service all major brands including Daikin, LG, Samsung, Voltas, Blue Star, Hitachi, Carrier, Panasonic, and more.' },
      { q: 'Is gas refilling covered in service?', a: 'No, gas refilling is charged separately as it is a material cost.' }
    ],
    related: ['tv', 'fridge', 'cctv']
  },
  tv: {
    title: 'TV Repair', icon: 'fa-tv', subtitle: 'LED, LCD, Smart TV – screen issues, board repair.',
    image: '📺', photo: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&q=80&auto=format&fit=crop',
    shortDesc: 'Expert TV repair for LED, LCD, OLED, QLED, and Smart TVs. We handle screen replacement, backlight issues, motherboard repair, sound problems, and power supply faults across all major brands.',
    included: ['Free TV diagnosis at doorstep','LED / LCD panel repair','Screen replacement (if needed)','Backlight & LED strip repair','Motherboard & chip level repair','Power supply board repair','Sound & speaker troubleshooting','HDMI / USB port repair','Smart TV software reset & update','Wall mount installation','30-day service warranty'],
    priceLabel: 'Starting from', priceValue: '₹399', priceUnit: '/ visit',
    quickFeatures: ['Doorstep diagnosis','All brands & sizes','Chip level repair available','Genuine spare parts','Pick-up & drop for major repair'],
    chargeTable: [
      { service: 'Basic Visit & Diagnosis', desc: 'Technician visit with full TV inspection', price: '₹250' },
      { service: 'LED TV Panel Repair', desc: 'Panel repair for lines, blur, or half display', price: '₹899' },
      { service: 'Screen Replacement (32")', desc: 'New LED panel for 32-inch TV', price: '₹3,500' },
      { service: 'Screen Replacement (43")', desc: 'New LED panel for 43-inch TV', price: '₹5,500' },
      { service: 'Backlight Repair', desc: 'LED strip replacement with new strips', price: '₹1,200' },
      { service: 'Motherboard Repair', desc: 'Circuit board repair for power/no display', price: '₹1,499' },
      { service: 'Power Supply Repair', desc: 'SMPS board repair', price: '₹899' },
      { service: 'Sound Issue Repair', desc: 'Speaker or audio IC replacement', price: '₹699' },
      { service: 'HDMI / USB Port Repair', desc: 'Port replacement or repair', price: '₹599' },
      { service: 'Wall Mount Installation', desc: 'Includes standard bracket (up to 55")', price: '₹499' }
    ],
    steps: ['Book a TV repair slot online or via call','Share the TV issue & model over WhatsApp','Technician arrives with diagnostic tools','Free diagnosis done, quote shared upfront','Repair completed (same-day for minor issues)','30-day warranty card provided'],
    faqs: [
      { q: 'Can you repair a TV with a cracked screen?', a: 'Yes! We replace the entire panel.' },
      { q: 'Do you repair Smart TVs?', a: 'Absolutely. We repair all Smart TVs including Android TV, WebOS, Tizen, and Google TV.' },
      { q: 'How long does a typical TV repair take?', a: 'Minor repairs are same-day. Major repairs take 2-3 days.' },
      { q: 'Do you offer pick-up and drop?', a: 'Yes, free pick-up and drop within Gandhinagar city limits.' }
    ],
    related: ['ac', 'laptop', 'chip']
  },
  fridge: {
    title: 'Refrigerator Repair', icon: 'fa-temperature-low', subtitle: 'Cooling issues, compressor, thermostat – quick fix.',
    image: '🧊', photo: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=800&q=80&auto=format&fit=crop',
    shortDesc: 'Complete refrigerator repair services for single door, double door, side-by-side, and deep freezers.',
    included: ['Free fridge diagnosis at home','Gas charging & leak repair','Compressor testing & replacement','Thermostat replacement','Defrost system repair','Cooling coil cleaning','Door seal replacement','PCB & relay repair','Deep freezer repair','30-day service warranty'],
    priceLabel: 'Starting from', priceValue: '₹399', priceUnit: '/ visit',
    quickFeatures: ['Home visit service','All brands & models','Genuine spare parts','Same-day minor repairs','Warranty on workmanship'],
    chargeTable: [
      { service: 'Basic Visit & Diagnosis', desc: 'Technician visit with fridge inspection', price: '₹250' },
      { service: 'Gas Charging (Single Door)', desc: 'R134a / R600a gas with leak seal', price: '₹1,500' },
      { service: 'Gas Charging (Double Door)', desc: 'Includes filter drier replacement', price: '₹1,800' },
      { service: 'Compressor Replacement', desc: 'New compressor (part extra)', price: '₹1,999' },
      { service: 'Thermostat Replacement', desc: 'New thermostat with calibration', price: '₹799' },
      { service: 'Defrost Timer Repair', desc: 'Timer / defrost system repair', price: '₹699' },
      { service: 'Door Seal Replacement', desc: 'New magnetic gasket (per door)', price: '₹899' },
      { service: 'PCB Repair', desc: 'Control board repair or replacement', price: '₹1,200' },
      { service: 'Cooling Coil Cleaning', desc: 'Deep cleaning of condenser coils', price: '₹499' }
    ],
    steps: ['Book your fridge repair online or via call','Share the issue','Technician arrives with diagnostic kit','Free diagnosis + transparent quote','Repair done on the spot','Warranty card provided after service'],
    faqs: [
      { q: 'My fridge is not cooling. What could be wrong?', a: 'Common causes include gas leakage, faulty thermostat, blocked capillary, or compressor failure.' },
      { q: 'How long does gas charging take?', a: 'Typically 1-2 hours at your home.' },
      { q: 'Do you repair deep freezers?', a: 'Yes, all types including chest and upright freezers.' },
      { q: 'Is the compressor covered under warranty?', a: 'New compressor comes with 1-year manufacturer warranty.' }
    ],
    related: ['ac', 'tv', 'cctv']
  },
  cctv: {
    title: 'CCTV Installation & Repair', icon: 'fa-video', subtitle: 'Site survey, wiring, DVR setup, and mobile viewing.',
    image: '📹', photo: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80&auto=format&fit=crop',
    shortDesc: 'Complete CCTV installation, repair and setup for homes, shops, offices, and factories.',
    included: ['Free site survey & consultation','Camera installation (dome/bullet)','DVR / NVR setup & configuration','Cable wiring & conduit work','Power supply installation','Mobile app setup (iOS/Android)','Remote viewing configuration','Hard disk installation','Night vision testing','1-year installation warranty'],
    priceLabel: 'Starting from', priceValue: '₹500', priceUnit: '/ camera',
    quickFeatures: ['Free site survey','All brands available','Mobile viewing setup','Neat & hidden wiring','AMC plans available'],
    chargeTable: [
      { service: 'Site Survey & Consultation', desc: 'Free visit to plan camera positions', price: 'FREE' },
      { service: 'Camera Installation (per camera)', desc: 'Includes wiring up to 20m', price: '₹500' },
      { service: 'DVR Setup & Configuration', desc: '4/8/16 channel DVR setup', price: '₹800' },
      { service: 'NVR Setup & Configuration', desc: 'IP camera NVR setup', price: '₹1,200' },
      { service: 'Mobile App Setup', desc: 'Remote viewing on iOS/Android', price: '₹300' },
      { service: 'Extra Cable (per meter)', desc: '3+1 CCTV cable with conduit', price: '₹25' },
      { service: 'Hard Disk Installation', desc: 'Up to 4TB surveillance HDD', price: '₹400' },
      { service: 'Power Supply Setup', desc: 'SMPS + distribution box', price: '₹600' },
      { service: 'CCTV Repair', desc: 'Camera / DVR repair (per unit)', price: '₹499' },
      { service: 'CCTV AMC (4 cameras)', desc: 'Yearly maintenance & support', price: '₹2,999' },
      { service: 'CCTV AMC (8 cameras)', desc: 'Yearly maintenance & support', price: '₹4,999' }
    ],
    steps: ['Book a free site survey','Our expert visits & recommends camera positions','You approve the quote & camera models','Installation scheduled at your convenience','Complete setup with mobile viewing','1-year installation warranty provided'],
    faqs: [
      { q: 'How many cameras do I need for my shop?', a: 'For a small shop, 4 cameras are usually enough.' },
      { q: 'Can I view cameras on my phone?', a: 'Yes! We configure mobile viewing on iOS or Android.' },
      { q: 'What brands do you install?', a: 'Hikvision, Dahua, CP Plus, Godrej, and other leading brands.' },
      { q: 'Do you provide maintenance?', a: 'Yes, AMC starting at ₹2,999/year for up to 4 cameras.' }
    ],
    related: ['laptop', 'tv', 'fire-safety']
  },
  laptop: {
    title: 'Laptop & Computer Repair', icon: 'fa-laptop-medical', subtitle: 'Hardware, software, virus removal, upgrade.',
    image: '💻', photo: 'https://images.unsplash.com/photo-1588702547919-26089e690ecc?w=800&q=80&auto=format&fit=crop',
    shortDesc: 'Complete laptop and desktop repair services for all brands.',
    included: ['Free diagnosis at shop','Hardware repair (motherboard, screen)','Software & OS installation','Virus & malware removal','RAM & SSD upgrade','Keyboard replacement','Battery replacement','Screen replacement','Data recovery (basic)','30-day service warranty'],
    priceLabel: 'Starting from', priceValue: '₹499', priceUnit: '/ service',
    quickFeatures: ['Free diagnosis at shop','All brands supported','Same-day minor repairs','Genuine parts only','Data safety guaranteed'],
    chargeTable: [
      { service: 'Basic Diagnosis', desc: 'Complete hardware + software check', price: 'FREE' },
      { service: 'OS Installation (Windows)', desc: 'Windows 10/11 with drivers', price: '₹499' },
      { service: 'Software Installation', desc: 'MS Office, antivirus, utilities', price: '₹299' },
      { service: 'Virus Removal', desc: 'Deep scan + malware cleanup', price: '₹399' },
      { service: 'RAM Upgrade (8GB DDR4)', desc: 'New RAM + installation', price: '₹2,499' },
      { service: 'SSD Upgrade (256GB)', desc: 'New SSD + OS migration', price: '₹2,999' },
      { service: 'SSD Upgrade (512GB)', desc: 'New SSD + OS migration', price: '₹4,499' },
      { service: 'Battery Replacement', desc: 'New battery (brand dependent)', price: '₹2,500' },
      { service: 'Keyboard Replacement', desc: 'New keyboard (brand dependent)', price: '₹1,500' },
      { service: 'Screen Replacement', desc: 'New screen (size & brand dependent)', price: '₹3,500' },
      { service: 'Motherboard Repair', desc: 'Chip level repair for dead board', price: '₹1,999' },
      { service: 'Data Recovery', desc: 'Basic file recovery from HDD/SSD', price: '₹1,499' }
    ],
    steps: ['Bring your laptop to our shop or book pickup','Free diagnosis done within 30 minutes','Detailed quote shared before repair','Approval taken — repair starts','Testing & quality check','Ready for pickup or home delivery'],
    faqs: [
      { q: 'How long will my laptop repair take?', a: 'Minor repairs are same-day. Hardware repairs take 1-3 days.' },
      { q: 'Is my data safe during repair?', a: 'Yes! We always back up data before major repairs.' },
      { q: 'Do you repair Apple MacBooks?', a: 'We repair MacBooks (Air & Pro) for hardware issues.' },
      { q: 'Do you provide pickup and drop?', a: 'Yes, free pickup and drop within Gandhinagar city limits.' }
    ],
    related: ['chip', 'printer', 'cctv']
  },
  chip: {
    title: 'Chip Level Repair', icon: 'fa-microchip', subtitle: 'Advanced repair for dead boards and power issues.',
    image: '🔬', photo: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&auto=format&fit=crop',
    shortDesc: 'Advanced chip-level repair for motherboards of laptops, desktops, TVs, and other electronics.',
    included: ['Free board diagnosis','BGA rework & reballing','Power IC replacement','BIOS chip programming','Short circuit repair','Capacitor & resistor replacement','USB / HDMI port repair','Liquid damage recovery','60-day service warranty','Only charged if repaired'],
    priceLabel: 'Starting from', priceValue: '₹1,499', priceUnit: '/ board',
    quickFeatures: ['Advanced BGA station','No fix, no fee guarantee','60-day warranty','All brands supported','Liquid damage experts'],
    chargeTable: [
      { service: 'Board Diagnosis', desc: 'Complete chip-level diagnosis with report', price: 'FREE' },
      { service: 'Power IC Replacement', desc: 'MOSFET or power IC replacement', price: '₹1,499' },
      { service: 'BIOS Programming', desc: 'BIOS chip reprogramming or replacement', price: '₹1,200' },
      { service: 'BGA Rework', desc: 'GPU or chipset reballing with BGA station', price: '₹2,999' },
      { service: 'Short Circuit Repair', desc: 'Locate & fix short on board', price: '₹999' },
      { service: 'Capacitor / Resistor', desc: 'Per component replacement', price: '₹499' },
      { service: 'USB / HDMI Port', desc: 'Port replacement on board', price: '₹899' },
      { service: 'Liquid Damage Treatment', desc: 'Ultrasonic cleaning + component repair', price: '₹1,999' },
      { service: 'CPU Socket Repair', desc: 'Socket reflow or replacement', price: '₹2,500' },
      { service: 'Data Recovery from Dead Board', desc: 'Extract data from non-booting board', price: '₹1,999' }
    ],
    steps: ['Bring or courier the faulty device','Free chip-level diagnosis with report','We tell you if repair is possible','You approve the quote — repair begins','Advanced BGA rework done in lab','Post-repair testing + 60-day warranty'],
    faqs: [
      { q: 'What is chip level repair?', a: 'Fixing components directly on the motherboard (ICs, chips, capacitors) instead of replacing the whole board.' },
      { q: 'Do you charge if repair fails?', a: 'No! Our policy is "No Fix, No Fee".' },
      { q: 'Is chip level repair reliable?', a: 'Yes, with proper equipment and 60-day warranty.' },
      { q: 'How long does chip level repair take?', a: 'Typically 2-5 days depending on the complexity.' }
    ],
    related: ['laptop', 'tv', 'printer']
  },
  printer: {
    title: 'Printer Service', icon: 'fa-print', subtitle: 'Cartridge refill, repair & maintenance.',
    image: '🖨️', photo: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=800&q=80&auto=format&fit=crop',
    shortDesc: 'Complete printer repair and maintenance for inkjet, laser, and all-in-one printers.',
    included: ['Free printer diagnosis','Cartridge refill (color & B&W)','Print head cleaning & repair','Roller & pickup assembly repair','Paper jam fixes','WiFi & network setup','Driver installation','Fuser assembly repair','Scanner repair (AIO printers)','30-day service warranty'],
    priceLabel: 'Starting from', priceValue: '₹299', priceUnit: '/ service',
    quickFeatures: ['Doorstep service','All brands supported','Genuine cartridge refills','Same-day service','AMC available'],
    chargeTable: [
      { service: 'Basic Visit & Diagnosis', desc: 'Technician visit with printer inspection', price: '₹250' },
      { service: 'Cartridge Refill (Black)', desc: 'Inkjet black cartridge refill', price: '₹299' },
      { service: 'Cartridge Refill (Color)', desc: 'Inkjet color cartridge refill (per color)', price: '₹399' },
      { service: 'Toner Refill (Laser)', desc: 'Laser printer toner refill', price: '₹599' },
      { service: 'Print Head Cleaning', desc: 'Deep cleaning of clogged print head', price: '₹499' },
      { service: 'Roller Replacement', desc: 'Paper pickup roller replacement', price: '₹699' },
      { service: 'Fuser Assembly Repair', desc: 'Fuser unit repair or replacement', price: '₹1,499' },
      { service: 'WiFi Setup', desc: 'Wireless printing configuration', price: '₹399' },
      { service: 'Driver Installation', desc: 'Printer driver setup on PC/laptop', price: '₹199' },
      { service: 'Printer AMC', desc: 'Yearly maintenance with 4 visits', price: '₹2,499' }
    ],
    steps: ['Book printer service online or via call','Tell us the issue','Technician arrives with tools & cartridges','Free diagnosis + transparent quote','Service done on the spot','Test print + warranty card provided'],
    faqs: [
      { q: 'How often should I refill my cartridge?', a: 'Depends on print volume. Home users: 2-3 months. Offices: monthly.' },
      { q: 'Do you use genuine ink for refills?', a: 'High-quality compatible ink matching OEM quality.' },
      { q: 'Can you fix a printer that is not printing?', a: 'Yes! Common causes include clogged print head, empty cartridge, or driver issues.' },
      { q: 'Do you offer AMC for offices?', a: 'Yes, starting at ₹2,499/year with 4 visits.' }
    ],
    related: ['laptop', 'chip', 'cctv']
  },
  'fire-safety': {
    title: 'Fire Safety System', icon: 'fa-fire-extinguisher', subtitle: 'Inspection, alarm, extinguisher, sprinkler – AMC available.',
    image: '🧯', photo: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80&auto=format&fit=crop',
    shortDesc: 'Complete fire safety solutions for homes, offices, shops, and industries.',
    included: ['Free fire safety inspection & visit','Fire alarm system installation','Fire extinguisher supply & refilling','Fire sprinkler system installation','Smoke detector installation','Emergency exit signage setup','Installation, repair & maintenance','Annual Maintenance Contract (AMC)','Compliance certificate assistance','24/7 emergency support'],
    priceLabel: 'Starting from', priceValue: '₹999', priceUnit: '/ visit',
    quickFeatures: ['Free safety inspection','Certified & compliant','All brands of extinguishers','AMC available','Emergency support 24/7'],
    chargeTable: [
      { service: 'Fire Safety Inspection / Visit', desc: 'Complete on-site fire safety audit & report', price: '₹999' },
      { service: 'Fire Alarm System', desc: 'Installation of alarm panel, detectors & hooters', price: '₹4,999' },
      { service: 'Fire Extinguisher', desc: 'Supply of ABC/CO2 extinguisher (per unit)', price: '₹1,899' },
      { service: 'Fire Extinguisher Refilling', desc: 'Refill of dry powder / CO2 extinguisher', price: '₹399' },
      { service: 'Fire Sprinkler System', desc: 'Installation of sprinkler heads & piping', price: '₹8,999' },
      { service: 'Installation & Repair & Maintenance', desc: 'Complete fire safety equipment service', price: '₹1,499' },
      { service: 'Smoke Detector Installation', desc: 'Per detector with wiring', price: '₹799' },
      { service: 'Emergency Exit Signage', desc: 'Glow-in-dark safety signage per unit', price: '₹499' },
      { service: 'Annual Maintenance Contract (AMC)', desc: 'Yearly maintenance with 4 visits + priority', price: '₹4,999' },
      { service: 'Fire Safety Compliance Certificate', desc: 'Assistance with documentation & audit', price: '₹1,999' }
    ],
    steps: ['Book a free fire safety inspection','Our certified inspector visits your site','Detailed audit report with recommendations','You approve the quote & equipment','Installation / refilling done by experts','AMC support activated + compliance certificate'],
    faqs: [
      { q: 'How often should fire extinguishers be refilled?', a: 'Every 12 months or immediately after use.' },
      { q: 'What is included in a fire safety inspection?', a: 'All fire safety equipment with detailed compliance report.' },
      { q: 'Do you provide AMC for fire safety systems?', a: 'Yes, starting at ₹4,999/year with 4 visits.' },
      { q: 'Which fire extinguisher is best for my shop?', a: 'ABC dry powder for general use, CO2 for electrical, foam for flammable liquids.' }
    ],
    related: ['cctv', 'ac', 'laptop']
  }
};

// ============================================================
// REVIEWS DATA
// ============================================================
const reviewsData = [
  { name: 'Prakash Mali', timeAgo: 'a week ago', rating: 5, text: 'Awesome and fantastic services by CCTV handlers to get top level authority with extremely guarantee..!!' },
  { name: 'Rahul Dave', timeAgo: '3 weeks ago', rating: 5, text: 'Right now, I\'m visiting my friend\'s shop, Veeru Infotech! 🔵 ✨ Dropping a live review right from the spot with some photos. If you need anything related to tech, gadgets, or reliable service, this is the place to be! Highly recommended! 🚀' },
  { name: 'Gohil Nilesh', timeAgo: 'a week ago', rating: 5, text: 'I personally visited Veeru Infotech in Gandhinagar for CCTV camera & security system inquiry, and I had a fantastic experience. The staff explained everything clearly, helped me choose the right cameras.' },
  { name: 'the prince official', timeAgo: 'a week ago', rating: 5, text: 'Excellent shop for CCTV, laptops, and computers. They have a good range of products and provide excellent service. The staff is friendly, professional, and very helpful, with proper guidance and support. Prices are reasonable and the work is done efficiently. Highly recommended for all CCTV, laptop, and computer-related needs! 👍💻📹' },
  { name: 'Sachin Joshi', timeAgo: 'a week ago', rating: 5, text: 'Excellent service and very professional staff.' },
  { name: 'abhi shihori', timeAgo: 'a week ago', rating: 5, text: 'Visited Veeru Infotech in Gandhinagar today. Highly supportive staff, top-quality products, and reasonable pricing. They are experts in CCTV installation with quick service. Highly recommended!' },
  { name: 'Yashu Gohil', timeAgo: 'a week ago', rating: 5, text: 'I visited today this shop great service and Reasonable price Shop all products and great Response this shop staff and all the best your journey.' },
  { name: 'NIKUL JOSHI', timeAgo: 'a week ago', rating: 5, text: 'Excellent service and very professional staff. I purchased a laptop from them and had a great experience. They explained everything about the product very clearly and helped me choose the right one. The laptop quality is excellent, and the service was really impressive. Highly recommended for great products and genuine service.' },
  { name: 'Ankit Shihori', timeAgo: 'a week ago', rating: 5, text: 'Had a great experience at Veeru Infotech Gandhinagar Kudasan! The CCTV demo was clear and impressive, and the team explained everything in a very simple way. Professional service and genuinely helpful staff. Highly recommended must visit! 👍' },
  { name: 'Joshi Satish_dhanasra', timeAgo: 'a week ago', rating: 5, text: 'Had a really good experience here. The staff was helpful and explained everything clearly. Service was quick and hassle-free. Overall, a good place for computer-related work.' },
  { name: 'Raval Bhavesh', timeAgo: 'a week ago', rating: 5, text: 'Gaming PC ke liye yahan se liya, rate bhi kaafi reasonable mila aur service bhi really achhi thi. Staff ne properly guide kiya aur overall experience smooth raha. Happy with the purchase, definitely recommended! 👍' },
  { name: 'Prakash Gadhi', timeAgo: 'a week ago', rating: 5, text: 'Great and good shop in this Gandhinagar.' },
  { name: 'Saif Mansuri', timeAgo: 'a week ago', rating: 5, text: 'Very understanding work.' },
  { name: 'Mali Alpesh', timeAgo: 'a day ago', rating: 5, text: 'Visited Veeru Infotech in Gandhinagar today. Their staff provided proper guidance and product instructions. I got great ideas for CCTV camera repair and installation, they keep good quality CCTV camera, Computer, laptop and Printer Related Best products, and provide all types of services related to CCTV cameras, computers, and printers. They offer the best services. Highly recommended! Aap bhi visit Kareiga.. Supperb Services' }
];