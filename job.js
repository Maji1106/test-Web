function moveToInternship1() {
  currentIndex++;
  if (currentIndex >= currentFilteredProfiles.length) {
    currentIndex = 0;
  }
  showProfile();
  // กำหนดค่าข้อมูลบริษัท
  const currentProfile = currentFilteredProfiles[currentIndex];
  const companyInfoElement = document.getElementById("companyInfo");
  companyInfoElement.innerHTML = "<b>บริษัท:</b> " + currentProfile.company;
  // แสดงข้อมูลเด็กฝึกงาน
  const internInfoElement = document.getElementById("internInfo");
  internInfoElement.innerHTML = "<b>ชื่อเด็กฝึกงาน:</b> " + currentProfile.name;
  sidebar.style.display = "block";
}
