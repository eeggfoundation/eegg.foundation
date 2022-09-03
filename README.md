# eegg.foundation web

<p>
    <picture>
        <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/eeggfoundation/.github/main/content/eegg-logo-light.svg">
        <img alt="Eegg" src="https://raw.githubusercontent.com/eeggfoundation/.github/main/content/eegg-logo-dark.svg" width="auto" height="60">
    </picture>
</p>

## Environment Configuration

In the repository root, copy `.env.example` file as `.env`.\
Configuration keys and their explanation follow:

### Alchemy

If you want to use [Alchemy](https://www.alchemy.com/) as your web3 provider, assign your API key:

```sh
NEXT_PUBLIC_ALCHEMY_API_KEY=<your API key>
```

## Frontend

### Available Scripts

In the project directory, you can run:

#### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.

#### `npm run build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
The app is ready to be deployed!

## Backend

Backend serverless functions are written in `go`, prepared for deployment to [Vercel](https://vercel.com). The official Vercel runtime doc is [here](https://vercel.com/docs/runtimes#official-runtimes/go).

### Testing

```sh
go test ./api/...
```
