// STRETCH
const cars = [
    {
        vin: '1111111111111',
        make: 'toyota',
        model: 'prius',
        mileage: 215000,
        title: 'clean',
        transmission: 'manual'
    },
    {
        vin: '2222222222222',
        make: 'toyota',
        model: '',
        mileage: 115000,
        title: 'salvage',
        transmission: 'manual'
    },
    {
        vin: '3333333333333',
        make: 'toyota',
        model: 'focus',
        mileage: 15000,
        title: 'clean'
    },

]

exports.seed = async function(knex){
   await  knex('cars').truncate()
   await knex('cars').insert(cars)    
}
