export function downloadResume() {
  const link = document.createElement("a");
  link.href = "/resume.pdf";
  link.download = "Sasidhar_Dwadasi_FullStack_Engineer.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
