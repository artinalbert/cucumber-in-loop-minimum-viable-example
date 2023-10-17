import {
  loadConfiguration,
  loadSupport,
  runCucumber,
} from "@cucumber/cucumber/api";
import path from "path";

async function main() {
  const { runConfiguration } = await loadConfiguration({
    provided: {
      paths: [
        path.join(__dirname, "../features/tests.feature"),
      ],
      require: [
        path.join(__dirname, "../features/support/steps.ts"),
      ],
      parallel: 10
    },
  });
  const support = await loadSupport(runConfiguration)

  for (let i = 0; i < 3; i++) {
    runCucumber({
      ...runConfiguration,
      support
    });
  }
}

main();
