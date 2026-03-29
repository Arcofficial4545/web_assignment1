import { THEME_KEY, DARK, LIGHT } from '../constants/themeConstants.js'

export const applyTheme = (theme) => {
  document.documentElement.setAttribute(`data-theme`, theme)
  localStorage.setItem(THEME_KEY, theme)
}

export const syncToggleUI = () => {
  const current = localStorage.getItem(THEME_KEY) || DARK
  const toggle = document.getElementById(`theme-toggle`)
  const label = document.getElementById(`theme-label`)
  if (!toggle) return
  if (current === LIGHT) {
    toggle.setAttribute(`aria-checked`, `true`)
    if (label) label.textContent = `Dark Mode`
  } else {
    toggle.setAttribute(`aria-checked`, `false`)
    if (label) label.textContent = `Light Mode`
  }
}

export const toggleTheme = () => {
  const current = localStorage.getItem(THEME_KEY) || DARK
  applyTheme(current === DARK ? LIGHT : DARK)
  syncToggleUI()
}

export const initTheme = () => {
  const saved = localStorage.getItem(THEME_KEY) || DARK
  applyTheme(saved)
  syncToggleUI()
}
