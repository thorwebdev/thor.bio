import { asset, Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import ArrowRight from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/arrow-right.tsx";
import Projects from "../components/Projects.tsx";
import projects from "../data/showcase.json" assert { type: "json" };
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

export const handler: Handlers = {};

const TITLE = "thorwebdev";
const DESCRIPTION = "Hi, I'm Thor 雷神, I help developers build 🔨";

export default function MainPage(props: PageProps) {
  const ogImageUrl = new URL(asset("/home-og.png"), props.url).href;
  const origin = `${props.url.protocol}//${props.url.host}`;

  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={props.url.href} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="425" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div class="flex flex-col min-h-screen selection::bg-thor-bg selection::text-thor-black">
        <div class="bg-thor-bg flex flex-col">
          <Header title="" active="/" />
        </div>
        <div class="flex-1">
          <Intro />
          <Showcase />
        </div>
        <Footer />
      </div>
    </>
  );
}

function Intro() {
  return (
    <section class="max-w-screen-md mx-auto my-16 px(4 sm:6 md:8) space-y-12">
      <div class="md:flex items-center">
        <div class="flex-1 text-center md:text-left">
          <h2 class="py-2 text(5xl sm:5xl lg:5xl gray-900) sm:tracking-tight sm:leading-[1.1]! font-extrabold">
            Hello,
            <br /> I'm <span class="bg-thor-bg text-thor-black">Thor 雷神</span>
            .
          </h2>

          <p class="mt-4 text(3xl sm:3xl lg:3xl gray-600)">
            I help developers build.
          </p>
        </div>

        <picture class="block mt-4 md:mt-0">
          <img
            src="/logo.svg"
            class="w-80 mx-auto"
            width={800}
            height={678}
            alt="Thor Hammer"
          />
        </picture>
      </div>
    </section>
  );
}

function Showcase() {
  return (
    <section class="max-w-screen-md mx-auto my-16 px(4 sm:6 md:8) space-y-4">
      <h2 id="showcase" class="text(3xl gray-600) font-bold">
        <a href="#showcase" class="hover:underline">
          Showcase
        </a>
      </h2>
      <p class="text-gray-600">
        Explore some of my recent work and contributions 👇
      </p>
      <Projects items={projects.slice(0, 3)} class="gap-8" />
      <div class="flex gap-2 items-center justify-end text-blue-600">
        <ArrowRight />
        <a href="./showcase" class="hover:underline focus:underline">
          View more
        </a>
      </div>
    </section>
  );
}
