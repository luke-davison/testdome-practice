function setup() {
  Array.from(document.getElementsByClassName("remove")).forEach(
    (removeButton, index) => {
      const parent = document.getElementsByClassName("image")[index];
      removeButton.addEventListener("click", () => {
        parent.remove();
      });
    }
  );
}

// Example case.
document.body.innerHTML = `
<div class="image">
  <img src="https://tinyurl.com/im-gal-1st" alt="First">
  <button class="remove">X</button>
</div>
<div class="image">
  <img src="https://tinyurl.com/im-gal-2nd" alt="Second">
  <button class="remove">X</button>
</div>`;

setup();

document.getElementsByClassName("remove")[0].click();
console.log(document.body.innerHTML);
