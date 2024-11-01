import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import userData from "@constants/data";

export default function Hero() {
  const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
  return (
    <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
      <img class="w-24 h-24 rounded-full mx-auto" src="/profile.jpg" alt="" width="400" height="530"/>
        <div class="pt-6 text-center space-y-4">
          <blockquote>
            <p class="text-lg font-medium">
              Highly skilled professional who specializes in designing, developing, and maintaining software systems.
            </p>
            <p>Here is my blog page<a href="https://theg.vercel.app/ "> Blog</a> </p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">
              Raphael Kipsang
            </div>
            <div class="text-slate-700 dark:text-slate-500">
              Software Engineer, Kenya
            </div>
          </figcaption>
        </div>
    </figure>
  );
}
