import { Head } from "$fresh/runtime.ts";
import Header from "@/components/Header.tsx";
import Footer from "@/components/Footer.tsx";

export default function SGOSSTalkPage() {
  return (
    <>
      <Head>
        <title>Singapore OSS Meetup</title>
      </Head>
      <Header title="Talks" active="/talks/sgoss" />

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
      <h2 class="text(3xl gray-800) font-bold">Singapore OSS Meetup</h2>
      <div class="flex mb-4">
        <div class="w-1/2">
          <p class="text-gray-600">Find this page 👇</p>
          <img
            loading="lazy"
            src="/talks/qrcode_thor.bio_sgoss.png"
            alt="QR code for this page"
            width={500}
          />
        </div>
        <div class="w-1/2">
          <p class="text-gray-600">Ask questions 👇</p>
          <img
            loading="lazy"
            src="/talks/sgoss_qa.png"
            alt="QR code for the Q&A"
            width={500}
          />
        </div>
      </div>
      <h3 class="text(xl gray-600) font-bold">
        THU, JUN 08 · 謝謝{" "}
        <a href="https://affine.pro/" class="bg-thor-bg text-thor-black">
          AFFiNE
        </a>{" "}
        for co-hosting 💚
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
              <a href="https://github.com/supabase-community/deno-fresh-openai-doc-search">
                [TypeScript Deno] Build your own ChatGPT
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
