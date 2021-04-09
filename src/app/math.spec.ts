
fdescribe("Basic test suite", () => {
    beforeEach(() => {
        console.log("**Test Setup")
    })

    afterEach(() => {
        console.log("***TEst Cleanup")
    })


    // sync test, no async 
    it("should add two numbers", () => {
        console.log("***Math Test")
        expect(1 + 1).toBe(2);
    })

    // timeout, in case of async test
    // done is callback function, if used, we should 
    // call done() after  test completed in async mode
    it ("should handle timeout", (done) => {
        setTimeout( () => {
            console.log("***within timer")
            expect(1 + 1).toBe(2)
            done() // to tell karma, that test case is over
        }, 1000);
        console.log("***test complete")
        // end of test case, but actually test is not done
    }, 10000) // by default 5 seconds timeout
})