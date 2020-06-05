class Show extends React.Component {
    render () {
        // console.log(this.props.user.shoppingCart);
        // const {name, image, plantCare, size, type} = this.props.singlePlant;
        console.log(this.props.singlePlant.image);
        return (
            <div>
                <div id="image-div">
                    <img src={this.props.singlePlant.image} />
                </div>
                <div id="info-div">
                    <h2>{this.props.singlePlant.name}</h2>
                    <h3>Plant Type</h3>
                    <h3>{this.props.singlePlant.type}</h3>
                    <h3>Caring for Your Plant</h3>
                    <p>{this.props.singlePlant.plantCare.water}</p>
                    <p>{this.props.singlePlant.plantCare.sun}</p>
                    <h3>Plant Size</h3>
                    <p>{this.props.singlePlant.size}</p>
                </div>
            </div>
        )
    }
}