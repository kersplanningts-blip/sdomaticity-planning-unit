const fs = require("fs");
const path = require("path");

const KPI_FOLDER = path.join(__dirname, "..", "public", "KPI");
const OUTPUT = path.join(__dirname, "..", "app", "Downloads", "data", "kpi.ts");

const result = {};

const folders = fs.readdirSync(KPI_FOLDER);

folders.forEach(folder => {
    const folderPath = path.join(KPI_FOLDER, folder);

    if (fs.statSync(folderPath).isDirectory()) {

        const files = fs.readdirSync(folderPath)
            .filter(file => file.endsWith(".xlsx"));

        result[folder] = files;
    }
});

const content =
`export const kpiData = ${JSON.stringify(result, null, 2)};`;

fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
fs.writeFileSync(OUTPUT, content);

console.log("✅ KPI data generated!");