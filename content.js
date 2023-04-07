function highlightText() {
    var selectedText = window.getSelection().toString();
    if (selectedText.length > 0) {
      var span = document.createElement("span");
      span.style.backgroundColor = "yellow";
      span.textContent = selectedText;
      var range = window.getSelection().getRangeAt(0);
      range.deleteContents();
      range.insertNode(span);
    }
  }
  
  document.addEventListener("mouseup", highlightText);
  