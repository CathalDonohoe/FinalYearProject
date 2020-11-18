from flask import Flask
from flask_restful import Api, Resource, reqparse, abort, fields, marshal_with
from flask_sqlalchemy import SQLAlchemy

# reqparse makes sure that when we send a request we pass the infop we need with that request

app = Flask(__name__)
api = Api(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
db = SQLAlchemy(app)


class VideoModel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    views = db.Column(db.Integer, nullable=False)
    likes = db.Column(db.Integer, nullable=False)

    def __repr__(self):
        return f"Video(name = {name}, views = {views}, likes = {likes})"


# creates database, dont do until you define models in database
# only run this command once because it resets values in the db every time its run
# db.create_all()

# make new requestparser object which will automatically parse through request being sent and make sure it
# fits the guidelines and has correct info in it.
video_put_args = reqparse.RequestParser()
# something that needs to be sent with the request . help is an error message
video_put_args.add_argument("name", type=str, help="Name of the video is required", required=True)
video_put_args.add_argument("views", type=int, help="Views of the video", required=True)
video_put_args.add_argument("likes", type=int, help="Likes on the video", required=True)

video_update_args = reqparse.RequestParser()
video_update_args.add_argument("name", type=str, help="Name of the video is required")
video_update_args.add_argument("views", type=int, help="Views of the video")
video_update_args.add_argument("likes", type=int, help="Likes on the video")

resource_fields = {
    'id': fields.Integer,
    'name': fields.String,
    'views': fields.Integer,
    'likes': fields.Integer
}


# making a class that is a resource which will have methods that we override to handle requests
class Video(Resource):
    # when we return, take the return value and serialize it using the fields
    # takes your data object and applies the field filtering
    @marshal_with(resource_fields)
    def get(self, video_id):
        # filter all of the videos that we have by id, look for the one that has our video_id
        # and return the first response
        result = VideoModel.query.filter_by(id=video_id).first()
        if not result:
            abort(404, message="Could not find video with that id")
        # when you query the model it will give you an instance of the model that match the id
        return result

    @marshal_with(resource_fields)
    def put(self, video_id):
        # gets arguments from request and if all arent present then sends back an error message
        args = video_put_args.parse_args()
        result = VideoModel.query.filter_by(id=video_id).first()
        if result:
            abort(409, message="Video id taken...")

        # creates new video model
        video = VideoModel(id=video_id, name=args['name'], views=args['views'], likes=args['likes'])
        db.session.add(video)
        db.session.commit()
        return video, 201

    @marshal_with(resource_fields)
    def patch(self, video_id):
        args = video_update_args.parse_args()
        result = VideoModel.query.filter_by(id=video_id).first()
        if not result:
            abort(404, message="Video doesn't exist, cannot update")

        if args['name']:
            result.name = args['name']
        if args['views']:
            result.views = args['views']
        if args['likes']:
            result.likes = args['likes']

        db.session.commit()

        return result

    def delete(self, video_id):
        # abort_if_video_id_doesnt_exist(video_id)
        # del videos[video_id]
        return '', 204


# register resource
# use angle brackets to define type, followed by name of parameter
api.add_resource(Video, "/video/<int:video_id>")

# starts server and flask application in debug mode
if __name__ == "__main__":
    app.run(debug=True)
