import React from "react";

export default class Images extends React.Component {

    constructor(props) {
        super(props);
        this.toIdx;
        this.allowDrop = this.allowDrop.bind(this);
        this.drop = this.drop.bind(this);
    }

    /**
     * Handles when the image is about to be dropped
     * @param event - drag/drop event
     */
    allowDrop(evt) {
        evt.preventDefault();
        this.toIdx = document.getElementById(evt.target.id).attributes[0].nodeValue;
    }

    /**
     * Handles when the image is starting to be dragged
     * @param event - drag/drop event
     */
    drag(evt) {

        console.log(evt.target.id);
        evt.dataTransfer.setData("text", evt.target.id);
    }

    reorderImages(fromIdx, toIdx) {
        this.props.reorderImages(fromIdx, toIdx);
    }

    /**
     * Handles when the image is dropped to a new location
     * @param event - drag/drop event
     */
    drop(evt) {
        evt.preventDefault();
        var data = evt.dataTransfer.getData("text");
        var fromIdx = document.getElementById(data).attributes[0].nodeValue;

        this.reorderImages(fromIdx, this.toIdx);
    }

    render() {
        let imageComponents = [];
        for (let i = 0; i < this.props.images.length; i++) {
            imageComponents.push( <
                img id = { i }
                key = { "img_" + i }
                className = "picture"
                src = { this.props.images[i].jpg }
                title = { this.props.images[i].title }
                draggable = "true"
                onDragStart = { this.drag }
                onDrop = { this.drop }
                onDragOver = { this.allowDrop }
                / >
            )
        }

        return ( <
            div > { imageComponents } <
            /div>
        )

    }
}