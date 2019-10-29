describe('Yet another test', () => {
    it('should work', () => {
        type A = number | boolean
        type B = {
            [key in string]: any
        }

        const fun1: () => A = () => true;
        const fun2: (x: keyof B) => null = (x) => null;


        type Excl<T, U> = T extends T ?
            U extends T ? never : T
            : never

        type C1 = Exclude<A, B>


        type C = Excl<B, string>
    })
});

