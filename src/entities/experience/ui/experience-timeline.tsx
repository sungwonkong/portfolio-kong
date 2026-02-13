import React from "react";
import { EXPERIENCES } from "../model/experience.data";
import { ExperienceCard } from "./experience-card";

type Props = {
  onlyRecent?: boolean;
};

export function ExperienceTimeline({ onlyRecent }: Props) {
  const list = onlyRecent
    ? EXPERIENCES.filter((e) => e.kind !== "legacy")
    : EXPERIENCES;

  return (
    <div className="space-y-4 sm:space-y-5">
      {list.map((item) => (
        <ExperienceCard
          key={item.id}
          item={item}
          emphasizeArchitecture
        />
      ))}
    </div>
  );
}

