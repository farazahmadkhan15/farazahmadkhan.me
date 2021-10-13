import theme from "grey-docs-faraz";

export default theme({
  components: true,
  content: {
    liveEdit: false,
  },
  docs: {
    primaryColor: "#64748b",
  },
  head: {
    script: [
      {
        src: "https://plausible.io/js/plausible.js",
        async: true,
        defer: true,
        "data-domain": "",
      },
      {
        src:
          "https://unpkg.com/@codersrank/activity@x.x.x/codersrank-activity.min.js",
      },
      {
        src:
          "https://unpkg.com/@codersrank/summary@x.x.x/codersrank-summary.min.js",
      },
      {
        src:
          "https://unpkg.com/@codersrank/timeline@x.x.x/codersrank-timeline.min.js",
      },
      {
        src:
          "https://unpkg.com/@codersrank/skills-chart@x.x.x/codersrank-skills-chart.min.js",
      },
    ],
  },
});
