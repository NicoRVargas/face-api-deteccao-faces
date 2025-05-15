const img = localStorage.getItem("annotatedImage");
const count = localStorage.getItem("facesDetected");

document.getElementById("resultImage").src = img;
document.getElementById("rostos").textContent = `${count} ROSTOS`;
