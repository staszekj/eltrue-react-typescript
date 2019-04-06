import React from 'react'

describe('extra tests', () => {

    it('pick type', () => {
        type Abc = {
            a: string,
            b: boolean,
            c: number
        }

        type MyBool = Abc['b']

        let abc: MyBool = true
    })

    it('remapping type', () => {
        type Abc = {
            a: string,
            b: boolean,
            c: number
        }

        type Abc2 = {
            [K in keyof Abc]: Abc[K] extends boolean ? number : Abc[K]
        }

        let abc: Abc2 = {
            a: 'A',
            b: 2,
            c: 2
        }
    })
});