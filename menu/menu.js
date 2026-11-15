// Vendor Vertical 3-Dot Menu Logic & Modals for About / Why Choose Us

function toggleVendorMenu() {
  let menuModal = document.getElementById('vendorThreeDotMenuModal');
  if (!menuModal) {
    // Fallback if injected dynamically
    return;
  }

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

// About Us & Why Choose Us Handlers
function openVendorAboutModal() {
  alert("MilkCount Vendor v9: డెయిరీ వ్యాపారుల కోసం ప్రత్యేకంగా రూపొందించబడిన డిజిటల్ మేనేజ్‌మెంట్ ప్లాట్‌ఫారమ్.");
}

function openVendorWhyChooseModal() {
  alert("ఎందుకు మమ్మల్ని ఎంచుకోవాలి?\n• జీరో ఎర్రర్ లెక్కలు\n• ఆటోమేటిక్ బిల్లింగ్\n• రియల్ టైమ్ సింక్\n• వాట్సాప్ రిపోర్ట్స్");
}
