import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardImgOverlay, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';


class Dishdetail extends Component {
    constructor(props) {
        super(props);

    }

    RenderDish(dish) {

        if (dish != null) {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                        <CardText>{dish.description}</CardText>
                    </Card>
                </div>
            );
        }
        else {
            return (<div></div>)
        }
    }

    RenderComments(comments) {
        if (comments != null)

            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments.map((comment) => {
                            return (
                                <li key={comment.id} >
                                    <p>{comment.comment}</p>
                                    <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>

            );

        else {
            return (<div></div>);
        }
    }

    render() {
        if (this.props.dish != null)
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>

                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{this.props.dish.name}</h3>
                            <hr />
                        </div>   
                    </div>
                        <div className="row">
                            
                                {this.RenderDish(this.props.dish)}
                            
                           
                                {this.RenderComments(this.props.comments)}
                            
                        </div>
                    
                </div>
            );
        else
            return (<div></div>);
    }
}

export default Dishdetail;