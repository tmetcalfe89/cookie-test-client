export default function fetchData(url, props) {
  return fetch(import.meta.env.VITE_API + url, props);
}