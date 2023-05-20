import { parse, parseRecord, type CSVRecord } from "./csv";
import * as chai from 'chai';

describe('CSV Parsing tests', () => {
    it('Splits a record into strings', () => {
        const record: CSVRecord = 'a,b,c,d\r\n';
        const ret: String[] = parseRecord(record);
        chai.expect(ret).to.eql(['a', 'b', 'c', 'd'])
    })
})