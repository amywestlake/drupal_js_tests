module.exports = {
    beforeEach: function (browser) {
      browser.login();
    },
  
    'Media browser selects the correct image': function (browser) {
      const buttonSelector = '[data-cke-tooltip-text="Articles Slice"]';
      const iframeSelector = 'iframe[src="/paragraph-embed/dialog/article_basic_html/slice_articles?paragraphs_entity_embed_inside_iframe=1"]'; 
      const addImageButtonSelector = '#paragraph-editorial-image-add-more';
      const openMediaLibraryButtonSelector = '[data-drupal-selector="edit-paragraph-0-subform-image-open-button"]';
      const firstImageSelector = '.media-library-views-form__rows img:first-of-type';
      const mediaLibraryButtonSelector = 'button.media-library-select';
      const thumbnailImageSelector = '.field--name-thumbnail.field--type-image img';
  
      browser
        .url(process.env.BASE_URL + 'node/add/article')
        .waitForElementVisible('body', 1000)
        .waitForElementVisible(buttonSelector, 1000)
        .click(buttonSelector)
        .pause(1000)
        .frame(iframeSelector) // Switch to the iframe
        .waitForElementVisible(addImageButtonSelector, 1000)
        .click(addImageButtonSelector)
        .pause(2000)
        .waitForElementVisible(openMediaLibraryButtonSelector, 1000)
        .click(openMediaLibraryButtonSelector)
        .pause(3000)
        .waitForElementVisible(firstImageSelector, 1000)
        .getAttribute(firstImageSelector, 'src', function(result) {
          const firstImageSrc = result.value;
          this
            .click(firstImageSelector) // choose the first image
            .click(mediaLibraryButtonSelector) // submit the form
            .pause(2000)
            .waitForElementVisible(thumbnailImageSelector, 1000)
            .getAttribute(thumbnailImageSelector, 'src', function(thumbnailResult) {
              this.assert.equal(thumbnailResult.value, firstImageSrc, 'The src of the thumbnail image matches the first image src from the media library.');
            });
        })
        .frame(null) // Switch back to the main content
        .end();
    }
  };
  