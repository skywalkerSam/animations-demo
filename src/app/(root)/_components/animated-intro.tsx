import "~/styles/animated-intro.css";
import { nameList, doList, emojiList } from "_data/constants";

export default function AnimatedIntro() {
  return (
    <header className="flex w-screen flex-col justify-center px-5 md:w-full md:px-20">
      <div className="flex flex-col gap-7">
        <div className="hero-text">
          <h1>
            <span className="slide">
              <span className="wrapper">
                {emojiList.map((word, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1 pb-2 md:gap-3"
                  >
                    <span>{word.text}</span>
                  </span>
                ))}
              </span>
            </span>
          </h1>
          <br />
          <h1>
            i<span className="text-sky-400">'</span>m
            <span className="slide">
              <span className="wrapper">
                {nameList.map((word, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1 pb-2 md:gap-3"
                  >
                    <span className="text-sky-400">{word.text}</span>
                  </span>
                ))}
              </span>
            </span>
          </h1>
          <h1>
            i
            <span className="slide">
              <span className="wrapper">
                {doList.map((word, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1 pb-2 md:gap-3"
                  >
                    {/* <img
                          src={word.imgSrc}
                          alt={word.text}
                          className="bg-white-50 size-7 rounded-full p-1 md:size-10 md:p-2 xl:size-12"
                        ></img> */}
                    <span className="text-sky-400">{word.text}</span>
                  </span>
                ))}
              </span>
            </span>
          </h1>
          <h1>Stuff<span className="text-sky-400">.</span></h1>
        </div>
      </div>
    </header>
  );
}
