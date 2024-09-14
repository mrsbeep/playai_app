"use client";

import { open as openEmbed } from "@play-ai/web-embed";
import { useEffect, useState } from "react";

const webEmbedId = "bj83C-zLxgJ2dBj8x4v4_";

interface ChangeTextEvent {
  name: "change-text";
  data: {
    text: string;
  };
}

type AppEvent = ChangeTextEvent;

const Home = () => {
  const [text, setText] = useState("Change this text");

  const events = [
    {
      name: "change-text",
      when: "The user says what they want to change the text on the screen to",
      data: {
        text: { type: "string", description: "The text to change to" },
      },
    },
  ];

  const onEvent = (event: AppEvent) => {
    console.log("onEvent: ", event);
    if (event.name === "change-text") {
      setText(event.data.text);
    }
  };

  useEffect(() => {
    openEmbed(webEmbedId, { events, onEvent });
  }, []);

  return (
    <div className="flex justify-center items-center h-[70vh]">
      <div className="font-medium text-2xl">{text}</div>
    </div>
  );
};

export default Home;
