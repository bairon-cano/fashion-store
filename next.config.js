/** @type {import('next').NextConfig} */

const hostnames = [
  'placeimg.com',
  'api.lorem.space',
  'placeimh.com',
  'picsum.photos',
  'upcdn.io',
  'www.elgrafico.com.ar',
  'api.escuelajs.co',
  'educacion30.b-cdn.net',
  'img.freepik.com',
  'www.pexels.com',
  'static.platzi.com',
  'www.bellawista.com',
  'cdn.pimylifeup.com',
  'source.unsplash.com',
  'media.pokemoncentral.it',
  'www.cicalia.com',
  'm.media-amazon.com',
  'images.tcdn.com.br',
  'cdn.myanimelist.net',
  'www.nationalgeographic.com.es',
];

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: hostnames.map((hostname) => ({
      hostname,
    })),
  },
  // env: {
  //   customKey: 'customValue',
  // },
  // compress: true,
  // async redirects() {
  //   return [
  //     {
  //       source: '/hola',
  //       destination: '/hello',
  //       permanent: true,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
