import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList'

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {

    const albumList= [
        {
            id: 1,
            name: 'Những F0 dễ trở nặng dù đã tiêm vaccine Covid-19',
            urlLink: 'https://znews-photo.zadn.vn/w210/Uploaded/znanug/2021_11_22/im_437901_1.jpg'
        },
        {
            id: 2,
            name: 'Gãy cánh quạt điện gió ở Sóc Trăng',
            urlLink: 'https://znews-photo.zadn.vn/w210/Uploaded/rohunuk/2021_11_22/dien_gio.jpg'
        },
        {
            id: 3,
            name: 'Biểu tượng phở gánh Hàng Chiếu đã mất',
            urlLink: 'https://znews-photo.zadn.vn/w210/Uploaded/kbd_bcvi/2021_11_22/thumb_pho_1.JPG'
        }
    ];

    return (
        <div>
            <h3> Có thể bạn sẽ thích </h3>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;