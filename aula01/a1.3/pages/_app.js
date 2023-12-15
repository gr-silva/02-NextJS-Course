function MyApp({ Component, pageProps }) {
  return (
    <>
      <style>
        {`*{
        font-family: sans-serif;
      }`}
      </style>
      Texto em toads as páginas
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
