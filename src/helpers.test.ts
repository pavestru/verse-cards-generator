import { attachOrfanCharacters, getSortedItemList } from "./helpers";

describe("attachOrfanCharacters", () => {
  it("should replace space by non-breaking space after one-character words", () => {
    // \xa0 is non-breaking space
    expect(attachOrfanCharacters("asdlasj")).toBe("asdlasj");
    expect(attachOrfanCharacters("asdlasj v ldjls")).toBe("asdlasj v\xa0ldjls");
    expect(attachOrfanCharacters("asdlasj v ldjls a")).toBe(
      "asdlasj v\xa0ldjls a"
    );
    expect(attachOrfanCharacters("asdlasj v ldjls a ")).toBe(
      "asdlasj v\xa0ldjls a\xa0"
    );
    expect(attachOrfanCharacters("asdlasj v ldjls a o")).toBe(
      "asdlasj v\xa0ldjls a\xa0o"
    );
    expect(attachOrfanCharacters("asdlasj v ldjls a o kdjl")).toBe(
      "asdlasj v\xa0ldjls a\xa0o\xa0kdjl"
    );
  });
});

let rows: string[] = [];

describe("getSortedItemList", () => {
  beforeEach(() => {
    rows = ["ahojahoj#yz#sziaszia#zz", "ahoj#xy#szia#xz", "x#x#x#x"];
  });
  it("should return item list sorted by text length", () => {
    const list = getSortedItemList(rows);
    // it generates empty versecards to make the count divisible by 8 (8 per page)
    // the empty ones are at the beginning
    expect(list.length).toBe(8);
    expect(list[0].sk_text).toBe("");
    expect(list[1].sk_text).toBe("");
    expect(list[2].sk_text).toBe("");
    expect(list[3].sk_text).toBe("");
    expect(list[4].sk_text).toBe("");
    expect(list[5].sk_text).toBe("x");
    expect(list[6].sk_text).toBe("ahoj");
    expect(list[7].sk_text).toBe("ahojahoj");
  });
});
