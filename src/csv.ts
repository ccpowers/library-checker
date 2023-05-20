import * as fs from 'fs';

export type CSVRecord = `${string}\n` | `${string}\r\n`

export interface ParsedCSV  {
    header?: String[],
    data: String[][]
};

export function parse(file: fs.PathLike) : ParsedCSV {
    const data: Buffer = fs.readFileSync(file);

    const testRecord: CSVRecord = `hello, """", whats up\r\n`;


    return {data: [[testRecord]]};
}

export function parseRecord(record: CSVRecord) : String[] {
    // read each character, add to latest buffer
    // if it's a comma, end buffer. if it's a double quote, start escape sequence
    const ret: String[] = []
    let currentStr: String = ''
    let escaped: Boolean = false

    for(let i = 0; i < record.length - 1; i++) {
        const char: String = record.charAt(i)
         // if it's a comma, congrats
         if (char === ',' && !escaped) {
            ret.push(currentStr);
            currentStr = ''
         } else if (char === '"') {
            escaped = !escaped;
         }
    }

    return ret;
}