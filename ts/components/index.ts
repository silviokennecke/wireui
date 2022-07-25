import dropdown from './dropdown'
import modal from './modal'
import dialog from './dialog'
import notifications from './notifications'
import maskable from './inputs/maskable'
import currency from './inputs/currency'
import showPassword from './inputs/showPassword'
import select from './select'
import timePicker from './time-picker'
import datetimePicker from './datetime-picker'
import colorPicker from './color-picker'

document.addEventListener('alpine:init', () => {
  window.Alpine.data('wireui_dropdown', dropdown)
  window.Alpine.data('wireui_modal', modal)
  window.Alpine.data('wireui_dialog', dialog)
  window.Alpine.data('wireui_notifications', notifications)
  window.Alpine.data('wireui_inputs_maskable', maskable)
  window.Alpine.data('wireui_inputs_currency', currency)
  window.Alpine.data('wireui_show_password', showPassword)
  window.Alpine.data('wireui_select', select)
  window.Alpine.data('wireui_timepicker', timePicker)
  window.Alpine.data('wireui_datetime_picker', datetimePicker)
  window.Alpine.data('wireui_color_picker', colorPicker)
})
