import { generateApiData } from './generateApiData'

const testData = generateApiData()

describe('API Data Tests', () => {
  test('should have 10000 items', () => {
    expect(testData.length).toBe(10000);
  });

  test('should include timestamp and value properties', () => {
    testData.forEach(item => {
      expect(item).toHaveProperty('timestamp');
      expect(item).toHaveProperty('value');
    });
  });

  test('timestamp and value should be of type number', () => {
    testData.forEach(item => {
      expect(typeof item.timestamp).toBe('number');
      expect(typeof item.value).toBe('number');
    });
  });

  test('values should be between 0 and 5', () => {
    testData.forEach(item => {
      expect(item.value).toBeGreaterThanOrEqual(0);
      expect(item.value).toBeLessThanOrEqual(5);
    });
  });

  test('values should be 2-digit floating point numbers', () => {
    testData.forEach(item => {
      const valueString = item.value.toFixed(2);
      expect(valueString).toMatch(/^\d+\.\d{2}$/);
    });
  });
});
