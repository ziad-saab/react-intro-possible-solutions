import React from 'react';

class ImageCaption extends React.Component {
    render() {
        const {source, text} = this.props;

        return (
            <figure>
              <img alt={text} src={source} />
              <figcaption>
                {text}
              </figcaption>
            </figure>
        );
    }
}

export default ImageCaption;
