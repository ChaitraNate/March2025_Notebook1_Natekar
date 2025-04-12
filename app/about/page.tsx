"use client";
import { Button } from "@heroui/button";
import { Cherry } from "lucide-react";
import link from "next/link";
import { useState } from "react";

import { title } from "@/components/primitives";

export default function AboutPage() {
  let facts: string[] = [
    "bananas are berries but strawberries are not.",
    "The world&apos;s lengthiest concert lasted 453 hours.",
    "The pope cannot be an organ donor.",
    "Japan has one vending machine for every 40 people.",
    "Honey doesn&apos;t spoil.",
    "NYC&apos;s Central Park is larger than the entire country of Monaco.",
    "Australia is wider than the moon.",
    "Competitive art used to be an Olympic sport.",
    "Lemons float, but limes sink.",
    "It&apos;s illegal to own only one guinea pig in Switzerland.",
    "The average cloud weighs over one million pounds.",
    "Animals can also be allergic to humans.",
  ];
  const [fact, setFact] = useState("");

  return (
    <>
      <h1 className={title()}>About</h1>
      <div className="h-full w-full flex flex-wrap justify-around p-4">
        <p className="border-2 border-oklch(0.882 0.059 254.128) p-4 m-4">
          Hi, I&apos;m Chaitra! A freshman who is learning how to code with
          HTML. While I have no experience with the language, I&apos;m excited
          to gain it!
        </p>
        <p className="border-2 border-gray p-4 m-4">
          I enjoy many hobbies such as crocheting, reading, playing badminton,
          sketching, and crafting.
        </p>
        <p className="border-2 border-gray p-4 m-4">
          Things important to me in life are the people close to me and success.
          I care a lot about my friends and family and have many aspirations for
          the future.
        </p>
      </div>
      <>
        <>
          <Button
            className="bg-indigo-400"
            onPress={() => {
              setFact(facts[Math.floor(Math.random() * facts.length)]);
            }}
          >
            press for fact!
          </Button>
          <p>{fact}</p>
        </>
        <div>
          <br />

          <img
            alt="crochet swatch with the hook set on top"
            height="400"
            src="crochet.jpg"
            width="500"
          />
          <p>
            I&apos;m a self taught crocheter, but I learned some things from my
            grandma as well.
          </p>
          <br />
          <a
            className="bg-indigo-400"
            href="https://www.eandpcrochet.com/tag/crochet-bag/"
          >
            crochet bag pattern
          </a>
          <br />
          <br />

          <img
            alt="a badminton racket"
            height="400"
            src="badminton.jpg"
            width="500"
          />
          <p>
            I love playing badminton with my friends and family, especially
            playing matches against other schools on the school badminton team.
          </p>

          <br />
          <Button
            as={link}
            className="bg-indigo-400"
            href="https://plus.unsplash.com/premium_photo-1688671923138-ff74e0f9a810?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlcnJ5fGVufDB8fDB8fHww"
          >
            <Cherry />
          </Button>
        </div>
      </>
    </>
  );
}
