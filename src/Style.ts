export const Color = {
  Primary: 'rgb(29, 155, 240)',
  White: '#fff',
  White2: '#536471',
  PreWhite: 'rgb(83, 100, 113)',
  Gray: 'rgb(207, 217, 222)',
  Black: '#000',
  Black2: 'rgb(15, 20, 25)',
  Error: '#f9423a',
  Check: '#009736',
  Border: 'rgb(239, 243, 244)',
  Border2: '#dadce0',
};

export const Font = {
  Size: {
    small1: 12,
    small2: 13,
    Default: 14,
    Big1: 16,
  },
  Weight: {
    Bold: 700,
  }
}

const BreakPoints = {
  Mobile: 365,
  Tablet: 960,
}

export const MQ = {
  Mobile: `@media (max-width: ${BreakPoints.Mobile})`,
  Tablet: `@media (max-width: ${BreakPoints.Tablet}, min-width: ${BreakPoints.Mobile + 1})`,
  Desktop: `@media (min-width: ${BreakPoints.Tablet + 1})`
}