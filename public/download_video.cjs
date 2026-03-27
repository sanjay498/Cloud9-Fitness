const https = require('https');
const fs = require('fs');

const url = 'https://static.vecteezy.com/system/resources/previews/001/803/992/mp4/man-running-on-treadmill-in-gym-free-video.mp4';

const options = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    'Accept': '*/*',
    'Referer': 'https://www.vecteezy.com/'
  }
};

https.get(url, options, (res) => {
  if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
    https.get(res.headers.location, options, (res2) => {
      const file = fs.createWriteStream('treadmill.mp4');
      res2.pipe(file);
      file.on('finish', () => file.close());
    });
  } else {
    const file = fs.createWriteStream('treadmill.mp4');
    res.pipe(file);
    file.on('finish', () => file.close());
  }
}).on('error', (err) => {
  console.error('Error downloading:', err.message);
});
