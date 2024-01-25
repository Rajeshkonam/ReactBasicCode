const rootElement = document.getElementById("root")
const h1Element = React.createElement("h1", {
    id: "heading", children: "hello world"
})

const p1Element = React.createElement("p", {
    className: "heading", children: "how are you?"
})

const wrapper = React.createElement("div", {},[h1Element,p1Element])

ReactDOM.render(wrapper,rootElement)