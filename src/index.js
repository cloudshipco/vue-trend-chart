import TrendChart from "./components/trend-chart.js";

export default {
  install: (app, options) => {
    app.component("TrendChart", TrendChart);
  },
};
