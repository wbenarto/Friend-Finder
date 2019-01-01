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
        "message": "Okkkuurrrrrr!"
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
        "photo": "https://i1.wp.com/www.passionweiss.com/wp-content/uploads/2018/05/post.jpg?resize=800%2C800&ssl=1",
        "scores": [1, 1, 1, 1, 5, 5, 5, 5, 5, 5],
        "message": "I work so hard forgot how to vacation.."
    }, {
        "name": "Rihanna",
        "photo": "http://www.rihannanow.com/wp-content/uploads/2018/12/FB_POSTHOL18_MML_FNBLACK_RRF_068_2000X2000_300DPI-800px.jpg",
        "scores": [1, 1, 1, 3, 5, 5, 5, 5, 5, 5],
        "message": "Will you get under my umberella?"
    }, {
        "name": "The Rock",
        "photo": "http://i.imgur.com/XdndHNm.jpg",
        "scores": [1, 1, 1, 5, 5, 5, 5, 5, 5, 5],
        "message": "FOOOOCCUUUUSSSSSSS!"
    }, {
        "name": "Pablo Escobar",
        "photo": "https://cdn1.thr.com/sites/default/files/imagecache/list_landscape_960x541/2016/08/narcos_still_5.jpg",
        "scores": [1, 1, 3, 5, 5, 5, 5, 5, 5, 5],
        "message": "There can only be one king."
    }, {
        "name": "Selena Gomez",
        "photo": "https://m.media-amazon.com/images/M/MV5BMjAwNTE2MDMyMl5BMl5BanBnXkFtZTgwMjAyODM3MTI@._V1_UY317_CR12,0,214,317_AL_.jpg",
        "scores": [1, 1, 5, 5, 5, 5, 5, 5, 5, 5],
        "message": "I will kill you with kindess."
    }, {
        "name": "Ellen Degeneres",
        "photo": "https://www.tubefilter.com/wp-content/uploads/2018/04/ellen-degeneres.jpg",
        "scores": [1, 3, 5, 5, 5, 5, 5, 5, 5, 5],
        "message": "Look how lucky!"
    }, {
        "name": "Michael B Jordan",
        "photo": "https://www.thetimes.co.uk/imageserver/image/methode%2Ftimes%2Fprod%2Fweb%2Fbin%2F3c5aaba4-127c-11e8-9ac6-bbf931a203ee.jpg?crop=2458%2C1383%2C198%2C995&resize=685",
        "scores": [1, 5, 5, 5, 5, 5, 5, 5, 5, 5],
        "message": "Wakanda forever."
    }, {
        "name": "Kanye West",
        "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7-71BBRpZV_kSEuYdlJpQNmYQiBuDVq8MQLaOKP7yBfJ8VK9A-A",
        "scores": [3, 5, 5, 5, 5, 5, 5, 5, 5, 5],
        "message": "Ye"
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