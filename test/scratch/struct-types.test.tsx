import React from 'react'
import {isNullOrUndefined} from 'util';

describe('structural types tests', () => {
    it('should call b method', () => {

        type NarrowType = {
            a: number,
            b: () => void
        }

        type WideType = {
            a: number,
            b: () => void,
            c: string
        }

        let narrowObj: NarrowType = {
            a: 10,
            b: () => {
                console.log('Im narrowType')
            }
        }

        let wideObj: WideType = {
            a: 100,
            b: () => {
                console.log('Im wideType')
            },
            'c': 'TypeScript'
        }

        narrowObj = wideObj

        // narrowObj.b()
        // console.log('a value is:', narrowObj.a)
    })

    it('should not overwrite method', () => {
        // type NarrowType = {
        //     a: number,
        //     b: () => void
        // }
        //
        // type WideType = {
        //     a: number,
        //     b: () => void,
        //     c: string
        // }
        //
        // let narrowObj: NarrowType = {
        //     a: 10,
        //     b: () => {
        //         console.log('Im narrowType')
        //     }
        // }
        //
        // let wideObj: WideType = {
        //     a: 10,
        //     b: () => {
        //         console.log('Im wideType')
        //     },
        //     c: 'TypeScript'
        // }
        //
        // function fun(obj: NarrowType){
        //     obj.b()
        // }
        //
        // function fun(obj: WideType){
        //     obj.b()
        // }
    })
});