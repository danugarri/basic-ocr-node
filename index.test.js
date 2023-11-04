const mockedText = 'Texto obtenido correctamente';
const mockedRecognize = jest.fn(() => ({ data: { text: mockedText } }));

jest.mock('tesseract.js', () => ({
  ...jest.requireActual('tesseract.js'),
  recognize: mockedRecognize,
}));

const { getText } = require('.');

describe('The getText function', () => {
  test('should log the text from the specified image', async () => {
    await expect(getText()).resolves.toBe(mockedText);
  });
});
