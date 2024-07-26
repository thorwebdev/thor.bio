import { Head } from '$fresh/runtime.ts';
import Header from '@/components/Header.tsx';
import Footer from '@/components/Footer.tsx';

export default function SGCityJSConf2024TalkPage() {
  return (
    <>
      <Head>
        <title>AI in the Browser and on the Edge</title>
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
      <h2 class="text(3xl gray-800) font-bold">
        AI in the Browser and on the Edge
      </h2>
      <div class="flex mb-4">
        <div class="w-1/2">
          <p class="text-gray-600">Find this page 👇</p>
          <img
            loading="lazy"
            src="/talks/qrcode_cityjsconfsg2024.png"
            alt="QR code for this page"
            width={500}
          />
        </div>
      </div>
      <h3 class="text(xl gray-600) font-bold">
        FRI, JUL 26, 2024 · CityJS Conf Singapore
      </h3>
      <p class="text-gray-600">
        Participate in the demo for the chance to win a Supabase T-Shirt!
      </p>
      <ul class="text-gray-600 list-disc pl-5 mt-2">
        <li class="mt-2">
          <a
            class="underline"
            href="https://go.thor.bio/whisper-receiver"
          >
            Open the demo (best on desktop)
          </a>
        </li>
        <li class="mt-2">
          <a
            class="underline"
            href="https://x.com/thorwebdev"
          >
            Take a (screen) recording or screenshot during the live demo and Tweet it tagging @thorwebdev
          </a>
        </li>
      </ul>
      <p class="text-gray-600">
        Find the resources and examples from my talk below:
      </p>
      <ul class="text-gray-600 list-disc pl-5 mt-2">
        <li class="mt-2">
          <a
            class="underline"
            href="https://huggingface.co/docs/transformers.js/en/index"
          >
            Transformers.js
          </a>
        </li>
        <li class="mt-2">
          <p class="text-gray-600">OpenAI Whisper in the Browser (WebGPU)</p>
          <ul class="text-gray-600 list-decimal pl-5 mt-2">
            <li>
              <a
                class="underline"
                href="https://github.com/xenova/transformers.js/tree/v3/examples/webgpu-whisper"
              >
                Source code
              </a>
            </li>
            <li>
              <a
                class="underline"
                href="https://huggingface.co/spaces/Xenova/realtime-whisper-webgpu"
              >
                Demo
              </a>
            </li>
          </ul>
        </li>
        <li class="mt-2">
          <p class="text-gray-600">Multilingual translation</p>
          <ul class="text-gray-600 list-decimal pl-5 mt-2">
            <li>
              <a
                class="underline"
                href="https://github.com/xenova/transformers.js/tree/main/examples/react-translator/"
              >
                Source code
              </a>
            </li>
            <li>
              <a
                class="underline"
                href="https://huggingface.co/spaces/Xenova/react-translator"
              >
                Demo
              </a>
            </li>
          </ul>
        </li>
        <li class="mt-2">
          <p class="text-gray-600">AI on the Edge</p>
          <ul class="text-gray-600 list-decimal pl-5 mt-2">
            <li>
              <a
                class="underline"
                href="https://supabase.com/docs/guides/functions/ai-models"
              >
                Docs
              </a>
            </li>
            <li>
              <a
                class="underline"
                href="https://github.com/supabase/supabase/tree/master/examples/ai/edge-functions"
              >
                Source Code
              </a>
            </li>
          </ul>
        </li>
        <li class="mt-2">
          <p class="text-gray-600">Run LLMs locally</p>
          <ul class="text-gray-600 list-decimal pl-5 mt-2">
            <li>
              <a class="underline" href="https://jan.ai/">
                Jan.ai
              </a>
            </li>
            <li>
              <a
                class="underline"
                href="https://github.com/Mozilla-Ocho/llamafile"
              >
                Mozilla Llamafile
              </a>
            </li>
            <li>
              <a class="underline" href="https://ollama.com/">
                Ollama
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
}
