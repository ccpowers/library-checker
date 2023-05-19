import { goodreads_from_csv } from "./goodreads";
import * as fs from 'fs';

// read and print csv results
const path: fs.PathOrFileDescriptor = 'fixtures/goodreads_library_export.csv';

const ret = goodreads_from_csv(path);

console.log(ret);