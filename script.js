async function ShortenURL() {
    const url = document.getElementById("url").value;
    const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`);
    if (response.ok) {
      const data = await response.text();
      document.getElementById('result').innerHTML = `
        Shortened URL: <a href="${data}" target="_blank">${data}</a>
      `;
    } else {
      document.getElementById('result').innerHTML = "Error Shortening URL";
    }
  }