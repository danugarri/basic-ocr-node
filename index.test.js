const { getText } = require('.');
const { PromiseRejected } = require('./error');

const mockedText = 'Texto obtenido correctamente';
const mockedRecognize = jest.fn(() => ({ data: { text: mockedText } }));

jest.mock('tesseract.js', () => ({
  ...jest.requireActual('tesseract.js'),
  recognize: () => mockedRecognize(),
}));

describe('The getText function', () => {
  test('should log the text from the specified image', async () => {
    await expect(getText()).resolves.toBe(mockedText);
  });
  test('should throw an error if the process fails', async () => {
    mockedRecognize.mockImplementationOnce(() => {
      throw new PromiseRejected();
    });
    await expect(getText()).rejects.toThrow('Something went wrong during the process');
  });
  test('should throw an error of the PromiseRejected type', async () => {
    mockedRecognize.mockImplementationOnce(() => {
      throw new PromiseRejected();
    });
    await expect(getText()).rejects.toThrow(PromiseRejected);
  });
});
