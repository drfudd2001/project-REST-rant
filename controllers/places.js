const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'D nasty Chinese Restaurant',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Chinese, Pan-Asian',
        pic: './images/dnasty.jpg'
    }, {
        name: "Willy's Wonderland",
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Pizza, Burgers',
        pic: './images/ww.jpg'
    }]
    res.render('places/index', { places })
})

router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST ./places stub')
})

router.get('/new', (req, res) => {
    res.render('./places/new')
})

router.get('/:id', (req, res) => {
    res.render('GET ./places/:id stub')
})

router.put('/:id', (req, res) => {
    res.send('PUT ./places/:id stub')
})

router.get('/:id/edit', (req, res) => {
    res.send('GET ./places/:id/edit stub')
})

module.exports = router