export function getFontIcons(fontFamily) {
  const sheets = document.styleSheets;

  for (let i = 0; i < sheets.length; i++) {
    const sheet = sheets[i];
    const rules = sheet.cssRules || sheet.rules;

    if (rules.length > 0 && rules[0] instanceof CSSFontFaceRule && rules[0].style.fontFamily === fontFamily) {
      let fontIcons = [];

      for (let j = 0; j < rules.length; j++) {
        const rule = rules[j];

        if (rule.selectorText) {
          let selectorText = rule.selectorText;

          if (selectorText.indexOf(':before') != -1) {
            selectorText = selectorText.split(',')[0];
            selectorText = selectorText.trim().replace(/^\./, '').replace(/:+before$/, '');

            fontIcons.push({
              classname: selectorText,
              text: selectorText.replace(/[^-]*(?=-)-/, '').replace(/^fa-/, '').replace(/^theme-/, '').replace(/-/g, ' ')
            });
          }
        }
      }

      if (fontIcons.length > 0) {
        fontIcons.sort();
        return fontIcons;
      }
    }
  }

  return false;
}