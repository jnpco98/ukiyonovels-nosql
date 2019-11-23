interface ColorTheme {
  default: string,
  subdued: string,

  black: string,
  white: string,

  background: string,
  backgroundAlternate: string,
  backgroundSecondary: string,

  border: string,
  borderAlternate: string,
  borderSecondary: string,

  primary: string,
  secondary: string,
  accent: string,
  
  selection: string,
  
  success: string,
  error: string
}

export const BaseTheme: ColorTheme = {
  default: '#5f6062',
  subdued: '#afafb0',
  
  black: '#000',
  white: '#fff',
  
  background: '#fff',
  backgroundAlternate: '#f8f8f8',
  backgroundSecondary: '#eef0f4',
  
  border: '#eee',
  borderAlternate: '#f0eeec',
  borderSecondary: '#d4d5d9',
  
  primary: '#5f6062',
  secondary: '#4b503f',
  accent: '#eb4034',
  
  selection: '#7d7d7d',
  
  error: '#eb4034',
  success: '#eef0f4',
}
