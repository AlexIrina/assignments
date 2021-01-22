You will need to make a GET request to retrieve the data for this hit list, and you can do this with axios.get() or fetch().

The data is located at this URL: https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json


Hints:
You'll be storing an array of the targets in state
Your array will start empty, but then be set in a componentDidMount
You'll need to map through that array to get React to render it in JSX
