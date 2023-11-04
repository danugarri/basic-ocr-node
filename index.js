const Tesseract = require('tesseract.js');

const config = {
  path: 'https://tesseract.projectnaptha.com/img/eng_bw.png',
  language: 'eng',
  options: {
    logger: (m) => console.log(m),
  },
};

const getText = async () => {
  try {
    const {
      data: { text },
    } = await Tesseract.recognize(config.path, config.language, config.options);
    console.log(text);
    return text;
  } catch (e) {
    throw new Error('Something went wrong during the process');
  }
};

module.exports = { getText };
