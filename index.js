exports.decorateConfig = config => {
  return Object.assign({}, config, {
    borderColor: '#2cfffe',
    cursorColor: '#2cfffe',
    css: `
      ${config.css || ''}
      .tabs_nav .tabs_list .tab_text {
        color: #2cfffe;
      }
      .tabs_nav .tabs_title {
        color: #2cfffe;
      }
    `
  });
}
