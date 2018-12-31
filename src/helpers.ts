import { VerseCard } from "./types";

export function attachOrfanCharacters(text: string) {
  const orphans = [
    "a",
    "A",
    "v",
    "V",
    "k",
    "K",
    "o",
    "O",
    "U",
    "u",
    "S",
    "s",
    "z",
    "Z",
    "i",
    "I"
  ];
  for (let o of orphans) {
    // \xa0 is non-breaking space
    text = text.replace(new RegExp(` ${o} `, "g"), ` ${o}\xa0`);
    text = text.replace(new RegExp(`\xa0${o} `, "g"), `\xa0${o}\xa0`);
  }
  return text;
}

export function getSortedItemList(rows: string[]) {
  const list = [];

  const c = rows.length;
  let j = 0;

  if (c % 8 !== 0) {
    for (let i = c; i < (Math.floor(c / 8) + 1) * 8; i++) {
      const versecard: VerseCard = {
        sk_text: "",
        sk_coord: "",
        hu_text: "",
        hu_coord: "",
        count: 0
      };
      list[j] = versecard;
      j++;
    }
  }

  for (const row of rows) {
    const parts = row.split("#");
    const sk_text = attachOrfanCharacters(parts[0].trim());
    const hu_text = attachOrfanCharacters(parts[2].trim());
    const versecard: VerseCard = {
      sk_text,
      sk_coord: parts[1].trim(),
      hu_text,
      hu_coord: parts[3].trim(),
      count: sk_text.length + hu_text.length
    };
    list[j] = versecard;
    j++;
  }

  list.sort(function(a, b) {
    if (a.count < b.count) {
      return -1;
    } else if (a.count > b.count) {
      return 1;
    } else {
      return 0;
    }
  });

  return list;
}
