from flask import Flask, request, make_response
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin
from flask_cors import CORS

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///solution.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
CORS(app)

class Item(db.Model, SerializerMixin):
    __tablename__ = 'items'

    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String)

with app.app_context():
    db.create_all()

@app.route('/items')
def items():
    return [item.to_dict() for item in Item.query.all()]

@app.route('/create', methods=['POST'])
def create():
    data = request.json
    if 'text' in data:
        new_item = Item(
            text=data['text']
        )
        
        db.session.add(new_item)
        db.session.commit()
        return make_response(
            new_item.to_dict(),
            201
        )

@app.route('/items/<int:id>', methods=['GET', 'DELETE'])
def item_by_id(id):
    item = Item.query.filter(Item.id == id).first()
    if item:
        if request.method == 'GET':
            return item.to_dict()
        if request.method == 'DELETE':
            db.session.delete(item)
            db.session.commit()
            return make_response(
                "Successful deletion",
                200
            )            
    else: 
        return make_response(
            'Item not found',
            404
        )

if __name__ == '__main__':
    app.run(debug=True)