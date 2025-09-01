export function selectAndEncodeImage() {
  return new Promise((resolve, reject) => {
    // Create file input
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";

    // Handle file selection
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (!file?.type.startsWith("image/")) {
        reject(new Error("Invalid image file"));
        return;
      }

      // Convert to base64
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => reject(new Error("Failed to read file"));
      reader.readAsDataURL(file);
    };

    // Trigger file selection
    input.click();
  });
}

export function binaryToHex(binary) {
  return Array.from(binary)
    .map((byte) => byte.charCodeAt(0).toString(16).padStart(2, "0"))
    .join(" ");
}
