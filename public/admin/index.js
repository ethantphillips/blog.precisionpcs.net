// Decap CMS is loaded via <script> tag in index.html

if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", (user) => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

CMS.init({
  config: {
    backend: {
      name: "git-gateway",
      branch: "main",
    },
    media_folder: "public/uploads",
    public_folder: "/uploads",
    collections: [
      {
        name: "blog",
        label: "Blog Posts",
        folder: "src/content/blog",
        create: true,
        slug: "{{slug}}",
        preview: false,
        fields: [
          { label: "Title", name: "title", widget: "string" },
          { label: "Publish Date", name: "pubDate", widget: "datetime" },
          { label: "Description", name: "description", widget: "string" },
          { label: "Tags", name: "tags", widget: "list" },
          { label: "Author", name: "author", widget: "string", default: "Ethan Phillips" },
          { label: "Featured Image", name: "thumbnail", widget: "image", required: false },
          { label: "Body", name: "body", widget: "markdown" },
        ],
      },
    ],
  },
});
