const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'http://placekitten.com/250/250'
    }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'http://placekitten.com/250/250'
    }]
    res.render('places/index', { places })
})

router.post('/', (req, res) => {
    res.send('POST /places stub')
})

router.get('/new', (req, res) => {
    res.send('GET /places/new stub')
})

router.get('/:id', (req, res) => {
    res.send('GET /places/:id stub')
})

router.put('/:id', (req, res) => {
    res.send('PUT /places/:id stub')
})

router.get('/:id/edit', (req, res) => {
    res.send('GET /places/:id/edit stub')
})

module.exports = router