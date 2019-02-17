import * as React from 'react'
import * as TestRenderer from 'react-test-renderer';
import {MainAppType} from 'type/components/main-app/main-app.type'
import {createElement, MouseEventHandler, ReactDOM, useState} from 'react';

describe('Test', () => {
    it('Should test', () => {

        const ff = (mem: number, setmem: React.Dispatch<number>) => (e: React.MouseEvent) => {
            return setmem(mem+1)
        }

        const AA: MainAppType = () => {
            let [mem, setmem] = useState<number>(10)
            console.log('SJA: rendering', mem)
            const f = ff(mem, setmem)

            const t: MouseEventHandler<HTMLDivElement> = (e) => {
                return
            }


            return (
                <div onClick={f}>aa</div>
            )
        }
        const rootComponent = TestRenderer.create(<AA/>).root
        const div = rootComponent.findByType('div')
        TestRenderer.act(() => {
            div.props['onClick']()
        })
        TestRenderer.act(() => {
            div.props['onClick']()
        })
        TestRenderer.act(() => {
            div.props['onClick']()
        })

    })
})