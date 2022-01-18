## Plan - API Post Route - user submitting a diary to the API

Handle the user submitting a diary to the API from the home page

- the only route we're focused on at the moment is a post route to receive data from the home page to later save to the database
- Until the database is setup, just log or respond with the data we receive from the front end (use Postman for testing etc)
- the post request will use req.query and will look like:
  http://localhost:3011/diary?
  &content=
  &reflection=
  &emotion=
