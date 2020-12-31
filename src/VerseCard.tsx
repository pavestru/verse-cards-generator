import * as React from "react";
import { VerseCard as VerseCardType } from "./types";

interface VerseCardProps {
  year: number;
  place: string;
  verse: VerseCardType;
}

export const VerseCard = ({ year, place, verse }: VerseCardProps) => (
  <div className={`verse ${verse.count > 420 ? "long" : ""}`}>
    <div className="year">{year}</div>
    <div className="text lang1">{verse.sk_text}</div>
    <div className="coordinates">{verse.sk_coord}</div>
    <div className="text lang1">{verse.hu_text}</div>
    {verse.hu_coord !== verse.sk_coord && (
      <div className="coordinates">{verse.hu_coord}</div>
    )}
    <div className="place">{place}</div>
  </div>
);
