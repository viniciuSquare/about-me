import { UnsplashImage } from "@/components/UnsplashBackground";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body >
        {/* <header className="w-full bg-slate-400 h-16 flex items-center px-24">
          <a href="/"><h1 className="text-4xl font-bold text-center text-cyan-400">NTS</h1></a>
        </header> */}
        <Main />
        <NextScript />
        <button className="absolute right-8 bottom-4">
          listen to music
        </button>
      </body>
    </Html>
  );
}
