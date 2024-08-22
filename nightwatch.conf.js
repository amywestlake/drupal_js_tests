require('dotenv').config();

module.exports = {
  src_folders: ["tests"],
  page_objects_path: 'page_objects',
  custom_commands_path: 'commands',

  webdriver: {
    start_process: true,
    server_path: require('chromedriver').path,
    port: 9515,
  },

  test_settings: {
    default: {
      desiredCapabilities: {
        browserName: "chrome",
      },
    },
  },
};