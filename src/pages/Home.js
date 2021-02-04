import React,{useState} from 'react'
import MainPageLayout from '../components/MainPageLayout';

function Home () {

    const [input, setInput] = useState('');

    const onSearch = ()=>{
        // http://api.tvmaze.com/search/shows?q=man
        fetch(`http://api.tvmaze.com/search/shows?q=${input}`)
        .then(r => r.json() )
        .then(result => {
            console.log(result);
        });
    };

    const onInputChange = ev => {
        setInput(ev.target.value);
    };

    const onKeyDown = ev => {
        if(ev.keyCode === 13){
            onSearch();
        }
    }

    

    return (
        <MainPageLayout>
            <input type="text" onKeyDown={onKeyDown} onChange={onInputChange} value={input} />
            <button type="button" onClick={onSearch}>
            Search
            </button>
        </MainPageLayout>
    );
};

export default Home;
