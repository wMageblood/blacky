export const openWhatsapp = (message: string) => {
  const encodedMessage = encodeURIComponent(message);

  window.open(
    `https://wa.me/523338086856?text=${encodedMessage}`,
    "_blank"
  );
};