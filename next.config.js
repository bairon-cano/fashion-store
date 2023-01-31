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
  'loremflickr.com',
];

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: hostnames.map((hostname) => ({
      hostname,
    })),
  },
};

const withPWA = require('next-pwa')({
  dest: 'public',
  include: ['production'],
  register: true,
});

module.exports = withPWA(nextConfig);
