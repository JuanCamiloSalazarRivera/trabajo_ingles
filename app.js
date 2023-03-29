function guardarComentario(cardId) {
    const textarea = document.getElementById(`comment-${cardId}`);
    const comentario = textarea.value;
    localStorage.setItem(`comentario-${cardId}`, comentario);
}
