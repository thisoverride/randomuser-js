import { RandomUserMe } from '../provider/RandomUserMe';

describe('RandomUserMe', () => {
  describe('randomUser', () => {
    it('should return a random user or an error', async () => {
      const result = await RandomUserMe.randomUser();
      expect(result).toHaveProperty('gender');
    });
  });

  describe('randomUserByNationality', () => {
    it('should return a user of specified nationality or an error', async () => {
      const result = await RandomUserMe.randomUserByNationality(['AU']);
      expect(result).toHaveProperty('nat', 'AU');
    });
  });

  describe('randomAttributeFilter', () => {
    it('should return a user with specified attributes or an error', async () => {
      const result = await RandomUserMe.randomAttributeFilter(['gender', 'name']);
      expect(result).toHaveProperty('gender');
      expect(result).toHaveProperty('name');
    });
  });

  describe('manyRandomUser', () => {
    it('should return an array of random users or an error', async () => {
      const result = await RandomUserMe.manyRandomUser(5);
      expect(result).toHaveLength(5);
    });

    it('should handle out-of-range requests', async () => {
      const result = await RandomUserMe.manyRandomUser(5001);
      expect(result).toEqual([]);
    });
  });
});

describe('RandomUserMe', () => {
  describe('randomUser', () => {
    it('should return a random user or an error', async () => {
      const result = await RandomUserMe.randomUser();
      expect(result).toEqual(expect.objectContaining({ gender: expect.any(String) }));
    });
  });

  describe('randomUserByNationality', () => {
    it('should return a user of specified nationality or an error', async () => {
      const result = await RandomUserMe.randomUserByNationality(['AU']);
      expect(result).toHaveProperty('nat', 'AU');
    });

    it('should return an error if no nationality is provided', async () => {
      const result = await RandomUserMe.randomUserByNationality([]);
      expect(result).toHaveProperty('message');
      // Additional assertions for error handling
    });
  });

  describe('randomAttributeFilter', () => {
    it('should return a user with specified attributes or an error', async () => {
      const result = await RandomUserMe.randomAttributeFilter(['gender', 'name']);
      expect(result).toHaveProperty('gender');
      expect(result).toHaveProperty('name');
      // Additional assertions based on the structure of RandomUser and RandomUserError
    });

    it('should return an empty object if no attributes are provided', async () => {
      const result = await RandomUserMe.randomAttributeFilter([]);
      expect(result).toEqual({});
    });
  });

  describe('manyRandomUser', () => {
    it('should return an array of random users or an error', async () => {
      const result = await RandomUserMe.manyRandomUser(5);
      expect(result).toHaveLength(5);
    });

    it('should return an empty array for invalid number of random users', async () => {
      const result = await RandomUserMe.manyRandomUser(0);
      expect(result).toEqual([]);
    });

    it('should handle out-of-range requests and return an empty array', async () => {
      const result = await RandomUserMe.manyRandomUser(5001);
      expect(result).toEqual([]);
    });
  });
});