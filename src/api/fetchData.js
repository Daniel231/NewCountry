export default function fetchData(promise) {
  return promise.then(res => res.data);
}
