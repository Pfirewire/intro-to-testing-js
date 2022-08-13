// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});
describe("sayHello", function() {
    it("should be a defined function", function() {
        expect(typeof sayHello).toBe("function");
    });
    it("should return a string when called", function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane." when executed with input "Jane', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane.");
    });
    it('should return the string "Hello, Alex." when executed with input "Alex', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex.");
    });
    it('should return the string "Hello, Pat." when executed with input Pat', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat.");
    });
    it('should return the string "Hello, World." when called with no input', function () {
        expect(sayHello()).toBe("Hello, World.");
    });
    it('should return the string "Hello, World." when executed with input true', function() {
        expect(sayHello(true)).toBe("Hello, World.");
    });
    it('should return the string "Hello, World." when executed with input false', function() {
        expect(sayHello(false)).toBe("Hello, World.");
    });
    it('should return the string "Hello, World." when executed with input 12', function() {
        expect(sayHello(12)).toBe("Hello, World.");
    });
    it('should return the string "Hello, World." when executed with input null', function() {
        expect(sayHello(null)).toBe("Hello, World.");
    });
    it('should return the string "Hello, World." when executed with input ""', function() {
        expect(sayHello("")).toBe("Hello, World.");
    });
});