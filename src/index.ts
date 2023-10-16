import {
  IRunConfiguration,
  loadConfiguration,
  runCucumber,
} from "@cucumber/cucumber/api";
import path from "path";

async function main() {
  for (let i = 0; i < 3; i++) {
    const { runConfiguration } = await loadConfiguration({
      provided: { parallel: 10 },
    });
    runConfiguration.sources.paths = [
      path.join(__dirname, "../features/tests.feature"),
    ];
    runConfiguration.support.requireModules = [
      path.join(__dirname, "../features/support/steps.ts"),
    ];
    runCucumber(runConfiguration);
  }
}

main();
