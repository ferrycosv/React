import React from 'react';

function App() {
    const result = 23434 * 0.345;
    return (
        <section>
            <h1>The Example App</h1>
            <NewsArticle />
            <p>
                Renders the value of a variable: <span>{result}</span>
            </p>
            <button data-testid="load-more" onClick={() => { console.log('The button was clicked') }}>Load More</button>
        </section>
    );
}

const arr = Array.apply(null, Array(200))

function MyApp() {
    return (<div>My First React App 
        { 
        arr.map((x,idx) => NewsArticle(idx))
        }
        </div>);
}

function NewsArticle(idx) {
    return (
        <article key={idx}>
            <h1>Article</h1>
        </article>
    )
}

export { App, MyApp };