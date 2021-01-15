const defaultFont = 'Nunito Sans, sans-serif';

const sm = {
  fontFamily: defaultFont,
  fontSize: 14,
  lineHeight: 1.5,
};

const smBold = {
  ...sm,
  fontWeight: 'bold',
};

const md = {
  fontFamily: defaultFont,
  fontSize: 16,
  lineHeight: 1.5,
};

const mdBold = {
  ...md,
  fontWeight: 'bold',
};

const lg = {
  fontFamily: defaultFont,
  fontSize: 20,
  lineHeight: 1.5,
};

const lgBold = {
  ...lg,
  fontWeight: 'bold',
};

const typography = {
  sm,
  smBold,
  md,
  mdBold,
  lg,
  lgBold,
};

export default typography;
