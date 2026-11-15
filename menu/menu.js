// Vendor Vertical 3-Dot Menu Logic & Popups

function toggleVendorMenu() {
  let menuModal = document.getElementById('vendorThreeDotMenuModal');
  if (!menuModal) return;

  const isHidden = menuModal.classList.contains('hidden-force');
  if (isHidden) {
    const nameDisp = document.getElementById('menuVendorNameDisplay');
    if (nameDisp && window.vendorProfile) {
      nameDisp.innerText = window.vendorProfile.name || 'Vendor';
    }
    menuModal.classList.remove('hidden-force');
  } else {
    menuModal.classList.add('hidden-force');
  }
}

function closeVendorMenu(event) {
  const menuModal = document.getElementById('vendorThreeDotMenuModal');
  if (menuModal && event.target === menuModal) {
    menuModal.classList.add('hidden-force');
  }
}

// About Us & Why Choose Us Popups
function openVendorAboutModal() {
  alert("MilkCount Vendor v9: డెయిరీ వ్యాపారులు, పాల సేకరణ మరియు కస్టమర్ల బిల్లింగ్ నిర్వహణ కోసం ప్రత్యేకంగా రూపొందించబడిన డిజిటల్ మేనేజ్‌మెంట్ ప్లాట్‌ఫారమ్.");
}

function openVendorWhyChooseModal() {
  alert("ఎందుకు మమ్మల్ని ఎంచుకోవాలి?\n• జీరో ఎర్రర్ లెక్కలు\n• ఆటోమేటిక్ బిల్లింగ్ & లెడ్జర్\n• రియల్-టైమ్ డేటా సింక్\n• వాట్సాప్ రిపోర్ట్స్ & సపోర్ట్");
}
// Share Vendor App Link via WhatsApp
function shareVendorAppLink() {
  const vendorAppUrl = 'https://kishoreee226-netizen.github.io/milk-tracker-vendor/'; 
  const shareText = `🚚 *MilkCount Vendor App - పాల వ్యాపారి యాప్*\nడెలివరీ రూట్, ఆటో కలెక్షన్ మరియు కస్టమర్ల బిల్లింగ్ నిర్వహించడానికి ఈ వెండర్ యాప్‌ను ఇన్‌స్టాల్ చేసుకోండి:\n${vendorAppUrl}`;

  if (navigator.share) {
    navigator.share({
      title: 'MilkCount Vendor App',
      text: shareText,
      url: vendorAppUrl
    }).catch(() => {});
  } else {
    window.location.href = `whatsapp://send?text=${encodeURIComponent(shareText)}`;
  }
}

