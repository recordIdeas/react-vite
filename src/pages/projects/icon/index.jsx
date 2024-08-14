import { useState, useCallback, memo } from 'react';
import { useParams } from "react-router-dom";
import { getFontIcons } from '../../../utils/font/getFontIcons';
import './css/icon.css';
import './css/popups.css';

export default function Icon() {
  const [currentFont, setCurrentFont] = useState("");
  const [currentIcons, setCurrentIcons] = useState([]);
  const [selectedIcon, setSelectedIcon] = useState("");
  const [query, setQuery] = useState("");

  const params = useParams();
  if (currentFont !== params.family) {
    const fontIcons = getFontIcons(params.family);

    if (fontIcons) {
      setCurrentFont(params.family);
      setCurrentIcons(fontIcons);
      setSelectedIcon(matchValueInArray(fontIcons, 'search'));
    } else {
      if (!currentFont) importFontCss(params.family);

      setTimeout(() => {
        setCurrentFont(currentFont + 1);
      }, 100);
    }
  }

  const selectIcon = useCallback((icon) => {
    setSelectedIcon(icon);
  }, []);

  return (
    <div>
      <div className="result-icon">
        <label className="select-icon" htmlFor="popups-1">选择图标</label>
        <span className={"f-icon-family " + selectedIcon.classname} style={{ fontFamily: params.family }}></span>
        <span className="f-icon-text" onClick={() => { document.execCommand('copy'); }}>{selectedIcon.text}</span>
      </div>

      <div className="popups">
        <input type="checkbox" name="popups" id="popups-1" defaultChecked hidden />
        <div className="popups-box">
          <div className="popups-content">
            <label htmlFor="popups-1">×</label>
            <div className="font-icon">
              <input className="f-icon-search" type="search" value={query} onChange={e => setQuery(e.target.value)} />
              <FontIconList fontFamily={params.family} fontIcons={currentIcons} query={query} handleClick={selectIcon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const FontIconList = memo(function FontIconList({ fontFamily, fontIcons, query, handleClick }) {
  const visibleIcons = fontIcons.filter(
    icon => icon.text.toLocaleLowerCase().indexOf(query.trim().replace(/\s+/g, ' ').toLocaleLowerCase()) !== -1
  );

  return (
    <div className="f-icon-list">
      {visibleIcons.map((icon, i) =>
        <div className="f-icon-item" key={i}>
          <label htmlFor="popups-1" onClick={() => { handleClick(icon) }}></label>
          <span className={"f-icon-family " + icon.classname} style={{ fontFamily }}></span>
          <span className="f-icon-text">{icon.text}</span>
        </div>
      )}
    </div>
  )
});

function importFontCss(fontFamily) {
  return import(`./fonts/${fontFamily}/${fontFamily}.css`);
}

function matchValueInArray(arr, query) {
  return arr.reduce((prevIcon, icon) => {
    if (prevIcon.text == query) {
      return prevIcon;
    } else if (icon.text == query) {
      return icon;
    } else if (prevIcon.text.indexOf(query) != -1) {
      return prevIcon;
    } else if (icon.text.indexOf(query) != -1) {
      return icon;
    } else {
      return prevIcon;
    }
  }, arr[0]);
}