import React from "react";
import Images from "./Gallery/Images"

export default class Gallery extends React.Component {
        constructor() {
            super();

            this.images = [{
                    title: 'Acquarium',
                    jpg: 'image/Aquarium.jpg'
                },
                {
                    title: 'Autumn',
                    jpg: 'image/Autumn.jpg'
                },
                {
                    title: 'Beach',
                    jpg: 'image/Beach.jpg'
                },
                {
                    title: 'Classic',
                    jpg: 'image/ClassicDeck4.jpg'
                },
                {
                    title: 'Western',
                    jpg: 'image/WesternDeck4.jpg'
                },
                {
                    title: 'Jumbo',
                    jpg: 'image/JumboDeck4.jpg'
                },
                {
                    title: 'Bubbles',
                    jpg: 'image/Bubbles.jpg'
                },
                {
                    title: 'CherryBlossoms',
                    jpg: 'image/CherryBlossoms.jpg'
                },
                {
                    title: 'Fireworks',
                    jpg: 'image/Fireworks.jpg'
                },
                {
                    title: 'Leaves',
                    jpg: 'image/Leaves.jpg'
                },
                {
                    title: 'Start',
                    jpg: 'image/Stars.jpg'
                },
                {
                    title: 'Western',
                    jpg: 'image/Western.jpg'
                }
            ];


            this.state = {
                images: this.images
            }

        }

        setupImages() {
            this.setState({ images: this.images });
        }



        /**
         * Reorder images
         * @param fromIdx - original position of the image
         */
        reorderImages(fromIdx, toIdx) {

            // if the original and the new location is the same, do nothing
            if (fromIdx === toIdx) {
                return;
            }

            this.images.splice(toIdx, 0, this.images.splice(fromIdx, 1)[0]);
            this.setupImages();
        }

        render() {
            return ( <
                Images images = { this.state.images }
                reorderImages = { this.reorderImages.bind(this) }
                / > )

            }
        }