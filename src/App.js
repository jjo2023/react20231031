function MyComponent1() {
    return(
    <div>
        <h1>Hello Component</h1>
    </div>
    )
}

function MyComponent2() {
    return (
        <>
            <p>Lorem ipsum dolor sit amet.</p>
            <ul>
                <li>Lorem.</li>
                <li>Soluta?</li>
                <li>Sint?</li>
            </ul>
        </>
    );
}

function App() {
  return (
    <div>
        <MyComponent1 />
        {/*
        <div>
            <h1>Hello Component</h1>
        </div>
        */}
        <MyComponent2 />
        {/*
         <p>lorem dsds </p>
         <ul>
         <li>lorem</li>
         <li>lorem</li>
         <li>lorem</li>
         </ul>
        */}
    </div>

  );
}



export default App;












