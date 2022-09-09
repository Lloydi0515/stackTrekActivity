import fs from 'fs/promises'


export function updateJSON(object, path) {
  const content = JSON.stringify(object)
  fs.writeFile(path, content)
}

export async function readJSON(path) {
    try {
        const rawData = await fs.readFile(path, { encoding: 'utf8' });
        const data = JSON.parse(rawData);
        return data;
    } catch(err) {
        console.log(err);
    }
}


