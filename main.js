const root = ReactDOM.createRoot(document.querySelector('#root'));

// const content = (
//     <div>
//         <h1>Today : {(new Date()).toDateString()}</h1>
//     </div>
// )

const numb = 0


const Counter = () => {
    return (
        <div className="counter">
            <button>+</button>
            <h2>{numb}</h2>
            <button>-</button>
            <button>C</button>
        </div>
    )
}
const HeaderText = () => {
    return (
        <div className="headerText">
            <h1>Today : {(new Date()).toDateString()}</h1>
            <h1> sum = {numb}</h1>
            <button>AddCount</button>
        </div>
    )
}


const App = () => {
    return (
        <div className="body">
            <HeaderText/>
            <Counter/>
        </div>
    )
}

root.render(
    <App/>
)