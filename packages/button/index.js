import GuiButton from './src/button'

GuiButton.install = function(Vue) {
  Vue.component(GuiButton.name, GuiButton);
}

export default GuiButton;
