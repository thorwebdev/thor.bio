import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

export function ServerCodePage(props: {
  serverCode: number;
  codeDescription: string;
}) {
  return (
    <>
      <div class="flex flex-col min-h-screen selection::bg-thor-bg selection::text-thor-black">
        <div class="bg-thor-bg flex flex-col">
          <Header title="" active="/" />
        </div>

        <section>
          <div class="text-center">
            <h1 class="text(6xl) md:text(9xl) font-extrabold">
              {props.serverCode}
            </h1>

            <p class="p-4 text(2xl) md:text(3xl)">{props.codeDescription}</p>

            <p class="p-4">
              <a href="/" class="hover:underline">
                Back to the Homepage
              </a>
            </p>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default function PageNotFound() {
  return ServerCodePage({
    serverCode: 404,
    codeDescription: "Couldn't find what you're looking for.",
  });
}
