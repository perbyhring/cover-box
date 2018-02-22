# contain-box

A curry-function which returns width and height for a fixed-format child-element you want to cover a dynamic-format parent-element.

Similar to the css-rule `background-size: cover`.

## Install
`yarn add cover-box`

## Usage

### Import
`import coverBox from 'cover-box'`

### Direct Usage
```
coverBox(16,9)(1,1)
// > [1.7777777777777777, 1]
```

### As a curry-function
```
const cover169 = coverBox(16,9)

cover169(1280,720)
// > [1280, 720]

cover169(200,100)
// > [200, 112.5]

cover169(100,200)
// > [355.55555555555554, 200]

```

### Examples

#### Contain a 16:9-`<div></div>` to the viewport:

```
const mybox = document.querySelector('.my-box');

const setSize = () => {
  const size = containBox(16,9)(window.innerWidth,window.innerHeight);
  mybox.style.width = `${size[0]}px`;
  mybox.style.height = `${size[1]}px`;
};

window.addEventListener('resize', setSize);
setSize();

```
