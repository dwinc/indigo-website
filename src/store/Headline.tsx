import { Fragment } from "react";

/** Renders a store headline: \n breaks lines, *word* gets the highlight gradient. Lines never wrap. */
export function Headline({ text, dark }: { text: string; dark: boolean }) {
  const lines = text.split("\n");
  return lines.map((lineText, i) => (
    <Fragment key={i}>
      <span className="inline-block whitespace-nowrap">
        {lineText.split(/(\*[^*]+\*)/).map((part, j) =>
          part.startsWith("*") ? (
            <span key={j} className={dark ? "text-gradient" : "text-gradient-ink"}>
              {part.slice(1, -1)}
            </span>
          ) : (
            part
          ),
        )}
      </span>
      {i < lines.length - 1 && <br />}
    </Fragment>
  ));
}
