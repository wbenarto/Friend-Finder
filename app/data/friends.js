const friendsArr = [
    {
        "name": "Zac Efron",
        "photo": "https://media1.popsugar-assets.com/files/thumbor/_PoeBcT7Dx9zl-KU-1-GR2BImgE/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2016/10/18/631/n/1922398/296bbd20914aa4a3_FFN_Efron_Zac_VEMSBMF_030816_51990672/i/Zac-showed-off-his-toned-body-when-he-filmed-Baywatch-March-2016.jpg",
        "scores": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        "message": "Look how lucky!"
    }, {
        "name": "Cardi B",
        "photo": "https://livekindlyproduction-8u6efaq1lwo6x9a.stackpathdns.com/wp-content/uploads/2018/06/Cardi-B-Cropped-2.jpg",
        "scores": [1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
        "message": "Look how lucky!"
    } , {
        "name": "Jennifer Aniston",
        "photo": "https://cdn2.stylecraze.com/wp-content/uploads/2012/05/Hairstyle-Evolution-Of-Jennifer-Aniston.jpg",
        "scores": [1, 1, 1, 1, 1, 1, 1, 1, 1, 5],
        "message": "Look how lucky!"
    }, {
        "name": "2 Chainz",
        "photo": "https://media.gq.com/photos/558287cee52bc4b477a96b74/master/w_800/blogs-the-feed-2-chainz-comedy-issue-gq-magazine.jpg",
        "scores": [1, 1, 1, 1, 1, 1, 1, 1, 3, 5],
        "message": "Look how lucky!"
    }, {
        "name": "Bruno Mars",
        "photo": "https://www.brunomars.com//sites/g/files/g2000006216/f/201611/BrunoMars_Site_NewSite_Assets_FBOG.jpg",
        "scores": [1, 1, 1, 1, 1, 1, 1, 1, 5, 5],
        "message": "Look how lucky!"
    }, {
        "name": "Will Smith",
        "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMr8KcYgdXlyQ5leXIyH4_scVPO2hfHX1ikEF3aLzm5YCW933l",
        "scores": [1, 1, 1, 1, 1, 1, 1, 3, 5, 5],
        "message": "Look how lucky!"
    }, {
        "name": "Justin Bieber",
        "photo": "https://www.tubefilter.com/wp-content/uploads/2014/02/justin-bieber-baby-vevo.jpg",
        "scores": [1, 1, 1, 1, 1, 1, 3, 5, 5, 5],
        "message": "Look how lucky!"
    }, {
        "name": "Ariana Grande",
        "photo": "https://www.billboard.com/files/styles/1024x577/public/video/v1/static/1125911414/f8b7ef5a-5d6c-46dc-bc4d-a5bfc6938e40/56f76491-96b3-4efa-ae1d-6acdddeb0795/1280x720/match/image.jpg",
        "scores": [1, 1, 1, 1, 1, 3, 5, 5, 5, 5],
        "message": "Look how lucky!"
    }, {
        "name": "Drake",
        "photo": "https://pbs.twimg.com/media/DsYqva0X4AABMdq.jpg",
        "scores": [1, 1, 1, 1, 1, 5, 5, 5, 5, 5],
        "message": "Look how lucky!"
    }, {
        "name": "Conan O'brien",
        "photo": "https://consequenceofsound.files.wordpress.com/2018/09/conan-obrien.png?w=807",
        "scores": [1, 1, 1, 1, 3, 5, 5, 5, 5, 5],
        "message": "Look how lucky!"
    }, {
        "name": "Post Malone",
        "photo": "data:image/jpeg;base64,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",
        "scores": [1, 1, 1, 1, 5, 5, 5, 5, 5, 5],
        "message": "Look how lucky!"
    }, {
        "name": "Rihanna",
        "photo": "http://www.rihannanow.com/wp-content/uploads/2018/12/FB_POSTHOL18_MML_FNBLACK_RRF_068_2000X2000_300DPI-800px.jpg",
        "scores": [1, 1, 1, 3, 5, 5, 5, 5, 5, 5],
        "message": "Look how lucky!"
    }, {
        "name": "The Rock",
        "photo": "http://i.imgur.com/XdndHNm.jpg",
        "scores": [1, 1, 1, 5, 5, 5, 5, 5, 5, 5],
        "message": "Look how lucky!"
    }, {
        "name": "Pablo Escobar",
        "photo": "https://cdn1.thr.com/sites/default/files/imagecache/list_landscape_960x541/2016/08/narcos_still_5.jpg",
        "scores": [1, 1, 3, 5, 5, 5, 5, 5, 5, 5],
        "message": "Look how lucky!"
    }, {
        "name": "Selena Gomez",
        "photo": "https://m.media-amazon.com/images/M/MV5BMjAwNTE2MDMyMl5BMl5BanBnXkFtZTgwMjAyODM3MTI@._V1_UY317_CR12,0,214,317_AL_.jpg",
        "scores": [1, 1, 5, 5, 5, 5, 5, 5, 5, 5],
        "message": "Look how lucky!"
    }, {
        "name": "Ellen Degeneres",
        "photo": "https://www.tubefilter.com/wp-content/uploads/2018/04/ellen-degeneres.jpg",
        "scores": [1, 3, 5, 5, 5, 5, 5, 5, 5, 5],
        "message": "Look how lucky!"
    }, {
        "name": "Michael B Jordan",
        "photo": "https://www.thetimes.co.uk/imageserver/image/methode%2Ftimes%2Fprod%2Fweb%2Fbin%2F3c5aaba4-127c-11e8-9ac6-bbf931a203ee.jpg?crop=2458%2C1383%2C198%2C995&resize=685",
        "scores": [1, 5, 5, 5, 5, 5, 5, 5, 5, 5],
        "message": "Look how lucky!"
    }, {
        "name": "Kanye West",
        "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7-71BBRpZV_kSEuYdlJpQNmYQiBuDVq8MQLaOKP7yBfJ8VK9A-A",
        "scores": [3, 5, 5, 5, 5, 5, 5, 5, 5, 5],
        "message": "Look how lucky!"
    }, {
        "name": "Leonardo DiCaprio",
        "photo": "https://hips.hearstapps.com/hbz.h-cdn.co/assets/16/32/1600x1205/gallery-1471194065-gettyimages-114732524.jpg?resize=480:*",
        "scores": [5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
        "message": "Look how lucky!"
    }, {
        "name": "Adele",
        "photo": "https://www.breatheheavy.com/wp-content/uploads/2015/11/adele-trump.jpg",
        "scores": [1, 1, 1, 1, 1, 1, 5, 5, 5, 5],
        "message": "Look how lucky!"
    }
];

module.exports = friendsArr;