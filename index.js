// Libraries
import chalk from "chalk";
import gradient from "gradient-string";
import figlet from "figlet";
import { createSpinner } from "nanospinner";
import { getProjectDomain, getProjectName } from "./utils/getProjectInfo.js";
// utils
import welcome from "./utils/welcome.js";

// variables
const project_details = {
  project_name: "",
  project_domain: "",
  project_type: "",
  project_primary_stack: "",
  project_package_manager: "",
};

console.clear();
welcome()
  .then(async () => {
    let project_name = await getProjectName();
    project_details.project_name = project_name;
  })
  .then(async () => {
    let project_domain = await getProjectDomain()
    project_details.project_domain = project_domain.substring(3)
    console.log(project_details)
  });
