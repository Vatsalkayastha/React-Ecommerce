// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise((resolve) =>{
    const reponse = fetch('http://localhost:8080')
    const data = reponse.json()
    resolve({data})
  }
  );
}
