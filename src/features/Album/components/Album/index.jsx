import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'

Album.propTypes = {
    album: PropTypes.object.isRequired,
};

function Album({album}) {
    return (
        <div className="album">
            <div className="img-album">
                <img src={album.urlLink} alt={album.name} />
            </div>
            <p>{album.name}</p>
        </div>
    );
}

export default Album;