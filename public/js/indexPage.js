const form = document.getElementById("uploadForm");
const input = document.getElementById("imageInput");
const previewImage = document.getElementById("previewImage");
const plusSign = document.getElementById("plusSign");
const checkIcon = document.getElementById("checkIcon");
const submitBtn = document.getElementById("submitBtn");

input.addEventListener("change", () => {
    const file = input.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
        previewImage.src = reader.result;
        previewImage.style.display = "block";
        plusSign.style.display = "none";
        checkIcon.style.display = "none";
    };
    reader.readAsDataURL(file);
});

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const file = input.files[0];
    if (!file) return alert("Selecione uma imagem.");

    submitBtn.style.display = "none";

    const loadingImg = document.createElement("img");
    loadingImg.src = "/img/loading.gif";
    loadingImg.alt = "Carregando...";
    loadingImg.id = "loadingGif";
    loadingImg.style.height = "30px";
    loadingImg.style.verticalAlign = "middle";
    form.appendChild(loadingImg);

    try {
        const formData = new FormData();
        formData.append("image", file);

        const res = await fetch("/process-image", {
            method: "POST",
            body: formData,
        });

        const data = await res.json();

        localStorage.setItem(
            "facesDetected",
            data.quantidade_total_de_rostos_detectados
        );
        localStorage.setItem("annotatedImage", data.imagem_alterada);

        if (res.ok) {
            window.location.href = "/result.html";
        } else {
            alert("Erro ao processar imagem.");
            submitBtn.style.display = "inline-block";
            loadingImg.remove();
        }
    } catch (error) {
        alert("Erro na requisição.");
        submitBtn.style.display = "inline-block";
        loadingImg.remove();
    }
});
