function Header({title, subtitle}) { //create a React functional component. destructuring allows access indvidual properties from the props object.
    return ( //description of the HTML-like JSX that the component displays
        <header>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </header>
    );
}

export default Header; //allowys another file to import and use this component.