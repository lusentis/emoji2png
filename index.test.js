const Parser = require('.');

describe('Emoji parser', () => {
  it('should parse emoji', () => {
    const parser = new Parser();
    const result = parser.parse('Text 🙂 text');
    expect(result).toMatchSnapshot();
  });

  it('should not crash for null', () => {
    const parser = new Parser();
    const result = parser.parse(null);
    expect(result).toBe(null);
  });

  it('should not crash for undefined', () => {
    const parser = new Parser();
    const result = parser.parse(undefined);
    expect(result).toBe(undefined);
  });

  it('should not crash for empty string', () => {
    const parser = new Parser();
    const result = parser.parse('');
    expect(result).toBe('');
  });
});
