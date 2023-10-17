const btn = document.querySelector(".copyBtn");

btn.addEventListener("click", () => {
    const txt = btn.previousElementSibling.innerText;
    copyToClipboard(txt);
});


const unsecuredCopyToClipboard = (text) => { const textArea = document.createElement("textarea"); textArea.value=text; document.body.appendChild(textArea); textArea.focus();textArea.select(); try{document.execCommand('copy')}catch(err){console.error('Unable to copy to clipboard',err)}document.body.removeChild(textArea)};




const copyToClipboard = (txt) => {
  if (window.isSecureContext && navigator.clipboard) {
    navigator.clipboard.writeText(txt);
  } else {
    unsecuredCopyToClipboard(txt);
  }
};


