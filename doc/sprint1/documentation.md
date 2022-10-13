Models

    Club
        Schema
            name: String required -> name of club
            owner: String required -> username of club creator
            description: String required default empty -> description of club
            clubTags: String Array required default empty -> list of strings corresponding to tags
            members: User Array required default empty -> list of users corresponding to members in the group/club
            
            timestamps -> created and modified timestamps
        
        Description
            Stores information about a group/club in the database

    Post
        Schema
            title: String required -> title of the post
            username: String required -> username of poster
            group: String required -> group/club the post belongs to
            description: String required default empty -> body of the post
            public: Bool required -> whether the post is visible to everyone (true) or only group members (false)
            priority: Int default 0 -> the priority of the post in feed, higher number displayed first
                0 for normal posts, 1 for questions, 2 for announcements

            timestamps -> created and modified timestamps

        Description
            Stores information about a single post made in the database

    User
        Schema
            username: String required unique -> unique identifier of a user
                -> min 3 characters long with trailing whitespace trimmed

            password: String required -> password corresponding to the user
                -> min 6 characters long

            role: String required -> determines what type of user it is, gives certain permissions
            
            timestamps -> created and modified timestamps
        
        Description
            Stores information about a single user of the site in the database

Routes

    /clubs
        Request handlers
            /clubs/
                http get request that finds and returns a json list of all clubs currently in the system with no specific order

            /clubs/create
                http post request handler that takes a json body with a schema matching the club model and creates a new club object in the database

            /clubs/search
                http get request that returns a json list of all clubs in the database with a name that matches the given name exactly

            /clubs/:id
                http get request that returns a single json object of the club corresponding to the id given

            /clubs/:id
                http delete request removes the club corresponding to the given id from the database

            /clubs/update/:id
                http update request takes a json body with a schema matching the club model and updates the club corresponding to the given id with the new information
	/clubs/join/:id
        	    http post request that takes a JSON body containing the club name club_name and username username and append username to members in club_name
        Description
            Route for everything to do with clubs including creating, deleting, updating, and searching for clubs

    /feed
        Request handlers
            /feed/
                http get request that returns a json list of posts sorted by date created (new first), only shows posts the user is following or posts set to public, also sorts posts by priority highest number first

        Description
            Route for general feed including all public group posts as well as public user posts

    /posts
        Request handlers
            /posts/
                http get request returns a list of all posts with no particular order in json format

            /posts/add
                http post request creates a new post in the database requiring a json body following the schema of a post described in the model

                additionally posts are required to be in a group/club and the function automatically checks that the group being posted to exists by querying by name

            /posts/:id
                http get request that queries for a post by id and returns the information from the database in json

            /posts/:id
                http delete request that deletes a post from the database given its id

            /posts/update/:id
                http update request that edits a post given its id with new information in the json body of the schema of a post described in the model

        Description
            Route for posts stored on the database including functions to add, remove, query, edit posts

	/search
		Request handles
			/search/
				http get request returns a list of all clubs with no order in json format

			/search/groups
				http get request returns list of clubs sorted by most members first with clubName containing given string

			/search/users
				http get request

    /users
        Request handlers
            /users/ 
                http get request returns a list of all users with no particular order in json format

            /users/add
                http post request adds a user to the database given a json body in the schema of the user described in models

            /users/search
                http get request returns user from the database given its username (unique string)

            /users/:id
                http get request returns user from the database given its id in json format

            /users/:id
                http delete request that removes a user from the database given its id

            /users/update/:id
                http update request edits user in the database given its id and a json body
