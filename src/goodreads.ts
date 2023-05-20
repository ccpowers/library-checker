import { parse } from "csv-parse/sync";
import * as fs from 'fs';

interface GoodreadsEntry {
    book_id: number,
    title: string,
    author: string,
    isbn: number,
    isbn_thirteen: number
    bookshelves: string[],
    bookshelves_positions: number[]
};

export function goodreads_from_csv(path: fs.PathOrFileDescriptor) : GoodreadsEntry[] {
    // todo - catch if it's not a file
    const f = fs.readFileSync(path);

    // todo - what exceptions does this return
    const csv_entries = parse(f);

    // todo skip first entry
    const goodreads_entries: GoodreadsEntry[] = csv_entries.map((csv_entry: any) => {
        return {book_id: csv_entry[0],
            title: csv_entry[1],
            author: csv_entry[2],
            isbn: csv_entry[5]
        }
    });

    return goodreads_entries;
}

