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
describe("isFive", function () {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe("function");
    });
    it('should return a boolean when called', function () {
        expect(typeof isFive()).toBe("boolean");
    });
    it('should return a boolean when executed with null', function () {
        expect(typeof isFive(null)).toBe("boolean");
    });
    it('should return true when executed with 5', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return false when executed with 4', function () {
        expect(isFive(4)).toBe(false);
    });
    it('should return false when executed with 1', function () {
        expect(isFive(1)).toBe(false);
    });
    it('should return false when executed with "5"', function () {
        expect(isFive("5")).toBe(false);
    });
    it('should return false when executed with NaN', function () {
        expect(isFive(NaN)).toBe(false);
    });
});
describe("isEven", function () {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe("function");
    });
    it('should return a boolean when called', function () {
        expect(typeof isEven()).toBe("boolean");
    });
    it('should return true when executed with 2', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when executed with -4', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when executed with 3', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when executed with "banana"', function () {
        expect(isEven("banana")).toBe(false);
    });
    it('should return true when executed with "8"', function () {
        expect(isEven("8")).toBe(true);
    });
    it('should return false when executed with Infinity', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when executed with true', function () {
        expect(isEven(true)).toBe(false);
    });
    it('should return false when executed with false', function () {
        expect(isEven(false)).toBe(false);
    });
    it('should return false when executed without an argument', function () {
        expect(isEven()).toBe(false);
    });
    it('should return false when executed with NaN', function () {
        expect(isEven(NaN)).toBe(false);
    });
});
describe('isVowel', function () {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe("function");
    });
    it('should return a boolean when called', function () {
        expect(typeof isVowel()).toBe('boolean');
    });
    it('should return true if executed with "a"', function () {
        expect(isVowel("a")).toBe(true);
    });
    it('should return true if executed with "A"', function () {
        expect(isVowel("A")).toBe(true);
    });
    it('should return false if executed with "y"', function () {
        expect(isVowel("y")).toBe(false);
    });
    it('should return false if executed with 4', function () {
        expect(isVowel(4)).toBe(false);
    });
    it('should return false if executed with false', function () {
        expect(isVowel(false)).toBe(false);
    });
    it('should return false if executed with true', function () {
        expect(isVowel(true)).toBe(false);
    });
    it('should return false if executed with "banana"', function () {
        expect(isVowel("banana")).toBe(false);
    });
    it('should return false if executed without an argument', function () {
        expect(isVowel()).toBe(false);
    });
});
describe('add', function () {
    it('should be a defined function', function () {
        expect(typeof add).toBe('function');
    });
    it('should return 5 if executed with 2, 3', function () {
        expect(add(2, 3)).toBe(5);
    });
    it('should return -12 if executed with -3, -9', function () {
        expect(add(-3, -9)).toBe(-12);
    });
    it('should return 11 if executed with "5", 6', function () {
        expect(add("5", 6)).toBe(11);
    });
    it('should return 6 if executed with "-4", "10"', function () {
        expect(add("-4", "10")).toBe(6);
    });
    it('should return NaN if executed with "banana", "split"', function () {
        expect(isNaN(add("banana", "split"))).toBe(true);
    });
    it('should return NaN if executed with 2, "apples"', function () {
        expect(isNaN(add(2, "apples"))).toBe(true);
    });
    it('should return NaN if executed without an argument', function () {
        expect(isNaN(add())).toBe(true);
    });
});