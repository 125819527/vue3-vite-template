import { defineConfig, presetAttributify, presetUno, presetIcons } from 'unocss'

export default defineConfig({
  presets: [presetUno(), presetAttributify()],
  shortcuts: [
    ['wh-full', 'w-full h-full'],
    ['text-ellipsis', 'truncate']
  ],
  rules: [
    [/^bc-(.+)$/, ([, color]) => ({ 'border-color': `#${color}` })],
    [
      'card-shadow',
      {
        'box-shadow': '0 4px 10px 0 rgba(0, 0, 0, 0.14)'
      }
    ]
  ],
  theme: {
    colors: {
      primary: 'var(--primary-color)',
      dark: 'var(--dark-bg)'
    }
  }
})
