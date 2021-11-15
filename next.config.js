module.exports = {
  reactStrictMode: true,
  compilerOptions: {
    baseUrl: ".",
    paths: {
      "@/content/*": ["content/pages/"]
    }
  },
  webpack:(config)=>{
    config.module.rules.push({
      test: /\.md$/,
      loader:'frontmatter-markdown-loader',
    })
    return config
  }
}
