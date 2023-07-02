import fs from "fs/promises";

const cpanelYmlContent = `---
deployment:
  tasks:
    - export DEPLOYPATH=/home/u629157071/public_html
    - /bin/cp -R $BUILD_DIR/* $DEPLOYPATH
    - /bin/cp package-lock.json $DEPLOYPATH
  version: 2
`;

fs.writeFile("dist/.cpanel.yml", cpanelYmlContent)
  .then(() => {
    console.log(".cpanel.yml created successfully!");
  })
  .catch((err) => {
    console.error("Error creating .cpanel.yml:", err);
  });
