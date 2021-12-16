// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
//  c
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

// const { withSentryConfig } = require('@sentry/nextjs')

/**
 * @type {import('next').NextConfig}
 */

const currentGitBranchName = require("current-git-branch");

const nextConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.ya?ml$/,
      type: "json",
      use: "js-yaml-loader",
    });
    return config;
  },
  env: {
    GIT_BRANCH: currentGitBranchName(),
  },
  reactStrictMode: true,
  staticPageGenerationTimeout: 600,
  images: {
    domains: [
      "assets.front-matter.io",
      "assets.force11.org",
      "images.unsplash.com",
    ],
  },
  async redirects() {
    return [
      {
        source: "/members",
        destination: "/api/members",
        permanent: true,
      },
    ];
  },
};

// const SentryWebpackPluginOptions = {
//   // Additional config options for the Sentry Webpack plugin. Keep in mind that
//   // the following options are set automatically, and overriding them is not
//   // recommended:
//   //   release, url, org, project, authToken, configFile, stripPrefix,
//   //   urlPrefix, include, ignore

//   silent: true // Suppresses all logs
//   // For all available options, see:
//   // https://github.com/getsentry/sentry-webpack-plugin#options.
// }

// // Make sure adding Sentry options is the last code to run before exporting, to
// // ensure that your source maps include changes from all other Webpack plugins
// module.exports = withSentryConfig(moduleExports, SentryWebpackPluginOptions)

module.exports = nextConfig;
