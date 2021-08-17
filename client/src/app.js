import React,{useState} from 'react';
import './app.css';
import SearchInput from './components/Search'
import Suggestions from './components/Suggestions'
import axios from "axios";
import { Button, Spinner } from 'react-bootstrap'

export default function App()  {

	const [query, setQuery] = useState('')
	const [data,setData] = useState([])
	const [error,setError] = useState('')
	const [loading,setLoading] = useState(false)
	const [correct,setCorrect] = useState(false)

	const handleInput = (e) => {
		setQuery(e.target.value)
	}

	const submitForm =(e) => {
		e.preventDefault();
		setLoading(true)
		loadData()
	  };

	const loadData=()=>{

		axios.get('http://localhost:31337/spell/'+query,{
			headers: {
				"Content-Type": "application/json"
				}
		})
		.then(data => data.data)
		.then(res => {
			//console.log(res)
			setData(res.suggestions)
			setCorrect(res.correct)
			setLoading(false)
			setError('')
		})
		.catch( error=> {
			setError(error);
		  })

	}
	return (
		<div className='app'>
			<SearchInput query={query} onQueryChange={handleInput} submitForm={submitForm}/>
			{loading?<div>
                <Button variant="primary" disabled>
                    <Spinner
                    as="span"
                    variant="warning"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    animation="grow"/>
                      Loading...
                </Button>
            </div>:null}
			{data.length?<Suggestions data={data}/>:null}
			{error?<h1>Please check the word</h1>:null}
			{correct?<h1>Your word is correct</h1>:null}
		</div>
  );
		
}

