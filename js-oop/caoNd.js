const arr1 = [1, 3, 3, 5, 1, 5, 5];

// sukti cikla
function noDubsPlease(mas) {
  const noDubs = [];
  mas.forEach((sk) => {
    if (!noDubs.includes(sk)) {
      noDubs.push(sk);
    }
  });

  return noDubs;
}

const noDubs11 = arr1.reduce((noRepeat, sk) => {
  if (!noRepeat.includes(sk)) noRepeat.push(sk);
  return noRepeat;
}, []);
console.log('noDubs11 ===', noDubs11);
console.log(noDubsPlease(arr1));

// pasiimam pirma reiksme ir dedam i nauja masyva be dublicatu
// pries dedant pasitikrinam ar ji jau yra noDubs()
