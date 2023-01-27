export const getPlainText = (text) => {
  const converted = new DOMParser().parseFromString(text, 'text/html')
  return converted.body.textContent
}
