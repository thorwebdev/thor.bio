import { Head } from "$fresh/runtime.ts";
import Header from "@/components/Header.tsx";
import Footer from "@/components/Footer.tsx";

export default function TaiwanMLTalkPage() {
  return (
    <>
      <Head>
        <title>Taiwan Machine Learning Tech Talks</title>
      </Head>
      <Header title="Talks" active="/talks/twml" />

      <div class="flex flex-col min-h-screen">
        <div class="flex-1">
          <Content />
        </div>
        <Footer />
      </div>
    </>
  );
}

function Content() {
  return (
    <section class="max-w-screen-lg mx-auto my-16 px(4 sm:6 md:8) space-y-4">
      <h2 class="text(3xl gray-800) font-bold">
        Taiwan Machine Learning Tech Talks
      </h2>
      <img
        loading="lazy"
        src="/talks/qrcode_thor.bio_twml.png"
        alt="QR code for this page"
        width={500}
      />
      <h3 class="text(xl gray-600) font-bold">
        WED, MAY 31 · TAIPEI · 謝謝{" "}
        <a href="https://piccollage.com/" class="bg-thor-bg text-thor-black">
          PicCollage
        </a>{" "}
        for hosting 💚
      </h3>
      <p class="text-gray-600">
        Find the resources and examples from my talk below:
      </p>
      <ul class="text-gray-600 list-disc pl-5 mt-2">
        <li class="mt-2">
          <p class="text-gray-600">Resources</p>
          <ul class="text-gray-600 list-decimal pl-5 mt-2">
            <li>
              <a href="https://supabase.com/blog/openai-embeddings-postgres-vector">
                [Blog] Postgres with pgvector
              </a>
            </li>
            <li>
              <a href="https://supabase.com/docs/guides/ai">
                [Docs] Supabase Vector
              </a>
            </li>
          </ul>
        </li>
        <li class="mt-2">
          <p class="text-gray-600">Examples</p>
          <ul class="text-gray-600 list-decimal pl-5 mt-2">
            <li>
              <a href="https://supabase.com/docs/guides/ai/examples/image-search-openai-clip">
                [Python] Image Search
              </a>
            </li>
            <li>
              <a href="https://supabase.com/docs/guides/ai/examples/nextjs-vector-search">
                [TypeScript] Build your own ChatGPT
              </a>
            </li>
          </ul>
        </li>
        <li class="mt-2">
          <p class="text-gray-600">Tools</p>
          <ul class="text-gray-600 list-decimal pl-5 mt-2">
            <li>
              <a href="https://github.com/supabase/embeddings-generator">
                [GitHub Action] Embeddings Generator
              </a>
            </li>
            <li>
              <a href="https://github.com/supabase/headless-vector-search">
                [TypeScript Deno Edge Function] Headless Vector Search
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
}
