const child_process = require('child_process');

process.stdin.on('readable', () => {
  const chunks = [];
  while ((chunk = process.stdin.read()) !== null) {
    chunks.push(chunk);
  }
  if (chunks.length) {
    const files = Buffer.concat(chunks).toString('utf8');
    files
      .split('\n')
      .filter((name) => name.length)
      .forEach((name) => {
        console.log(`prettify ${name}`);
        child_process.exec(`prettier --write --ignore-unknown ${name}`);
      });
  }
});
