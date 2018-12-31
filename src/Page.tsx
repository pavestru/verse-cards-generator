import * as React from "react";
import { VerseCard as VerseCardType } from "./types";
import { VerseCard } from "./VerseCard";

interface PageProps {
  year: number;
  place: string;
  verses: VerseCardType[];
  pageNumber: number;
}

export const Page = ({ year, place, pageNumber, verses }: PageProps) => (
  <div className="page clearfix">
    {[0, 1, 2, 3].map(i => (
      <div className="column">
        <VerseCard
          key={`top_${i}`}
          year={year}
          place={place}
          verse={verses[8 * pageNumber + i]}
        />
        <VerseCard
          key={`bottom_${i}`}
          year={year}
          place={place}
          verse={verses[verses.length - 1 - 8 * pageNumber - i]}
        />
      </div>
    ))}
  </div>
);
