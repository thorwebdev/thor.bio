---
description: |
  Local and offline AI code assistant for VS Code with Ollama and Sourcegraph
og: '/blog/offline-ai-code-assistant/og.jpeg'
---

I [recently learned](https://sourcegraph.com/blog/local-code-completion-with-ollama-and-cody) that [Sourcegraph's](https://sourcegraph.com/) AI coding assistant [Cody](https://sourcegraph.com/cody) can be used offline by connecting it to a local running [Ollama](https://www.ollama.com/) server.

Now, unfortunately my little old MacBook Air doesn't have enough VRAM to run Mistral's 22B [Codestral](https://mistral.ai/news/codestral/) model, but fear not, I found that the Llama 3 8B model works quite well in powering both code completion and code chat workloads!

Let's have a look at how we can set this up with VS Code for the absolute offline / in-flight coding bliss:

## Install Ollama and pull Llama 3 8B

1. Install [Ollama](https://github.com/ollama/ollama?tab=readme-ov-file#ollama)
1. Run `ollama pull llama3:8b`
1. Once the downloade has completed, run `ollama serve` to start the Ollama server.

## Configure Sourcegraph Cody in Vs Code

1. Install the [Sourcegraph Cody](https://marketplace.visualstudio.com/items?itemName=sourcegraph.sourcegraph) Vs Code Extension.
2. Add the following to your Vs Code settings:

```json
{
  //...
  // Cody autocomplete configuration:
  "cody.autocomplete.advanced.provider": "experimental-ollama",
  "cody.autocomplete.experimental.ollamaOptions": {
    "url": "http://127.0.0.1:11434",
    "model": "llama3:8b"
  },
  // Enable Ollama for Cody Chat:
  "cody.experimental.ollamaChat": true,
  // optional but useful to see detailed logs in the OUTPUT tab
  // (make sure to select "Cody by Sourcegraph" from the dropbdown)
  "cody.debug.verbose": true
  //...
}
```

## Start Cody and enjoy your Local Offline AI Code Assistant

That's it, as long as Ollama is running in the background, you should now have a fully functional offline AI code assistant for Vs Code with Cody. This setup allows you to use both code completion and code chat features without relying on any external services or internet connection. In fact most of this last paragraph was written by Llama 3 8B itself.

For Cody Chat, make sure to select the llama3:8b `Experimental` option from the dropdown and you're good to go! Happy Cod(y)ing \o/
