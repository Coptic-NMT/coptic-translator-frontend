This repo contains the code for the [Coptic Translator](https://www.coptictranslator.com/) frontend. It's built with [Next.js](https://nextjs.org/).

## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Running with your own models

The translation models are not included in the GitHub repo. Eventually, we plan to host our model weights on HuggingFace. If you would like to host your own translation models, we recommend the following steps:
1. Load source-target and target-source PyTorch models (from HuggingFace, or train your own using the provided utilities).
2. Create a source-target and target-source REST API using [TorchServe](https://pytorch.org/serve/).
3. Update the destination in `next.config.js` with your backend server address.
4. Store the APIs in the `NEXT_PUBLIC_ENGLISH_API` and `NEXT_PUBLIC_COPTIC_API` environmental variables (for local developemnt, put them in a `.env.local` file)
5. Run the server and the frontend. Now, your frontend should have full functionality.


## Contributing

Create a branch and make your changes. Once complete, create a pull request and we will review your code. Any code merged to `main` is automatically deployed. 