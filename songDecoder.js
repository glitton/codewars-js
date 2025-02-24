function songDecoder(song) {
  const ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let songArr = song.split("WUB");

  return songArr
    .filter((char) => char.length > 0)
    .join(" ")
    .trim();
}

console.log(songDecoder("AWUBBWUBC")); // "A B C","WUB should be replaced by 1 space");
console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC")); // "A B C","multiples WUB should be replaced by only 1 space");
console.log(songDecoder("WUBAWUBBWUBCWUB")); // "A B C","heading or trailing spaces should be removed");
