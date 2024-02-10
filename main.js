const btns = document.querySelectorAll(".copyBtn");
  
btns.forEach((btn) => {
	
    btn.addEventListener("click", () => {

    const txt = btn.previousElementSibling.innerText;
    copyToClipboard(txt);

  });
});

async function copyToClipboard(txt) {
  try {
    await navigator.clipboard.writeText(txt);
    console.log(`${txt} was copied succesfully`);
          
    } catch(e) {
    	console.error(`Copy failed: ${e}`);
    }
  }