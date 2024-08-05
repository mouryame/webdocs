export function changeCSSVariables(propName: string, value: string) {
  document.documentElement.style.setProperty(propName, value);
}
