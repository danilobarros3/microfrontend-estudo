module.exports = {
  name: "header",
  urlGlobalVariable: "headerModuleUrl",
  get url() {
    const remoteUrl = `${process.env.REACT_APP_MF_HEADER}/remoteEntry.js`;
    console.log("Generated Remote URL:", remoteUrl);
    return remoteUrl;
  },
  get federationConfig() {
    const config = `${this.name}@[window.${this.urlGlobalVariable}]`;
    console.log("Generated Federation Config:", config);
    return config;
  },
};
