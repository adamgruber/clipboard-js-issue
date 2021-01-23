const clipboard = new ClipboardJS('.btn', {
  text: function () {
    return document.querySelector('.card-text').textContent.trim();
  },
});

// Clear selection after copy
clipboard.on('success', e => {
  if (e.trigger) {
    e.clearSelection();
  }
});
