import './Menubar.css';

const Menubar = (props) => {
    return (
    <div className='Menubar'>
        {props.children}
        <h1>Kaisa learns to code</h1>
        
    </div>
    );
}

//<input type='search' placeholder='Type here to search'></input>

export default Menubar;