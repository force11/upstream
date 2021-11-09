import React from "react";

type Props = {
  authors: Author[];
  published: Date;
  doi: string;
  readingTime: number;
  readabilityScore: number;
};

interface Author {
  website: string;
  name: string;
  profile_image: string;
}

const Byline: React.FunctionComponent<Props> = ({
  authors,
  published,
  doi,
  readingTime,
  readabilityScore,
}) => {
  return (
    <div className="flex flex-row pt-2 pb-4">
      <div className="">
        <div className="font-bold font-sans uppercase text-sm">
          {authors.map((author) => author.name).join(", ")}
        </div>
        <div className="font-sans text-sm text-gray-600">
          {published.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          &bull; {readingTime} min read &bull; readability score{" "}
          {readabilityScore.toFixed(1)}
          {doi && (
            <>
              {" "}
              &bull; <br />
              <a className="border-b-0" href={doi}>
                {doi}
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Byline;
