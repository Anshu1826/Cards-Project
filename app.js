const div = document.querySelector('div')



const section = document.querySelector('section')
for(let i=2 ; i<=1000 ; ++i) {
    const node = div.cloneNode();
    node.innerText = i
    section.appendChild(node)
}