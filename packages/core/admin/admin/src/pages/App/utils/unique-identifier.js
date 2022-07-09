// import FingerprintJS from '@fingerprintjs/fingerprintjs';

const getRandom = () => {
  const result = Math.random()
    .toString(12)
    .substring(2, 6);

  return result;
};

let fp = '';
for (let i = 0; i < 8; i++) {
  fp += getRandom();
}

const getUniqueIdentifier = async () => {
  // const fp = await FingerprintJS.load();
  // const result = await fp.get();
  const deviceId = `web-fingerprint-${fp}`;

  return deviceId;
};

export default getUniqueIdentifier;
