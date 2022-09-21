module.exports = {
  reactStrictMode: true,
  swcMinify: true,

  i18n: {
    locales: ["sr", "en"],
    defaultLocale: "en",
    localeDetection: false,
  },

  webpack: (config) => {
    config.module.rules.push({
      test: /\.pdf$/,
      use: {
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
        },
      },
    });
    return config;
  },
};
