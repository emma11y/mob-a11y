export function showAlert(message: string, type: string) {
  const alert = document.querySelector('.alert');
  if (alert) {
    const text = document.createElement('p');
    text.innerHTML = message;
    alert.appendChild(text);
    alert.classList.add(type);

    setTimeout(() => {
      alert.classList.remove(type);
      alert.removeChild(text);
      alert.textContent = '';
    }, 5000);
  }
}
