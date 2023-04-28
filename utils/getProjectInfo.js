import { strings } from "./strings.js";
import inquirer from "inquirer";

export async function getProjectName() {
  const answers = await inquirer.prompt({
    name: "player_name",
    type: "input",
    message: strings["project_name"],
    default() {
      return strings["project_name_placeholder"];
    },
  });

  return answers.player_name;
}

export async function getProjectDomain() {
  const answers = await inquirer.prompt({
    name: "project_domain",
    type: "list",
    message: "Choose Project Domain \n",
    choices: [
      "1) Web Development",
      "2) App Development",
      "3) CLI Development",
      "4) Game Development",
      "5) Web Extension Development",
    ],
  });

  return answers.project_domain;
}
