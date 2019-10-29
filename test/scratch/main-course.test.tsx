import * as React from 'react'
import * as lod from 'lodash';
import {number} from 'prop-types';

describe('basic types', () => {

    it("should show difference between dynamic and static types", () => {

        let x: number = 0;
        let y: number = 0;

        const z = x / y;
        const arr = new Array<number>(10);
        arr[11] = 0;

        const bigNumber: number = 2 * Number.MAX_VALUE;

    });


    it('should assign value', () => {
        let a: number = 12
        a = 0

        let b: number | undefined | null
        b = 1

        const funfun = (x: number): number | null => {
            return x > 0 ? x : null;
        };

        const restult = funfun(10);
        const result2 = restult && restult + 1;

        if (typeof restult === "number") {
            const result2 = restult + 1;
        }
    })

    it('should assign values to vector', () => {

        type TVector = {
            x: number,
            y: number,
            z?: number
        }

        let vector: TVector = {
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

    it('should define intersection', () => {

        type XY = {
            x: number,
            y: number
        }

        type XB = {
            x: number,
            b: (num: number) => void
        }


        let xyb: XY & XB = {
            x: 10,
            y: 20,
            b: (num) => {
                console.log('Hello world: ' + num)
            }
        }

        xyb.b(10)
    })

    it('should define union', () => {

        type XY = {
            x: number,
            y: number
        }

        type XB = {
            x: number,
            b: number
        }


        let xyb: XY | XB | number = 10

        xyb = {
            x: 1,
            b: 2
        }

        console.log('Val1: ', xyb.b)

        function fun(xyb: XY | XB): void {
            if (isXB(xyb)) {
                console.log("Val2:", xyb.b);
            }
        }

        //type guard function
        function isXB (xyb: XY | XB): xyb is XB {
            return (xyb as XB).b !== undefined;
        }

        fun(xyb)
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

        interface IOther {
            a: number,
            b: number,
            c: string
        }

        let other: IOther = {
            a: 1,
            b: 2,
            c: '3'
        }

        a = other;
    })

    it('index types', () => {
        type BigType = {
            [key: string]: number
        }

        let bigVar: BigType = {
            a: 10,
            c: 6
        }
    })

    it('keyof', () => {
        type ElementsMap = {
            span: HTMLElement,
            div: HTMLElement
        }

        type Elements = keyof ElementsMap
        let elements: Elements = 'div'
        elements = 'span'

    })

    it('should call lodash', () => {

        const result: string = lod.trim(' AAAA ')

        expect(result).toEqual('AAAA')
    })
});