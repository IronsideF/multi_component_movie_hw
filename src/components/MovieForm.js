import React, {useState} from 'react'

const MovieForm = ({handleMovieSubmit}) => {
    
    const [name, setName] = useState('')
    const [url, setUrl] = useState('https://')

    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    const handleUrlChange = (event) => {
        setUrl(event.target.value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const nameToSubmit = name.trim();
        const urlToSubmit = url.trim();
        if (!nameToSubmit || !urlToSubmit){
            return
        }
        handleMovieSubmit({id:Date.now(), name:nameToSubmit, url:urlToSubmit});
        setName('');
        setUrl('https://');
    }
    
    return(
        <form onSubmit={handleFormSubmit}>
            <input type="text" placeholder='Movie Name' value={name} onChange={handleNameChange} />
            <input type='url' placeholder='Link to the movie' value={url} onChange={handleUrlChange} />
            <input type="submit" value="Add Film" />
        </form>
    )
}

export default MovieForm;