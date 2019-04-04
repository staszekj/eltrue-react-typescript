import * as React from 'react'
import * as lod from 'lodash';

describe('basic types tests', () => {

    it('should assign value', () => {
        let a: number = 12
        a = 0
    })

    it('should assign values to vector', () => {
        let vector: {
            x: number,
            y: number,
            z?: number
        } = {
            x: 1,
            y: 2
        }

        vector = {
            x: 10,
            y: 20,
            z: 30
        }
    })

    it('should calculate total fruits', () => {

        let myFun = (applesAmount: number, plumsAmount: number): number => {
            let total = applesAmount + plumsAmount
            return total
        }

        const result = myFun(10, 20)

        console.log(`${result} total fruits.`)
    })

    it('should define union', () => {

        type XY = {
            x: number,
            y: number
        }


        let xy: number | XY = {
            x: 10,
            y: 12
        }

        xy = 20

        xy = {
            x: 1,
            y: 2
        }
    })

    it('should define interface', () => {

        interface IA {
            a: number
        }

        interface IA {
            b: number
        }

        let ab: IA = {
            a: 1,
            b: 7
        }

        interface IC extends IA {
            c: string
        }

        let a: IC = {
            a: 1,
            b: 2,
            c: '3'
        }
    })

    it('should call lodash', () => {

        const result: string = lod.trim(' AAAA ')

        expect(result).toEqual('AAAA')
    })
});