import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { frontMatter, gfm } from "../../utils/markdown.ts";

import Header from "../../components/Header.tsx";
import BlogTitle from "../../components/BlogTitle.tsx";
import BlogSidebar from "../../components/BlogSidebar.tsx";
import Footer from "../../components/Footer.tsx";
import {
  SLUGS,
  TABLE_OF_CONTENTS,
  TableOfContentsEntry,
} from "../../data/blog.ts";

import { ElevenLabsAudioNative } from "../../islands/ElevenLabsAudioNative.tsx";

interface Data {
  page: Page;
}

interface Page extends TableOfContentsEntry {
  markdown: string;
  data: Record<string, unknown>;
}

export const handler: Handlers<Data> = {
  async GET(_req, ctx) {
    const slug = ctx.params.slug;
    if (slug === "") {
      return new Response("", {
        status: 307,
        headers: { location: "/blog/introduction" },
      });
    }
    if (slug === "concepts/architechture") {
      return new Response("", {
        status: 307,
        headers: { location: "/blog/concepts/architecture" },
      });
    }

    const entry = TABLE_OF_CONTENTS[slug];
    if (!entry) {
      return ctx.renderNotFound();
    }
    const url = new URL(`../../${entry.file}`, import.meta.url);
    const fileContent = await Deno.readTextFile(url);
    const { body, attrs } = frontMatter<Record<string, unknown>>(fileContent);
    const page = { ...entry, markdown: body, data: attrs ?? {} };
    const resp = ctx.render({ page });
    return resp;
  },
};

export default function DocsPage(props: PageProps<Data>) {
  const {
    title,
    href,
    data: { description, og },
  } = props.data.page;

  return (
    <>
      <Head>
        <title>{title ?? "Not Found"} | Thor's Blog</title>
        <link rel="stylesheet" href={`/gfm.css?build=${__FRSH_BUILD_ID}`} />
        {<meta property="og:title" content={title} />}
        {description && (
          <meta name="description" content={description as string} />
        )}
        {<meta property="og:url" content={`https://thor.bio${href}`} />}
        {og && <meta property="og:image" content={`https://thor.bio${og}`} />}
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div class="flex flex-col min-h-screen">
        <Header title="blog" active="/blog" />
        <Main path={props.url.pathname} page={props.data.page} />
        <Footer />
      </div>
    </>
  );
}
import IconBooks from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/books.tsx";
function Main(props: { path: string; page: Page }) {
  return (
    <div class="flex-1">
      <MobileSidebar path={props.path} />
      <div class="flex mx-auto max-w-screen-lg px-4 py-5 justify-end">
        <label
          for="docs_sidebar"
          class="px-4 py-3 md:hidden flex items-center hover:bg-gray-100 rounded gap-2"
        >
          <svg
            class="h-6 w-6"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            ></path>
          </svg>
          <div>Menu</div>
        </label>
      </div>
      <div class="mx-auto max-w-screen-lg px-4 flex gap-6">
        <DesktopSidebar path={props.path} />
        <Content page={props.page} />
      </div>
    </div>
  );
}

function MobileSidebar(props: { path: string }) {
  return (
    <>
      <input
        type="checkbox"
        class="hidden toggle"
        id="docs_sidebar"
        autocomplete="off"
      ></input>
      <div class="fixed inset-0 flex z-40 hidden toggled">
        <label
          class="absolute inset-0 bg-gray-600 opacity-75"
          for="docs_sidebar"
        />
        <div class="relative flex-1 flex flex-col w-[16rem] h-full bg-white border(r-2 gray-100)">
          <div class="p-4 border(b-2 gray-100) bg-green-300">
            <BlogTitle title="blog" />
          </div>
          <nav class="pt-6 pb-16 px-4 overflow-x-auto">
            <BlogSidebar mobile path={props.path} />
          </nav>
        </div>
      </div>
    </>
  );
}

function DesktopSidebar(props: { path: string }) {
  return (
    <nav class="w-[16rem] flex-shrink-0 hidden md:block py-8 pr-4 border(r-2 gray-100)">
      <BlogSidebar path={props.path} />
    </nav>
  );
}

function Content(props: { page: Page }) {
  const html = gfm.render(props.page.markdown, { allowIframes: true });
  return (
    <main class="py-6 overflow-hidden">
      <h1 class="text(4xl gray-900) tracking-tight font-extrabold mt-6">
        {props.page.title}
      </h1>
      <ElevenLabsAudioNative
        publicUserId="c51422d887dfa49887d76da679fd1a5d8e4146687e47adb71ad173f1c1ddb626"
        backgroundColorRgba="rgba(110,231,183,1)"
        textColorRgba="rgba(51,51,51,1)"
      />
      <div
        class="mt-6 markdown-body"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <ForwardBackButtons slug={props.page.slug} />
    </main>
  );
}

const button = "p-2 bg-gray-100 w-full border(1 gray-200) grid";

function ForwardBackButtons(props: { slug: string }) {
  const currentIndex = SLUGS.findIndex((slug) => slug === props.slug);
  const previousSlug = SLUGS[currentIndex - 1];
  const nextSlug = SLUGS[currentIndex + 1];
  const previous = TABLE_OF_CONTENTS[previousSlug];
  const next = TABLE_OF_CONTENTS[nextSlug];

  const upper = "text(sm gray-600)";
  const category = "font-normal";
  const lower = "text-gray-900 font-medium";

  return (
    <div class="mt-8 flex flex(col md:row) gap-4">
      {previous && (
        <a href={previous.href} class={`${button} text-left`}>
          <span class={upper}>{"←"} Previous</span>
          <span class={lower}>
            <span class={category}>
              {previous.category
                ? `${TABLE_OF_CONTENTS[previous.category].title}: `
                : ""}
            </span>
            {previous.title}
          </span>
        </a>
      )}
      {next && (
        <a href={next.href} class={`${button} text-right`}>
          <span class={upper}>Next {"→"}</span>
          <span class={lower}>
            <span class={category}>
              {next.category
                ? `${TABLE_OF_CONTENTS[next.category].title}: `
                : ""}
            </span>
            {next.title}
          </span>
        </a>
      )}
    </div>
  );
}
